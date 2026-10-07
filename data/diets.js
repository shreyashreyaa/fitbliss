/**
 * FitBliss - Diet & Nutrition Plans Data (data/diets.js)
 * 
 * Calibrated Indian meal plans for 1500, 1800, 2100, and 2400 kcal tiers.
 * Each tier includes Vegetarian, Non-Vegetarian, and Vegan options.
 * Each day covers 4 meals: Breakfast, Lunch, Snacks, and Dinner
 * with calories, protein, carbs, and fat per meal.
 */

export const DIET_PLANS = {
  1500: {
    calories: 1500,
    label: '1,500 kcal Lean Deficit',
    description: 'Designed for weight loss and steady fat trimming with high satiety, fiber-rich lentils, fresh curd, and lean proteins.',
    vegetarian: {
      title: '1,500 kcal Indian Vegetarian Plan',
      totals: { calories: 1505, protein: 78, carbs: 188, fat: 45 },
      meals: [
        {
          name: 'Breakfast',
          timing: '8:00 AM - 9:00 AM',
          calories: 360,
          protein: 16,
          carbs: 52,
          fat: 9,
          items: [
            '1.5 bowls Vegetable Poha loaded with green peas, carrots & peanuts',
            '1 cup Low-fat Curd (Dahi) or Fresh Chaas (Buttermilk) with roasted cumin',
            '1 small boiled apple or guava'
          ]
        },
        {
          name: 'Lunch',
          timing: '1:00 PM - 2:00 PM',
          calories: 475,
          protein: 26,
          carbs: 64,
          fat: 13,
          items: [
            '2 Whole Wheat Phulkas (no ghee)',
            '1 medium bowl Yellow Moong Dal Tadka with garlic and coriander',
            '100g Fresh Low-Fat Paneer Bhurji with bell peppers',
            'Large Green Salad (cucumber, tomato, onion, lemon juice & chaat masala)'
          ]
        },
        {
          name: 'Evening Snack',
          timing: '5:00 PM - 5:30 PM',
          calories: 220,
          protein: 12,
          carbs: 26,
          fat: 6,
          items: [
            '1 bowl Sprouted Moong & Black Chana Chaat with chopped tomatoes, onion & lemon',
            '1 cup Green Tea or Spiced Masala Chai (no sugar / stevia)'
          ]
        },
        {
          name: 'Dinner',
          timing: '8:00 PM - 8:30 PM',
          calories: 450,
          protein: 24,
          carbs: 46,
          fat: 17,
          items: [
            '1 Whole Wheat Roti',
            '1 medium bowl Palak Paneer (light oil) or Soya Chunks Curry (50g dry soya)',
            '1 small bowl Masoor Dal soup',
            'Cucumber and mint raita'
          ]
        }
      ]
    },
    non_vegetarian: {
      title: '1,500 kcal Indian Non-Vegetarian Plan',
      totals: { calories: 1495, protein: 98, carbs: 155, fat: 42 },
      meals: [
        {
          name: 'Breakfast',
          timing: '8:00 AM - 9:00 AM',
          calories: 350,
          protein: 24,
          carbs: 34,
          fat: 11,
          items: [
            '3 Whole Egg whites + 1 Whole Egg Masala Omelette with spinach & onions',
            '2 slices 100% Whole Wheat Toast',
            '1 cup Green Tea or Black Coffee'
          ]
        },
        {
          name: 'Lunch',
          timing: '1:00 PM - 2:00 PM',
          calories: 490,
          protein: 38,
          carbs: 55,
          fat: 13,
          items: [
            '1.5 bowls Steamed Brown Rice or 2 Phulkas',
            '150g Grilled / Light Curry Chicken Breast cooked in mild onion-tomato gravy',
            '1 small bowl Dal Palak',
            'Generous bowl of raw cucumber and carrot salad'
          ]
        },
        {
          name: 'Evening Snack',
          timing: '5:00 PM - 5:30 PM',
          calories: 200,
          protein: 14,
          carbs: 20,
          fat: 5,
          items: [
            '2 Boiled Egg Whites sprinkled with black pepper and rock salt',
            '1 small bowl Roasted Makhana (Fox nuts) with pinch of turmeric & salt',
            'Lemon water or green tea'
          ]
        },
        {
          name: 'Dinner',
          timing: '8:00 PM - 8:30 PM',
          calories: 455,
          protein: 22,
          carbs: 46,
          fat: 13,
          items: [
            '1 Multigrain Roti',
            '100g Fish Curry (Rohu or Salmon in light mustard/curry leaf base)',
            '1 bowl Stir-fried Bhindi (Okra) or Lauki (Bottle gourd)',
            '1 cup Low-fat Curd'
          ]
        }
      ]
    },
    vegan: {
      title: '1,500 kcal Indian 100% Plant-Based Plan',
      totals: { calories: 1510, protein: 74, carbs: 205, fat: 38 },
      meals: [
        {
          name: 'Breakfast',
          timing: '8:00 AM - 9:00 AM',
          calories: 370,
          protein: 15,
          carbs: 60,
          fat: 7,
          items: [
            '3 Steamed Brown Rice or Ragi Idlis',
            '1 large bowl Vegetable Sambar (drumstick, pumpkin, tomato)',
            '2 tbsp Mint-coriander chutney (no coconut/light coconut)'
          ]
        },
        {
          name: 'Lunch',
          timing: '1:00 PM - 2:00 PM',
          calories: 480,
          protein: 28,
          carbs: 68,
          fat: 12,
          items: [
            '2 Whole Wheat Phulkas',
            '1 bowl Kala Chana (Black Chickpea) Masala curry',
            '60g Soya Chunks cooked with dry capsicum and tomatoes',
            'Kachumber salad with flax seed sprinkle'
          ]
        },
        {
          name: 'Evening Snack',
          timing: '5:00 PM - 5:30 PM',
          calories: 210,
          protein: 11,
          carbs: 25,
          fat: 6,
          items: [
            '1 bowl Boiled Moong Sprouts Chaat with pomegranate seeds',
            'Ginger lemon herbal tea'
          ]
        },
        {
          name: 'Dinner',
          timing: '8:00 PM - 8:30 PM',
          calories: 450,
          protein: 20,
          carbs: 52,
          fat: 13,
          items: [
            '1 bowl Khichdi (Brown rice + Toor Dal + carrots + spinach)',
            '100g Tofu pan-seared with Indian garam masala and jeera',
            'Roasted Papad & pickle in moderation'
          ]
        }
      ]
    }
  },

  1800: {
    calories: 1800,
    label: '1,800 kcal Balanced Fuel',
    description: 'Perfect for moderate fat reduction or metabolic maintenance, supplying steady complex carbohydrates and protein synthesis triggers.',
    vegetarian: {
      title: '1,800 kcal Indian Vegetarian Plan',
      totals: { calories: 1810, protein: 94, carbs: 220, fat: 55 },
      meals: [
        {
          name: 'Breakfast',
          timing: '8:00 AM - 9:00 AM',
          calories: 420,
          protein: 20,
          carbs: 58,
          fat: 12,
          items: [
            '2 Besan (Gram flour) Chillas filled with grated paneer (50g) and onions',
            'Green coriander-mint chutney',
            '1 cup Masala Chai (skim milk, dash of jaggery)'
          ]
        },
        {
          name: 'Lunch',
          timing: '1:00 PM - 2:00 PM',
          calories: 580,
          protein: 34,
          carbs: 76,
          fat: 18,
          items: [
            '2 Whole Wheat Rotis with 1 tsp ghee',
            '1 cup Steamed Brown Basmati Rice',
            '1 medium bowl Toor Dal with tomato tadka',
            '120g Paneer Matar / Paneer Bhurji',
            '1 bowl Beetroot & cucumber salad'
          ]
        },
        {
          name: 'Evening Snack',
          timing: '5:00 PM - 5:30 PM',
          calories: 280,
          protein: 15,
          carbs: 34,
          fat: 8,
          items: [
            '1 large cup Roasted Chana (Bengal Gram) with chopped onions & lime',
            '1 glass Fresh Buttermilk (Chaas) with roasted jeera',
            '10 roasted almonds'
          ]
        },
        {
          name: 'Dinner',
          timing: '8:00 PM - 8:30 PM',
          calories: 530,
          protein: 25,
          carbs: 52,
          fat: 17,
          items: [
            '2 Multigrain Rotis',
            '1 large bowl Mixed Dal (Panchratna dal with moong, masoor, chana)',
            '1 bowl Stir-fried French Beans & Carrot Sabzi',
            '1 small bowl Curd with chia seeds'
          ]
        }
      ]
    },
    non_vegetarian: {
      title: '1,800 kcal Indian Non-Vegetarian Plan',
      totals: { calories: 1805, protein: 118, carbs: 185, fat: 52 },
      meals: [
        {
          name: 'Breakfast',
          timing: '8:00 AM - 9:00 AM',
          calories: 425,
          protein: 30,
          carbs: 45,
          fat: 14,
          items: [
            '3 Eggs (2 whole + 1 white) scrambled with onions, green chilies and tomatoes',
            '2 slices Multi-grain Toast lightly toasted',
            '1 small banana or fresh orange'
          ]
        },
        {
          name: 'Lunch',
          timing: '1:00 PM - 2:00 PM',
          calories: 610,
          protein: 48,
          carbs: 68,
          fat: 18,
          items: [
            '1.5 cups Steamed Basmati Rice',
            '180g Homestyle Chicken Curry (skinless chicken, minimal oil gravy)',
            '1 bowl Tadka Moong Dal',
            'Large cucumber, onion, tomato kachumber with lime'
          ]
        },
        {
          name: 'Evening Snack',
          timing: '5:00 PM - 5:30 PM',
          calories: 250,
          protein: 16,
          carbs: 24,
          fat: 8,
          items: [
            '2 Hard-boiled Eggs with chaat masala',
            '1 handful Roasted Makhana & 6 walnuts',
            '1 cup Green Tea'
          ]
        },
        {
          name: 'Dinner',
          timing: '8:00 PM - 8:30 PM',
          calories: 520,
          protein: 24,
          carbs: 48,
          fat: 12,
          items: [
            '2 Whole Wheat Phulkas',
            '120g Pan-grilled Fish or 100g Chicken Sukka',
            '1 bowl Lauki Chana Dal sabzi',
            '1 bowl Fresh Dahi (Curd)'
          ]
        }
      ]
    },
    vegan: {
      title: '1,800 kcal Indian 100% Plant-Based Plan',
      totals: { calories: 1795, protein: 88, carbs: 240, fat: 46 },
      meals: [
        {
          name: 'Breakfast',
          timing: '8:00 AM - 9:00 AM',
          calories: 430,
          protein: 18,
          carbs: 68,
          fat: 10,
          items: [
            '2 Moong Dal Chillas (Pesarattu) with ginger-chili filling',
            '1 small bowl Coconut-tomato chutney',
            '1 medium apple sliced with cinnamon powder'
          ]
        },
        {
          name: 'Lunch',
          timing: '1:00 PM - 2:00 PM',
          calories: 590,
          protein: 34,
          carbs: 85,
          fat: 16,
          items: [
            '1.5 cups Brown Rice with Jeera',
            '1 large bowl Rajma (Kidney Bean) Masala in rich tomato-onion sauce',
            '70g Soya Chunks dry roast with onions and curry leaves',
            'Carrot and radish salad with lemon'
          ]
        },
        {
          name: 'Evening Snack',
          timing: '5:00 PM - 5:30 PM',
          calories: 265,
          protein: 14,
          carbs: 32,
          fat: 9,
          items: [
            '1 bowl Steamed Edamame or Boiled Sprouts with cucumber and chat masala',
            '1 handful Roasted pumpkin seeds and almonds',
            '1 cup Lemongrass herbal infusion'
          ]
        },
        {
          name: 'Dinner',
          timing: '8:00 PM - 8:30 PM',
          calories: 510,
          protein: 22,
          carbs: 55,
          fat: 11,
          items: [
            '2 Jowar (Sorghum) or Wheat Rotis',
            '150g Tofu & Green Peas (Matar Tofu) homestyle curry',
            '1 bowl Masoor Dal',
            'Green leafy salad'
          ]
        }
      ]
    }
  },

  2100: {
    calories: 2100,
    label: '2,100 kcal Optimal Performance',
    description: 'Ideal for active individuals, lean muscle gain, or endurance conditioning with optimal glycogen replenishment.',
    vegetarian: {
      title: '2,100 kcal Indian Vegetarian Plan',
      totals: { calories: 2110, protein: 112, carbs: 260, fat: 64 },
      meals: [
        {
          name: 'Breakfast',
          timing: '8:00 AM - 9:00 AM',
          calories: 520,
          protein: 26,
          carbs: 72,
          fat: 16,
          items: [
            '2 Stuffed Paneer Parathas (75g paneer) cooked with light ghee',
            '1 bowl Thick Curd (Dahi) with roasted cumin powder',
            '1 banana with 1 tbsp peanut butter'
          ]
        },
        {
          name: 'Lunch',
          timing: '1:00 PM - 2:00 PM',
          calories: 680,
          protein: 42,
          carbs: 88,
          fat: 22,
          items: [
            '2 Whole Wheat Rotis',
            '1.5 cups Steamed Brown or Basmati Rice',
            '1 large bowl Chole (Chickpeas) Masala',
            '100g Paneer cubes lightly sautéed with bell peppers',
            'Onion, cucumber, tomato salad with lemon'
          ]
        },
        {
          name: 'Evening Snack',
          timing: '5:00 PM - 5:30 PM',
          calories: 340,
          protein: 18,
          carbs: 42,
          fat: 11,
          items: [
            '1 large bowl Sprouts & Soya Chunks Chaat (40g boiled soya + sprouts)',
            '1 glass Rich Sattu Sherbet (Roasted gram flour drink) with roasted jeera & lemon',
            '8-10 almonds and 2 walnuts'
          ]
        },
        {
          name: 'Dinner',
          timing: '8:00 PM - 8:30 PM',
          calories: 570,
          protein: 26,
          carbs: 58,
          fat: 15,
          items: [
            '2 Multigrain Rotis',
            '1 bowl Yellow Moong Dal Tadka with 1 tsp ghee',
            '1 bowl Soya Chunks & Green Peas Sabzi',
            '1 cup Curd or Chaas'
          ]
        }
      ]
    },
    non_vegetarian: {
      title: '2,100 kcal Indian Non-Vegetarian Plan',
      totals: { calories: 2105, protein: 145, carbs: 215, fat: 61 },
      meals: [
        {
          name: 'Breakfast',
          timing: '8:00 AM - 9:00 AM',
          calories: 510,
          protein: 36,
          carbs: 56,
          fat: 16,
          items: [
            '3 Eggs (2 whole + 1 white) Bhurji with tomatoes, onions and green chili',
            '2 Whole Wheat Rotis or 3 slices Whole Wheat Bread',
            '1 large fresh fruit (papaya bowl or apple)',
            '1 cup Milk Coffee or Tea (low sugar)'
          ]
        },
        {
          name: 'Lunch',
          timing: '1:00 PM - 2:00 PM',
          calories: 720,
          protein: 56,
          carbs: 82,
          fat: 21,
          items: [
            '1.5 cups Steamed Basmati Rice',
            '200g Chicken Breast Curry (aromatic home style tomato-onion curry)',
            '1 bowl Chana Dal with spinach',
            '1 cup Fresh Curd',
            'Mixed fresh kachumber salad'
          ]
        },
        {
          name: 'Evening Snack',
          timing: '5:00 PM - 5:30 PM',
          calories: 310,
          protein: 22,
          carbs: 30,
          fat: 10,
          items: [
            '3 Boiled Egg Whites + 1 whole egg sprinkled with black pepper',
            '1 bowl Roasted Makhana and peanuts',
            '1 cup Green tea or Coconut water'
          ]
        },
        {
          name: 'Dinner',
          timing: '8:00 PM - 8:30 PM',
          calories: 565,
          protein: 31,
          carbs: 47,
          fat: 14,
          items: [
            '2 Whole Wheat Phulkas',
            '150g Grilled Fish (Surmai/Pomfret or Tilapia with lemon & ajwain)',
            '1 bowl Mixed Vegetable Subzi (cauliflower, beans, carrot)',
            '1 bowl Dal Tadka'
          ]
        }
      ]
    },
    vegan: {
      title: '2,100 kcal Indian 100% Plant-Based Plan',
      totals: { calories: 2095, protein: 104, carbs: 285, fat: 53 },
      meals: [
        {
          name: 'Breakfast',
          timing: '8:00 AM - 9:00 AM',
          calories: 510,
          protein: 22,
          carbs: 80,
          fat: 13,
          items: [
            '4 Steamed Idlis with 1 large bowl Vegetable Sambar',
            '1 glass Homemade Soya Milk or Almond Milk smoothie with 1 banana & flax seeds',
            'Tomato-onion chutney'
          ]
        },
        {
          name: 'Lunch',
          timing: '1:00 PM - 2:00 PM',
          calories: 690,
          protein: 42,
          carbs: 95,
          fat: 18,
          items: [
            '2 Whole Wheat Rotis',
            '1.5 cups Brown Rice',
            '1 large bowl Rajma (Kidney beans) or Chana Curry',
            '100g Tofu pan-tossed with cumin and fenugreek leaves (Methi)',
            'Fresh carrot and beetroot salad'
          ]
        },
        {
          name: 'Evening Snack',
          timing: '5:00 PM - 5:30 PM',
          calories: 335,
          protein: 18,
          carbs: 45,
          fat: 9,
          items: [
            '1 large bowl Roasted Chana & Boiled Moong Chaat with raw mango & lemon',
            '1 handful Walnuts & pumpkin seeds',
            'Herbal green tea'
          ]
        },
        {
          name: 'Dinner',
          timing: '8:00 PM - 8:30 PM',
          calories: 560,
          protein: 22,
          carbs: 65,
          fat: 13,
          items: [
            '2 Bajra or Wheat Rotis',
            '60g Soya Chunks cooked in homestyle gravy with peas',
            '1 bowl Toor Dal with drumsticks',
            'Steamed green beans & salad'
          ]
        }
      ]
    }
  },

  2400: {
    calories: 2400,
    label: '2,400 kcal Muscle Building & Bulking',
    description: 'Caloric surplus plan built for serious muscular hypertrophy, intense strength training, and accelerated athletic recovery.',
    vegetarian: {
      title: '2,400 kcal Indian Vegetarian Plan',
      totals: { calories: 2415, protein: 130, carbs: 310, fat: 74 },
      meals: [
        {
          name: 'Breakfast',
          timing: '8:00 AM - 9:00 AM',
          calories: 610,
          protein: 30,
          carbs: 85,
          fat: 18,
          items: [
            '2 Large Stuffed Paneer & Methi Parathas (100g paneer)',
            '1 large bowl Curd (Dahi) with 1 tsp chia seeds',
            '1 Banana Oatmeal bowl with dry fruits (raisins, almonds, dates)'
          ]
        },
        {
          name: 'Lunch',
          timing: '1:00 PM - 2:00 PM',
          calories: 780,
          protein: 48,
          carbs: 104,
          fat: 24,
          items: [
            '3 Whole Wheat Phulkas with ghee',
            '1.5 cups Steamed Rice',
            '1 large bowl Chole (Chickpeas) or Rajma curry',
            '120g Shahi Paneer (healthy homestyle gravy)',
            'Sprouted moong salad and lemon water'
          ]
        },
        {
          name: 'Evening Snack',
          timing: '5:00 PM - 5:30 PM',
          calories: 425,
          protein: 24,
          carbs: 52,
          fat: 15,
          items: [
            '1 bowl Soya Chunks Bhurji (50g dry soya chunks sautéed with onions and tomatoes)',
            '1 glass Sattu drink (3 tbsp roasted gram flour + roasted cumin)',
            'Handful mixed nuts (cashews, almonds, walnuts)'
          ]
        },
        {
          name: 'Dinner',
          timing: '8:00 PM - 8:30 PM',
          calories: 600,
          protein: 28,
          carbs: 69,
          fat: 17,
          items: [
            '2 Whole Wheat Rotis',
            '1 bowl Dal Makhani (homestyle, cooked with milk instead of heavy cream)',
            '1 bowl Palak Paneer or Mixed Vegetable curry',
            '1 bowl Curd and fresh cucumber salad'
          ]
        }
      ]
    },
    non_vegetarian: {
      title: '2,400 kcal Indian Non-Vegetarian Plan',
      totals: { calories: 2405, protein: 168, carbs: 260, fat: 73 },
      meals: [
        {
          name: 'Breakfast',
          timing: '8:00 AM - 9:00 AM',
          calories: 620,
          protein: 44,
          carbs: 70,
          fat: 20,
          items: [
            '4 Eggs (2 whole + 2 whites) Cheese Omelette with spinach & mushrooms',
            '3 slices Whole Wheat Bread lightly toasted with butter',
            '1 large glass Fresh Papaya or Banana milk smoothie'
          ]
        },
        {
          name: 'Lunch',
          timing: '1:00 PM - 2:00 PM',
          calories: 820,
          protein: 65,
          carbs: 98,
          fat: 25,
          items: [
            '2 cups Steamed Basmati Rice',
            '220g Chicken Breast Tikka or Homestyle Murgh Curry',
            '1 bowl Tadka Moong Dal with ghee',
            '1 cup Fresh Dahi (Curd)',
            'Kachumber salad with onion, cucumber and radish'
          ]
        },
        {
          name: 'Evening Snack',
          timing: '5:00 PM - 5:30 PM',
          calories: 395,
          protein: 28,
          carbs: 38,
          fat: 14,
          items: [
            '3 Boiled Eggs (sprinkled with black pepper & salt)',
            '1 bowl Roasted Peanuts & Makhana chaat',
            '1 cup Masala tea or black coffee'
          ]
        },
        {
          name: 'Dinner',
          timing: '8:00 PM - 8:30 PM',
          calories: 570,
          protein: 31,
          carbs: 54,
          fat: 14,
          items: [
            '2 Whole Wheat Rotis',
            '180g Grilled Fish (Fish tikka with lemon & chaat masala) or 150g Mutton Rogan Josh (lean cut)',
            '1 bowl Masoor Dal soup',
            'Tossed green salad'
          ]
        }
      ]
    },
    vegan: {
      title: '2,400 kcal Indian 100% Plant-Based Plan',
      totals: { calories: 2390, protein: 122, carbs: 320, fat: 62 },
      meals: [
        {
          name: 'Breakfast',
          timing: '8:00 AM - 9:00 AM',
          calories: 610,
          protein: 28,
          carbs: 92,
          fat: 16,
          items: [
            '3 Moong Dal Chillas filled with crumbled spiced Tofu (80g)',
            'Coconut and tomato chutney',
            '1 large bowl Oatmeal with soy milk, banana slices, chia seeds & peanut butter'
          ]
        },
        {
          name: 'Lunch',
          timing: '1:00 PM - 2:00 PM',
          calories: 790,
          protein: 48,
          carbs: 108,
          fat: 22,
          items: [
            '2 Whole Wheat Rotis',
            '2 cups Brown Basmati Rice',
            '1 large bowl Kala Chana (Black chickpeas) or Rajma curry',
            '80g Soya Chunks cooked with bell peppers in spicy kadai gravy',
            'Cucumber, carrot & beet salad'
          ]
        },
        {
          name: 'Evening Snack',
          timing: '5:00 PM - 5:30 PM',
          calories: 410,
          protein: 22,
          carbs: 52,
          fat: 13,
          items: [
            '1 large bowl Sprouted Chana & Peanut Chaat with tomatoes and lemon',
            '1 glass Sattu drink with mint leaves',
            'Handful roasted almonds & pumpkin seeds'
          ]
        },
        {
          name: 'Dinner',
          timing: '8:00 PM - 8:30 PM',
          calories: 580,
          protein: 24,
          carbs: 68,
          fat: 11,
          items: [
            '2 Jowar or Wheat Rotis',
            '150g Matar Tofu (Tofu & green peas homestyle masala)',
            '1 bowl Mixed Dal',
            'Steamed broccoli and carrots'
          ]
        }
      ]
    }
  }
};

/**
 * Finds the nearest meal plan tier given a target calorie count.
 * @param {number} targetCalories 
 * @returns {number} 1500, 1800, 2100, or 2400
 */
export function findNearestCalorieTier(targetCalories) {
  const tiers = [1500, 1800, 2100, 2400];
  if (!targetCalories || isNaN(targetCalories)) return 1800;
  
  let nearest = tiers[0];
  let minDiff = Math.abs(targetCalories - nearest);

  for (let i = 1; i < tiers.length; i++) {
    const diff = Math.abs(targetCalories - tiers[i]);
    if (diff < minDiff) {
      minDiff = diff;
      nearest = tiers[i];
    }
  }

  return nearest;
}
