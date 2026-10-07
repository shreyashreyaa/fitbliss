/**
 * FitBliss - Weekly Workout Plans Data (data/workoutsData.js)
 * 
 * Goal-based 7-day workout grids:
 * Goals: weight_loss, muscle_gain, general_fitness
 * Levels: beginner, intermediate, advanced
 */

export const WORKOUT_PLANS = {
  weight_loss: {
    beginner: {
      title: 'Weight Loss Foundations (Beginner)',
      description: 'Gentle fat-burning circuits combining bodyweight resistance with low-impact cardio intervals to elevate heart rate safely.',
      schedule: [
        {
          day: 'Day 1',
          name: 'Monday',
          focus: 'Full Body Circuit A',
          duration: '35 mins',
          exercises: [
            { name: 'Air Squat', setsReps: '3 sets x 12 reps', rest: '45s', duration: '8 mins' },
            { name: 'Incline Push-Up (Bench/Wall)', setsReps: '3 sets x 10 reps', rest: '45s', duration: '7 mins' },
            { name: 'Superman Floor Extension', setsReps: '3 sets x 12 reps', rest: '30s', duration: '6 mins' },
            { name: 'Forearm Plank', setsReps: '3 sets x 25-30s hold', rest: '45s', duration: '6 mins' },
            { name: 'Brisk Walking Cool-down', setsReps: '1 continuous block', rest: '—', duration: '8 mins' }
          ]
        },
        {
          day: 'Day 2',
          name: 'Tuesday',
          focus: 'Steady-State Cardio & Mobility',
          duration: '30 mins',
          exercises: [
            { name: 'Brisk Walk or Cycle', setsReps: '1 steady block', rest: '—', duration: '20 mins' },
            { name: 'Cat-Cow & Child’s Pose Flow', setsReps: '2 sets x 10 breaths', rest: '30s', duration: '5 mins' },
            { name: 'Standing Hamstring Stretch', setsReps: '2 sets x 30s per leg', rest: '15s', duration: '5 mins' }
          ]
        },
        {
          day: 'Day 3',
          name: 'Wednesday',
          focus: 'Full Body Circuit B',
          duration: '35 mins',
          exercises: [
            { name: 'Dumbbell Goblet Squat (Light)', setsReps: '3 sets x 10 reps', rest: '45s', duration: '8 mins' },
            { name: 'Dumbbell Row', setsReps: '3 sets x 10 reps per side', rest: '45s', duration: '8 mins' },
            { name: 'Glute Bridge on Floor', setsReps: '3 sets x 15 reps', rest: '30s', duration: '6 mins' },
            { name: 'Bicycle Crunch', setsReps: '3 sets x 12 per side', rest: '45s', duration: '6 mins' },
            { name: 'Light Stretching', setsReps: 'Full body routine', rest: '—', duration: '7 mins' }
          ]
        },
        {
          day: 'Day 4',
          name: 'Thursday',
          focus: 'Active Recovery & Walking',
          duration: '25 mins',
          exercises: [
            { name: 'Outdoor Walking or Light Jog', setsReps: 'Steady pace 4,000 steps', rest: '—', duration: '20 mins' },
            { name: 'Shoulder & Hip Openers', setsReps: 'Gentle mobility', rest: '—', duration: '5 mins' }
          ]
        },
        {
          day: 'Day 5',
          name: 'Friday',
          focus: 'Cardio Intervals & Core',
          duration: '35 mins',
          exercises: [
            { name: 'Step-ups or High Knees', setsReps: '4 sets x 40s work / 20s rest', rest: '20s', duration: '8 mins' },
            { name: 'Standard Push-Up (Kneeling/Full)', setsReps: '3 sets x 8-10 reps', rest: '45s', duration: '7 mins' },
            { name: 'Forearm Plank to Downdog', setsReps: '3 sets x 10 reps', rest: '30s', duration: '6 mins' },
            { name: 'Standing Calf Raise', setsReps: '3 sets x 15 reps', rest: '30s', duration: '6 mins' },
            { name: 'Gentle Yoga Cool-down', setsReps: 'Deep breathing', rest: '—', duration: '8 mins' }
          ]
        },
        {
          day: 'Day 6',
          name: 'Saturday',
          focus: 'Weekend Recreation Walk',
          duration: '40 mins',
          exercises: [
            { name: 'Hiking, Swimming, or Cycling', setsReps: 'Moderate enjoyable pace', rest: '—', duration: '35 mins' },
            { name: 'Full Body Static Stretch', setsReps: 'Hold each 30s', rest: '—', duration: '5 mins' }
          ]
        },
        {
          day: 'Day 7',
          name: 'Sunday',
          focus: 'Rest & Meal Prep Day',
          duration: '15 mins',
          exercises: [
            { name: 'Rest & Rejuvenation', setsReps: 'Hydration & sleep priority', rest: '—', duration: 'All Day' },
            { name: 'Foam Rolling / Gentle Mobility', setsReps: 'Relaxation routine', rest: '—', duration: '15 mins' }
          ]
        }
      ]
    },
    intermediate: {
      title: 'Fat Shred & Conditioning (Intermediate)',
      description: 'Higher density supersets, kettlebell/dumbbell compound work, and short rest intervals for maximum metabolic output.',
      schedule: [
        {
          day: 'Day 1',
          name: 'Monday',
          focus: 'Upper Body Metabolic Supersets',
          duration: '45 mins',
          exercises: [
            { name: 'Dumbbell Bench Press', setsReps: '4 sets x 12 reps', rest: '45s', duration: '10 mins' },
            { name: 'Seated Cable Row', setsReps: '4 sets x 12 reps', rest: '45s', duration: '10 mins' },
            { name: 'Lateral Raise superset with Face Pull', setsReps: '3 sets x 15 reps each', rest: '45s', duration: '12 mins' },
            { name: 'Forearm Plank', setsReps: '3 sets x 45s hold', rest: '30s', duration: '6 mins' },
            { name: 'Rowing Machine or Treadmill Sprints', setsReps: '5 intervals of 30s on / 30s off', rest: '30s', duration: '7 mins' }
          ]
        },
        {
          day: 'Day 2',
          name: 'Tuesday',
          focus: 'Lower Body Torch',
          duration: '45 mins',
          exercises: [
            { name: 'Dumbbell Goblet Squat', setsReps: '4 sets x 12 reps', rest: '60s', duration: '12 mins' },
            { name: 'Walking Dumbbell Lunges', setsReps: '3 sets x 20 total strides', rest: '45s', duration: '10 mins' },
            { name: 'Lying Leg Curl', setsReps: '3 sets x 12 reps', rest: '45s', duration: '8 mins' },
            { name: 'Dumbbell Standing Calf Raise', setsReps: '4 sets x 15 reps', rest: '30s', duration: '7 mins' },
            { name: 'Bicycle Crunch', setsReps: '3 sets x 20 reps', rest: '30s', duration: '8 mins' }
          ]
        },
        {
          day: 'Day 3',
          name: 'Wednesday',
          focus: 'Zone 2 Cardio & Core Stability',
          duration: '40 mins',
          exercises: [
            { name: 'Incline Treadmill Walk or Stationary Bike', setsReps: 'Heart rate 130-145 bpm', rest: '—', duration: '30 mins' },
            { name: 'Cable Standing Woodchopper', setsReps: '3 sets x 12 reps per side', rest: '30s', duration: '6 mins' },
            { name: 'Superman Floor Extension', setsReps: '3 sets x 15 reps', rest: '30s', duration: '4 mins' }
          ]
        },
        {
          day: 'Day 4',
          name: 'Thursday',
          focus: 'Push-Pull High Density',
          duration: '45 mins',
          exercises: [
            { name: 'Incline Dumbbell Press', setsReps: '4 sets x 10 reps', rest: '45s', duration: '10 mins' },
            { name: 'Lat Pulldown', setsReps: '4 sets x 12 reps', rest: '45s', duration: '10 mins' },
            { name: 'Standing Alternating Bicep Curl', setsReps: '3 sets x 12 reps', rest: '30s', duration: '8 mins' },
            { name: 'Cable Tricep Pushdown', setsReps: '3 sets x 12 reps', rest: '30s', duration: '8 mins' },
            { name: 'Jump Rope or Mountain Climbers', setsReps: '4 rounds x 45s', rest: '30s', duration: '9 mins' }
          ]
        },
        {
          day: 'Day 5',
          name: 'Friday',
          focus: 'Lower Body & HIIT Finisher',
          duration: '45 mins',
          exercises: [
            { name: '45-Degree Leg Press', setsReps: '4 sets x 12 reps', rest: '60s', duration: '12 mins' },
            { name: 'Bodyweight Air Squats (Paced)', setsReps: '3 sets x 20 reps', rest: '45s', duration: '8 mins' },
            { name: 'Hanging Leg Raise (Bent Knee)', setsReps: '3 sets x 12 reps', rest: '45s', duration: '8 mins' },
            { name: 'Kettlebell / Dumbbell Swings', setsReps: '4 sets x 20 reps', rest: '45s', duration: '9 mins' },
            { name: 'Cool-down Mobility', setsReps: 'Foam rolling & stretches', rest: '—', duration: '8 mins' }
          ]
        },
        {
          day: 'Day 6',
          name: 'Saturday',
          focus: 'Active Outdoor Conditioning',
          duration: '45 mins',
          exercises: [
            { name: 'Outdoor Jog / Brisk Trail Walk', setsReps: '5 km steady pace', rest: '—', duration: '35 mins' },
            { name: 'Full Body Mobility Flow', setsReps: 'Dynamic flow', rest: '—', duration: '10 mins' }
          ]
        },
        {
          day: 'Day 7',
          name: 'Sunday',
          focus: 'Complete Rest & Recovery',
          duration: '20 mins',
          exercises: [
            { name: 'Hydration & Nutrition Review', setsReps: 'Mindful relaxation', rest: '—', duration: 'All Day' },
            { name: 'Deep Diaphragmatic Breathing', setsReps: '3 sets x 5 mins', rest: '—', duration: '20 mins' }
          ]
        }
      ]
    },
    advanced: {
      title: 'High-Intensity Athletic Cut (Advanced)',
      description: 'Complex barbell/dumbbell splits combined with explosive conditioning and high caloric-burn intervals.',
      schedule: [
        {
          day: 'Day 1',
          name: 'Monday',
          focus: 'Heavy Upper Body & Metabolic Finisher',
          duration: '55 mins',
          exercises: [
            { name: 'Dumbbell Bench Press (Heavy)', setsReps: '5 sets x 8 reps', rest: '75s', duration: '14 mins' },
            { name: 'Pull-Up', setsReps: '4 sets x 8-10 reps', rest: '60s', duration: '12 mins' },
            { name: 'Seated Dumbbell Shoulder Press', setsReps: '4 sets x 10 reps', rest: '60s', duration: '10 mins' },
            { name: 'Ab Wheel Rollout', setsReps: '4 sets x 12 reps', rest: '45s', duration: '9 mins' },
            { name: 'Assault Bike / Rowing Intervals', setsReps: '8 rounds x 20s sprint / 40s easy', rest: '40s', duration: '10 mins' }
          ]
        },
        {
          day: 'Day 2',
          name: 'Tuesday',
          focus: 'Explosive Lower Body & Glutes',
          duration: '55 mins',
          exercises: [
            { name: '45-Degree Leg Press (Heavy)', setsReps: '5 sets x 8-10 reps', rest: '90s', duration: '15 mins' },
            { name: 'Walking Dumbbell Lunges', setsReps: '4 sets x 24 strides', rest: '60s', duration: '12 mins' },
            { name: 'Lying Leg Curl', setsReps: '4 sets x 10 reps (slow eccentric)', rest: '45s', duration: '10 mins' },
            { name: 'Hanging Leg Raise (Straight Leg)', setsReps: '4 sets x 12 reps', rest: '45s', duration: '8 mins' },
            { name: 'Box Jumps or Jump Squats', setsReps: '4 sets x 12 explosive reps', rest: '45s', duration: '10 mins' }
          ]
        },
        {
          day: 'Day 3',
          name: 'Wednesday',
          focus: 'HIIT Conditioning & Core',
          duration: '45 mins',
          exercises: [
            { name: 'Pike Push-Up to Mountain Climbers', setsReps: '5 sets x 40s work / 20s rest', rest: '20s', duration: '10 mins' },
            { name: 'Cable Face Pull to Tricep Pushdown', setsReps: '4 sets x 15 reps superset', rest: '45s', duration: '12 mins' },
            { name: 'Cable Standing Woodchopper', setsReps: '4 sets x 15 reps per side', rest: '30s', duration: '10 mins' },
            { name: 'Incline Sprint Intervals', setsReps: '10 rounds x 30s sprint / 30s walk', rest: '30s', duration: '13 mins' }
          ]
        },
        {
          day: 'Day 4',
          name: 'Thursday',
          focus: 'Hypertrophy Density Push-Pull',
          duration: '50 mins',
          exercises: [
            { name: 'Incline Dumbbell Press', setsReps: '4 sets x 10 reps', rest: '60s', duration: '12 mins' },
            { name: 'Lat Pulldown (Close Grip)', setsReps: '4 sets x 10 reps', rest: '60s', duration: '12 mins' },
            { name: 'Diamond Push-Up', setsReps: '3 sets to failure', rest: '45s', duration: '8 mins' },
            { name: 'Dumbbell Hammer Curl', setsReps: '4 sets x 12 reps', rest: '45s', duration: '9 mins' },
            { name: 'Forearm Plank with Hip Dips', setsReps: '3 sets x 45s', rest: '30s', duration: '9 mins' }
          ]
        },
        {
          day: 'Day 5',
          name: 'Friday',
          focus: 'Posterior Chain & Plyometrics',
          duration: '50 mins',
          exercises: [
            { name: 'Dumbbell Goblet Squats (Tempo 3-1-1)', setsReps: '4 sets x 12 reps', rest: '60s', duration: '12 mins' },
            { name: 'Single Leg Pistol Squat (Assisted/Free)', setsReps: '3 sets x 6 per leg', rest: '60s', duration: '10 mins' },
            { name: 'Dumbbell Standing Calf Raise', setsReps: '4 sets x 20 reps', rest: '30s', duration: '8 mins' },
            { name: 'Bicycle Crunch', setsReps: '4 sets x 25 reps', rest: '30s', duration: '8 mins' },
            { name: 'Treadmill Incline Hike', setsReps: '12% incline, 5.5 km/h', rest: '—', duration: '12 mins' }
          ]
        },
        {
          day: 'Day 6',
          name: 'Saturday',
          focus: 'Full Body Athletic Mobility',
          duration: '40 mins',
          exercises: [
            { name: 'Dynamic Vinyasa Flow', setsReps: 'Full flow sequence', rest: '—', duration: '25 mins' },
            { name: 'Thoracic Spine & Hip Mobility Drills', setsReps: '3 rounds x 5 mins', rest: '—', duration: '15 mins' }
          ]
        },
        {
          day: 'Day 7',
          name: 'Sunday',
          focus: 'Total Rest & Active Recovery',
          duration: '20 mins',
          exercises: [
            { name: 'Light Walk in Nature', setsReps: 'Relaxed pace', rest: '—', duration: '20 mins' },
            { name: 'Cold/Hot Shower & Deep Sleep Focus', setsReps: 'Full restorative mode', rest: '—', duration: 'All Day' }
          ]
        }
      ]
    }
  },

  muscle_gain: {
    beginner: {
      title: 'Hypertrophy Foundations (Beginner)',
      description: 'Focus on mastering compound mechanics, progressive overload principles, and full muscle group recovery.',
      schedule: [
        {
          day: 'Day 1',
          name: 'Monday',
          focus: 'Full Body Push & Squat Focus',
          duration: '45 mins',
          exercises: [
            { name: 'Dumbbell Goblet Squat', setsReps: '3 sets x 8-10 reps', rest: '60s', duration: '10 mins' },
            { name: 'Dumbbell Bench Press', setsReps: '3 sets x 8-10 reps', rest: '60s', duration: '10 mins' },
            { name: 'Seated Dumbbell Shoulder Press', setsReps: '3 sets x 10 reps', rest: '60s', duration: '9 mins' },
            { name: 'Bench Tricep Dip', setsReps: '3 sets x 10-12 reps', rest: '45s', duration: '8 mins' },
            { name: 'Forearm Plank', setsReps: '3 sets x 30s hold', rest: '30s', duration: '8 mins' }
          ]
        },
        {
          day: 'Day 2',
          name: 'Tuesday',
          focus: 'Rest & Nutrient Uptake',
          duration: '15 mins',
          exercises: [
            { name: 'Light Mobility & Stretching', setsReps: 'Full body gentle flow', rest: '—', duration: '15 mins' }
          ]
        },
        {
          day: 'Day 3',
          name: 'Wednesday',
          focus: 'Full Body Pull & Hinge Focus',
          duration: '45 mins',
          exercises: [
            { name: 'Lat Pulldown', setsReps: '3 sets x 10 reps', rest: '60s', duration: '10 mins' },
            { name: 'One-Arm Dumbbell Row', setsReps: '3 sets x 10 reps per side', rest: '60s', duration: '10 mins' },
            { name: 'Lying Leg Curl', setsReps: '3 sets x 10-12 reps', rest: '45s', duration: '8 mins' },
            { name: 'Standing Alternating Bicep Curl', setsReps: '3 sets x 10 reps', rest: '45s', duration: '8 mins' },
            { name: 'Superman Floor Extension', setsReps: '3 sets x 12 reps', rest: '30s', duration: '9 mins' }
          ]
        },
        {
          day: 'Day 4',
          name: 'Thursday',
          focus: 'Rest & Recovery',
          duration: '15 mins',
          exercises: [
            { name: 'Gentle Walk & Foam Rolling', setsReps: 'Promote blood flow', rest: '—', duration: '15 mins' }
          ]
        },
        {
          day: 'Day 5',
          name: 'Friday',
          focus: 'Full Body Compound Density',
          duration: '45 mins',
          exercises: [
            { name: '45-Degree Leg Press', setsReps: '3 sets x 10-12 reps', rest: '75s', duration: '12 mins' },
            { name: 'Pec Deck Machine Fly', setsReps: '3 sets x 12 reps', rest: '45s', duration: '8 mins' },
            { name: 'Seated Cable Row', setsReps: '3 sets x 10 reps', rest: '60s', duration: '9 mins' },
            { name: 'Dumbbell Lateral Raise', setsReps: '3 sets x 12 reps', rest: '45s', duration: '8 mins' },
            { name: 'Dumbbell Standing Calf Raise', setsReps: '3 sets x 15 reps', rest: '30s', duration: '8 mins' }
          ]
        },
        {
          day: 'Day 6',
          name: 'Saturday',
          focus: 'Active Rest / Mobility',
          duration: '20 mins',
          exercises: [
            { name: 'Light Yoga Flow', setsReps: 'Hip & shoulder opening', rest: '—', duration: '20 mins' }
          ]
        },
        {
          day: 'Day 7',
          name: 'Sunday',
          focus: 'Full Rest & Caloric Refuel',
          duration: '10 mins',
          exercises: [
            { name: 'High Protein Nutrition & Sleep', setsReps: 'Optimal recovery', rest: '—', duration: 'All Day' }
          ]
        }
      ]
    },
    intermediate: {
      title: 'Upper/Lower Hypertrophy Split (Intermediate)',
      description: 'The proven 4-day Upper/Lower split designed to maximize myofibrillar hypertrophy and muscle protein synthesis.',
      schedule: [
        {
          day: 'Day 1',
          name: 'Monday',
          focus: 'Upper Body Power & Mass',
          duration: '50 mins',
          exercises: [
            { name: 'Dumbbell Bench Press', setsReps: '4 sets x 8 reps', rest: '75s', duration: '12 mins' },
            { name: 'Seated Cable Row', setsReps: '4 sets x 8 reps', rest: '75s', duration: '11 mins' },
            { name: 'Incline Dumbbell Press', setsReps: '3 sets x 10 reps', rest: '60s', duration: '9 mins' },
            { name: 'Cable Face Pull', setsReps: '3 sets x 15 reps', rest: '45s', duration: '8 mins' },
            { name: 'Cable Tricep Pushdown', setsReps: '3 sets x 12 reps', rest: '45s', duration: '10 mins' }
          ]
        },
        {
          day: 'Day 2',
          name: 'Tuesday',
          focus: 'Lower Body Strength & Quads',
          duration: '50 mins',
          exercises: [
            { name: '45-Degree Leg Press', setsReps: '4 sets x 10 reps', rest: '90s', duration: '14 mins' },
            { name: 'Walking Dumbbell Lunges', setsReps: '3 sets x 12 per leg', rest: '60s', duration: '12 mins' },
            { name: 'Lying Leg Curl', setsReps: '4 sets x 10 reps', rest: '60s', duration: '10 mins' },
            { name: 'Dumbbell Standing Calf Raise', setsReps: '4 sets x 15 reps', rest: '45s', duration: '8 mins' },
            { name: 'Hanging Leg Raise', setsReps: '3 sets x 12 reps', rest: '45s', duration: '6 mins' }
          ]
        },
        {
          day: 'Day 3',
          name: 'Wednesday',
          focus: 'Rest & Recovery Day',
          duration: '20 mins',
          exercises: [
            { name: 'Low Intensity Cardio Walk', setsReps: '30 mins leisurely pace', rest: '—', duration: '20 mins' }
          ]
        },
        {
          day: 'Day 4',
          name: 'Thursday',
          focus: 'Upper Body Hypertrophy Volume',
          duration: '50 mins',
          exercises: [
            { name: 'Pull-Up or Lat Pulldown', setsReps: '4 sets x 10 reps', rest: '60s', duration: '12 mins' },
            { name: 'Pec Deck Machine Fly', setsReps: '3 sets x 12-15 reps', rest: '45s', duration: '9 mins' },
            { name: 'Seated Dumbbell Shoulder Press', setsReps: '4 sets x 10 reps', rest: '60s', duration: '10 mins' },
            { name: 'Dumbbell Hammer Curl', setsReps: '3 sets x 12 reps', rest: '45s', duration: '9 mins' },
            { name: 'Overhead Dumbbell Tricep Extension', setsReps: '3 sets x 12 reps', rest: '45s', duration: '10 mins' }
          ]
        },
        {
          day: 'Day 5',
          name: 'Friday',
          focus: 'Lower Body Hypertrophy & Hamstrings',
          duration: '50 mins',
          exercises: [
            { name: 'Dumbbell Goblet Squat', setsReps: '4 sets x 10 reps', rest: '75s', duration: '12 mins' },
            { name: 'Lying Leg Curl (Slow 3s negative)', setsReps: '4 sets x 12 reps', rest: '60s', duration: '11 mins' },
            { name: 'Bodyweight Air Squat (High rep burnout)', setsReps: '2 sets x 25 reps', rest: '60s', duration: '9 mins' },
            { name: 'Cable Standing Woodchopper', setsReps: '3 sets x 12 reps per side', rest: '45s', duration: '9 mins' },
            { name: 'Forearm Plank', setsReps: '3 sets x 60s hold', rest: '30s', duration: '9 mins' }
          ]
        },
        {
          day: 'Day 6',
          name: 'Saturday',
          focus: 'Active Recreation & Stretching',
          duration: '30 mins',
          exercises: [
            { name: 'Foam Rolling & Mobility', setsReps: 'Full body routine', rest: '—', duration: '30 mins' }
          ]
        },
        {
          day: 'Day 7',
          name: 'Sunday',
          focus: 'Total Rest & Growth',
          duration: '15 mins',
          exercises: [
            { name: 'Nutritional Refuel & Mental Prep', setsReps: 'Optimal sleep schedule', rest: '—', duration: 'All Day' }
          ]
        }
      ]
    },
    advanced: {
      title: 'Push-Pull-Legs Hypertrophy Mastery (Advanced)',
      description: 'High-volume 6-day PPL routine engineered for experienced athletes seeking serious muscular mass and progressive overload.',
      schedule: [
        {
          day: 'Day 1',
          name: 'Monday',
          focus: 'Push (Chest, Shoulders, Triceps)',
          duration: '60 mins',
          exercises: [
            { name: 'Dumbbell Bench Press', setsReps: '5 sets x 6-8 reps', rest: '90s', duration: '14 mins' },
            { name: 'Incline Dumbbell Press', setsReps: '4 sets x 8-10 reps', rest: '75s', duration: '12 mins' },
            { name: 'Seated Dumbbell Shoulder Press', setsReps: '4 sets x 10 reps', rest: '60s', duration: '11 mins' },
            { name: 'Dumbbell Lateral Raise', setsReps: '4 sets x 15 reps', rest: '45s', duration: '9 mins' },
            { name: 'Cable Tricep Pushdown drop-set', setsReps: '4 sets x 12 + drop', rest: '45s', duration: '14 mins' }
          ]
        },
        {
          day: 'Day 2',
          name: 'Tuesday',
          focus: 'Pull (Back, Rear Delts, Biceps)',
          duration: '60 mins',
          exercises: [
            { name: 'Pull-Up (Weighted or Strict)', setsReps: '4 sets x 8 reps', rest: '90s', duration: '14 mins' },
            { name: 'Seated Cable Row', setsReps: '4 sets x 10 reps', rest: '75s', duration: '12 mins' },
            { name: 'One-Arm Dumbbell Row', setsReps: '3 sets x 10 reps per side', rest: '60s', duration: '11 mins' },
            { name: 'Cable Face Pull', setsReps: '4 sets x 15 reps', rest: '45s', duration: '9 mins' },
            { name: 'Standing Alternating Bicep Curl', setsReps: '4 sets x 10 reps', rest: '60s', duration: '14 mins' }
          ]
        },
        {
          day: 'Day 3',
          name: 'Wednesday',
          focus: 'Legs (Quads, Hamstrings, Calves)',
          duration: '60 mins',
          exercises: [
            { name: '45-Degree Leg Press (Heavy)', setsReps: '5 sets x 8-10 reps', rest: '90s', duration: '15 mins' },
            { name: 'Walking Dumbbell Lunges', setsReps: '4 sets x 12 strides/leg', rest: '75s', duration: '13 mins' },
            { name: 'Lying Leg Curl', setsReps: '4 sets x 10-12 reps', rest: '60s', duration: '11 mins' },
            { name: 'Dumbbell Standing Calf Raise', setsReps: '5 sets x 15 reps', rest: '45s', duration: '11 mins' },
            { name: 'Hanging Leg Raise', setsReps: '4 sets x 15 reps', rest: '45s', duration: '10 mins' }
          ]
        },
        {
          day: 'Day 4',
          name: 'Thursday',
          focus: 'Push Hypertrophy Pump',
          duration: '55 mins',
          exercises: [
            { name: 'Pec Deck Machine Fly', setsReps: '4 sets x 12 reps', rest: '45s', duration: '11 mins' },
            { name: 'Diamond Push-Up', setsReps: '4 sets to failure', rest: '60s', duration: '11 mins' },
            { name: 'Pike Push-Up', setsReps: '4 sets x 10 reps', rest: '60s', duration: '11 mins' },
            { name: 'Overhead Dumbbell Tricep Extension', setsReps: '4 sets x 12 reps', rest: '45s', duration: '11 mins' },
            { name: 'Forearm Plank with reach', setsReps: '3 sets x 45s hold', rest: '30s', duration: '11 mins' }
          ]
        },
        {
          day: 'Day 5',
          name: 'Friday',
          focus: 'Pull & Arm Specialization',
          duration: '55 mins',
          exercises: [
            { name: 'Cable Lat Pulldown (Neutral grip)', setsReps: '4 sets x 10 reps', rest: '60s', duration: '12 mins' },
            { name: 'Machine Preacher Curl', setsReps: '4 sets x 10 reps', rest: '60s', duration: '11 mins' },
            { name: 'Dumbbell Hammer Curl', setsReps: '4 sets x 12 reps', rest: '45s', duration: '11 mins' },
            { name: 'Superman Floor Extension', setsReps: '3 sets x 15 reps', rest: '30s', duration: '9 mins' },
            { name: 'Ab Wheel Rollout', setsReps: '4 sets x 12 reps', rest: '45s', duration: '12 mins' }
          ]
        },
        {
          day: 'Day 6',
          name: 'Saturday',
          focus: 'Legs & Core Density',
          duration: '55 mins',
          exercises: [
            { name: 'Dumbbell Goblet Squats', setsReps: '4 sets x 12 reps', rest: '75s', duration: '13 mins' },
            { name: 'Pistol Squat (Single Leg)', setsReps: '3 sets x 5-8 reps per side', rest: '75s', duration: '12 mins' },
            { name: 'Lying Leg Curl', setsReps: '4 sets x 12 reps', rest: '45s', duration: '10 mins' },
            { name: 'Bicycle Crunch', setsReps: '4 sets x 25 reps', rest: '30s', duration: '10 mins' },
            { name: 'Calf Burns on edge', setsReps: '4 sets x 20 reps', rest: '30s', duration: '10 mins' }
          ]
        },
        {
          day: 'Day 7',
          name: 'Sunday',
          focus: 'Total Systemic Rest',
          duration: '15 mins',
          exercises: [
            { name: 'Complete Rest & Muscle Repair', setsReps: 'Sleep 8-9 hours', rest: '—', duration: 'All Day' }
          ]
        }
      ]
    }
  },

  general_fitness: {
    beginner: {
      title: 'Holistic Vitality (Beginner)',
      description: 'A well-rounded balance of mobility, functional strength, posture enhancement, and cardiovascular endurance.',
      schedule: [
        {
          day: 'Day 1',
          name: 'Monday',
          focus: 'Functional Movement Foundations',
          duration: '35 mins',
          exercises: [
            { name: 'Air Squat', setsReps: '3 sets x 12 reps', rest: '45s', duration: '8 mins' },
            { name: 'Standard Push-Up (Kneeling/Full)', setsReps: '3 sets x 8 reps', rest: '45s', duration: '7 mins' },
            { name: 'Superman Floor Extension', setsReps: '3 sets x 10 reps', rest: '30s', duration: '6 mins' },
            { name: 'Forearm Plank', setsReps: '3 sets x 25s hold', rest: '30s', duration: '6 mins' },
            { name: 'Light Mobility Cool-down', setsReps: 'Neck, back & hips', rest: '—', duration: '8 mins' }
          ]
        },
        {
          day: 'Day 2',
          name: 'Tuesday',
          focus: 'Cardio Walk & Breathwork',
          duration: '30 mins',
          exercises: [
            { name: 'Brisk Walk in Fresh Air', setsReps: '30 mins continuous', rest: '—', duration: '25 mins' },
            { name: 'Deep Diaphragmatic Breathing', setsReps: '5 mins centered', rest: '—', duration: '5 mins' }
          ]
        },
        {
          day: 'Day 3',
          name: 'Wednesday',
          focus: 'Balance & Core Strength',
          duration: '35 mins',
          exercises: [
            { name: 'Dumbbell Row', setsReps: '3 sets x 10 reps per side', rest: '45s', duration: '8 mins' },
            { name: 'Dumbbell Goblet Squat (Light)', setsReps: '3 sets x 10 reps', rest: '45s', duration: '8 mins' },
            { name: 'Dumbbell Standing Calf Raise', setsReps: '3 sets x 12 reps', rest: '30s', duration: '6 mins' },
            { name: 'Bicycle Crunch', setsReps: '3 sets x 12 reps', rest: '30s', duration: '6 mins' },
            { name: 'Hamstring & Quad Stretches', setsReps: 'Hold each 30s', rest: '—', duration: '7 mins' }
          ]
        },
        {
          day: 'Day 4',
          name: 'Thursday',
          focus: 'Active Rest / Gentle Walk',
          duration: '25 mins',
          exercises: [
            { name: 'Easy Walking / Stretching', setsReps: 'Low effort movement', rest: '—', duration: '25 mins' }
          ]
        },
        {
          day: 'Day 5',
          name: 'Friday',
          focus: 'Upper Body & Posture Flow',
          duration: '35 mins',
          exercises: [
            { name: 'Cable Face Pull or Band Pull-Apart', setsReps: '3 sets x 12 reps', rest: '30s', duration: '8 mins' },
            { name: 'Standing Alternating Bicep Curl', setsReps: '3 sets x 10 reps', rest: '45s', duration: '7 mins' },
            { name: 'Bench Tricep Dip', setsReps: '3 sets x 10 reps', rest: '45s', duration: '7 mins' },
            { name: 'Forearm Plank', setsReps: '3 sets x 30s hold', rest: '30s', duration: '6 mins' },
            { name: 'Postural Spine Extensions', setsReps: 'Gentle spinal wave', rest: '—', duration: '7 mins' }
          ]
        },
        {
          day: 'Day 6',
          name: 'Saturday',
          focus: 'Recreational Activity',
          duration: '40 mins',
          exercises: [
            { name: 'Swimming, Cycling, or Yoga', setsReps: 'Fun social activity', rest: '—', duration: '35 mins' },
            { name: 'Relaxation stretches', setsReps: 'Full body', rest: '—', duration: '5 mins' }
          ]
        },
        {
          day: 'Day 7',
          name: 'Sunday',
          focus: 'Mindful Rest & Rejuvenation',
          duration: '15 mins',
          exercises: [
            { name: 'Full Rest & Reflection', setsReps: 'Hydration and peace', rest: '—', duration: 'All Day' }
          ]
        }
      ]
    },
    intermediate: {
      title: 'Functional Performance (Intermediate)',
      description: 'Combines dynamic power, core stability, conditioning, and joint resilience for everyday athletic readiness.',
      schedule: [
        {
          day: 'Day 1',
          name: 'Monday',
          focus: 'Total Body Strength & Power',
          duration: '45 mins',
          exercises: [
            { name: 'Dumbbell Goblet Squat', setsReps: '4 sets x 10 reps', rest: '60s', duration: '10 mins' },
            { name: 'Dumbbell Bench Press', setsReps: '4 sets x 10 reps', rest: '60s', duration: '10 mins' },
            { name: 'Lat Pulldown', setsReps: '4 sets x 10 reps', rest: '60s', duration: '10 mins' },
            { name: 'Cable Face Pull', setsReps: '3 sets x 15 reps', rest: '45s', duration: '7 mins' },
            { name: 'Forearm Plank', setsReps: '3 sets x 45s hold', rest: '30s', duration: '8 mins' }
          ]
        },
        {
          day: 'Day 2',
          name: 'Tuesday',
          focus: 'Cardio Engine & Core Circuit',
          duration: '40 mins',
          exercises: [
            { name: 'Rowing Machine or Stationary Bike', setsReps: '20 mins moderate pace', rest: '—', duration: '20 mins' },
            { name: 'Cable Standing Woodchopper', setsReps: '3 sets x 12 reps per side', rest: '30s', duration: '8 mins' },
            { name: 'Bicycle Crunch', setsReps: '3 sets x 20 reps', rest: '30s', duration: '6 mins' },
            { name: 'Dynamic Hamstring and Hip Flexor Stretch', setsReps: '2 sets each', rest: '—', duration: '6 mins' }
          ]
        },
        {
          day: 'Day 3',
          name: 'Wednesday',
          focus: 'Unilateral Strength & Balance',
          duration: '45 mins',
          exercises: [
            { name: 'Walking Dumbbell Lunges', setsReps: '3 sets x 10 strides/leg', rest: '60s', duration: '11 mins' },
            { name: 'One-Arm Dumbbell Row', setsReps: '3 sets x 10 reps/side', rest: '45s', duration: '10 mins' },
            { name: 'Seated Dumbbell Shoulder Press', setsReps: '3 sets x 10 reps', rest: '60s', duration: '9 mins' },
            { name: 'Dumbbell Standing Calf Raise', setsReps: '4 sets x 15 reps', rest: '30s', duration: '7 mins' },
            { name: 'Superman Floor Extension', setsReps: '3 sets x 15 reps', rest: '30s', duration: '8 mins' }
          ]
        },
        {
          day: 'Day 4',
          name: 'Thursday',
          focus: 'Mobility & Active Recovery',
          duration: '30 mins',
          exercises: [
            { name: 'Vinyasa Yoga or Deep Stretch Routine', setsReps: 'Full flow', rest: '—', duration: '25 mins' },
            { name: 'Controlled Breathing Drill', setsReps: 'Box breathing 4-4-4-4', rest: '—', duration: '5 mins' }
          ]
        },
        {
          day: 'Day 5',
          name: 'Friday',
          focus: 'Athletic Conditioning & Agility',
          duration: '45 mins',
          exercises: [
            { name: 'Pike Push-Up', setsReps: '3 sets x 10 reps', rest: '45s', duration: '9 mins' },
            { name: 'Lying Leg Curl', setsReps: '3 sets x 12 reps', rest: '45s', duration: '9 mins' },
            { name: 'Dumbbell Hammer Curl superset with Tricep Pushdown', setsReps: '3 sets x 12 reps', rest: '45s', duration: '11 mins' },
            { name: 'Hanging Leg Raise', setsReps: '3 sets x 12 reps', rest: '45s', duration: '8 mins' },
            { name: 'High-Knee Agility Intervals', setsReps: '5 rounds x 30s', rest: '30s', duration: '8 mins' }
          ]
        },
        {
          day: 'Day 6',
          name: 'Saturday',
          focus: 'Outdoor Adventure / Sport',
          duration: '50 mins',
          exercises: [
            { name: 'Tennis, Badminton, Hiking or Swimming', setsReps: 'Active fun play', rest: '—', duration: '45 mins' },
            { name: 'Full Body Cool-down', setsReps: '5 mins stretches', rest: '—', duration: '5 mins' }
          ]
        },
        {
          day: 'Day 7',
          name: 'Sunday',
          focus: 'Rest & Mental Wellness',
          duration: '15 mins',
          exercises: [
            { name: 'Rest, Hydration & Weekly Reflection', setsReps: 'Gentle wellness', rest: '—', duration: 'All Day' }
          ]
        }
      ]
    },
    advanced: {
      title: 'Peak Functional Athlete (Advanced)',
      description: 'Hybrid endurance, compound calisthenics, power outputs, and rotational core stability for elite multi-domain fitness.',
      schedule: [
        {
          day: 'Day 1',
          name: 'Monday',
          focus: 'Upper Body Calisthenics & Strength',
          duration: '55 mins',
          exercises: [
            { name: 'Pull-Up', setsReps: '5 sets x 8-10 reps', rest: '75s', duration: '14 mins' },
            { name: 'Incline Dumbbell Press', setsReps: '4 sets x 10 reps', rest: '60s', duration: '12 mins' },
            { name: 'Pike Push-Up to Handstand Hold', setsReps: '4 sets x 8 reps', rest: '60s', duration: '11 mins' },
            { name: 'Cable Face Pull', setsReps: '4 sets x 15 reps', rest: '45s', duration: '9 mins' },
            { name: 'Ab Wheel Rollout', setsReps: '4 sets x 12 reps', rest: '45s', duration: '9 mins' }
          ]
        },
        {
          day: 'Day 2',
          name: 'Tuesday',
          focus: 'Lower Body Athleticism & Pistols',
          duration: '55 mins',
          exercises: [
            { name: 'Pistol Squat (Single Leg)', setsReps: '4 sets x 6 reps per leg', rest: '75s', duration: '14 mins' },
            { name: '45-Degree Leg Press', setsReps: '4 sets x 10 reps', rest: '75s', duration: '13 mins' },
            { name: 'Walking Dumbbell Lunges', setsReps: '4 sets x 16 strides', rest: '60s', duration: '11 mins' },
            { name: 'Dumbbell Standing Calf Raise', setsReps: '4 sets x 20 reps', rest: '45s', duration: '8 mins' },
            { name: 'Kettlebell / Dumbbell Swings', setsReps: '5 sets x 20 reps', rest: '45s', duration: '9 mins' }
          ]
        },
        {
          day: 'Day 3',
          name: 'Wednesday',
          focus: 'Aerobic Capacity & Core',
          duration: '50 mins',
          exercises: [
            { name: '5K Tempo Run or Row 5000m', setsReps: 'Steady sustained threshold', rest: '—', duration: '28 mins' },
            { name: 'Cable Standing Woodchopper', setsReps: '4 sets x 12 reps/side', rest: '30s', duration: '10 mins' },
            { name: 'Hanging Leg Raise', setsReps: '4 sets x 15 reps', rest: '45s', duration: '12 mins' }
          ]
        },
        {
          day: 'Day 4',
          name: 'Thursday',
          focus: 'Rotational Power & Shoulder Armor',
          duration: '50 mins',
          exercises: [
            { name: 'Seated Dumbbell Shoulder Press', setsReps: '4 sets x 8 reps', rest: '75s', duration: '12 mins' },
            { name: 'Seated Cable Row', setsReps: '4 sets x 10 reps', rest: '60s', duration: '11 mins' },
            { name: 'Diamond Push-Up', setsReps: '3 sets to failure', rest: '45s', duration: '9 mins' },
            { name: 'Dumbbell Lateral Raise', setsReps: '4 sets x 15 reps', rest: '45s', duration: '9 mins' },
            { name: 'Bicycle Crunch', setsReps: '4 sets x 30 reps', rest: '30s', duration: '9 mins' }
          ]
        },
        {
          day: 'Day 5',
          name: 'Friday',
          focus: 'Metabolic Conditioning Circuit',
          duration: '50 mins',
          exercises: [
            { name: 'Bodyweight Air Squat to Tuck Jump', setsReps: '5 rounds x 40s work', rest: '20s', duration: '10 mins' },
            { name: 'Standard Push-Up to Burpee', setsReps: '5 rounds x 12 reps', rest: '30s', duration: '10 mins' },
            { name: 'Lying Leg Curl', setsReps: '4 sets x 12 reps', rest: '45s', duration: '10 mins' },
            { name: 'Machine Preacher Curl superset with Tricep Pushdown', setsReps: '3 sets x 12 reps', rest: '45s', duration: '11 mins' },
            { name: 'Forearm Plank with leg lifts', setsReps: '3 sets x 60s hold', rest: '30s', duration: '9 mins' }
          ]
        },
        {
          day: 'Day 6',
          name: 'Saturday',
          focus: 'Active Mobility & Extended Play',
          duration: '45 mins',
          exercises: [
            { name: 'Trail Hike, Kayaking or Long Cycle', setsReps: 'Zone 2 endurance', rest: '—', duration: '35 mins' },
            { name: 'Thoracic Mobility & Deep Psoas Release', setsReps: 'Deep hold stretches', rest: '—', duration: '10 mins' }
          ]
        },
        {
          day: 'Day 7',
          name: 'Sunday',
          focus: 'Full Rest & Recovery Protocols',
          duration: '15 mins',
          exercises: [
            { name: 'Contrast Showers, Sauna / Rest', setsReps: 'Restore nervous system', rest: '—', duration: 'All Day' }
          ]
        }
      ]
    }
  }
};
