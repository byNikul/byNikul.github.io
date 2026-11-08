// ================================
// 🎨 DOMAIN COLOR SYSTEM
// ================================
const DOMAINS = {
  hardware: { label: "HARDWARE & MECHANICAL", color: "#22c55e" },
  systems: { label: "SYSTEMS & CONTROL", color: "#ff8000" },
  experimental: { label: "EXPERIMENTATION & RESEARCH", color: "#38bdf8" },
  product: { label: "SOFTWARE & PRODUCT", color: "#facc15" },
  leadership: { label: "LEADERSHIP & INITIATIVE", color: "#9ca3af" }
};

// ================================
// 🏷️ TAG REGISTRY
// ================================
const TAGS = {
  cad: { label: "CAD", domain: "hardware" },
  fea: { label: "FEA", domain: "hardware" },
  printing3d: { label: "3D PRINTING", domain: "hardware" },

  matlab: { label: "MATLAB", domain: "systems" },
  simulink: { label: "SIMULINK", domain: "systems" },
  python: { label: "PYTHON", domain: "systems" },
  ml: { label: "MACHINE LEARNING", domain: "systems" },

  research: { label: "RESEARCH", domain: "experimental" },
  data: { label: "DATA ANALYSIS", domain: "experimental" },
  hackathon: { label: "HACKATHON", domain: "experimental" },

  web: { label: "WEB DEVELOPMENT", domain: "product" },
  github: { label: "GITHUB", domain: "product" }
};

// ================================
// 🖼️ MEDIA PLACEHOLDER [Temporary]
// ================================
const PLACEHOLDER_IMAGE = "assets/images/project-placeholder.jpg";

