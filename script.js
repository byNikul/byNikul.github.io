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
    header.classList.toggle("scrolled", window.scrollY > 20);
  });
}

// =====================
// DOM REFERENCES
// =====================
const grid = document.getElementById("project-grid");
const otherGrid = document.getElementById("other-project-grid");
const otherProjectsToggle = document.getElementById("other-projects-toggle");
const otherProjectsCollapse = document.getElementById("other-projects-collapse");
const otherProjectsCount = document.getElementById("other-projects-count");
const otherProjectsWrapper = document.getElementById("other-projects-wrapper");
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
// PROJECT CARD COMPONENT
// =====================
function createProjectCard(project) {
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = `project.html?id=${project.id}`;

  const isInProgress = project.progress === "in-progress" || project.progress === "in progress";
  const ribbonHTML = isInProgress
    ? `<span class="project-ribbon">In Progress</span>`
    : "";

  card.innerHTML = `
    ${ribbonHTML}
    <div class="project-thumb">
      <img src="${project.thumbnail}" alt="${project.title}">
    </div>

    <div class="project-info">
      <h3>${project.title}</h3>
      <p>${project.summary}</p>

      <div class="tags">
        ${project.tags.map(tagKey => {
          const tag = TAGS[tagKey];
          if (!tag) return "";
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

  return card;
}

// =====================
// PROJECT RENDER
// =====================
function renderProjects() {
  if (grid) grid.innerHTML = "";
  if (otherGrid) otherGrid.innerHTML = "";

  const sortedProjects = [...projects].sort(
    (a, b) => Math.max(...b.years) - Math.max(...a.years)
  );

  const highlightedMatches = [];
  const archivedMatches = [];

  sortedProjects.forEach(project => {
    const matchesTag =
      activeTags.length === 0 ||
      project.tags.some(tag => activeTags.includes(tag));

    const matchesYear =
      activeYears.length === 0 ||
      project.years.some(year => activeYears.includes(year));

    if (!matchesTag || !matchesYear) return;

    if (project.status === "archived") {
      archivedMatches.push(project);
    } else {
      highlightedMatches.push(project);
    }
  });

  // Render Highlighted Projects (Main Section)
  if (grid) {
    if (highlightedMatches.length > 0) {
      highlightedMatches.forEach(project => {
        grid.appendChild(createProjectCard(project));
      });
    } else {
      const emptyMsg = document.createElement("div");
      emptyMsg.className = "no-projects-msg";
      emptyMsg.textContent = "No highlighted projects match the selected filters.";
      grid.appendChild(emptyMsg);
    }
  }

  // Render Archived Projects ("Other Projects" Section)
  if (otherGrid) {
    if (archivedMatches.length > 0) {
      archivedMatches.forEach(project => {
        otherGrid.appendChild(createProjectCard(project));
      });
    } else {
      const emptyMsg = document.createElement("div");
      emptyMsg.className = "no-projects-msg";
      emptyMsg.textContent = "No other projects match the selected filters.";
      otherGrid.appendChild(emptyMsg);
    }
  }

  // Update Count Badge on the Dropdown Toggle
  if (otherProjectsCount) {
    otherProjectsCount.textContent = `(${archivedMatches.length})`;
  }

  // Hide the wrapper entirely if there are no archived projects at all in the database
  if (otherProjectsWrapper) {
    const hasAnyArchived = projects.some(p => p.status === "archived");
    otherProjectsWrapper.style.display = hasAnyArchived ? "" : "none";
  }
}

// =====================
// OTHER PROJECTS TOGGLE
// =====================
function initOtherProjectsDropdown() {
  if (otherProjectsToggle && otherProjectsCollapse) {
    otherProjectsToggle.addEventListener("click", () => {
      const isOpen = otherProjectsCollapse.classList.toggle("open");
      otherProjectsToggle.classList.toggle("open", isOpen);
      otherProjectsToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

      const labelEl = otherProjectsToggle.querySelector(".other-projects-label");
      if (labelEl) {
        labelEl.textContent = isOpen ? "Hide Other Projects" : "Other Projects";
      }
    });
  }
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
initOtherProjectsDropdown();

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
