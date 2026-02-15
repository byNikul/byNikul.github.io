// ================================
// 🚀 PROJECT PAGE LOADER
// ================================

// Get project ID from URL
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

const container = document.getElementById("project-container");

if (!projectId) {
  container.innerHTML = "<div class='loading'>Project not found.</div>";
  throw new Error("No project id in URL");
}

// Find project
const project = projects.find(p => p.id === projectId);

if (!project) {
  container.innerHTML = "<div class='loading'>Invalid project ID.</div>";
  throw new Error("Project not found");
}

// ================================
// 🧠 HELPERS
// ================================

function getTagHTML(tagKey) {
  const tag = TAGS[tagKey];
  if (!tag) return "";

  const domain = DOMAINS[tag.domain];

  function hexToRGBA(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

return `
  <span class="tag" style="
    border-color: ${domain.color};
    color: ${domain.color};
    background: ${hexToRGBA(domain.color, 0.125)};
  ">
    ${tag.label}
  </span>
`;
}

function renderMediaItem(item) {
  if (item.type === "image") {
    return `
      <div class="media-bg" style="background-image:url('${item.src}')"></div>
      <img src="${item.src}" alt="Project media">
    `;
  }

  if (item.type === "video") {
    return `
      <div class="media-bg"></div>
      <video src="${item.src}" controls></video>
    `;
  }

  if (item.type === "pdf") {
    return `<iframe src="${item.src}"></iframe>`;
  }

  if (item.type === "sketchfab") {
    return `<iframe src="${item.src}" allowfullscreen></iframe>`;
  }

  if (item.type === "website") {
  return `
    <div class="media-bg"></div>
    <iframe 
      src="${item.src}" 
      class="media-website"
      loading="lazy"
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      referrerpolicy="no-referrer"
    ></iframe>
  `;
}


  return `<img src="${PLACEHOLDER_IMAGE}">`;
}

function renderAttachments(attachments = []) {
  if (!attachments.length) return "";

  return `
    <h2 class="attachments-title">Attachments</h2>

    <div class="attachment-list">
      ${attachments
        .map(
          a => `
        <a
          class="attachment-item"
          href="${a.src}"
          target="_blank"
          download
        >
          📎 ${a.label}
        </a>
      `
        )
        .join("")}
    </div>
  `;
}

// ================================
// 🎨 BUILD LAYOUT
// ================================

container.innerHTML = `
  <section class="project-text">
    <h1>${project.title}</h1>
    <h3 style="opacity:0.7;font-weight:400;">${project.subtitle}</h3>

    <p class="project-summary">${project.summary}</p>
    
    <div class="tag-row">
      ${project.years.map(y => `<span class="tag year">${y}</span>`).join("")}
    </div>

    <div class="tag-row">
      ${project.tags.map(getTagHTML).join("")}
    </div>

    <div class="project-detail">
      ${project.detailHTML}
      ${renderAttachments(project.attachments)}
    </div>
    
  </section>

<section class="media-panel">
  <div class="media-frame" id="media-wrapper">

    <div class="media-header">
      <span>MEDIA VIEWPORT</span>
      <button class="media-expand" id="expand-media">⤢</button>
    </div>

    <div class="media-viewport" id="media-frame"></div>
  </div>


  ${
    project.media.length > 1
      ? `
    <div class="media-controls">
      <button id="prev-media">◀</button>
      <span id="media-count">01 / ${String(project.media.length).padStart(2, "0")}</span>
      <button id="next-media">▶</button>
    </div>`
      : ""
  }

  <div class="media-label" id="media-label"></div>
</section>
  
`;

// ================================
// 🖼 MEDIA LOGIC
// ================================

let currentMediaIndex = 0;
const mediaFrame = document.getElementById("media-frame");
const mediaLabel = document.getElementById("media-label");

function updateMedia() {
  const item = project.media[currentMediaIndex];
  mediaFrame.innerHTML = renderMediaItem(item);

  const count = document.getElementById("media-count");
  if (count) {
    count.textContent =
      `${String(currentMediaIndex + 1).padStart(2, "0")} / ${String(project.media.length).padStart(2, "0")}`;
  }

  if (mediaLabel) {
    mediaLabel.textContent = item.label || "";
  }
}


// Initial load
updateMedia();

// Controls
const prevBtn = document.getElementById("prev-media");
const nextBtn = document.getElementById("next-media");

if (prevBtn) {
  prevBtn.onclick = () => {
    currentMediaIndex =
      (currentMediaIndex - 1 + project.media.length) % project.media.length;
    updateMedia();
  };
}

if (nextBtn) {
  nextBtn.onclick = () => {
    currentMediaIndex =
      (currentMediaIndex + 1) % project.media.length;
    updateMedia();
  };
}

// ================================
// 🖥 MEDIA EXPAND LOGIC
// ================================

const expandBtn = document.getElementById("expand-media");
const mediaWrapper = document.getElementById("media-wrapper");

if (expandBtn && mediaWrapper) {
  expandBtn.addEventListener("click", () => {
    mediaWrapper.classList.toggle("expanded");
    document.body.classList.toggle("media-open");

    // Toggle icon
    if (mediaWrapper.classList.contains("expanded")) {
      expandBtn.textContent = "✕";
    } else {
      expandBtn.textContent = "⤢";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      mediaWrapper.classList.remove("expanded");
      document.body.classList.remove("media-open");
      expandBtn.textContent = "⤢";
    }
  });
}
