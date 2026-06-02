// ── POLISHED FLAT ROBOT AVATAR — eye tracking ─────────────────────

(function () {
  const wrap = document.getElementById("avatar-svg-wrap");
  if (!wrap) return;

  wrap.innerHTML = `
  <svg id="avatar-svg" viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg"
       style="width:100%;height:100%;overflow:visible;">

    <!-- ░░ SHADOW ░░ -->
    <ellipse cx="150" cy="412" rx="80" ry="8"
             fill="rgba(0,0,0,0.08)"/>

    <!-- ░░ LEGS ░░ -->
    <rect x="100" y="340" width="34" height="55" rx="17" fill="#dddad2"/>
    <rect x="166" y="340" width="34" height="55" rx="17" fill="#dddad2"/>
    <!-- feet -->
    <rect x="90"  y="382" width="50" height="22" rx="11" fill="#c8c5be"/>
    <rect x="160" y="382" width="50" height="22" rx="11" fill="#c8c5be"/>

    <!-- ░░ BODY ░░ -->
    <rect x="72" y="210" width="156" height="140" rx="32" fill="#edeae2"/>
    <!-- body inner panel -->
    <rect x="96" y="232" width="108" height="80"  rx="16" fill="#e2dfd6"/>
    <!-- screen on chest -->
    <rect x="106" y="242" width="88"  height="56"  rx="10" fill="#1a1a2e"/>
    <!-- screen glow lines -->
    <line x1="116" y1="258" x2="184" y2="258" stroke="#a78bfa" stroke-width="1.5" opacity="0.7"/>
    <line x1="116" y1="268" x2="170" y2="268" stroke="#a78bfa" stroke-width="1.5" opacity="0.5"/>
    <line x1="116" y1="278" x2="178" y2="278" stroke="#a78bfa" stroke-width="1.5" opacity="0.4"/>
    <!-- power dot -->
    <circle cx="150" cy="292" r="5" fill="#a78bfa"/>
    <circle cx="150" cy="292" r="8" fill="#a78bfa" opacity="0.2"/>

    <!-- ░░ ARMS ░░ -->
    <!-- left arm -->
    <rect x="34"  y="218" width="40" height="100" rx="20" fill="#edeae2"/>
    <rect x="34"  y="298" width="40" height="30"  rx="15" fill="#dddad2"/>
    <!-- left hand -->
    <ellipse cx="54" cy="334" rx="18" ry="14" fill="#dddad2"/>
    <!-- right arm -->
    <rect x="226" y="218" width="40" height="100" rx="20" fill="#edeae2"/>
    <rect x="226" y="298" width="40" height="30"  rx="15" fill="#dddad2"/>
    <!-- right hand -->
    <ellipse cx="246" cy="334" rx="18" ry="14" fill="#dddad2"/>

    <!-- ░░ NECK ░░ -->
    <rect x="128" y="192" width="44" height="26" rx="10" fill="#dddad2"/>
    <!-- neck bolts -->
    <circle cx="136" cy="205" r="3.5" fill="#c8c5be"/>
    <circle cx="164" cy="205" r="3.5" fill="#c8c5be"/>

    <!-- ░░ HEAD ░░ -->
    <!-- head base — rounded rect, slightly wider than tall -->
    <rect x="48" y="68" width="204" height="132" rx="44" fill="#edeae2"/>
    <!-- head top highlight -->
    <rect x="48" y="68" width="204" height="44" rx="44 44 0 0" fill="white" opacity="0.25"/>
    <!-- head bottom shadow -->
    <rect x="48" y="164" width="204" height="36" rx="0 0 44 44" fill="#dddad2" opacity="0.4"/>

    <!-- ░░ ANTENNA ░░ -->
    <rect x="143" y="30" width="14" height="42" rx="7" fill="#c8c5be"/>
    <!-- antenna ball -->
    <circle cx="150" cy="24" r="16" fill="#1a1a2e"/>
    <circle cx="150" cy="24" r="10" fill="#a78bfa"/>
    <circle cx="150" cy="24" r="5"  fill="#c4b5fd"/>
    <!-- glow -->
    <circle cx="150" cy="24" r="22" fill="#a78bfa" opacity="0.12"/>

    <!-- ░░ EARS ░░ -->
    <!-- left ear -->
    <rect x="30" y="100" width="22" height="60" rx="11" fill="#dddad2"/>
    <rect x="34" y="112" width="14" height="36" rx="7"  fill="#c8c5be"/>
    <!-- right ear -->
    <rect x="248" y="100" width="22" height="60" rx="11" fill="#dddad2"/>
    <rect x="252" y="112" width="14" height="36" rx="7"  fill="#c8c5be"/>

    <!-- ░░ EYE SOCKETS ░░ -->
    <!-- large rounded squares — the key feature -->
    <rect x="66"  y="96"  width="72" height="68" rx="24" fill="#1a1a2e"/>
    <rect x="162" y="96"  width="72" height="68" rx="24" fill="#1a1a2e"/>
    <!-- socket inner rim -->
    <rect x="70"  y="100" width="64" height="60" rx="20" fill="#12122a"/>
    <rect x="166" y="100" width="64" height="60" rx="20" fill="#12122a"/>

    <!-- ░░ EYE WHITES ░░ -->
    <ellipse id="eye-white-l" cx="102" cy="130" rx="24" ry="22" fill="white"/>
    <ellipse id="eye-white-r" cx="198" cy="130" rx="24" ry="22" fill="white"/>

    <!-- ░░ PUPILS ░░ -->
    <circle id="pupil-l" cx="102" cy="130" r="13" fill="#1a1a1a"/>
    <circle id="pupil-r" cx="198" cy="130" r="13" fill="#1a1a1a"/>

    <!-- iris ring -->
    <circle id="iris-l" cx="102" cy="130" r="9"  fill="#a78bfa" opacity="0.9"/>
    <circle id="iris-r" cx="198" cy="130" r="9"  fill="#a78bfa" opacity="0.9"/>

    <!-- pupil center -->
    <circle id="dot-l" cx="102" cy="130" r="5"  fill="#0a0a1a"/>
    <circle id="dot-r" cx="198" cy="130" r="5"  fill="#0a0a1a"/>

    <!-- shine -->
    <circle id="shine-l" cx="95"  cy="122" r="5" fill="white" opacity="0.85"/>
    <circle id="shine-r" cx="191" cy="122" r="5" fill="white" opacity="0.85"/>

    <!-- ░░ EYEBROWS — expressive arcs ░░ -->
    <path id="brow-l" d="M72 92 Q102 80 132 92"
          stroke="#1a1a2e" stroke-width="5" fill="none"
          stroke-linecap="round"/>
    <path id="brow-r" d="M168 92 Q198 80 228 92"
          stroke="#1a1a2e" stroke-width="5" fill="none"
          stroke-linecap="round"/>

    <!-- ░░ NOSE ░░ -->
    <ellipse cx="150" cy="162" rx="6" ry="4" fill="#c8c5be"/>

    <!-- ░░ MOUTH ░░ -->
    <!-- mouth base -->
    <rect x="110" y="172" width="80" height="18" rx="9" fill="#1a1a2e"/>
    <!-- smile -->
    <path d="M118 181 Q150 194 182 181"
          stroke="white" stroke-width="2.5" fill="none"
          stroke-linecap="round" opacity="0.7"/>

    <!-- ░░ CHEEKS ░░ -->
    <ellipse cx="72"  cy="158" rx="16" ry="10" fill="#fda4af" opacity="0.3"/>
    <ellipse cx="228" cy="158" rx="16" ry="10" fill="#fda4af" opacity="0.3"/>

  </svg>`;

  // ── EYE TRACKING ──────────────────────────────────────────────
  const svgEl = document.getElementById("avatar-svg");

  const eyes = [
    { pupil: "pupil-l", iris: "iris-l", dot: "dot-l", shine: "shine-l",
      brow: "brow-l", cx: 102, cy: 130, limit: 8,
      shineDx: -7, shineDy: -8 },
    { pupil: "pupil-r", iris: "iris-r", dot: "dot-r", shine: "shine-r",
      brow: "brow-r", cx: 198, cy: 130, limit: 8,
      shineDx: -7, shineDy: -8 },
  ];

  function trackEyes(screenX, screenY) {
    const rect   = svgEl.getBoundingClientRect();
    const scaleX = 300 / rect.width;
    const scaleY = 420 / rect.height;
    const svgX   = (screenX - rect.left) * scaleX;
    const svgY   = (screenY - rect.top)  * scaleY;

    eyes.forEach(e => {
      const dx    = svgX - e.cx;
      const dy    = svgY - e.cy;
      const dist  = Math.sqrt(dx * dx + dy * dy) || 1;
      const ratio = Math.min(dist / 120, 1);
      const ox    = (dx / dist) * e.limit * ratio;
      const oy    = (dy / dist) * e.limit * ratio;

      const setXY = (id, x, y) => {
        const el = document.getElementById(id);
        if (el) { el.setAttribute("cx", x); el.setAttribute("cy", y); }
      };

      setXY(e.pupil,  e.cx + ox,              e.cy + oy);
      setXY(e.iris,   e.cx + ox,              e.cy + oy);
      setXY(e.dot,    e.cx + ox,              e.cy + oy);
      setXY(e.shine,  e.cx + ox + e.shineDx,  e.cy + oy + e.shineDy);
    });
  }

  document.addEventListener("mousemove", e => trackEyes(e.clientX, e.clientY));

  // ── BLINK ─────────────────────────────────────────────────────
  function blink() {
    const ids = ["eye-white-l","eye-white-r","pupil-l","pupil-r",
                 "iris-l","iris-r","dot-l","dot-r","shine-l","shine-r"];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.style.transition    = "transform 0.06s ease";
      el.style.transformOrigin = "center 130px";
      el.style.transform     = "scaleY(0.04)";
    });
    setTimeout(() => {
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.transform = "scaleY(1)";
      });
    }, 100);
    setTimeout(blink, 2800 + Math.random() * 3500);
  }
  setTimeout(blink, 2000);

  // ── FLOAT ─────────────────────────────────────────────────────
  const style = document.createElement("style");
  style.textContent = `
    @keyframes avatar-float {
      0%,100% { transform: translateY(0); }
      50%      { transform: translateY(-12px); }
    }
    #avatar-svg-wrap { animation: avatar-float 4s ease-in-out infinite; }
  `;
  document.head.appendChild(style);

})();
