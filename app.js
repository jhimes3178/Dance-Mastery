// ==========================================
// 1. MINIMAL TESTING DATASET
// ==========================================
const DANCE_STYLES_DATABASE = [
  {
    name: "Hip-Hop",
    moves: {
      beginner: ["The Bounce", "The Two-Step", "The Running Man"],
      intermediate: ["The Biz Markie", "Basic Arm Wave"],
      difficult: ["The Windmill"]
    }
  },
  {
    name: "Ballet",
    moves: {
      beginner: ["Plie", "Releve", "Tendu"],
      intermediate: ["Single Pirouette", "Assembled"],
      difficult: ["Grand Jete"]
    }
  },
  {
    name: "Contemporary",
    moves: {
      beginner: ["Flat Back", "Parallel Plie"],
      intermediate: ["The Leg Hold", "Tilt Jump"],
      difficult: ["Floor Kip-Up"]
    }
  },
  {
    name: "Line Dancing",
    moves: {
      beginner: ["Grapevine", "V-Step"],
      intermediate: ["The Weave", "Applejacks"],
      difficult: ["Full Applejack Syncopation"]
    }
  }
];

// ==========================================
// 2. ULTRA-SIMPLIFIED RENDER LAYER
// ==========================================
function renderDanceStyles() {
  const container = document.getElementById("dance-moves-container");
  if (!container) return;
  container.innerHTML = "";

  DANCE_STYLES_DATABASE.forEach(style => {
    const styleButton = document.createElement("button");
    styleButton.className = "style-category-btn";
    styleButton.innerText = style.name;
    styleButton.onclick = () => showDifficultyMenu(style);
    container.appendChild(styleButton);
  });
}

function showDifficultyMenu(style) {
  const container = document.getElementById("dance-moves-container");
  container.innerHTML = `<h3>${style.name}</h3><button class="nav-item" style="color:#bb86fc;margin-bottom:20px;font-size:16px;cursor:pointer;background:none;border:none;" onclick="renderDanceStyles()">← Back</button>`;

  ["beginner", "intermediate", "difficult"].forEach(level => {
    const levelSection = document.createElement("div");
    levelSection.className = `level-section ${level}`;
    levelSection.innerHTML = `<h4 style="text-transform: capitalize; color: #bb86fc; margin-top: 15px; border-bottom: 1px solid #333; padding-bottom:5px;">${level} Level</h4>`;

    style.moves[level].forEach(moveName => {
      const card = document.createElement("div");
      card.className = "move-card";
      card.innerHTML = `
        <strong style="font-size: 16px; color: #fff; display:block; margin-bottom:10px;">${moveName}</strong>
        <div class="card-actions">
          <button onclick="watchTutorial('${style.name}', '${moveName}')" style="background:#333;color:white;border:1px solid #444;padding:8px 12px;border-radius:4px;cursor:pointer;">▶ Watch Tutorial</button>
        </div>
      `;
      levelSection.appendChild(card);
    });
    container.appendChild(levelSection);
  });
}

function watchTutorial(styleName, moveName) {
  const searchQuery = encodeURIComponent(`${styleName} ${moveName} dance technique tutorial`);
  window.open(`https://youtube.com{searchQuery}`, '_blank');
}

// FORCE IMMEDIATELY UPON FILE LOAD
renderDanceStyles();
