// ── TECH STACK MARQUEE ───────────────────────────────────────────
// Uses Simple Icons CDN — seamless infinite scroll

const SKILLS = [
  { name: "Java",        slug: "openjdk",       color: "#e07b2a" },
  { name: "Spring Boot", slug: "springboot",    color: "#e07b2a" },
  { name: "Kafka",       slug: "apachekafka",   color: "#e07b2a" },
  { name: "Kubernetes",  slug: "kubernetes",    color: "#e07b2a" },
  { name: "Docker",      slug: "docker",        color: "#e07b2a" },
  { name: "Python",      slug: "python",        color: "#e07b2a" },
  { name: "Linux",       slug: "linux",         color: "#e07b2a" },
  { name: "Git",         slug: "git",           color: "#e07b2a" },
  { name: "MySQL",       slug: "mysql",         color: "#e07b2a" },
  { name: "Django",      slug: "django",        color: "#e07b2a" },
  { name: "Helm",        slug: "helm",          color: "#e07b2a" },
  { name: "JavaScript",  slug: "javascript",    color: "#e07b2a" },
  { name: "React",       slug: "react",         color: "#e07b2a" },
  { name: "Prometheus",  slug: "prometheus",    color: "#e07b2a" },
];

function buildItem(skill) {
  const wrap = document.createElement("div");
  wrap.className = "tech-icon";

  const img = document.createElement("img");
  img.src = `https://cdn.simpleicons.org/${skill.slug}/1a1a1a`;
  img.alt = skill.name;
  img.title = skill.name;
  img.loading = "lazy";
  img.style.width = "36px";
  img.style.height = "36px";

  const label = document.createElement("span");
  label.textContent = skill.name;
  label.style.fontSize = "0.73rem";
  label.style.color = "var(--muted)";

  wrap.appendChild(img);
  wrap.appendChild(label);
  return wrap;
}

const track = document.getElementById("tech-track");
if (track) {
  // Build two full sets for seamless infinite loop
  [...SKILLS, ...SKILLS].forEach(skill => {
    track.appendChild(buildItem(skill));
  });
}