// ============================================================================================
// 🚀 PROJECT DATA
// fields:
//   - status   : "highlighted" (main featured grid) | "archived" ("Other Projects" section)
//   - progress : "in-progress" (labels tile with yellow ribbon) | "complete"
// ============================================================================================
const projects = [
  {
    id: "jeopardy-clashroyale",
    title: "Jeopardy × Clash Royale",
    subtitle: "MATLAB-Based Game System Architecture",
    status: "archived",
    progress: "complete",
    years: [2025],
    tags: ["matlab", "simulink"],
    thumbnail: "assets/thumbnails/jeopardy-clashroyale.jpg",

    summary:
      "Interactive MATLAB-based game system combining App Designer UI architecture with Simulink-driven logic and synchronized multimedia effects.",

    detailHTML: `<h2>Overview</h2>
<p>
This semester-long project involved building a fully interactive Jeopardy-style game in MATLAB using App Designer and Simulink. The system combined structured backend logic with a Clash Royale–themed visual and audio experience, resulting in a polished, multi-window game application.
</p>

<h3>What I Built</h3>
<p>
I helped architect both the frontend UI and the backend game engine. The application includes multiple windows (Main Menu, Single Player, Multiplayer, Instructions, and End Screen) with smooth navigation managed through structured callbacks and event-driven logic.
</p>

<p>
The backend was designed to handle question selection, answer validation, score tracking, difficulty-based timers, randomized Double Jeopardy functionality, and turn-based multiplayer logic. All game data (questions, answers, hints, point values) is dynamically loaded from external Excel spreadsheets through a custom data pipeline, making the system scalable and easy to update.
</p>

<h3>Technical Focus</h3>
<ul>
  <li>Event-driven programming using MATLAB App Designer</li>
  <li>Custom function development for gameplay logic</li>
  <li>External data integration and runtime parsing</li>
  <li>State management across multiple UI windows</li>
  <li>Debugging large interconnected callback systems</li>
</ul>

<p>
The final result is a structured, modular MATLAB application that blends UI design, backend system architecture, and real-time logic control into a cohesive interactive game platform.
</p> `,

    media: [
      { type: "image", src: "assets/media/images/jeopardy-clashroyale.png", label: "Screenshot of the Game MainMenu UI" },
      { type: "video", src: "assets/media/videos/jeopardy-clashroyale.mp4", label: "Screen Recording of the Game System in Action" }
    ],

    attachments: [
      { label: "Project Files (.zip)", src: "assets/attachments/zips/jeopardy-clashroyale.zip" }
    ]
  },

  {
    id: "gravityspy-ml",
    title: "GravitySPY ML Framework",
    subtitle: "Gravitational Wave Data Classification",
    status: "highlighted",
    progress: "complete",
    years: [2024],
    tags: ["python", "ml", "data", "research"],
    thumbnail: "assets/thumbnails/gravityspy-ml.png",

    summary:
      "Designed and implemented multi-view CNN architectures (early, intermediate, and late fusion) to classify gravitational wave glitches.",

    detailHTML: `<h2>Overview</h2>
<p>
This research project focused on developing multi-view deep learning models to classify glitches in gravitational wave strain data from LIGO’s O3 observing run. Gravitational wave detectors are extremely sensitive instruments, and non-cosmological noise artifacts (“glitches”) can interfere with true signal detection. Our objective was to design and compare multiple fusion-based convolutional neural network (CNN) architectures to improve glitch classification accuracy and robustness.
</p>

<p>
The project explored three multi-view fusion strategies: Early Fusion, Intermediate Fusion, and Late Fusion, using four time-duration views (0.5s, 1.0s, 2.0s, 4.0s) for each glitch sample. The goal was to evaluate how different architectural integration strategies impact classification performance across 22 glitch classes.
</p>

<h3>What I Built</h3>
<p>
I helped design and implement a four-input deep learning framework in Python using TensorFlow and Keras. The system processes spectrogram images from multiple time windows and integrates them using different fusion strategies to improve classification reliability.
</p>

<p>
I worked on dataset restructuring, multi-view data pipeline development, custom generator design for memory-efficient training, and model architecture experimentation. Due to RAM limitations, we engineered custom NumPy-based data loaders and generators to dynamically construct inputs during training, avoiding full dataset loading into memory.
</p>

<p>
Three models were developed and benchmarked:
</p>

<ul>
  <li><strong>Early Fusion:</strong> Combined four 224×224 views into a single 448×448 composite input before feature extraction.</li>
  <li><strong>Intermediate Fusion:</strong> Extracted features independently from each view, then concatenated them using custom attention layers and Inception-Residual blocks.</li>
  <li><strong>Late Fusion:</strong> Trained four independent CNNs and aggregated prediction probabilities using a custom fusion class.</li>
</ul>

<h3>Technical Focus</h3>
<ul>
  <li>Multi-view CNN architecture design (Early, Intermediate, Late Fusion)</li>
  <li>TensorFlow / Keras model development</li>
  <li>Custom data generators for memory-efficient training</li>
  <li>NumPy-based dataset engineering and preprocessing pipelines</li>
  <li>Attention mechanisms and Inception-Residual block implementation</li>
  <li>Model checkpointing, validation monitoring, and hyperparameter tuning</li>
  <li>Confusion matrix analysis and classification report generation</li>
</ul>

<p>
The models were trained on 22,000+ samples across 22 glitch classes. All architectures used categorical cross-entropy loss with the Adam optimizer. The Early Fusion model achieved the highest validation accuracy (95.85%), followed closely by Late Fusion (95.76%), while Intermediate Fusion achieved 94.40% with more architectural complexity.
</p>

<p>
This project strengthened my understanding of deep learning system design beyond just model building, including dataset restructuring, computational constraints, architectural trade-offs, and fusion strategy benchmarking. The final framework demonstrates how multi-view learning can significantly enhance classification reliability in high-noise scientific datasets.
</p>`,

    media: [
      { type: "pdf", src: "assets/media/pdfs/gravityspy-ml.pdf", label: "Research Paper" },
      { type: "image", src: "assets/media/images/gravityspy-ml1.png", label: "Data Distribution" },
      { type: "image", src: "assets/media/images/gravityspy-ml2.png", label: "Data Distribution Visualization" },
      { type: "image", src: "assets/media/images/gravityspy-ml3.png", label: "Data Categorization" },
      { type: "image", src: "assets/media/images/gravityspy-ml4.jpg", label: "Different Views of the Same Data Sample" },
      { type: "image", src: "assets/media/images/gravityspy-ml5.jpg", label: "Early View Model Architecture" },
      { type: "image", src: "assets/media/images/gravityspy-ml6.jpg", label: "Intermediate View Model Architecture" },
      { type: "image", src: "assets/media/images/gravityspy-ml7.jpg", label: "Late View Model Architecture" }
    ],

    attachments: [
      { label: "Kaggle Profile [Code Files, ML Models, and Dataset Used to Train the Models] (Webpage)", src: "https://www.kaggle.com/n1kulx0" }
    ]
  },

  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "YOU'RE ON IT RIGHT NOW! GO EXPLORE IT AND SEE THE CODE ON GITHUB!!",
    status: "archived",
    progress: "complete",
    years: [2025, 2026],
    tags: ["web", "github"],
    thumbnail: "assets/thumbnails/portfolio-website.png",

    summary:
      "Personal portfolio website built from scratch with a focus on clarity, performance, and technical presentation.",

    detailHTML: `<h2>Overview</h2>
<p>
This website is my personal portfolio, designed and built entirely from scratch to document my projects, and potential some other stuff as well. It serves as a central hub for my work, presenting technical projects in a structured and visually cohesive format.
</p>

<p>
The site was developed using HTML, CSS, and JavaScript, stuff that I had not previously worked with before starting this project. The goal was to create something lightweight, fast, and fully controlled by me rather than relying on templates or website builders.
</p>

<h3>What I Built</h3>
<p>
I designed and implemented the entire website architecture, including layout structure, styling system, project rendering logic, and media embedding. Each project entry is dynamically structured for clarity, with standardized formatting to maintain consistency.
</p>

<p>
Much of the process did involve using my friend Chat, but also independent debugging, reading documentation, experimenting, and iterating repeatedly. Through systematic problem-solving and persistence, I resolved layout inconsistencies, rendering bugs, styling conflicts, and deployment issues.
</p>

<p>
The site is hosted using GitHub Pages, which also marked my first experience using GitHub for version control and deployment. This repository currently serves as my primary and only GitHub project, functioning as both a learning experience and a live product.
</p>

<h3>Technical Focus</h3>
<ul>
  <li>Vanilla HTML, CSS, and JavaScript development (no frameworks)</li>
  <li>Custom project rendering structure and content organization</li>
  <li>Responsive layout design and visual consistency</li>
  <li>Manual debugging and iterative refinement</li>
  <li>Git-based version control and GitHub Pages deployment</li>
</ul>

<p>
This project represents more than just a website, it reflects my ability to learn unfamiliar technologies quickly, debug independently, and build a functional system from the ground up. The portfolio is still a work in progress, and I plan to continue refining it with new features and improvements.
</p>

<p>
Feel free to explore the live site above and see the work firsthand. If you have suggestions or feedback, I’d genuinely appreciate hearing them via email as I continue developing and documenting my journey digitally.
</p>`,

    media: [
      { type: "website", src: "https://bynikul.github.io", label: "Portfolio Website" }
    ],

    attachments: [
      { label: "GitHub Repository", src: "https://github.com/byNikul/byNikul.github.io" }
    ]
  },

  {
    id: "solidworks-model-mania",
    title: "Parametric CAD Challenges",
    subtitle: "High-Speed Parametric CAD Challenges",
    status: "archived",
    progress: "complete",
    years: [2025, 2026],
    tags: ["cad", "fea"],
    thumbnail: "assets/thumbnails/solidworks-model-mania.png",

    summary:
      "Advanced parametric CAD challenges emphasizing speed, accuracy, and design intent.",

    detailHTML: `<h2>Overview</h2>

    <h3>--WILL UPLOAD MORE MODELS SOON--</h3>
<p>
This project focused on solving advanced parametric CAD challenges from the past SOLIDWORKS Model Mania® competition. The objective is to rapidly model complex mechanical components from 2D drawings while maintaining strict dimensional accuracy, design intent, and modification flexibility.
</p>

<p>
Each challenge simulates real-world engineering workflows: first building a fully defined part from a drawing, then implementing controlled engineering changes without breaking model stability. The emphasis is on speed, accuracy, and intelligent feature structuring rather than simple geometry replication.
</p>

<h3>What I Built</h3>
<p>
I recreated multiple mechanical parts from Model Mania's technical drawings, carefully structuring sketches, reference geometry, and features to ensure full parametric control. The goal was to design models that could withstand dimensional edits and design revisions without failure.
</p>

<p>
Beyond modeling geometry, I focused on design intent, strategically ordering features, using reference planes effectively, and constraining sketches to maintain robustness during Phase 2-style modifications. Several parts were rebuilt multiple times to optimize rebuild time, feature clarity, and adaptability.
</p>

<h3>Technical Focus</h3>
<ul>
  <li>Parametric modeling and design intent planning</li>
  <li>Fully defined sketch construction and constraint management</li>
  <li>Feature tree optimization and rebuild efficiency</li>
  <li>Configuration management and controlled design changes</li>
  <li>Engineering drawing interpretation and dimensional accuracy</li>
</ul>

<p>
This practice significantly strengthened my ability to think like a mechanical designer rather than just a CAD user. The exercises improved my modeling speed, structural planning of feature trees, and ability to anticipate downstream design changes, skills directly applicable to real-world product development and mechanical systems design.
</p>`,

    media: [
      { type: "sketchfab", src: "https://sketchfab.com/models/f37feab56b7545d6936064cdd8c11b58/embed", label: "Model Mania Challange Year 2000 Phase 2" },
      { type: "sketchfab", src: "https://sketchfab.com/models/bd5c6a26b017411083a42fcb77556969/embed", label: "Model Mania Challange Year 2001 Phase 2" },
      { type: "sketchfab", src: "https://sketchfab.com/models/5d4b0e20e80f429c9d4c5a85a70088f4/embed", label: "Model Mania Challange Year 2002 Phase 1" },
      { type: "sketchfab", src: "https://sketchfab.com/models/24d459a510f640cea27b65921498faaf/embed", label: "Model Mania Challange Year 2003 Phase 2" },
      { type: "sketchfab", src: "https://sketchfab.com/models/a61d88c7bafe470ea3129179c2770b86/embed", label: "Model Mania Challange Year 2004 Phase 2" },
      { type: "sketchfab", src: "https://sketchfab.com/models/2648ce4a717448b0bca068dee78653a1/embed", label: "Model Mania Challange Year 2005 Phase 2" },
      { type: "sketchfab", src: "https://sketchfab.com/models/04a08f17703345e6904d5b77e266ef70/embed", label: "Model Mania Challange Year 2006 Phase 2" },
      { type: "sketchfab", src: "https://sketchfab.com/models/4e5e083e4d6942f98b80b5460f8055d1/embed", label: "Model Mania Challange Year 2007 Phase 2" },
      { type: "sketchfab", src: "https://sketchfab.com/models/6eb9548f6f4943f8afefe9ad79b90085/embed", label: "Model Mania Challange Year 2008 Phase 2" },
      { type: "pdf", src: "assets/media/pdfs/solidworks-model-mania1.pdf", label: "Solidworks SimExpress Study 2008 Phase 2" },
      { type: "sketchfab", src: "https://sketchfab.com/models/af23c09f140449389042c7e066e2214c/embed", label: "Model Mania Challange Year 2009 Phase 1" },
      { type: "pdf", src: "assets/media/pdfs/solidworks-model-mania2.pdf", label: "Solidworks SimExpress Study 2009 Phase 2" },
      { type: "sketchfab", src: "https://sketchfab.com/models/67c1a5534ad14803b2af969f999e05ee/embed", label: "Model Mania Challange Year 2010 Phase 2" },
      { type: "pdf", src: "assets/media/pdfs/solidworks-model-mania3.pdf", label: "Solidworks SimExpress Study 2010 Phase 2" }
    ],

    attachments: [
      { label: "SolidWorks Project Files (.zip)   [will upload soon!]", src: "assets/attachments/zips/solidworks-model-mania.zip" }
    ]
  },

  {
    id: "home-me",
    title: "HomeMe",
    subtitle: "48-Hour Hackathon Project",
    status: "highlighted",
    progress: "complete",
    years: [2025],
    tags: ["cad", "printing3d", "hackathon"],
    thumbnail: "assets/thumbnails/home-me.png",

    summary:
      "A portable, GPS-driven relocation assistant that dynamically maps local community events and essential utility providers to help you master your new neighborhood instantly.",

    detailHTML: `<h2>Overview</h2>
<p>
Home-Me was a 48-hour hackathon project for STEM Connect Hackathon Fall 2025, focused on building a portable GPS-driven relocation assistant. While the broader system integrated hardware, backend APIs, and a touchscreen interface, my role centered entirely on the mechanical design and rapid fabrication of the physical enclosure.
</p>

<p>
The challenge was to design and 3D print a functional, portable casing under extreme time constraints using limited hardware availability. The enclosure needed to securely house a Raspberry Pi, Arduino with GPS shield, wiring, and a touchscreen display while remaining print-safe and structurally reliable.
</p>

<h3>What I Built</h3>
<p>
I designed a modular enclosure in SOLIDWORKS optimized specifically for rapid prototyping and print reliability. Given the 48-hour constraint and lack of replacement materials, the design intentionally avoided complex overhangs, steep support structures, and high-risk geometries that could lead to print failures.
</p>

<p>
The casing was structured with flat, stable surfaces to maximize bed adhesion and reduce warping. Internal clearances were carefully planned to accommodate wiring paths, mounting points, and ventilation while keeping assembly straightforward. The form factor prioritized portability and quick assembly over aesthetic complexity.
</p>

<p>
For visual identity and team branding, I incorporated subtle engraved design elements, including a manually carved panda (our team mascot) and the SASE logo representing the hosting organization. These additions were integrated without compromising structural integrity or print reliability, balancing creativity with engineering constraints.
</p>

<p>
Material selection was intentional:
</p>

<ul>
  <li><strong>PLA</strong> was used for rigid structural components to provide dimensional stability and stiffness.</li>
  <li><strong>TPU</strong> was used for flexible elements requiring slight compliance, such as the part holding the screen securely in place.</li>
</ul>

<h3>Technical Focus</h3>
<ul>
  <li>Design for Additive Manufacturing (DfAM)</li>
  <li>Print-failure risk reduction through flat geometry planning</li>
  <li>Material-based functional segmentation (rigid vs flexible components)</li>
  <li>Internal component packaging and spatial planning</li>
  <li>Rapid prototyping under time and hardware constraints</li>
</ul>

<p>
This project strengthened my ability to think beyond CAD modeling and focus on manufacturability, risk mitigation, and material behavior. Designing under hackathon pressure required balancing speed, structural integrity, aesthetic creativity, and real-world print constraints, an exercise in practical mechanical engineering rather than purely aesthetic design.
</p>`,

    media: [
      { type: "sketchfab", src: "https://sketchfab.com/models/53a7dbeee48447498cb29ee4433de224/embed?ui_theme=dark", label: "3D Model" },
      { type: "image", src: "assets/media/images/home-me1.jpg", label: "Image from the Hackathon Presentation" },
      { type: "image", src: "assets/media/images/home-me2.png", label: "CAD Snapshot" },
      { type: "image", src: "assets/media/images/home-me3.png", label: "AI Polished Final Product" }
    ],

    attachments: [
      { label: "CAD Files (.zip)", src: "assets/attachments/zips/home-me.zip" },
      { label: "Hackathon Submission Page (Webpage)", src: "https://devpost.com/software/home-me-76dsv8" }
    ]
  },

  {
    id: "cubesat-digital-twin",
    title: "CubeSat Digital Twin",
    subtitle: "Simulating spacecraft dynamics and closed-loop control from physical SOLIDWORKS CAD to 3D telemetry rendering.",
    status: "highlighted",
    progress: "in-progress",
    years: [2026],
    tags: ["cad", "fea", "matlab", "simulink", "research"],
    thumbnail: "assets/thumbnails/cubesat-digital-twin.png",

    summary:
      "An end-to-end 3U CubeSat digital twin integrating SOLIDWORKS structural CAD, closed-loop MATLAB orbital dynamics, discrete ADCS flight software, and real-time 3D telemetry visualization.",

    detailHTML: `<h2>Overview</h2>
    <p><strong>--ACTIVE DEVELOPMENT: This project is a work in progress--</strong></p>
<p>
This project focuses on architecting an end-to-end, high-fidelity digital twin of a 3U CubeSat, bridging mechanical hardware design with real-time orbital mechanics and closed-loop Attitude Determination and Control System (ADCS) flight software. The overarching objective is to mirror professional aerospace systems engineering workflows: modeling complete physical structures, performing FEA, characterizing mass and inertia properties, using them for simulating environmental space dynamics, testing flight control software against physical hardware limits, and verifying mission performance in 3D before committing to physical prototyping.
</p>

<h3>Technical Focus & Capabilities</h3>
<ol>
  <li><strong>Structural Hardware:</strong> SOLIDWORKS 3U CubeSat CAD modeling & Finite Element Analysis (FEA in progress).</li>
  <li><strong>Mass Properties:</strong> Accurate material characterization, mass budget, and inertia tensor extraction for simulation.</li>
  <li><strong>Physics Engine:</strong> MATLAB-based orbital mechanics & environmental perturbation modeling (geomagnetic field, aero drag, gravity gradient).</li>
  <li><strong>Spacecraft Dynamics:</strong> Rotational kinematics, quaternion attitude propagation, and multi-body dynamics.</li>
  <li><strong>Flight Software (ADCS):</strong> Extended Kalman Filter (EKF) state estimation, Proportional-Derivative (PD) control, and Feedforward Gyroscopic Decoupling.</li>
  <li><strong>Actuator Management:</strong> Reaction wheel allocation, RPM saturation handling, and magnetorquer momentum dumping.</li>
  <li><strong>Autonomous Operations:</strong> Multi-phase mission state machine for slew execution, disturbance rejection, and recovery.</li>
  <li><strong>Visualization:</strong> Time-stepped discrete-continuous co-simulation & real-time 3D telemetry rendering.</li>
  <li><strong>Next-Gen Integration:</strong> Simulink block-diagram model-based design (in progress).</li>
</ol>

<h3>Digital Twin Architecture: What I've Built So Far</h3>
<p>
To ensure high technical fidelity, the digital twin is segmented into five interconnected architectural layers:
</p>

<ol>
  <li>
    <strong>CAD Design (The Hardware):</strong> 
    I modeled the complete 3U nanosatellite from scratch in SOLIDWORKS, adhering strictly to standard 3U CubeSat Design Specifications. The mechanical assembly integrates a modular 3U structural chassis, avionics stacks, solar arrays, payload enclosures, and an ADCS module. I assigned realistic physical material profiles (such as aerospace-grade Aluminum 6061-T6 and FR-4 avionics boards) across the entire assembly to extract exact physical mass distributions, center of mass (CoM), and the complete mass moment of inertia tensor directly into MATLAB, replacing idealized rigid-body assumptions.
  </li>
  <li>
    <strong>Physics Engine (The Universe):</strong> 
    I programmed the continuous physical laws governing low Earth orbit (LEO) directly in MATLAB. The environment model simulates orbital mechanics, atmospheric drag, Earth geomagnetic field variations, gravity-gradient torques, and gyroscopic rigid-body rotational dynamics governed by Euler's equations of motion and quaternion-based kinematics.
  </li>
  <li>
    <strong>Control Algorithms (The Flight Software Brain):</strong> 
    I engineered the discrete flight software executing onboard the satellite. This incorporates an <strong>Extended Kalman Filter (EKF)</strong> to filter and fuse noisy sensor readings (magnetometers, sun sensors, and rate gyroscopes), a <strong>PD (Proportional-Derivative) attitude controller</strong> computing optimal torque vectors for three-axis stabilization, and actuator allocation logic commanding reaction wheels for precision pointing alongside magnetorquers for momentum management and desaturation.
  </li>
  <li>
    <strong>Closed-Loop Simulation (The Verification Testbed):</strong> 
    I interconnected the flight software brain and the physics engine into a synchronized, discrete-continuous time-stepped simulation loop. This closed-loop harness continuously forces the onboard flight software to counteract orbital disturbances, sensor noise, actuator torque limitations, and momentum saturation over time.
  </li>
  <li>
    <strong>3D Telemetry Visualization (Real-Time Verification):</strong> 
    I utilized the MATLAB Aerospace Toolbox to create an interactive 3D visualizer, routing the raw mathematical attitude telemetry (quaternions and angular rate vectors) calculated during simulation runs directly into the visualizer. This enables real-time visual tracking of the custom CAD satellite model maneuvering through space, confirming that mathematical convergence translates to correct physical attitude dynamics.
  </li>
</ol>

<h3>Simulation Test 1: Nadir Slew & Disturbance Rejection (150s Mission Run)</h3>
<p>
The closed-loop architecture was benchmarked in an end-to-end 150-second mission scenario:
</p>
<ul>
  <li><strong>Phase 1: Nadir Pointing Slew:</strong> The satellite was initialized with an arbitrary tumble orientation and commanded to execute a three-axis slew maneuver to orient its payload camera boresight directly towards Earth (nadir pointing). The PD controller successfully drove reaction wheel torques to converge on the target quaternion with minimal overshoot.</li>
  <li><strong>Phase 2: Artificial Disturbance Injection:</strong> Once stabilized, a high-magnitude rotational disturbance torque was injected into the system to simulate unexpected external perturbations or severe environmental anomalies.</li>
  <li><strong>Phase 3: Autonomous Detection & Recovery:</strong> The Extended Kalman Filter rapidly tracked the resulting angular rate surge despite measurement noise. The control system commanded immediate corrective counter-torques, fully arresting residual body rates and returning the satellite to stable nadir lock within the 150-second simulation window.</li>
</ul>
<p>
Telemetry outputs, including quaternion tracking error, body angular rates, control torques, and reaction wheel speed profiles, are documented in the media viewport alongside mission visualization recordings.
</p>

<h3>Roadmap & Next Steps</h3>
<ul>
  <li><strong>Simulink Co-Simulation:</strong> Expanding the physics engine and control algorithms into a modular MATLAB/Simulink co-simulation framework to facilitate non-linear multi-body dynamics, automated gain tuning, and hardware-in-the-loop (HIL) testing interfaces.</li>
  <li><strong>Advanced Maneuver Experiments:</strong> Executing complex orbital scenarios, including sun-tracking solar power charging modes, ground station target tracking slews, and magnetic B-dot detumbling optimization.</li>
  <li><strong>Structural FEA & Environmental Qualification:</strong> Conducting comprehensive Finite Element Analysis (FEA) on the SOLIDWORKS structural CAD model, evaluating quasi-static launch g-loads, random vibration sweeps, and modal frequency response against standard rocket launch vehicle dispenser envelopes (e.g., Cal Poly CDS vibration profiles).</li>
</ul>`,

    media: [
      { type: "sketchfab", src: "https://sketchfab.com/models/05f3b9d144fb48cfae423ccf7d74dcc9/embed", label: "Interactive 3D CAD Model (Completed 3U Assembly)" },
      { type: "sketchfab", src: "https://sketchfab.com/models/988333df49b84d5e8547e31b2508a53f/embed", label: "Interactive 3D CAD Model (Internal Avionics & Payload Stack)" },
      { type: "video", src: "assets/media/videos/cubesat-digital-twin1.mp4", label: "Simulation Test 1: Nadir Slew & Artifical Disturbance Recovery (Graphs in next tab)" },
      { type: "image", src: "assets/media/images/cubesat-digital-twin1.png", label: "Simulation Test 1: Telemetry, Attitude Error & Wheel Torques" }
    ],

    attachments: [
      { label: "CAD Assembly Files (.zip) [Coming Soon]", src: "" },
      { label: "Digital Twin System Architecture Document (.pdf) [Coming Soon]", src: "" }
    ]
  }
];

