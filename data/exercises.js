/**
 * FitBliss - Exercise Library Data (data/exercises.js)
 * 
 * 32 curated, versatile exercises covering all major muscle groups,
 * equipment tiers, and difficulty ratings.
 */

export const EXERCISE_LIBRARY = [
  // CHEST
  {
    id: 'push-up',
    name: 'Standard Push-Up',
    targetMuscle: 'chest',
    equipment: 'bodyweight',
    difficulty: 'beginner',
    category: 'Upper Body',
    instructions: 'Place hands slightly wider than shoulder-width, lower chest until elbows reach 90 degrees, keeping body in a rigid plank, then press firmly up.',
    tips: 'Brace your glutes and core to prevent your lower back from sagging.'
  },
  {
    id: 'dumbbell-bench-press',
    name: 'Dumbbell Bench Press',
    targetMuscle: 'chest',
    equipment: 'dumbbells',
    difficulty: 'intermediate',
    category: 'Upper Body',
    instructions: 'Lie on flat bench with dumbbells at chest level. Press upward in a controlled arc until arms extend, then slowly descend.',
    tips: 'Retract your shoulder blades and plant your feet firmly on the floor.'
  },
  {
    id: 'incline-dumbbell-press',
    name: 'Incline Dumbbell Press',
    targetMuscle: 'chest',
    equipment: 'dumbbells',
    difficulty: 'intermediate',
    category: 'Upper Body',
    instructions: 'Set bench to a 30-45 degree incline. Press dumbbells upward directly over upper chest, focusing on upper pectoral contraction.',
    tips: 'Do not bounce dumbbells at the bottom; control the eccentric phase.'
  },
  {
    id: 'chest-fly-machine',
    name: 'Pec Deck Machine Fly',
    targetMuscle: 'chest',
    equipment: 'machines',
    difficulty: 'beginner',
    category: 'Upper Body',
    instructions: 'Adjust seat so handles align with mid-chest. Bring arms together in a hugging motion, squeeze pectorals, and return smoothly.',
    tips: 'Maintain a slight bend in your elbows throughout the movement.'
  },
  {
    id: 'diamond-push-up',
    name: 'Diamond Push-Up',
    targetMuscle: 'chest',
    equipment: 'bodyweight',
    difficulty: 'advanced',
    category: 'Upper Body',
    instructions: 'Form a triangle with your thumbs and index fingers under your chest. Lower chest toward hands and press back up.',
    tips: 'Concentrates stress on the inner chest and triceps.'
  },

  // BACK
  {
    id: 'pull-up',
    name: 'Pull-Up',
    targetMuscle: 'back',
    equipment: 'bodyweight',
    difficulty: 'advanced',
    category: 'Upper Body',
    instructions: 'Grip overhead bar with palms facing away. Pull your body up until your chin clears the bar, driving elbows down toward your hips.',
    tips: 'Avoid swinging your legs; use steady lat contraction.'
  },
  {
    id: 'lat-pulldown',
    name: 'Cable Lat Pulldown',
    targetMuscle: 'back',
    equipment: 'machines',
    difficulty: 'beginner',
    category: 'Upper Body',
    instructions: 'Grip wide pulldown bar, sit upright with thighs locked. Pull the bar down smoothly to upper chest while depressing shoulder blades.',
    tips: 'Do not lean back excessively; let your lats do the work.'
  },
  {
    id: 'dumbbell-row',
    name: 'One-Arm Dumbbell Row',
    targetMuscle: 'back',
    equipment: 'dumbbells',
    difficulty: 'beginner',
    category: 'Upper Body',
    instructions: 'Rest knee and hand on bench with flat back. Pull dumbbell up towards hip crease, squeezing your upper back at peak height.',
    tips: 'Keep your neck neutral and do not twist your torso.'
  },
  {
    id: 'seated-cable-row',
    name: 'Seated Cable Row',
    targetMuscle: 'back',
    equipment: 'machines',
    difficulty: 'intermediate',
    category: 'Upper Body',
    instructions: 'Sit with knees slightly bent. Pull close-grip attachment to your lower abdomen while keeping your spine straight and chest tall.',
    tips: 'Squeeze your scapulae together for a full 1-second pause.'
  },
  {
    id: 'superman-extension',
    name: 'Superman Floor Extension',
    targetMuscle: 'back',
    equipment: 'bodyweight',
    difficulty: 'beginner',
    category: 'Core & Back',
    instructions: 'Lie facedown on a mat. Simultaneously raise arms and legs a few inches off the floor, pause for 2 seconds, and slowly lower.',
    tips: 'Strengthens the erector spinae and improves posture.'
  },

  // LEGS
  {
    id: 'bodyweight-squat',
    name: 'Air Squat',
    targetMuscle: 'legs',
    equipment: 'bodyweight',
    difficulty: 'beginner',
    category: 'Lower Body',
    instructions: 'Stand with feet shoulder-width apart. Push hips back and bend knees until thighs are parallel to ground, then drive through heels to stand.',
    tips: 'Keep chest lifted and ensure knees track over your toes.'
  },
  {
    id: 'goblet-squat',
    name: 'Dumbbell Goblet Squat',
    targetMuscle: 'legs',
    equipment: 'dumbbells',
    difficulty: 'intermediate',
    category: 'Lower Body',
    instructions: 'Hold a single dumbbell vertically against your chest. Descend into a deep squat, keeping elbows inside knees, then drive back up.',
    tips: 'Excellent for quad recruitment and maintaining an upright torso.'
  },
  {
    id: 'leg-press',
    name: '45-Degree Leg Press',
    targetMuscle: 'legs',
    equipment: 'machines',
    difficulty: 'beginner',
    category: 'Lower Body',
    instructions: 'Sit back against pad with feet shoulder-width on platform. Release safety handles, lower weight until knees form 90 degrees, press back up.',
    tips: 'Never lock your knees out completely at top of the movement.'
  },
  {
    id: 'dumbbell-lunges',
    name: 'Walking Dumbbell Lunges',
    targetMuscle: 'legs',
    equipment: 'dumbbells',
    difficulty: 'intermediate',
    category: 'Lower Body',
    instructions: 'Hold dumbbells at sides. Step forward into a lunge until back knee gently hovers above ground, push through front heel to step forward.',
    tips: 'Maintain balance by keeping steps hip-width apart.'
  },
  {
    id: 'hamstring-curl-machine',
    name: 'Lying Leg Curl',
    targetMuscle: 'legs',
    equipment: 'machines',
    difficulty: 'intermediate',
    category: 'Lower Body',
    instructions: 'Lie prone with padded lever behind ankles. Curl lever upward towards glutes, hold peak contraction, and lower under control.',
    tips: 'Keep hips pinned flat against the bench to isolate hamstrings.'
  },
  {
    id: 'pistol-squat',
    name: 'Pistol Squat (Single Leg)',
    targetMuscle: 'legs',
    equipment: 'bodyweight',
    difficulty: 'advanced',
    category: 'Lower Body',
    instructions: 'Stand on one leg with opposite leg extended in front. Lower hips into a full single-leg squat, then power back to standing.',
    tips: 'Demands superior ankle mobility, quad strength, and balance.'
  },
  {
    id: 'calf-raises-standing',
    name: 'Dumbbell Standing Calf Raise',
    targetMuscle: 'legs',
    equipment: 'dumbbells',
    difficulty: 'beginner',
    category: 'Lower Body',
    instructions: 'Hold dumbbells at sides, stand on ball of feet. Elevate heels as high as possible, hold peak contraction, then lower slowly.',
    tips: 'Perform with full range of motion for maximum calf stimulation.'
  },

  // SHOULDERS
  {
    id: 'dumbbell-overhead-press',
    name: 'Seated Dumbbell Shoulder Press',
    targetMuscle: 'shoulders',
    equipment: 'dumbbells',
    difficulty: 'intermediate',
    category: 'Upper Body',
    instructions: 'Sit upright with dumbbells at ear height. Press weights overhead until arms are nearly straight, then lower smoothly.',
    tips: 'Do not arch your lower back away from the backrest.'
  },
  {
    id: 'lateral-raise',
    name: 'Dumbbell Lateral Raise',
    targetMuscle: 'shoulders',
    equipment: 'dumbbells',
    difficulty: 'beginner',
    category: 'Upper Body',
    instructions: 'Stand holding dumbbells with palms inward. Raise arms laterally until parallel with ground, leading slightly with elbows.',
    tips: 'Use moderate weight to avoid shrugging with your traps.'
  },
  {
    id: 'pike-push-up',
    name: 'Pike Push-Up',
    targetMuscle: 'shoulders',
    equipment: 'bodyweight',
    difficulty: 'intermediate',
    category: 'Upper Body',
    instructions: 'Set body in an inverted V-shape. Bend elbows to lower forehead toward the floor between your hands, then press back up.',
    tips: 'Shifts bodyweight resistance directly onto anterior deltoids.'
  },
  {
    id: 'cable-face-pull',
    name: 'Cable Face Pull',
    targetMuscle: 'shoulders',
    equipment: 'machines',
    difficulty: 'beginner',
    category: 'Upper Body',
    instructions: 'Set cable rope at eye level. Pull rope attachment toward bridge of nose while externally rotating shoulders and spreading rope ends.',
    tips: 'Key exercise for rear delts, rotator cuffs, and postural health.'
  },

  // ARMS
  {
    id: 'dumbbell-bicep-curl',
    name: 'Standing Alternating Bicep Curl',
    targetMuscle: 'arms',
    equipment: 'dumbbells',
    difficulty: 'beginner',
    category: 'Upper Body',
    instructions: 'Hold dumbbells at sides. Curl one weight up toward shoulder while supinating wrist, squeeze bicep, and lower under control.',
    tips: 'Keep your elbows pinned to your ribs throughout the repetition.'
  },
  {
    id: 'hammer-curl',
    name: 'Dumbbell Hammer Curl',
    targetMuscle: 'arms',
    equipment: 'dumbbells',
    difficulty: 'beginner',
    category: 'Upper Body',
    instructions: 'Hold dumbbells with neutral grip (palms facing each other). Curl weights while keeping palms facing, targeting brachialis.',
    tips: 'Builds arm thickness and forearm grip strength.'
  },
  {
    id: 'cable-tricep-pushdown',
    name: 'Cable Tricep Pushdown',
    targetMuscle: 'arms',
    equipment: 'machines',
    difficulty: 'beginner',
    category: 'Upper Body',
    instructions: 'Attach straight bar or rope to high pulley. Keep elbows tucked at sides and push weight down until triceps fully lock out.',
    tips: 'Avoid rocking back and forth; isolate triceps contraction.'
  },
  {
    id: 'bench-dip',
    name: 'Bench Tricep Dip',
    targetMuscle: 'arms',
    equipment: 'bodyweight',
    difficulty: 'beginner',
    category: 'Upper Body',
    instructions: 'Place hands on edge of bench behind you with legs extended. Lower hips by bending elbows to 90 degrees, then press back up.',
    tips: 'Keep back close to the bench to minimize shoulder strain.'
  },
  {
    id: 'preacher-curl-machine',
    name: 'Machine Preacher Curl',
    targetMuscle: 'arms',
    equipment: 'machines',
    difficulty: 'intermediate',
    category: 'Upper Body',
    instructions: 'Rest armpits on angled pad and grip handles. Curl upward isolating the short head of the biceps, pause, and lower slowly.',
    tips: 'Prevents momentum, forcing pure bicep engagement.'
  },
  {
    id: 'overhead-dumbbell-tricep-extension',
    name: 'Overhead Dumbbell Tricep Extension',
    targetMuscle: 'arms',
    equipment: 'dumbbells',
    difficulty: 'intermediate',
    category: 'Upper Body',
    instructions: 'Hold a single dumbbell overhead with both hands cup-gripping the top plate. Lower behind head and press upward.',
    tips: 'Targets the long head of the triceps with full stretch.'
  },

  // CORE
  {
    id: 'forearm-plank',
    name: 'Standard Forearm Plank',
    targetMuscle: 'core',
    equipment: 'bodyweight',
    difficulty: 'beginner',
    category: 'Core',
    instructions: 'Support body on forearms and toes in a straight line. Tighten abdominal wall, squeeze glutes, and hold steady.',
    tips: 'Do not allow hips to pike upward or dip down.'
  },
  {
    id: 'hanging-leg-raise',
    name: 'Hanging Leg Raise',
    targetMuscle: 'core',
    equipment: 'bodyweight',
    difficulty: 'advanced',
    category: 'Core',
    instructions: 'Hang from pull-up bar with overhand grip. Keeping legs straight or slightly bent, flex hips to raise feet to bar level, then lower.',
    tips: 'Avoid swinging momentum; control both concentric and eccentric.'
  },
  {
    id: 'cable-woodchopper',
    name: 'Cable Standing Woodchopper',
    targetMuscle: 'core',
    equipment: 'machines',
    difficulty: 'intermediate',
    category: 'Core',
    instructions: 'Hold high cable handle with both hands. Rotate torso diagonally downward across your body, pivoting on rear foot.',
    tips: 'Engages internal and external obliques dynamically.'
  },
  {
    id: 'bicycle-crunches',
    name: 'Bicycle Crunch',
    targetMuscle: 'core',
    equipment: 'bodyweight',
    difficulty: 'beginner',
    category: 'Core',
    instructions: 'Lie on back with hands behind head. Alternate bringing opposite elbow to opposite knee while extending other leg straight.',
    tips: 'Focus on rotation from the core rather than pulling on neck.'
  },
  {
    id: 'ab-wheel-rollout',
    name: 'Ab Wheel Rollout',
    targetMuscle: 'core',
    equipment: 'bodyweight',
    difficulty: 'advanced',
    category: 'Core',
    instructions: 'Kneel on floor holding roller. Roll forward stretching body as far as comfortable without collapsing lower back, then contract back.',
    tips: 'Keep pelvis in posterior tilt to safeguard lumbar spine.'
  }
];
