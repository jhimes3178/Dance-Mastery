// ==========================================
// 1. COMPACT MASTER TECHNIQUE BLUEPRINT (12 STYLES)
// ==========================================
const DANCE_STYLES_DATABASE = [
  {
    name: "Hip-Hop",
    moves: {
      beginner: ["The Bounce", "The Two-Step", "The Reebok", "The Smurf", "The Prep", "The Cabbage Patch", "The Running Man", "The Steve Martin", "The Bart Simpson", "The Humpty Dance", "The Wop", "The Roger Rabbit", "The Kick-Step", "The Body Roll"],
      intermediate: ["The Moncell", "The Biz Markie", "Basic Arm Wave", "The Butterfly", "The Sham Rock", "The Tone Whop", "The Criss-Cross", "The Bankhead Bounce"],
      difficult: ["Full Body Wave", "The Glitch", "The Windmill", "The K-Pop Isolations"]
    }
  },
  {
    name: "Ballet",
    moves: {
      beginner: ["Plie", "Releve", "Tendu", "Dégagé", "Rond de Jambe", "Coupe", "Passe", "Arabesque", "Chasse", "Changement", "Battement", "Port de Bras", "Balance", "Saute"],
      intermediate: ["Single Pirouette", "Developpe", "Glissade", "Pas de Bourree", "Assemble", "Jete", "Fondu", "Attitude"],
      difficult: ["Grand Jete", "Fouette Turns", "Double Pirouette", "Grand Fouette en Tournant"]
    }
  },
  {
    name: "Contemporary",
    moves: {
      beginner: ["Flat Back", "Parallel Plie", "Floor Melt", "Undercurve", "Overcurve", "Prance", "Lateral T-Shape", "Swing Drop", "Contraction", "Release", "Weight Shift", "Floor Slide", "Spinal Roll", "Cross-Lateral Reach"],
      intermediate: ["The Leg Hold", "Hinge Lean", "Floor Inversion", "Pencil Spin", "Floor Roll-Up", "Tilt Jump", "Fall & Recovery", "Swivel Rise"],
      difficult: ["The Vertical Tilt Jump", "Floor Kip-Up", "Handstand Core Drops", "Advanced Illusion Turns"]
    }
  },
  {
    name: "Jazz",
    moves: {
      beginner: ["Jazz Walk", "Sharp Head Turn", "Hip Roll", "Shoulder Drop", "Chest Isolation", "Pivot Turn", "Step Ball Change", "Kick Ball Change", "Jazz Drag", "Passe Jump", "Fan Kick", "Three-Step Turn", "Sharp Arm Extension", "Chasse Side"],
      intermediate: ["The Pirouette", "Axel Jump", "Grand Battement Kick", "Jazz Square Kick", "Layout Prep", "Hitch Kick", "Calypso Prep", "Pencil Turn"],
      difficult: ["The Layout", "The Calypso Leap", "Double Pirouette to Floor Drop", "Switch Leap Split"]
    }
  },
  {
    name: "Dancehall",
    moves: {
      beginner: ["The Wine", "Log On", "Sufferer", "Bogle", "Chaka Chaka", "Scooby Doo", "Signal the Plane", "Pon Di River", "Drive By", "Overproof", "Summer Bounce", "Zip It Up", "Tek Weh Yuhself", "Gully Creepa"],
      intermediate: ["Willy Bounce", "Daggering Basic", "Nuh Linga", "Skip To Ma Lou", "Sweep the Floor", "Watch Di Pum", "Siva", "Dinki Mini Step"],
      difficult: ["Headtop Freeze", "Split Drop Jump", "High-Speed Wine & Pop", "Acrobatic Ground Flows"]
    }
  },
  {
    name: "Tahitian Dance",
    moves: {
      beginner: ["Tamau", "Ami", "Varu Basic", "Fa'arapu Basic", "Tairi Tamau", "Hura Step", "Oveo Step", "Slide Step", "Hand Wave", "Ocean Motion Arms", "Flower Frame Pose", "Toe Tap Step", "Low Bounce Sway", "Continuous Tamau"],
      intermediate: ["Fast Fa'arapu", "Varu Hip Twist Walk", "Fa'atere Traveling", "Turu Step", "Syncopated Ami Loops", "Double Tamau Drop", "Fa'arapu to Knees", "Hip Vibration Shimmies"],
      difficult: ["High Speed Fa'arapu Drop and Rise", "Complex Otamu Combos", "Acrobatic Knee Spin Drops", "Advanced Poly-Rhythmic Drum Acceleration Runs"]
    }
  },
  {
    name: "West African",
    moves: {
      beginner: ["Soli Step", "Kuku Groove", "Sorsornet Slide", "Lamba Step", "Yankadi Walk", "Dundunba Kick", "Mandiani Shrug", "Kakilambe Bounce", "Aconcon Reach", "Sinte Step", "Balanta Hop", "Djole Jump", "Liberté Hand Sweep", "Saide Bounce"],
      intermediate: ["Fast Soli Footwork", "Kuku Chest Vibration", "Lamba High Extension", "Dundunba Body Drop", "Yankadi-Macrou Transitions", "Syncopated Dundun Rolls", "Sorsornet Turn", "Mandiani Acceleration Line"],
      difficult: ["Advanced Dundunba Jump Freeze", "High Velocity Mandiani Rotation", "Complex Poly-Rhythmic Footwork Slams", "Flying Acrobat Floor Slides"]
    }
  },
  {
    name: "Line Dancing",
    moves: {
      beginner: ["Grapevine", "V-Step", "Charleston Step", "Jazz Box", "Coaster Step", "Sailor Step", "Pivot Turn", "Heel Dig", "Toe Strut", "Hip Bumps", "Scuff Step", "Slide Step", "Stomp Up", "Rock Step"],
      intermediate: ["The Weave", "Applejacks", "Lock Step Traveling", "Monterey Turn", "Kick-Ball-Cross", "Dorothy Step", "Syncopated Vine", "Heel Jacks"],
      difficult: ["Full Applejack Syncopation", "The Double Spinning Weave", "Advanced Rhythm Breaks", "High-Speed Tag Restarts"]
    }
  },
  {
    name: "Afrobeat",
    moves: {
      beginner: ["Gbese", "Kupe", "Azonto Step", "Shaku Shaku", "Zanku Step", "Network Step", "Pilolo", "Gwara Gwara Basic", "Happy Feet", "Shoulder Roll Bounce", "Leg Swing Drop", "Side Wave", "Waist Wine Basic", "Low Arm Push"],
      intermediate: ["The Gwara Gwara Twist", "The Poco Dance", "Advanced Shaku Variations", "The Kpakujemu", "Leg Cross Hops", "Fast Syncopated Gbese", "Body-Drop Bounce", "Afro-House Glides"],
      difficult: ["The Zanku Split Drop", "Floor Leg Sweeps", "Poly-Rhythmic Body Waves", "Advanced Jump-Freezes"]
    }
  },
  {
    name: "Latin Fusion",
    moves: {
      beginner: ["Salsa Forward Basic", "Bachata Side Basic", "Merengue March", "Samba Step Base", "Cha Cha Side Step", "Underarm Lead", "Cross Body Guide", "Hip Swivel Rock", "Side Step-Touch", "Cuddle Position Hold", "Spot Turn", "Diagonal Salsa Glide", "Merengue Hip Shake", "Cuban Motion Rock"],
      intermediate: ["Salsa Cross-Over Turn", "Bachata Hip Drop Pop", "Fast Traveling Merengue", "Samba Cross Step Run", "Continuous Alternating Spins", "Syncopated Cha Cha Chasse", "Open Break Tension Drop", "Shadow Position Walk"],
      difficult: ["Advanced Salsa Pivot Line", "High Speed Samba Knee Roll", "Tandem Bachata Over-Lean", "Dramatic Theatrical Low Dip"]
    }
  },
  {
    name: "Bollywood",
    moves: {
      beginner: ["The Thumka", "Wrist Roll", "Step-Touch Diagonal", "Shoulder Shrug", "Hand Lotus Frame", "Toe-Heel Bounce", "Side Slide Arm Roll", "The Bhangra Hop", "Garba Circle Step", "Foot Tap with Clap", "Forward Lean Shimmy", "Scarf Wave", "Chest Pump Step", "Pivot Point"],
      intermediate: ["Bhangra Single-Leg Leap", "Semi-Classical Spin", "Fast Double-Thumka", "Garba Spin & Drop", "Syncopated Footwork", "Neck Movements", "Diagonal Leaping Twists", "Continuous Arm Rolls"],
      difficult: ["Kathak Ch चक्कर Spins", "Classical Floor Drops", "Poly-Rhythmic Foot Slams", "Flying Classical Jumps"]
    }
  },
  {
    name: "Capoeira",
    moves: {
      beginner: ["Ginga", "Cadeira", "Meia Lua de Frente", "Cororinha", "Benção", "Armada", "Esquiva de Lado", "Negativa", "Role", "Au", "Queixada", "Passo à Frente", "Balanço", "Guarda Baixa"],
      intermediate: ["The Au Cortado", "The Macaco", "Meia Lua de Compasso", "Esquiva Invertida", "Au Batido", "Tesoura de Chão", "Martelo", "Queda de Rins"],
      difficult: ["Au Sem Mão", "The S-Dobrado", "Parafuso", "Mortal"]
    }
  }
];

