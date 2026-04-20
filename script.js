// =====================
// NAME TRANSLATION ANIMATION
// =====================
const translations = ["/nɪˈkul/", "નિકુલ", "ニクル", "Никул", "निकुल", "نيكول", "니쿨", "尼库尔", "Νίκουλ"];
const translationEl = document.getElementById("name-translation");

if (translationEl) {
  let currentIndex = 0;
  setInterval(() => {
    translationEl.classList.add("hidden");
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % translations.length;
      translationEl.textContent = translations[currentIndex];
      translationEl.classList.remove("hidden");
    }, 800); // wait for fade out
  }, 4000); // cycle every 4 seconds
}

// =====================
// HEADER SCROLL (SAFE)
// =====================
const header = document.querySelector(".header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });
}

// =====================
// DOM REFERENCES
// =====================
const grid = document.getElementById("project-grid");
const tagFilterContainer = document.getElementById("tag-filters");
const yearFilterContainer = document.getElementById("year-filters");

let activeTags = [];
let activeYears = [];

// =====================
// DERIVED DATA
// =====================
const allTags = Object.keys(TAGS);
const allYears = [...new Set(projects.flatMap(p => p.years))]
  .sort((a, b) => b - a);

// =====================
// TAG FILTERS
// =====================
function renderTagFilters() {
  tagFilterContainer.innerHTML =
    `<span class="tag all filter active" data-tag="all">ALL CATEGORIES</span>`;

  allTags.forEach(tagKey => {
    const tag = TAGS[tagKey];
    const domain = DOMAINS[tag.domain];

    const el = document.createElement("span");
    el.className = "tag filter";
    el.dataset.tag = tagKey;
    el.textContent = tag.label;
    el.style.background = `${domain.color}20`;
    el.style.color = domain.color;

    tagFilterContainer.appendChild(el);
  });
}

// =====================
// YEAR FILTERS
// =====================
function renderYearFilters() {
  yearFilterContainer.innerHTML =
    `<span class="tag all filter active" data-year="all">ALL YEARS</span>`;

  allYears.forEach(year => {
    const el = document.createElement("span");
    el.className = "tag year filter";
    el.dataset.year = year;
    el.textContent = year;
    yearFilterContainer.appendChild(el);
  });
}

// =====================
// PROJECT RENDER
// =====================
function renderProjects() {
  grid.innerHTML = "";

  const sortedProjects = [...projects].sort(
    (a, b) => Math.max(...b.years) - Math.max(...a.years)
  );

  sortedProjects.forEach(project => {

    const matchesTag =
      activeTags.length === 0 ||
      project.tags.some(tag => activeTags.includes(tag));

    const matchesYear =
      activeYears.length === 0 ||
      project.years.some(year => activeYears.includes(year));

    if (!matchesTag || !matchesYear) return;

    const card = document.createElement("a");
    card.className = "project-card";
    card.href = `project.html?id=${project.id}`;

    card.innerHTML = `
      <div class="project-thumb">
        <img src="${project.thumbnail}" alt="${project.title}">
      </div>

      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>

        <div class="tags">
          ${project.tags.map(tagKey => {
            const tag = TAGS[tagKey];
            const domain = DOMAINS[tag.domain];
            return `
              <span class="tag"
                style="background:${domain.color}20;color:${domain.color}">
                ${tag.label}
              </span>`;
          }).join("")}

          ${project.years.map(y =>
            `<span class="tag year">${y}</span>`
          ).join("")}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// =====================
// FILTER HANDLING
// =====================
document.addEventListener("click", e => {

  // TAG FILTERS
  if (e.target.dataset.tag) {
    const tag = e.target.dataset.tag;

    if (tag === "all") {
      activeTags = [];
      document.querySelectorAll("[data-tag]")
        .forEach(el => el.classList.remove("active"));
      e.target.classList.add("active");
    } else {
      e.target.classList.toggle("active");
      document.querySelector('[data-tag="all"]').classList.remove("active");

      if (activeTags.includes(tag)) {
        activeTags = activeTags.filter(t => t !== tag);
      } else {
        activeTags.push(tag);
      }

      if (activeTags.length === 0) {
        document.querySelector('[data-tag="all"]').classList.add("active");
      }
    }

    renderProjects();
  }

  // YEAR FILTERS
  if (e.target.dataset.year) {
    const year = Number(e.target.dataset.year);

    if (e.target.dataset.year === "all") {
      activeYears = [];
      document.querySelectorAll("[data-year]")
        .forEach(el => el.classList.remove("active"));
      e.target.classList.add("active");
    } else {
      e.target.classList.toggle("active");
      document.querySelector('[data-year="all"]').classList.remove("active");

      if (activeYears.includes(year)) {
        activeYears = activeYears.filter(y => y !== year);
      } else {
        activeYears.push(year);
      }

      if (activeYears.length === 0) {
        document.querySelector('[data-year="all"]').classList.add("active");
      }
    }

    renderProjects();
  }
});

// =====================
// INIT
// =====================
renderTagFilters();
renderYearFilters();
renderProjects();

// =====================
// LIVE STATUS TYPEWRITER
// =====================
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = "";
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

const statusEl = document.getElementById("live-status");
if (statusEl) {
  const statusText = statusEl.dataset.text || "";
  // Start typing after a small delay
  setTimeout(() => typeWriter(statusEl, statusText), 1000);
}
