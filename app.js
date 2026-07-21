// ==========================================
// 1. MINIMAL SINGLE-ITEM DATABASE FOR TESTING
// ==========================================
const DANCE_STYLES_DATABASE = [
  {
    name: "Hip-Hop",
    moves: {
      beginner: [
        { name: "The Bounce", videoUrl: "https://youtube.com" }
      ],
      intermediate: [],
      difficult: []
    }
  }
];

// ==========================================
// 2. RENDERING AUTOMATION
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
  container.innerHTML = `
    <h3>${style.name} Techniques</h3>
    <button class="nav-item" style="color:#bb86fc;margin-bottom:20px;font-size:16px;cursor:pointer;background:none;border:none;" onclick="renderDanceStyles()">← Back to Styles</button>
  `;

  ["beginner", "intermediate", "difficult"].forEach(level => {
    const levelSection = document.createElement("div");
    levelSection.className = `level-section ${level}`;
    levelSection.innerHTML = `<h4 style="text-transform: capitalize; color: #bb86fc; margin-top: 20px; border-bottom: 1px solid #333; padding-bottom:5px;">${level} Level</h4>`;

    style.moves[level].forEach(move => {
      const card = document.createElement("div");
      card.className = "move-card";
      
      card.innerHTML = `
        <strong style="font-size: 16px; color: #fff; display:block; margin-bottom:10px;">${move.name}</strong>
        <div class="card-actions">
          <a href="${move.videoUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background:#bb86fc; color:black; font-weight:bold; padding:8px 12px; border-radius:4px; text-decoration: none; font-size: 14px; text-align: center; cursor:pointer;">▶ Watch Tutorial</a>
        </div>
      `;
      levelSection.appendChild(card);
    });
    container.appendChild(levelSection);
  });
}

// EXECUTE IMMEDIATELY
try {
  renderDanceStyles();
} catch (e) {
  console.log("Render failed: ", e);
}
