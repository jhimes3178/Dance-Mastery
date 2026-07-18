// ==========================================
// 1. THE LIGHTWEIGHT TECHNIQUE LIBRARY
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
    name: "Lyrical",
    moves: {
      beginner: ["Fluid Promenade", "Arabesque Hold", "Chasse Forward", "Suspend Balance", "Roll-Down", "Step-Touch Ripple", "Soft Arm Sweep", "Extension Hold", "Parallel Passe", "Pivot Turn", "Weight Swivel", "Forward Reach", "Floor Descent", "Breath Push"],
      intermediate: ["The Pencil Spin", "The Fan Kick Leap", "Pique Turn", "Developpe Hold", "Attitude Back", "Soft Chasse Jeté", "Spiral Roll Up", "Floating Balance"],
      difficult: ["The Illusion Turn", "Switch Split Leap", "Double Pique Turn", "Over-Split Jump"]
    }
  },
  {
    name: "Tap Dance",
    moves: {
      beginner: ["Toe Tap", "Heel Drop", "Brush", "Scuff", "Shuffle", "Flap", "Slap", "Stamp", "Stomp", "Ball Change", "Dig", "Spank", "Chug", "Hop"],
      intermediate: ["The Buffalo", "The Maxi Ford", "Iris Step", "Shuffle Ball Change", "Time Step", "Waltz Clog", "Cramp Roll", "Paradiddle"],
      difficult: ["The Pull-Back", "The Wing", "Double Time Step", "High-Speed Cramp Riffs"]
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
    name: "Ballroom",
    moves: {
      beginner: ["Cha-Cha Side Basic", "Salsa Basic", "Rumba Box Step", "Underarm Turn", "Cross Body Lead", "Side Step-Touch", "Cuddle Position", "New Yorker", "Spot Turn", "Basic Promenade", "Forward Walk", "Backward Walk", "Hip Swivel", "Double Hand Hold"],
      intermediate: ["The Cross-Over Swivel", "The Hand-to-Hand Turn", "Continuous Alternating Turns", "Syncopated Side Chasses", "Open Break Drop", "Shadow Walk Position", "Inward Cradle Turn", "Cuban Hip Motion"],
      difficult: ["The Advanced Dip", "High-Speed Pivot Lines", "Syncopated Rhythm Breaks", "Over-Balance Lean"]
    }
  },
  {
    name: "Street Jazz",
    moves: {
      beginner: ["Sharp Arm Clean", "Hip Pop Step", "Head Roll Isolation", "Chest Pump", "Shoulder Drop Walk", "Toe Touch Snap", "Floor Slide Drop", "Posing Freeze", "Cross Step Kick", "Low Bounce", "Double Step Slide", "Arm Whack", "Knee Pop", "Diagonal Punch"],
      intermediate: ["The Whacking Arm Pattern", "The Chest-to-Hip Wave", "Floor Glide Turns", "Knee-Drop Transitions", "Syncopated Arm Drops", "Head Whips", "Bounce-Step-Turns", "High Hair Whip"],
      difficult: ["The Floor Knee Spin", "Staccato Syncopations", "Double Pirouette to Lock", "Flying Switch Jumps"]
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
    name: "Brazilian Samba",
    moves: {
      beginner: ["Samba no Pé", "Hip Swivel", "Side Step-Touch", "Forward March", "Hand Wave", "Basic Turn", "Foot Tap Front", "Foot Tap Back", "Shoulder Shake", "Arm Extended Slide", "Samba Ball-Change", "Heel Dig Bounce", "Torso Bounce", "Diagonal Slide"],
      intermediate: ["The Pagode Step", "Samba Cross Step", "Traveling Samba", "Advanced Hip Isolations", "Samba Roll Turn", "Underarm Carnival Spins", "Continuous Double Taps", "Quick Shimmy Drops"],
      difficult: ["High-Speed Samba Run", "The Drop-and-Recover", "Multi-Directional Shimmies", "Full-Body Vibration"]
    }
  },
  {
    name: "Irish Step",
    moves: {
      beginner: ["The Side Step", "The Hop Back", "Point Step", "Cut Step", "Heel Click", "Bow Step", "Single Reel Step", "Light Jig Basic", "Forward Extension", "Toe Tap Front", "Heel Tap Front", "Triple Step Walk", "Skipping Step", "Circle Around"],
      intermediate: ["The Treble", "The Click-Hop", "Treble Reel Step", "Cross-Over Jumps", "Light Jig Variations", "The Slip Jig Slide", "Heel-Toe Drops", "Traveling Back-Steps"],
      difficult: ["The Treble Over", "Hard Shoe Treble Reels", "The Bird Leap", "Floating Heel Clicks"]
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
    name: "Flamenco",
    moves: {
      beginner: ["Planta", "Tacón", "Golpe", "Punta", "Floreo", "Marcaje", "Braceo", "Step Side-to-Side", "Basic Turn", "Foot Drag", "Shoulder Pull", "Torso Arch", "Chest Lift", "Palmas Sordas"],
      intermediate: ["The Zapateado Basic", "The Llamada", "Fast Continuous Braceo", "Turns with Floreo", "Advanced Palmas Rhythms", "Traveling Marking Steps", "Double Tacón Roll", "Hip Accents"],
      difficult: ["Zapateado Counter-Rhythms", "The Desplante Drop", "Multi-Spin Turns", "Triple-Strike Footwork"]
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
// 2. DISPLAY LOGIC & ROUTING ENGINES
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
  const container = document.getElementById("dance-moves-container");container.innerHTML = <h3>${style.name} Techniques</h3><button class="nav-item" style="color:#bb86fc;margin-bottom:20px;font-size:16px;cursor:pointer;" onclick="renderDanceStyles()">← Back to Styles</button>;
["beginner", "intermediate", "difficult"].forEach(level => {
const levelSection = document.createElement("div");
levelSection.className = level-section ${level};
levelSection.innerHTML = <h4 style="text-transform: capitalize; color: #bb86fc; margin-top: 20px; border-bottom: 1px solid #333; padding-bottom:5px;">${level} Level</h4>;
style.moves[level].forEach(moveName => {
const card = document.createElement("div");
card.className = "move-card";
if (window.isPaywalled && (level === "intermediate" || level === "difficult")) {
card.className = "move-card paywalled";
card.innerHTML = <strong style="font-size: 16px; color: #fff;">${moveName}</strong> <div class="blur-overlay" style="margin-top:10px;"> <button onclick="redirectToStripe()" style="background:#6200ee;color:white;border:none;padding:8px 12px;border-radius:4px;cursor:pointer;">🔒 Unlock Premium</button> </div>;
} else {
card.innerHTML = <strong style="font-size: 16px; color: #fff; display:block; margin-bottom:10px;">${moveName}</strong> <div class="card-actions"> <button onclick="watchTutorial('${style.name}', '${moveName}')" style="background:#333;color:white;border:1px solid #444;padding:8px 12px;border-radius:4px;cursor:pointer;">▶ Watch Tutorial</button> </div>;
}
levelSection.appendChild(card);
});
container.appendChild(levelSection);
});
}
function watchTutorial(styleName, moveName) {
const searchQuery = encodeURIComponent(${styleName} ${moveName} dance technique tutorial);
window.open(https://youtube.com{searchQuery}, '_blank');
}
function redirectToStripe() {
window.location.href = "stripe.com";
}
window.onload = () => {
renderDanceStyles();
};
// ==========================================
// 3. ISOLATED BACKEND LAYER (Failsafe)
// ==========================================
const SUPABASE_URL = "https://qwvbtlxcpdzdiikyuqjf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3dmJ0bHhjcGR6ZGlpa3l1cWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyOTc0MTUsImV4cCI6MjA5OTg3MzQxNX0.PochcvTh-lA2xA6zJfzRmrtLpHk98c1x5-lAtnFtno8";

try {
  const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (e) {
  console.log("Database connectivity bypassed for stability testing.");
}