// ==========================================
// 2. DISPLAY LOGIC & RENDERING AUTOMATION
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
  container.innerHTML = `<h3>${style.name} Techniques</h3><button class="nav-item" style="color:#bb86fc;margin-bottom:20px;font-size:16px;cursor:pointer;background:none;border:none;" onclick="renderDanceStyles()">← Back to Styles</button>`;

  ["beginner", "intermediate", "difficult"].forEach(level => {
    const levelSection = document.createElement("div");
    levelSection.className = `level-section ${level}`;
    levelSection.innerHTML = `<h4 style="text-transform: capitalize; color: #bb86fc; margin-top: 20px; border-bottom: 1px solid #333; padding-bottom:5px;">${level} Level</h4>`;

    style.moves[level].forEach(moveName => {
      const card = document.createElement("div");
      card.className = "move-card";
      const searchTerms = style.name + " " + moveName + " dance technique tutorial";
      const queryText = encodeURIComponent(searchTerms);
      const nativeYoutubeUrl = "https://youtube.com" + queryText;
      card.innerHTML = `
        <strong style="font-size: 16px; color: #fff; display:block; margin-bottom:10px;">${moveName}</strong>
        <div class="card-actions">
          <a href="${nativeYoutubeUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background:#333; color:white; border:1px solid #444; padding:8px 12px; border-radius:4px; text-decoration: none; font-size: 14px; text-align: center; cursor:pointer;">▶ Watch Tutorial</a>
        </div>
      `;
      levelSection.appendChild(card);
    });
    container.appendChild(levelSection);
  });
}

// SAFE EXECUTION LOOP
try {
  renderDanceStyles();
} catch (e) {
  console.log("Render failed visually: ", e);
}
 
