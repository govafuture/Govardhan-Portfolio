function renderUniversity() {

  // ── Skills tag cloud ──
  const skillsEl = document.getElementById("uni-skills");
  if (skillsEl && university.skills) {
    skillsEl.innerHTML = university.skills.map(s =>
      `<span class="tag">${s}</span>`
    ).join("");
  }

  // ── Projects — modern cards with GitHub links ──
  const projEl = document.getElementById("uni-projects");
  if (projEl && university.projects) {
    projEl.innerHTML = university.projects.map((p, i) => `
      <article class="uni-project-card">
        <span class="uni-project-number">0${i + 1}</span>
        <h4>${p.name}</h4>
        <p>${p.description}</p>
        <div class="tag-row">
          ${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="proj-links">
          ${p.github ? `<a href="${p.github}" target="_blank">GitHub &rarr;</a>` : ""}
          ${p.demo ? `<a href="${p.demo}" target="_blank">Demo &rarr;</a>` : ""}
        </div>
      </article>`).join("");
  }

  // ── Club Activities ──
  const clubEl = document.getElementById("club-activities");
  if (clubEl && university.club) {
    const club = university.club;
    clubEl.innerHTML = `
      <img src="${club.image}" alt="${club.name}" class="club-overlay-img" onerror="this.style.display='none'" />
      <div class="club-overlay-content">
        <span class="club-label">Leadership</span>
        <h3>${club.name}</h3>
        <p>${club.description}</p>
        ${club.highlights ? `
          <ul class="club-highlights">
            ${club.highlights.map(h => `<li>${h}</li>`).join("")}
          </ul>` : ""}
      </div>`;
  }

  // ── Certifications — carousel (same as work page) ──
  const certEl = document.getElementById("uni-certs");
  if (certEl && university.certificates) {
    const cards = university.certificates.map(c => `
      <div class="cert-card">
        <img src="${c.image}" alt="${c.name}" loading="lazy" />
        <h4>${c.name}</h4>
      </div>
    `).join('');
    certEl.innerHTML = cards + cards;
  }
}

function renderwork() {
  const workExp = document.getElementById("work-exp");
  if (!workExp) return;

  workExp.innerHTML =
    work.experiences.map(exp => `
      <div class="exp-item">
        <div class="exp-item-content">
          <div class="exp-item-header">
            <img src="${exp.logo}" alt="${exp.company}" class="exp-logo" onerror="this.style.display='none'" />
            <div>
              <div class="exp-role">${exp.role} &mdash; ${exp.company}</div>
              <div class="exp-duration">${exp.duration}</div>
            </div>
          </div>
          ${exp.description ? `<p class="exp-description">${exp.description}</p>` : ""}
          <ul>${exp.points.map(p => `<li>${p}</li>`).join("")}</ul>
          <div class="tag-row" style="margin-top:0.6rem">
            ${exp.tech.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
        ${exp.image ? `
          <div class="exp-image">
            <img src="${exp.image}" alt="${exp.company}" onerror="this.style.display='none'" />
          </div>` : ""}
      </div>`).join("");

  document.getElementById("work-skills").innerHTML =
    work.skills.map(s => `<span class="tag">${s}</span>`).join("");

  const projectSection = document.getElementById("work-projects");
  if (projectSection) {
    projectSection.innerHTML = work.projects.map(p => `
      <article class="project-card">
        <div class="project-card-content">
          <span class="summary-label">Project</span>
          <h4>${p.name}</h4>
          <p>${p.description}</p>
          <div class="tag-row">
            ${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
          <div class="proj-links">
            ${p.github ? `<a href="${p.github}" target="_blank">GitHub →</a>` : ""}
            ${p.demo ? `<a href="${p.demo}" target="_blank">Demo →</a>` : ""}
          </div>
        </div>
      </article>`).join("");
  }

  // Certifications carousel
  const certContainer = document.getElementById('work-certs');
  if (certContainer && work.certs) {
    const cards = work.certs.map(c => `
      <div class="cert-card">
        <img src="${c.image}" alt="${c.title}" loading="lazy" />
        <h4>${c.title}</h4>
      </div>
    `).join('');
    // Duplicate for seamless loop
    certContainer.innerHTML = `
      <div class="cert-track-auto">
        ${cards}${cards}
      </div>
    `;
  }
}

