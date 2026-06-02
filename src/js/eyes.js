// ── EYE TRACKING ──────────────────────────────────────────────
// Pupils follow the cursor relative to each eye's center

const pupils = [
  document.getElementById("pupilLeft"),
  document.getElementById("pupilRight"),
];

const eyes = [
  document.querySelector(".eye-left"),
  document.querySelector(".eye-right"),
];

const MAX_MOVE = 6; // max px the pupil can travel from center

document.addEventListener("mousemove", (e) => {
  eyes.forEach((eye, i) => {
    if (!eye || !pupils[i]) return;

    const rect   = eye.getBoundingClientRect();
    const eyeCX  = rect.left + rect.width  / 2;
    const eyeCY  = rect.top  + rect.height / 2;

    const dx = e.clientX - eyeCX;
    const dy = e.clientY - eyeCY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Normalise and clamp
    const ratio = Math.min(dist / 120, 1);
    const moveX = (dx / dist || 0) * MAX_MOVE * ratio;
    const moveY = (dy / dist || 0) * MAX_MOVE * ratio;

    pupils[i].style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
