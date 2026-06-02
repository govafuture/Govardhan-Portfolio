// ── SMOOTH GOOEY CURSOR — optimized for performance ───────────

(function () {
  document.body.style.cursor = "none";

  const ns  = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.style.cssText = [
    "position:fixed", "top:0", "left:0",
    "width:100vw", "height:100vh",
    "pointer-events:none",
    "z-index:99999",
    "overflow:hidden",
  ].join(";");

  // Simplified tail: 8 circles instead of 10
  const TAIL_COUNT = 8;
  const tailCircles = Array.from({ length: TAIL_COUNT }, (_, i) => {
    const r    = 4.5 - i * 0.35;
    const grey = Math.round(50 + i * 20);
    const fill = `rgb(${grey},${grey},${grey})`;
    return `<circle id="tail-${i}" cx="-200" cy="-200" r="${r.toFixed(1)}" fill="${fill}" opacity="${(1 - i * 0.1).toFixed(2)}"/>`;
  }).join("");

  svg.innerHTML = `
    <defs>
      <filter id="goo" x="-60%" y="-60%" width="220%" height="220%"
              color-interpolation-filters="sRGB">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/>
        <feColorMatrix in="blur" type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 24 -8"/>
      </filter>
    </defs>
    <g filter="url(#goo)">
      ${tailCircles}
      <circle id="b-follow" cx="-200" cy="-200" r="11" fill="#2a2a2a" opacity="0.9"/>
      <circle id="b-cursor" cx="-200" cy="-200" r="4.5"  fill="#111111"/>
    </g>`;

  document.body.appendChild(svg);

  const bC   = svg.querySelector("#b-cursor");
  const bF   = svg.querySelector("#b-follow");
  const tails = Array.from({ length: TAIL_COUNT }, (_, i) => svg.querySelector(`#tail-${i}`));

  let mx = -200, my = -200;
  let fx = -200, fy = -200;
  let cR = 4.5, cFR = 11;

  const tailPos = Array.from({ length: TAIL_COUNT }, () => ({ x: -200, y: -200 }));
  const LAG = [0.3, 0.24, 0.18, 0.14, 0.10, 0.07, 0.05, 0.03];

  document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });

  // Hover detection with simple radius check
  document.addEventListener("mouseover", e => {
    const target = e.target;
    if (target.closest("a,button,.page-card,.tag,.blog-item,.yt-card,.cert-item")) {
      cR  = 2; 
      cFR = 16;
    }
  });
  
  document.addEventListener("mouseout", e => {
    const target = e.target;
    if (target.closest("a,button,.page-card,.tag,.blog-item,.yt-card,.cert-item")) {
      cR  = 4.5; 
      cFR = 11;
    }
  });

  document.addEventListener("mousedown", () => { cR = 1;  cFR = 20; });
  document.addEventListener("mouseup",   () => { cR = 4.5; cFR = 11; });

  const frameSkip = 0; // 0 = every frame, 1 = every 2nd frame
  let frameCount = 0;

  (function loop() {
    frameCount++;
    if (frameCount % (frameSkip + 1) !== 0) {
      requestAnimationFrame(loop);
      return;
    }

    // Cursor blob — snaps to mouse
    bC.setAttribute("cx", mx);
    bC.setAttribute("cy", my);

    // Follower blob — smooth lag
    fx  += (mx - fx)  * 0.16;
    fy  += (my - fy)  * 0.16;
    cR  = cR * 0.85 + 4.5 * 0.15;
    cFR = cFR * 0.82 + 11 * 0.18;
    
    bF.setAttribute("cx", fx.toFixed(0));
    bF.setAttribute("cy", fy.toFixed(0));
    bC.setAttribute("r",  cR.toFixed(1));
    bF.setAttribute("r",  cFR.toFixed(1));

    // Tail chain
    let prevX = fx, prevY = fy;
    tails.forEach((t, i) => {
      tailPos[i].x += (prevX - tailPos[i].x) * LAG[i];
      tailPos[i].y += (prevY - tailPos[i].y) * LAG[i];
      t.setAttribute("cx", tailPos[i].x.toFixed(0));
      t.setAttribute("cy", tailPos[i].y.toFixed(0));
      prevX = tailPos[i].x;
      prevY = tailPos[i].y;
    });

    requestAnimationFrame(loop);
  })();

  document.addEventListener("mouseleave", () => { svg.style.opacity = "0"; });
  document.addEventListener("mouseenter", () => { svg.style.opacity = "1"; });

  if ("ontouchstart" in window) {
    document.body.style.cursor = "auto";
    svg.style.display = "none";
  }
})();