function renderPersonal() {

  // ── Course Modules ──
  const modulesEl = document.getElementById("course-modules");
  if (modulesEl) {
    const modules = [
      { name: "Python", done: true },
      { name: "Data Science", done: true },
      { name: "Mathematics", done: true },
      { name: "Probability & Stats", done: true },
      { name: "Classical ML", done: true },
      { name: "Deep Learning", done: true },
      { name: "CNN & Vision", done: true },
      { name: "NLP", done: false },
      { name: "RNN/LSTM", done: false },
      { name: "Transformers", done: false },
      { name: "LLMs & GenAI", done: false },
      { name: "RAG", done: false },
      { name: "Capstone", done: false },
    ];
    modulesEl.innerHTML = modules.map(m =>
      `<span class="module-tag ${m.done ? 'done' : ''}">${m.done ? '✓ ' : ''}${m.name}</span>`
    ).join("");
  }

  // ── AI Projects — split layout ──
  const projectsEl = document.getElementById("personal-projects");
  if (projectsEl) {
    projectsEl.innerHTML = learning.projects.map((p, i) => `
      <div class="project-showcase">
        <div class="project-showcase-media">
          <span class="project-showcase-number">0${i + 1}</span>
          ${p.demo && p.demo.endsWith('.mp4')
            ? `<video controls muted playsinline><source src="${p.demo}" type="video/mp4">Your browser does not support the video tag.</video>`
            : `<img src="assets/images/personal/images/image.png" alt="${p.name}" />`}
        </div>
        <div class="project-showcase-info">
          <span class="summary-label">AI Project</span>
          <h4>${p.name}</h4>
          <p>${p.description}</p>
          <div class="tag-row">
            ${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
          <div class="showcase-links">
            ${p.github ? `<a href="${p.github}" target="_blank">GitHub &rarr;</a>` : ""}
            ${p.demo ? `<a href="${p.demo}" target="_blank">Demo &rarr;</a>` : ""}
          </div>
        </div>
      </div>`).join("");
  }

  // ── YouTube — single featured video ──
  const youtubeEl = document.getElementById("youtube-block");
  if (youtubeEl && learning.youtube && learning.youtube.videos.length > 0) {
    const v = learning.youtube.videos[0];
    youtubeEl.innerHTML = `
      <a href="${v.url}" target="_blank" class="yt-featured-media">
        <img src="${v.thumbnail}" alt="${v.title}" onerror="this.style.display='none'" />
        <span class="yt-play-badge">&#9654;</span>
      </a>
      <div class="yt-featured-info">
        <span class="section-eyebrow">Video Content</span>
        <h3>AI-generated video creation</h3>
        <p>Stepping into the realm of digital storytelling, I've discovered the power of AI-generated content creation. By crafting compelling narratives, designing precise visual prompts, and orchestrating sequential imagery, I transform ideas into captivating video experiences.</p>
        <a href="${v.url}" target="_blank">Watch on YouTube &rarr;</a>
      </div>`;
  }

  // ── Blogs — compact modern cards ──
  const blogsEl = document.getElementById("blog-list");
  if (blogsEl && learning.blogs) {
    blogsEl.innerHTML = learning.blogs.map(b => `
      <a href="${b.url}" target="_blank" class="blog-card">
        ${b.image ? `<div class="blog-card-img"><img src="${b.image}" alt="${b.title}" onerror="this.style.display='none'" /></div>` : ""}
        <div class="blog-card-body">
          <span class="blog-card-tag">Blog</span>
          <h4 class="blog-card-title">${b.title}</h4>
          <p class="blog-card-summary">${b.summary}</p>
        </div>
      </a>`).join("");
  }

  // ── Currently Exploring Tags ──
  const tagsEl = document.getElementById("currently-learning-tags");
  if (tagsEl && learning.currentlyLearning) {
    tagsEl.innerHTML = learning.currentlyLearning.map(t =>
      `<span class="tag">${t}</span>`
    ).join("");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderUniversity();
  renderwork();
  renderPersonal();
});
