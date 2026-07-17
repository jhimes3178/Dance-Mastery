// 1. INITIALIZE SUPABASE
const SUPABASE_URL = "https://qwvbtlxcpdzdiikyuqjf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3dmJ0bHhjcGR6ZGlpa3l1cWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyOTc0MTUsImV4cCI6MjA5OTg3MzQxNX0.PochcvTh-lA2xA6zJfzRmrtLpHk98c1x5-lAtnFtno8";
const supabase = supabase.createClient(https://qwvbtlxcpdzdiikyuqjf.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3dmJ0bHhjcGR6ZGlpa3l1cWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyOTc0MTUsImV4cCI6MjA5OTg3MzQxNX0.PochcvTh-lA2xA6zJfzRmrtLpHk98c1x5-lAtnFtno8);

// 2. THE MAIN TECHNIQUE DATA ARRAY (Styles 1 - 4)
const DANCE_STYLES_DATABASE = [
  {
    name: "Hip-Hop",
    moves: {
      beginner: [
        { name: "The Bounce", desc: "Rhythmic knee bending on the heavy bass beat." },
        { name: "The Two-Step", desc: "Step right, touch left, step left, touch right with a groove." },
        { name: "The Reebok", desc: "Side-to-side steps shifting weight with relaxed arm swings." },
        { name: "The Smurf", desc: "Upward shoulder and arm bounces while taking steps." },
        { name: "The Prep", desc: "Small forward hand rolls mimicking getting ready to move." },
        { name: "The Cabbage Patch", desc: "Churning arms in a circle while shifting your hips." },
        { name: "The Running Man", desc: "Simulating running in place by sliding your feet backward." },
        { name: "The Steve Martin", desc: "Step, lift knee, and kick out in a sharp jazz-funk rhythm." },
        { name: "The Bart Simpson", desc: "Side-glide body steps accompanied by smooth sliding arms." },
        { name: "The Humpty Dance", desc: "Loose, wide-legged bounces shifting weight side to side." },
        { name: "The Wop", desc: "Fast, rhythmic chest pumps matching loose arm swings." },
        { name: "The Roger Rabbit", desc: "Backward hopping steps kicking the front foot out cleanly." },
        { name: "The Kick-Step", desc: "Quick sharp front kick followed by a step back onto the ball." },
        { name: "The Body Roll", desc: "Sequential rolling fluid wave from your head down to hips." }
      ],
      intermediate: [
        { name: "The Moncell", desc: "Alternating fast foot taps with swift hip twists." },
        { name: "The Biz Markie", desc: "Hop side-to-side while bouncing shoulders up on the beat." },
        { name: "Basic Arm Wave", desc: "Isolating segments of the arm to look like moving liquid." },
        { name: "The Butterfly", desc: "Opening and closing knees inward with a deep low groove." },
        { name: "The Sham Rock", desc: "Cross-stepping footwork with deep, low rhythmic bounces." },
        { name: "The Tone Whop", desc: "Sharp side-to-side body weight isolation transitions." },
        { name: "The Criss-Cross", desc: "Jumping feet wide apart and crossing them back rapidly." },
        { name: "The Bankhead Bounce", desc: "Fast, sharp shoulder shrugs paired with chest pops." }
      ],
      difficult: [
        { name: "Full Body Wave", desc: "Fluid wave passing completely from your head down to toes." },
        { name: "The Glitch", desc: "Intricate micro-stuttering body pops mimicking frozen frames." },
        { name: "The Windmill", desc: "Rotating cleanly on the upper back using leg separation momentum." },
        { name: "The K-Pop Isolations", desc: "Complex multi-axis head, chest, and hip tracking isolations." }
      ]
    }
  },
  {
    name: "Ballet",
    moves: {
      beginner: [
        { name: "Plie", desc: "A smooth bending of the knees keeping heels tracking down." },
        { name: "Releve", desc: "A clean rising up onto the balls of the feet from flat." },
        { name: "Tendu", desc: "Stretching the foot along the floor to a sharp pointed toe." },
        { name: "Dégagé", desc: "Brushing the foot slightly off the floor with a sharp point." },
        { name: "Rond de Jambe", desc: "Circular tracing movement of the leg on the floor." },
        { name: "Coupe", desc: "Cutting step where one foot rests at the ankle of the other." },
        { name: "Passe", desc: "Passing the foot up the leg until the toe rests at the knee." },
        { name: "Arabesque", desc: "Balancing on one leg with the other extended straight behind." },
        { name: "Chasse", desc: "A chasing step where one foot drives the other out." },
        { name: "Changement", desc: "Jumping up in fifth position and changing feet in the air." },
        { name: "Battement", desc: "A large high kick brushing through the floor to lift." },
        { name: "Port de Bras", desc: "Graceful, structured carriage and pathways of the arms." },
        { name: "Balance", desc: "A shifting three-step rock step done in a waltz rhythm." },
        { name: "Saute", desc: "A simple vertical jump landing softly through the feet." }
      ],
      intermediate: [
        { name: "Single Pirouette", desc: "A complete 360-degree turn balanced on one foot in passe." },
        { name: "Developpe", desc: "Unfolding the leg slowly to an extended position in the air." },
        { name: "Glissade", desc: "A gliding traveling step used to link large leaps together." },
        { name: "Pas de Bourree", desc: "A quick transitional three-step sequence: back, side, front." },
        { name: "Assemble", desc: "Brushing one leg out and assembling both feet together in mid-air." },
        { name: "Jete", desc: "Leaping from one foot and landing cleanly on the other leg." },
        { name: "Fondu", desc: "Bending the supporting leg while the working leg moves in sync." },
        { name: "Attitude", desc: "A position on one leg with the other lifted and bent at 90 degrees." }
      ],
      difficult: [
        { name: "Grand Jete", desc: "A large flying leap splitting the legs fully in mid-air." },
        { name: "Fouette Turns", desc: "Continuous whipping turns balancing on one leg using the other to drive." },
        { name: "Double Pirouette", desc: "Two complete rotations on balance before a clean landing." },
        { name: "Grand Fouette en Tournant", desc: "An advanced sweeping rotation shifting the torso in mid-air." }
      ]
    }
  },
  {
    name: "Contemporary",
    moves: {
      beginner: [
        { name: "Flat Back", desc: "Bending from the hips keeping the spine in a straight table-top line." },
        { name: "Parallel Plie", desc: "Bending the knees with toes pointing directly forward, not turned out." },
        { name: "Floor Melt", desc: "Dropping your weight into the floor smoothly by relaxing joints." },
        { name: "Undercurve", desc: "Shifting weight from side to side by dropping down through a plie scoop." },
        { name: "Overcurve", desc: "Shifting weight by lifting up over an imaginary hurdle high in the air." },
        { name: "Prance", desc: "Springy alternative foot transfers pushing strongly through the toes." },
        { name: "Lateral T-Shape", desc: "Tilting the torso to the side while the opposite leg lifts to create a T line." },
        { name: "Swing Drop", desc: "Releasing the upper body downward in a heavy u-shaped pendulum arc." },
        { name: "Contraction", desc: "Curving the spine into a C-shape by pulling in from the deep abs." },
        { name: "Release", desc: "Returning the spine to neutral or arching upward after a contraction." },
        { name: "Weight Shift", desc: "Moving the center of gravity cleanly across the floor bounds." },
        { name: "Floor Slide", desc: "Using body contact to slide smoothly across the floor surface." },
        { name: "Spinal Roll", desc: "Articulating the back bone-by-bone dropping down or rolling up." },
        { name: "Cross-Lateral Reach", desc: "Reaching across the body line to create diagonal dynamic tension." }
      ],
      intermediate: [
        { name: "The Leg Hold", desc: "Lifting and manually holding the leg high to the side on balance." },
        { name: "Hinge Lean", desc: "Leaning backward from the knees keeping a completely straight torso." },
        { name: "Floor Inversion", desc: "Balancing upside down briefly with weight on hands, shoulders, or head." },
        { name: "Pencil Spin", desc: "Turning in place with both legs pressed tightly straight together." },
        { name: "Floor Roll-Up", desc: "Unwinding from a low floor position into a clean standing stance." },
        { name: "Tilt Jump", desc: "Leaping into the air while throwing the upper body sideways." },
        { name: "Fall & Recovery", desc: "Intentionally losing balance to gravity and reclaiming it safely." },
        { name: "Swivel Rise", desc: "Spinning upward off the floor using core muscle rotation." }
      ],
      difficult: [
        { name: "The Vertical Tilt Jump", desc: "Leaping high with your legs split wide in an absolute straight vertical line." },
        { name: "Floor Kip-Up", desc: "Explosively snapping up from your back straight onto your feet." },
        { name: "Handstand Core Drops", desc: "Kicking into a handstand and dropping the legs down into a floor freeze." },
        { name: "Advanced Illusion Turns", desc: "Dropping the head completely down to the ankle while spinning 360 degrees." }
      ]
    }
  },
  {
    name: "Jazz",
    moves: {
      beginner: [
        { name: "Jazz Walk", desc: "Low, stylized traveling steps keeping the hips swinging low." },
        { name: "Sharp Head Turn", desc: "Snapping the head cleanly toward a new wall direction." },
        { name: "Hip Roll", desc: "Isolating and rolling the hips in a full complete circle." },
        { name: "Shoulder Drop", desc: "Dropping one shoulder low while lifting the opposite side." },
        { name: "Chest Isolation", desc: "Shifting the ribcage side to side without moving the hips." },
        { name: "Pivot Turn", desc: "Step forward on one foot and swivel 180 degrees on the balls." },
        { name: "Step Ball Change", desc: "Stepping out, then stepping quickly back-front changing feet." },
        { name: "Kick Ball Change", desc: "A low front kick followed by a fast back-front step change." },
        { name: "Jazz Drag", desc: "Stepping heavily on one foot while dragging the opposite toe behind." },
        { name: "Passe Jump", desc: "Jumping off one foot while pulling the other foot to the knee." },{ name: "Fan Kick", desc: "Sweeping the leg in a massive wide circle across the face line." },{ name: "Three-Step Turn", desc: "A basic 360-degree traveling turn across three steps." },{ name: "Sharp Arm Extension", desc: "Driving the arms straight out with tight, hard locked muscles." },{ name: "Chasse Side", desc: "A sideways chasing slide step keeping the body facing front." }],intermediate: [{ name: "The Pirouette", desc: "A jazz style spin executed on a turned-out high parallel balance." },{ name: "Axel Jump", desc: "A spinning jump where both knees tuck tightly into the chest sequentially." },{ name: "Grand Battement Kick", desc: "A powerful straight leg kick targeting maximum facial height." },{ name: "Jazz Square Kick", desc: "A traditional box step pattern accented with sharp low kicks." },{ name: "Layout Prep", desc: "Arching the upper back away while keeping a steady core foundation." },{ name: "Hitch Kick", desc: "Driving one knee up, then leaping off the other leg to kick past it." },{ name: "Calypso Prep", desc: "A low directional chasing step setup to build jumping speed." },{ name: "Pencil Turn", desc: "A high-speed rotation keeping both legs pulled straight downward." }],difficult: [{ name: "The Layout", desc: "Kicking high forward while dropping the torso completely back parallel to the floor." },{ name: "The Calypso Leap", desc: "A high turning leap with the front leg straight and the back leg bent in attitude." },{ name: "Double Pirouette to Floor Drop", desc: "Spinning twice and dropping straight into a low knee floor freeze." },{ name: "Switch Leap Split", desc: "Scissor-kicking the legs in mid-air to achieve an over-split look." }]}},---

### Chunk 2: Styles 5 to 8 (Including New Dancehall Category)
*Paste this chunk right underneath Chunk 1:*

```javascript
  {
    name: "Lyrical",
    moves: {
      beginner: [
        { name: "Fluid Promenade", desc: "A slow, continuous balance pivot turn on one foot." },
        { name: "Arabesque Hold", desc: "Balancing with the back leg lifted, focusing on long smooth lines." },
        { name: "Chasse Forward", desc: "Gliding forward softly to match emotional beats in music." },
        { name: "Suspend Balance", desc: "Holding a high balance at the absolute peak of a musical phrase." },
        { name: "Roll-Down", desc: "Dropping the head and melting the spine down toward the floor." },
        { name: "Step-Touch Ripple", desc: "Stepping side to side while sending a wave motion through the arms." },
        { name: "Soft Arm Sweep", desc: "Moving the arms along relaxed, curved paths without sharp drops." },
        { name: "Extension Hold", desc: "Lifting the leg out and using muscle strength to pause it in the air." },
        { name: "Parallel Passe", desc: "Pulling the foot up to the side of the knee with tracking facing front." },
        { name: "Pivot Turn", desc: "Soft weight shifts that turn the body smoothly to the back wall." },
        { name: "Weight Swivel", desc: "Shifting body weight from heel to toe along a winding path." },
        { name: "Forward Reach", desc: "Extending the torso out past the toes to convey expression." },
        { name: "Floor Descent", desc: "Lowering yourself to the floor safely without hard joint impact." },
        { name: "Breath Push", desc: "Moving the upper body in sync with an open chest exhale accent." }
      ],
      intermediate: [
        { name: "The Pencil Spin", desc: "Turning fast on one foot with the trailing leg held low and tight." },
        { name: "The Fan Kick Leap", desc: "Sweeping the leg in a circular path during a traveling jump." },
        { name: "Pique Turn", desc: "Stepping directly onto a locked, straight leg and spinning instantly." },
        { name: "Developpe Hold", desc: "Unfolding the leg high and holding it steady for multiple counts." },
        { name: "Attitude Back", desc: "Lifting the back leg high with a soft, uniform bend at the knee joint." },
        { name: "Soft Chasse Jeté", desc: "A gentle leap that links two soft gliding steps together seamlessly." },
        { name: "Spiral Roll Up", desc: "Twisting the torso up from the floor to a standing position." },
        { name: "Floating Balance", desc: "Holding an asymmetrical position on one foot without shaking." }
      ],
      difficult: [
        { name: "The Illusion Turn", desc: "Spinning on one foot while dropping your chest all the way down to your ankle." },
        { name: "Switch Split Leap", desc: "Brushing one leg forward, then throwing it back into a mid-air split split position." },
        { name: "Double Pique Turn", desc: "Executing two complete, rapid step-turns on a high locked balance toe." },
        { name: "Over-Split Jump", desc: "Leaping into the air and pushing your split past a straight 180-degree line." }
      ]
    }
  },
  {
    name: "Tap Dance",
    moves: {
      beginner: [
        { name: "Toe Tap", desc: "Striking the floor cleanly using only the front metal tap shoe plate." },
        { name: "Heel Drop", desc: "Dropping the back heel down hard to make a heavy bass sound." },
        { name: "Brush", desc: "Swinging the foot forward or back, hitting the metal plate along the floor." },
        { name: "Scuff", desc: "Striking the back edge of the front tap shoe plate against the floor." },
        { name: "Shuffle", desc: "A fast double strike combining a forward brush and a backward spank." },
        { name: "Flap", desc: "A forward brush followed immediately by a quick step putting weight down." },
        { name: "Slap", desc: "A forward brush followed by a tap step without transferring body weight." },
        { name: "Stamp", desc: "Striking the flat foot hard against the floor and putting your weight down." },
        { name: "Stomp", desc: "Striking the flat foot hard against the floor and lifting it back up instantly." },
        { name: "Ball Change", desc: "A quick weight transfer from the ball of one foot to the other." },
        { name: "Dig", desc: "Striking the back edge of the heel tap plate into the floor sharply." },
        { name: "Spank", desc: "Brushing the front metal tap plate backward along the floor surface." },
        { name: "Chug", desc: "Sliding forward on one foot while dropping the heel down hard at the end." },
        { name: "Hop", desc: "Jumping into the air on one foot and landing back on that same foot." }
      ],
      intermediate: [
        { name: "The Buffalo", desc: "A classic pattern: step, shuffle, leap, alternating sides cleanly." },
        { name: "The Maxi Ford", desc: "A five-sound step: step, shuffle, leap, toe tip drop behind." },
        { name: "Iris Step", desc: "A traveling move combining a slide step and a quick hop cross-step." },
        { name: "Shuffle Ball Change", desc: "Linking a fast shuffle sound straight into a back-front step change." },
        { name: "Time Step", desc: "The standard rhythm routine pattern used to lock into big band swing beats." },
        { name: "Waltz Clog", desc: "A three-count time pattern: step, shuffle, ball change in 3/4 time." },
        { name: "Cramp Roll", desc: "A fast four-sound step: toe, toe, heel, heel, executed in a split second." },
        { name: "Paradiddle", desc: "Four clean rhythmic sounds: dig, spank, toe, heel, rolling continuously." }
      ],
      difficult: [
        { name: "The Pull-Back", desc: "Jumping up off both feet and brushing both shoes backward in mid-air." },
        { name: "The Wing", desc: "Scraping your shoes outward and back in the air while hopping on one foot." },
        { name: "Double Time Step", desc: "An advanced variation of the time step adding extra shuffle sounds." },
        { name: "High-Speed Cramp Riffs", desc: "Combining continuous cramp rolls with rapid-fire toe and heel accents." }
      ]
    }
  },
  {
    name: "Dancehall",
    moves: {
      beginner: [
        { name: "The Wine", desc: "Fluid, circular rotation of the hips and waist independent of the upper body." },
        { name: "Log On", desc: "Step out with a heavy stomp and twist the foot inward mimicking logging onto a device." },
        { name: "Sufferer", desc: "Low body weight bounce with forward pushing arm extensions matching the roots beat." },
        { name: "Bogle", desc: "Waving arms smoothly overhead in a backwards roll motion while shifting weight back-to-front." },
        { name: "Chaka Chaka", desc: "Side-to-side kicking foot transitions with loose elbow counter-movements." },
        { name: "Scooby Doo", desc: "Alternating knee drive jumps coordinated with forward tracking arm pulls." },
        { name: "Signal the Plane", desc: "Extending one arm upwards waving back and forth to mimic an airport landing director." },
        { name: "Pon Di River", desc: "Side traveling hop steps lifting the outer leg high with a chest groove." },
        { name: "Drive By", desc: "Stepping heavily to the side while mimicking steering a car with low loose hands." },
        { name: "Overproof", desc: "Pushing arms forward and leaning torso back while completing rhythmic hip adjustments." },
        { name: "Summer Bounce", desc: "Continuous springy knee bounces tracking directly down into the floorboards." },
        { name: "Zip It Up", desc: "A clean zipper motion hand isolation tracking from the knees to the upper neck line." },
        { name: "Tek Weh Yuhself", desc: "A sharp side evasion slide step pattern designed to show high energy escape." },
        { name: "Gully Creepa", desc: "Low to the ground walking steps keeping a heavy leaned back posture stance." }
      ],
      intermediate: [
        { name: "Willy Bounce", desc: "Alternating wide steps with precise extended arm frames swinging side to side." },
        { name: "Daggering Basic", desc: "High momentum hip isolations executed with a low, sturdy leg split posture." },
        { name: "Nuh Linga", desc: "Fast syncopated leg crosses combined with sharp outward hand points on half-beats." },
        { name: "Skip To Ma Lou", desc: "A springy hopping skipping pattern requiring independent hip isolation rolling." },
        { name: "Sweep the Floor", desc: "Dropping weight to lean forward and sweeping hands low across the dance floor surface." },
        { name: "Watch Di Pum", desc: "A staccato knee opening contraction coordinated with precise hip drops." },
        { name: "Siva", desc: "Intricate multi-axis shoulder vibrations matching double step footwork lines." },
        { name: "Dinki Mini Step", desc: "Traditional Jamaican jumping steps blended directly into a modern commercial groove." }
      ],
      difficult: [
        { name: "Headtop Freeze", desc: "Dropping directly into a secure tripod headstand while executing leg wines in mid-air." },
        { name: "Split Drop Jump", desc: "Leaping straight into the air and dropping directly into a flat full split on the floor floor." },
        { name: "High-Speed Wine & Pop", desc: "Executing continuous circular hip movements interrupted by sudden muscle hits." },
        { name: "Acrobatic Ground Flows", desc: "Sweeping both legs under the torso using hand balancing to clear the floor." }
      ]
    }
  },
  {
    name: "Ballroom",
    moves: {
      beginner: [
        { name: "Cha-Cha Side Basic", desc: "A basic step combination: rock step, then a three-step side chasse." },
        { name: "Salsa Basic", desc: "Moving the foot forward and back, stepping on the regular salsa syncopation." },
        { name: "Rumba Box Step", desc: "Tracing a perfect box pattern on the floor: forward, side, close, back, side, close." },{ name: "Underarm Turn", desc: "Guiding your partner to spin under a raised hand connection." },{ name: "Cross Body Lead", desc: "A classic pattern opening up the path to let your partner pass by." },{ name: "Side Step-Touch", desc: "A standard social step: step wide to the side, then touch the other toe in." },{ name: "Cuddle Position", desc: "Wrapping your partner into a close, comfortable side-by-side hold." },{ name: "New Yorker", desc: "Breaking open into an angled forward position with a sharp arm extension." },{ name: "Spot Turn", desc: "A 360-degree turn executed completely in place without traveling." },{ name: "Basic Promenade", desc: "Walking side-by-side with your partner in a smooth V-shaped hold." },{ name: "Forward Walk", desc: "Gliding forward heel-to-toe, keeping your core stable and connected." },{ name: "Backward Walk", desc: "Moving backward toe-to-heel, reaching out with long straight leg lines." },{ name: "Hip Swivel", desc: "Rotating the hips independently over a planted foot connection." },{ name: "Double Hand Hold", desc: "Facing your partner with both hands joined at waist height." }],intermediate: [{ name: "The Cross-Over Swivel", desc: "Fast weight shifts combined with sharp, crossed footwork lines." },{ name: "The Hand-to-Hand Turn", desc: "Unwinding from a joined hand hold into fast opposite side turns." },{ name: "Continuous Alternating Turns", desc: "Spinning your partner left then right back-to-back down the floor." },{ name: "Syncopated Side Chasses", desc: "Adding quick half-beat steps into a sideways sliding sequence." },{ name: "Open Break Drop", desc: "Dropping your weight low away from your partner to create tension." },{ name: "Shadow Walk Position", desc: "Walking across the floor with both partners tracking in the same direction." },{ name: "Inward Cradle Turn", desc: "Spinning your partner tightly into a close chest-to-chest hold." },{ name: "Cuban Hip Motion", desc: "Using proper weight transfers through the knees to create natural hip swing." }],difficult: [{ name: "The Advanced Dip", desc: "Lowering your partner into a deep, controlled dramatic low floor dip." },{ name: "High-Speed Pivot Lines", desc: "Rapid, continuous tandem spinning tracking in a straight line down the room." },{ name: "Syncopated Rhythm Breaks", desc: "Intentionally breaking standard step patterns to hit off-beat accents." },{ name: "Over-Balance Lean", desc: "Leaning out past your own feet using your partner's weight to hold balance." }]}},---

### Chunk 3: Styles 9 to 12 (Including New Line Dancing Category)
*Paste this chunk right underneath Chunk 2:*

```javascript
  {
    name: "Street Jazz",
    moves: {
      beginner: [
        { name: "Sharp Arm Clean", desc: "Bringing the arms tightly down to the sides with a crisp snapping action." },
        { name: "Hip Pop Step", desc: "Stepping wide and popping the hip out hard on the heavy music hits." },
        { name: "Head Roll Isolation", desc: "Isolating and rolling the head in a circle without moving your chest." },
        { name: "Chest Pump", desc: "Driving the chest forward and pulling it back sharply on the beat." },
        { name: "Shoulder Drop Walk", desc: "Walking forward while alternatively dropping the left and right shoulders." },
        { name: "Toe Touch Snap", desc: "Tapping the toe out to the side while executing a sharp finger snap." },
        { name: "Floor Slide Drop", desc: "Sliding your foot wide and dropping your weight down onto one knee." },
        { name: "Posing Freeze", desc: "Stopping all body movement instantly to hold a clean commercial style pose." },
        { name: "Cross Step Kick", desc: "Crossing one foot over the other followed by a quick low front kick." },
        { name: "Low Bounce", desc: "Keeping the knees bent to maintain a continuous heavy hip-hop style bounce." },
        { name: "Double Step Slide", desc: "Taking two steps to the right followed by a long smooth left leg drag." },
        { name: "Arm Whack", desc: "Driving the forearm in a fast circular path over and around the head." },
        { name: "Knee Pop", desc: "Lifting the heel up quickly to pop the knee forward on an off-beat." },
        { name: "Diagonal Punch", desc: "Extending a tight closed fist diagonally across the center line." }
      ],
      intermediate: [
        { name: "The Whacking Arm Pattern", desc: "Fast, rhythmic overhead arm paths executed behind the neck." },
        { name: "The Chest-to-Hip Wave", desc: "A sharp pop-music isolation combining chest pumps and hip rolls." },
        { name: "Floor Glide Turns", desc: "Spinning 360 degrees while sliding smooth sneaker soles on the floor." },
        { name: "Knee-Drop Transitions", desc: "Dropping directly onto the shins and popping back up using core power." },
        { name: "Syncopated Arm Drops", desc: "Moving the arms through complex, high-speed patterns on half-beats." },
        { name: "Head Whips", desc: "Snapping the head around fast during turns to create high visual energy." },
        { name: "Bounce-Step-Turns", desc: "Turning in a circle while maintaining a continuous heavy rhythmic bounce." },
        { name: "High Hair Whip", desc: "Tossing the head back sharply to create a dramatic commercial look." }
      ],
      difficult: [
        { name: "The Floor Knee Spin", desc: "Spinning a full 360 degrees directly on your bare knees on the floor." },
        { name: "Staccato Syncopations", desc: "Matching rapid pop music beat drops with perfect micro-body hits." },
        { name: "Double Pirouette to Lock", desc: "Spinning twice on balance and stopping instantly in a hard locked freeze." },
        { name: "Flying Switch Jumps", desc: "Leaping high and switching your leg position rapidly before landing soft." }
      ]
    }
  },
  {
    name: "Line Dancing",
    moves: {
      beginner: [
        { name: "Grapevine", desc: "Side step, cross behind, side step, touch other foot in a smooth sequence." },
        { name: "V-Step", desc: "Step out-out diagonally forward, then step back-back to a central point." },
        { name: "Charleston Step", desc: "Step forward, kick front, step back, touch your toe behind." },
        { name: "Jazz Box", desc: "Cross front, step back, step side, step front tracking a perfect box." },
        { name: "Coaster Step", desc: "A quick structural grouping of steps: back, together, forward." },
        { name: "Sailor Step", desc: "Cross behind, step out to the side, step back to center with a swing." },
        { name: "Pivot Turn", desc: "Step forward on one foot and pivot 180 degrees to face the opposite wall." },
        { name: "Heel Dig", desc: "Extending the heel forward cleanly to strike the metal or wood flooring." },
        { name: "Toe Strut", desc: "Step forward onto the ball of the foot, then drop the heel down firmly." },
        { name: "Hip Bumps", desc: "Pushing the hips forcefully to the left or right side on rhythm hits." },
        { name: "Scuff Step", desc: "Brushing the heel along the floor while moving the leg forward to step." },
        { name: "Slide Step", desc: "Taking a wide side step and dragging the opposite foot slowly to close." },
        { name: "Stomp Up", desc: "Stomping the foot hard against the floor without changing your body weight." },
        { name: "Rock Step", desc: "Shifting full weight onto one foot, then rocking straight back to the other." }
      ],
      intermediate: [
        { name: "The Weave", desc: "A continuous grapevine pattern crossing alternatively in front and behind." },
        { name: "Applejacks", desc: "Twisting the toes and heels of opposite feet outward simultaneously on balance." },
        { name: "Lock Step Traveling", desc: "Stepping forward, locking the back foot tightly behind the heel, stepping front." },
        { name: "Monterey Turn", desc: "Point toe side, spin 360 degrees on the opposite ball, close foot back home." },
        { name: "Kick-Ball-Cross", desc: "Low sharp kick, step on the ball, cross the opposite foot tightly over." },
        { name: "Dorothy Step", desc: "A dynamic traveling step: step lock, step lock angled diagonally forward." },
        { name: "Syncopated Vine", desc: "A standard grapevine executed at double speed on half-beats." },
        { name: "Heel Jacks", desc: "Step back, touch heel front, close to center, alternate sides quickly." }
      ],
      difficult: [
        { name: "Full Applejack Syncopation", desc: "Executing continuous applejacks down a floor line at rapid-fire speed [1]." },
        { name: "The Double Spinning Weave", desc: "Weaving across the floor while adding full 360 spins into the step switches." },
        { name: "Advanced Rhythm Breaks", desc: "Executing fast heel split turns while dropping weight to a low squat." },
        { name: "High-Speed Tag Restarts", desc: "Switching choreographic patterns instantly mid-sequence to match song tempo changes." }
      ]
    }
  },
  {
    name: "Afrobeat",
    moves: {
      beginner: [
        { name: "Gbese", desc: "Lifting the knee up quickly and kicking the foot forward on the beat." },
        { name: "Kupe", desc: "A sharp, heavy arm drive downward matched with a solid leg step." },
        { name: "Azonto Step", desc: "An energetic two-step pattern accented by expressive, mimicking hand signs." },
        { name: "Shaku Shaku", desc: "Crossing the arms low in front while executing a loose, crossed footwork groove." },
        { name: "Zanku Step", desc: "Lifting the leg high and stamping the foot down hard to catch the beat." },
        { name: "Network Step", desc: "Shifting body weight fast from side to side with a low, bouncy hip rhythm." },
        { name: "Pilolo", desc: "A smooth, casual walking step where the leg reaches out with a relaxed vibe." },
        { name: "Gwara Gwara Basic", desc: "Inward knee isolation rolls matched with a smooth upper body lean." },
        { name: "Happy Feet", desc: "Quickly twisting your heels and toes inward and outward in place." },
        { name: "Shoulder Roll Bounce", desc: "Rolling the shoulders backward in time with a continuous low knee bounce." },
        { name: "Leg Swing Drop", desc: "Swinging the leg wide to the side and dropping into a low, centered stance." },
        { name: "Side Wave", desc: "Sending a smooth, rolling wave motion sideways through the ribcage." },
        { name: "Waist Wine Basic", desc: "Rolling the hips fluidly in a tight circle independent of the torso." },
        { name: "Low Arm Push", desc: "Pushing both hands flat toward the floor while bouncing deep in the knees." }
      ],
      intermediate: [
        { name: "The Gwara Gwara Twist", desc: "Deep, intense knee isolation rolls paired with dramatic shoulder drops." },
        { name: "The Poco Dance", desc: "High-speed, syncopated leg hops that switch weight on half-beats." },
        { name: "Advanced Shaku Variations", desc: "Adding quick double-arm crosses into the standard shaku step." },
        { name: "The Kpakujemu", desc: "A fast, high-energy leg drive combined with pumping arm movements." },
        { name: "Leg Cross Hops", desc: "Hopping continuously while crossing one foot rapidly over the other shin." },
        { name: "Fast Syncopated Gbese", desc: "Executing back-to-back knee lifts at double the standard tempo." },
        { name: "Body-Drop Bounce", desc: "Dropping the torso forward suddenly and recovering into a heavy bounce." },
        { name: "Afro-House Glides", desc: "Smooth, low-to-the-ground sliding steps inspired by house dance paths." }
      ],
      difficult: [
        { name: "The Zanku Split Drop", desc: "Driving the knee up high and jumping straight down into a low floor freeze." },
        { name: "Floor Leg Sweeps", desc: "Sweeping your legs rapidly under your torso while balancing on your hands." },
        { name: "Poly-Rhythmic Body Waves", desc: "Moving your chest and hips at two entirely different speeds simultaneously." },
        { name: "Advanced Jump-Freezes", desc: "Leaping high into the air and stopping dead in your tracks upon landing." }
      ]
    }
  },
  {
    name: "Brazilian Samba",
    moves: {
      beginner: [
        { name: "Samba no Pé", desc: "The foundational basic step: step back, ball change, step forward, matching the 1-and-2 rhythm." },
        { name: "Hip Swivel", desc: "Rotating the hips smoothly while keeping the feet planted on the floor." },
{ name: "Side Step-Touch", desc: "Stepping wide to the side and touching the opposite toe with a bounce." },{ name: "Forward March", desc: "Marching forward with high energy, keeping your posture tall and chest proud." },{ name: "Hand Wave", desc: "Moving your hands in smooth, open waves out to the sides of your body." },{ name: "Basic Turn", desc: "A simple 360-degree turn spread across four rhythmic steps." },{ name: "Foot Tap Front", desc: "Tapping your toe directly forward while bouncing on your supporting leg." },{ name: "Foot Tap Back", desc: "Tapping your toe straight behind you to emphasize a heavy drum beat." },{ name: "Shoulder Shake", desc: "Vibrating your shoulders fast while maintaining a completely still core." },{ name: "Arm Extended Slide", desc: "Extending one arm straight out while sliding your body sideways." },{ name: "Samba Ball-Change", desc: "A quick weight transfer onto the ball of your foot, executed on a half-beat." },{ name: "Heel Dig Bounce", desc: "Placing your heel forward firmly and bouncing your weight over it." },{ name: "Torso Bounce", desc: "Flexing your upper body slightly forward and back in sync with the rhythm." },{ name: "Diagonal Slide", desc: "Gliding your body at a 45-degree angle while maintaining a low center of gravity." }],intermediate: [{ name: "The Pagode Step", desc: "A bouncy, syncopated footwork style common in social samba circles." },{ name: "Samba Cross Step", desc: "Crossing your feet fast behind you while continuously swiveling your hips." },{ name: "Traveling Samba", desc: "Moving fast across the room while maintaining your rapid basic footwork." },{ name: "Advanced Hip Isolations", desc: "Moving your hips in complex figure-eight paths while your feet run." },{ name: "Samba Roll Turn", desc: "Spinning fast down the floor while rolling your arms over one another." },{ name: "Underarm Carnival Spins", desc: "Spinning fast in place with one arm extended high above your head." },{ name: "Continuous Double Taps", desc: "Tapping your toe twice on every single beat before switching sides." },{ name: "Quick Shimmy Drops", desc: "Shaking your shoulders fast while dropping into a low sugar stance." }],difficult: [{ name: "High-Speed Samba Run", desc: "Ultra-fast footwork tracking flawlessly with heavy, rapid carnival drums." },{ name: "The Drop-and-Recover", desc: "Spinning down all the way to your knees and standing straight back up instantly." },{ name: "Multi-Directional Shimmies", desc: "Shaking your upper body fast while traveling backward, forward, and sideways." },{ name: "Full-Body Vibration", desc: "Making your entire body vibrate on a heavy accent beat while frozen in place." }]}},---

### Chunk 4: Styles 13 to 16 & Rendering Scripts
*Paste this final chunk right underneath Chunk 3 to close out the file codes:*

```javascript
  {
    name: "Irish Step",
    moves: {
      beginner: [
        { name: "The Side Step", desc: "Traveling sideways quickly by crossing your feet on your toes." },
        { name: "The Hop Back", desc: "Hopping on one foot and bringing the other foot tight behind your ankle." },
        { name: "Point Step", desc: "Pointing your toe straight forward firmly and stepping onto it." },
        { name: "Cut Step", desc: "Flicking one foot up sharply behind your opposite knee joint." },
        { name: "Heel Click", desc: "Jumping up and clicking your heels together lightly before landing." },
        { name: "Bow Step", desc: "Bending forward slightly from the waist to acknowledge the musician." },
        { name: "Single Reel Step", desc: "A classic entry step pattern used in traditional solo reel dances." },
        { name: "Light Jig Basic", desc: "The standard foundational step used when learning jig timing." },
        { name: "Forward Extension", desc: "Extending your leg straight out in front of you with a locked knee." },
        { name: "Toe Tap Front", desc: "Tapping the front tip of your shoe cleanly against the floor." },
        { name: "Heel Tap Front", desc: "Striking your heel plate against the ground while keeping your leg straight." },
        { name: "Triple Step Walk", desc: "Walking forward using a quick, three-sound syncopated rhythm." },
        { name: "Skipping Step", desc: "Skipping forward high, keeping your toes pointed straight down." },
        { name: "Circle Around", desc: "Traveling in a wide circle using fast, precise toe steps." }
      ],
      intermediate: [
        { name: "The Treble", desc: "A rapid double-strike of your shoe toe plate against the floor." },
        { name: "The Click-Hop", desc: "Clicking your heels together mid-air during a high skipping step." },
        { name: "Treble Reel Step", desc: "A standard hard shoe routine step that combines trebles and hops." },
        { name: "Cross-Over Jumps", desc: "Jumping high and crossing your legs fully while airborne." },
        { name: "Light Jig Variations", desc: "Adding syncopated foot taps into the basic light jig framework." },
        { name: "The Slip Jig Slide", desc: "Graceful, gliding foot movements performed to a 9/8 musical time signature." },
        { name: "Heel-Toe Drops", desc: "Alternating dropping your heels and toes to create complex sound patterns." },
        { name: "Traveling Back-Steps", desc: "Moving backward fast using cross-stepping footwork on your toes." }
      ],
      difficult: [
        { name: "The Treble Over", desc: "Jumping high, executing double trebles, and clicking your heels mid-air." },
        { name: "Hard Shoe Treble Reels", desc: "Blazing fast percussive routines matching heavy acoustic rhythms." },
        { name: "The Bird Leap", desc: "Leaping forward high into the air with both legs tucked tightly beneath you." },
        { name: "Floating Heel Clicks", desc: "Executing multiple heel clicks in a row during a single high jump." }
      ]
    }
  },
  {
    name: "Bollywood",
    moves: {
      beginner: [
        { name: "The Thumka", desc: "A classic hip shake movement executed by shifting weight from side to side." },
        { name: "Wrist Roll", desc: "Rolling your wrists outward quickly to showcase expressive hand positions." },
        { name: "Step-Touch Diagonal", desc: "Stepping diagonally forward and touching your opposite toe with a bounce." },
        { name: "Shoulder Shrug", desc: "Lifting your shoulders up and down fast to convey a playful character." },
        { name: "Hand Lotus Frame", desc: "Framing your face gracefully using open, classic lotus hand shapes." },
        { name: "Toe-Heel Bounce", desc: "Bouncing your weight smoothly from the ball of your foot to your heel." },
        { name: "Side Slide Arm Roll", desc: "Sliding sideways while continuously rolling your arms around each other." },
        { name: "The Bhangra Hop", desc: "Hopping high on one leg while raising your opposite arm overhead." },
        { name: "Garba Circle Step", desc: "Traveling in a circle using a rhythmic three-step pattern with claps." },
        { name: "Foot Tap with Clap", desc: "Tapping your foot out to the side while clapping your hands on the beat." },
        { name: "Forward Lean Shimmy", desc: "Leaning forward toward the audience while shaking your shoulders fast." },
        { name: "Scarf Wave", desc: "Waving an imaginary or real colorful scarf across your body lines." },
        { name: "Chest Pump Step", desc: "Stepping forward while pushing your chest out and pulling it back." },
        { name: "Pivot Point", desc: "Turning in place smoothly by pivoting on the ball of one foot." }
      ],
      intermediate: [
        { name: "Bhangra Single-Leg Leap", desc: "High-energy hopping on one foot while executing overhead arm pumps." },
        { name: "Semi-Classical Spin", desc: "Spinning smoothly on your heel while holding precise hand mudras." },
        { name: "Fast Double-Thumka", desc: "Executing two rapid hip shakes on a single beat while traveling sideways." },
        { name: "Garba Spin & Drop", desc: "Spinning fast in a circle and dropping into a low knee stance at the end." },
        { name: "Syncopated Footwork", desc: "Adding quick half-beat steps into your traveling dance combinations." },
        { name: "Neck Movements", desc: "Isolating and moving your head side to side smoothly along a flat line." },
        { name: "Diagonal Leaping Twists", desc: "Leaping diagonally while twisting your torso in the opposite direction." },
        { name: "Continuous Arm Rolls", desc: "Rolling your arms over one another fast while moving across the room." }
      ],
      difficult: [
        { name: "Kathak Ch चक्कर Spins", desc: "Executing 10+ rapid heel spins flawlessly in a perfectly straight line." },
        { name: "Classical Floor Drops", desc: "Spinning fast and dropping instantly onto one knee into a frozen pose." },
        { name: "Poly-Rhythmic Foot Slams", desc: "Stamping your feet hard to create complex rhythms against the music track." },
        { name: "Flying Classical Jumps", desc: "Leaping high into the air while holding a highly structured classical shape." }
      ]
    }
  },
  {
    name: "Flamenco",
    moves: {
      beginner: [
        { name: "Planta", desc: "Striking the floor cleanly using only the ball of your foot." },
        { name: "Tacón", desc: "Dropping your heel down hard to make a sharp, heavy bass sound." },
        { name: "Golpe", desc: "Striking your entire flat foot against the floor to create a loud pop sound." },
        { name: "Punta", desc: "Striking the tip of your shoe toe directly into the floor behind you." },
        { name: "Floreo", desc: "Rolling your fingers inward and outward smoothly starting from the wrist." },
        { name: "Marcaje", desc: "Marking the baseline rhythm of the music using soft, stable steps." },
        { name: "Braceo", desc: "Moving your arms through highly structured, traditional pathways." },
        { name: "Step Side-to-Side", desc: "Stepping side to side while maintaining a strong, completely still torso." },
        { name: "Basic Turn", desc: "A tight 360-degree turn executed cleanly across three steps." },
        { name: "Foot Drag", desc: "Dragging your toe lightly behind you to link two movements together." },
        { name: "Shoulder Pull", desc: "Pulling your shoulder back firmly to project a proud, dramatic posture." },
        { name: "Torso Arch", desc: "Arching your spine slightly backward while keeping your core locked." },
        { name: "Chest Lift", desc: "Lifting your ribcage up high to project emotional intensity to the room." },
        { name: "Palmas Sordas", desc: "Clapping your cupped hands together softly to create a muffled background rhythm." }
      ],
      intermediate: [
        { name: "The Zapateado Basic", desc: "A rhythmic footwork pattern combining ball, heel, and flat strikes." },
        { name: "The Llamada", desc: "A loud, powerful call sequence used to signal a change in the song." },
        { name: "Fast Continuous Braceo", desc: "Moving your arms through structured paths at a rapid pace." },
        { name: "Turns with Floreo", desc: "Spinning fast under your own arm while continuously rolling your fingers." },
        { name: "Advanced Palmas Rhythms", desc: "Clapping complex, fast counter-rhythms against the main guitar tracks." },
        { name: "Traveling Marking Steps", desc: "Moving across the room while maintaining your sharp marking steps." },
        { name: "Double Tacón Roll", desc: "Executing two rapid heel strikes in a row on a single beat." },
        { name: "Hip Accents", desc: "Tucking your hips sharply to capture a sudden drop in the music rhythm." }
      ],
      difficult: [
        { name: "Zapateado Counter-Rhythms", desc: "Blazing fast foot stamping that cuts directly against intricate guitar tempos." },
        { name: "The Desplante Drop", desc: "A powerful finishing sequence combining intense footwork and a deep back arch freeze." },
        { name: "Multi-Spin Turns", desc: "Spinning multiple times consecutively across the floor tracking a straight line." },
        { name: "Triple-Strike Footwork", desc: "Executing complex three-sound foot variations in a split second." }
      ]
    }
  },
  {
    name: "Capoeira",
    moves: {
      beginner: [
        { name: "Ginga", desc: "The foundational, swaying basic step of capoeira used to keep the body moving." },
        { name: "Cadeira", desc: "Dropping into a low, wide defense squat stance with your hands guarding your face." },
        { name: "Meia Lua de Frente", desc: "A front crescent kick sweeping from the outside inward across the line." },{ name: "Cocorinha", desc: "A deep, compact escape squat putting one hand flat on the floor for balance." },{ name: "Benção", desc: "A direct, front push kick using the heel of your foot to push away." },{ name: "Armada", desc: "A spinning crescent kick executed by rotating 360 degrees on your toes." },{ name: "Esquiva de Lado", desc: "Leaning your torso low to the side to escape an incoming kick." },{ name: "Negativa", desc: "A low ground escape stance with one leg extended straight out along the floor." },{ name: "Role", desc: "A rolling ground transition used to move out of a negative stance safely." },{ name: "Au", desc: "The foundational capoeira cartwheel, kept low to maintain eye contact with your partner." },{ name: "Queixada", desc: "An outside crescent kick driven by stepping behind your front leg first." },{ name: "Passo à Frente", desc: "Stepping directly forward from your defense stance to close distance." },{ name: "Balanço", desc: "A deceptive side-to-side body fake used to throw off your partner's timing." },{ name: "Guarda Baixa", desc: "A low guard position keeping your hands up and weight centered over bent knees." }],intermediate: [{ name: "The Au Cortado", desc: "An interrupted cartwheel trick where you cut the movement short to land fast." },{ name: "The Macaco", desc: "A low, one-handed backward flip executed straight out of a squat position." },{ name: "Meia Lua de Compasso", desc: "A spinning heel kick executed with both hands planted flat on the floor." },{ name: "Esquiva Invertida", desc: "An advanced, inverted ground escape position twisting away from kicks." },{ name: "Au Batido", desc: "A cartwheel that halts mid-movement to freeze on one hand with a kick pose." },{ name: "Tesoura de Chão", desc: "A low ground scissor sweep designed to take down an opponent's legs." },{ name: "Martelo", desc: "A sharp, powerful side roundhouse kick driven from a standing position." },{ name: "Queda de Rins", desc: "Balancing your entire body weight directly on your elbow and kidney line." }],difficult: [{ name: "Au Sem Mão", desc: "A completely hands-free aerial cartwheel flip executed out of a step." },{ name: "The S-Dobrado", desc: "Dropping into a deep leg sweep and whipping straight up into a kick transition." },{ name: "Parafuso", desc: "A flying, spinning acrobatic 360-degree crescent kick executed in mid-air." },{ name: "Mortal", desc: "Executing full backflips or frontflips cleanly out of the rhythmic ginga step." }]}}];// 3. RENDER THE DANCE STYLES LIST (In your App Interface)function renderDanceStyles() {const container = document.getElementById("dance-moves-container");if (!container) return;container.innerHTML = ""; // Clear loaderDANCE_STYLES_DATABASE.forEach(style => {const styleButton = document.createElement("button");styleButton.className = "style-category-btn";styleButton.innerText = style.name;styleButton.onclick = () => showDifficultyMenu(style);container.appendChild(styleButton);});}// 4. SHOW THE LEVEL SUB-MENU OR DISPLAY PAYWALLfunction showDifficultyMenu(style) {const container = document.getElementById("dance-moves-container");container.innerHTML = <h3>${style.name} Techniques</h3><button onclick="renderDanceStyles()">← Back to Styles</button>;["beginner", "intermediate", "difficult"].forEach(level => {const levelSection = document.createElement("div");levelSection.className = level-section ${level};levelSection.innerHTML = <h4 class="capitalize">${level} Level</h4>;style.moves[level].forEach(move => {const card = document.createElement("div");card.className = "move-card";if (window.isPaywalled && (level === "intermediate" || level === "difficult")) {card.className = "move-card paywalled";card.innerHTML = <strong>${move.name}</strong> <div class="blur-overlay"> <button onclick="redirectToStripe()">🔒 Unlock 416 Master Moves</button> </div>;} else {card.innerHTML = <strong>${move.name}</strong> <p>${move.desc}</p> <div class="card-actions"> <button onclick="watchTutorial('${style.name}', '${move.name}')">▶ Watch Tutorial</button> <button onclick="toggleSaveMove('${style.name}', '${move.name}')">❤️ Save</button> </div>;}levelSection.appendChild(card);});container.appendChild(levelSection);});}// 5. YOUTUBE AUTOMATION LINK REDIRECTfunction watchTutorial(styleName, moveName) {const searchQuery = encodeURIComponent(${styleName} ${moveName} dance technique tutorial);window.open(https://youtube.com{searchQuery}, '_blank');}// 6. STRIPE PAYWALL REDIRECTfunction redirectToStripe() {window.location.href = "stripe.com";}// Call render on window loadwindow.onload = () => {renderDanceStyles();};
