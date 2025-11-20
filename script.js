// Recipe Database
const recipes = [
  {
    "id": 1,
    "title": "Butter Chicken",
    "category": "Indian",
    "time": "45 min",
    "servings": 4,
    "difficulty": "Medium",
    "description": "Tender chicken cooked in a rich tomato and butter gravy with cream.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Chicken", "Butter", "Tomato Puree", "Cream", "Garam Masala", "Fenugreek Leaves"],
    "instructions": "Marinate chicken. Grill chicken pieces. Simmer tomato gravy with butter and spices. Add chicken and cream.",
    "tags": ["Non-Veg", "Curry", "Dinner"]
  },
  {
    "id": 2,
    "title": "Margherita Pizza",
    "category": "Italian",
    "time": "30 min",
    "servings": 2,
    "difficulty": "Medium",
    "description": "Classic Neapolitan pizza with tomato sauce, fresh mozzarella, and basil.",
    "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Pizza Dough", "San Marzano Tomatoes", "Mozzarella Cheese", "Fresh Basil", "Olive Oil"],
    "instructions": "Stretch dough. Spread sauce. Add cheese. Bake at max temp until crust is charred. Top with basil.",
    "tags": ["Veg", "Baking", "Lunch"]
  },
  {
    "id": 3,
    "title": "Kung Pao Chicken",
    "category": "Chinese",
    "time": "25 min",
    "servings": 3,
    "difficulty": "Medium",
    "description": "Spicy stir-fry with chicken, peanuts, vegetables, and chili peppers.",
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Chicken Thighs", "Peanuts", "Dried Chilies", "Soy Sauce", "Sichuan Peppercorns"],
    "instructions": "Marinate chicken. Stir fry chilies and nuts. Add chicken and sauce. Toss until coated.",
    "tags": ["Non-Veg", "Spicy", "Stir-fry"]
  },
  {
    "id": 4,
    "title": "Classic Beef Burger",
    "category": "Western",
    "time": "20 min",
    "servings": 2,
    "difficulty": "Easy",
    "description": "Juicy beef patty with cheese, lettuce, and tomato on a brioche bun.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Ground Beef", "Brioche Buns", "Cheddar Cheese", "Lettuce", "Tomato", "Onion"],
    "instructions": "Form patties. Sear on high heat. Add cheese to melt. Assemble burger with veggies and sauce.",
    "tags": ["Non-Veg", "Fast Food", "Dinner"]
  },
  {
    "id": 5,
    "title": "Palak Paneer",
    "category": "Indian",
    "time": "35 min",
    "servings": 3,
    "difficulty": "Medium",
    "description": "Cottage cheese cubes in a smooth, spiced spinach puree.",
    "image": "https://yellowchilis.com/wp-content/uploads/2022/07/palak-paneer.jpg",
    "ingredients": ["Spinach", "Paneer", "Garlic", "Ginger", "Green Chilies", "Cream"],
    "instructions": "Blanch spinach and blend. Sauté aromatics. Cook spinach puree with spices. Add paneer cubes.",
    "tags": ["Veg", "Healthy", "Curry"]
  },
  {
    "id": 6,
    "title": "Tiramisu",
    "category": "Desert",
    "time": "40 min",
    "servings": 6,
    "difficulty": "Hard",
    "description": "Coffee-flavored dessert with layers of ladyfingers and mascarpone cheese.",
    "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Ladyfingers", "Mascarpone", "Espresso", "Eggs", "Sugar", "Cocoa Powder"],
    "instructions": "Whisk egg yolks and sugar. Mix with mascarpone. Dip cookies in coffee. Layer cream and cookies. Chill.",
    "tags": ["Dessert", "Sweet", "Cold"]
  },
  {
    "id": 7,
    "title": "Chicken Biryani",
    "category": "Indian",
    "time": "60 min",
    "servings": 5,
    "difficulty": "Hard",
    "description": "Aromatic basmati rice layered with spiced chicken and caramelized onions.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Basmati Rice", "Chicken", "Yogurt", "Saffron", "Fried Onions", "Biryani Spices"],
    "instructions": "Marinate chicken. Par-boil rice with spices. Layer chicken and rice in pot. Seal and slow cook (Dum).",
    "tags": ["Non-Veg", "Rice", "Party"]
  },
  {
    "id": 8,
    "title": "Spaghetti Carbonara",
    "category": "Italian",
    "time": "20 min",
    "servings": 2,
    "difficulty": "Medium",
    "description": "Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper.",
    "image": "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Spaghetti", "Eggs", "Pecorino Cheese", "Guanciale/Bacon", "Black Pepper"],
    "instructions": "Boil pasta. Fry pork. Mix eggs and cheese. Toss hot pasta with pork fat and egg mixture off heat.",
    "tags": ["Non-Veg", "Pasta", "Quick"]
  },
  {
    "id": 9,
    "title": "Veg Spring Rolls",
    "category": "Chinese",
    "time": "40 min",
    "servings": 8,
    "difficulty": "Medium",
    "description": "Crispy fried rolls filled with shredded cabbage, carrots, and glass noodles.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAhnpLZewZM69WqHapHQ0-QklAeqn_l1dtw&s",
    "ingredients": ["Wrappers", "Cabbage", "Carrots", "Soy Sauce", "Vermicelli", "Oil"],
    "instructions": "Stir fry veggies. Place filling in wrapper. Roll tight and seal with water. Deep fry until golden.",
    "tags": ["Veg", "Appetizer", "Fried"]
  },
  {
    "id": 10,
    "title": "New York Cheesecake",
    "category": "Western",
    "time": "90 min",
    "servings": 8,
    "difficulty": "Hard",
    "description": "Dense, rich, and creamy baked cheese dessert with a graham cracker crust.",
    "image": "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Cream Cheese", "Sugar", "Eggs", "Sour Cream", "Graham Crackers", "Butter"],
    "instructions": "Make crust. Beat cheese and sugar, add eggs. Pour over crust. Bake in water bath. Chill overnight.",
    "tags": ["Dessert", "Baking", "Sweet"]
  },
  {
    "id": 11,
    "title": "Dal Makhani",
    "category": "Indian",
    "time": "120 min",
    "servings": 4,
    "difficulty": "Medium",
    "description": "Whole black lentils and kidney beans cooked with butter and cream.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Black Lentils (Urad)", "Kidney Beans", "Butter", "Cream", "Tomato Puree", "Ginger Garlic"],
    "instructions": "Soak and boil lentils. Cook spices and tomato puree. Add lentils and simmer for hours. Finish with cream.",
    "tags": ["Veg", "Rich", "Dinner"]
  },
  {
    "id": 12,
    "title": "Lasagna Bolognese",
    "category": "Italian",
    "time": "90 min",
    "servings": 6,
    "difficulty": "Hard",
    "description": "Layers of pasta, rich meat sauce, béchamel, and parmesan cheese.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSML0PxtVakIS3qV05sAIuYMTBnXjcyxHkGcg&s",
    "ingredients": ["Lasagna Sheets", "Ground Beef", "Tomato Sauce", "Milk", "Flour", "Parmesan"],
    "instructions": "Make meat sauce. Make white sauce. Layer sheets, meat, and white sauce in dish. Bake until bubbly.",
    "tags": ["Non-Veg", "Pasta", "Comfort Food"]
  },
  {
    "id": 5,
    "title": "Lemon Rice",
    "category": "Indian Main",
    "time": "20 min",
    "servings": 2,
    "difficulty": "Easy",
    "description": "Tangy South Indian rice flavored with lemon juice, turmeric, and curry leaves.",
    "image": "images/WhatsApp Image 2025-11-20 at 9.19.39 PM.jpeg",
    "ingredients": ["Cooked Rice", "Lemon Juice", "Peanuts", "Turmeric", "Curry Leaves", "Mustard Seeds"],
    "instructions": "Temper spices and peanuts in oil. Add turmeric. Mix gently with cooked rice and lemon juice.",
    "tags": ["South Indian", "Travel Food", "Vegan"]
  },
  {
    "id": 14,
    "title": "Grilled Salmon",
    "category": "Western",
    "time": "20 min",
    "servings": 2,
    "difficulty": "Easy",
    "description": "Healthy salmon fillet grilled with lemon, garlic, and herbs.",
    "image": "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Salmon Fillet", "Lemon", "Olive Oil", "Dill", "Garlic", "Salt"],
    "instructions": "Season salmon. Grill skin side down for 6 minutes. Flip carefully and cook 2 more minutes.",
    "tags": ["Non-Veg", "Seafood", "Healthy"]
  },
  {
    "id": 15,
    "title": "Samosa",
    "category": "Indian",
    "time": "50 min",
    "servings": 6,
    "difficulty": "Medium",
    "description": "Deep-fried pastry pockets filled with spiced potatoes and peas.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Potatoes", "Peas", "Flour (Maida)", "Cumin", "Garam Masala", "Oil"],
    "instructions": "Make stiff dough. Cook spiced potato filling. Shape dough into cones, fill, and seal. Deep fry.",
    "tags": ["Veg", "Snack", "Street Food"]
  },
  {
    "id": 16,
    "title": "Mushroom Risotto",
    "category": "Italian",
    "time": "40 min",
    "servings": 3,
    "difficulty": "Medium",
    "description": "Creamy rice dish cooked with broth, white wine, and mushrooms.",
    "image": "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Arborio Rice", "Mushrooms", "Vegetable Broth", "White Wine", "Butter", "Parmesan"],
    "instructions": "Sauté mushrooms and rice. Add wine. Add hot broth ladle by ladle, stirring constantly until creamy.",
    "tags": ["Veg", "Rice", "Dinner"]
  },
 {
    "id": 8,
    "title": "Dal Fry",
    "category": "Indian Main",
    "time": "25 min",
    "servings": 4,
    "difficulty": "Easy",
    "description": "Yellow lentils tempered with ghee, garlic, cumin, and red chilies.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Toor Dal (cooked)", "Ghee", "Cumin", "Garlic", "Dried Red Chilies", "Tomato"],
    "instructions": "Mash cooked dal. Fry garlic, cumin, and tomato in ghee. Pour tadka over hot dal.",
    "tags": ["Comfort Food", "Protein", "Dinner"]
  },
  {
    "id": 18,
    "title": "Pancakes",
    "category": "Western",
    "time": "15 min",
    "servings": 3,
    "difficulty": "Easy",
    "description": "Fluffy breakfast cakes served with maple syrup and butter.",
    "image": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Flour", "Milk", "Egg", "Baking Powder", "Sugar", "Butter"],
    "instructions": "Whisk wet and dry ingredients separately, then combine. Pour onto hot griddle. Flip when bubbly.",
    "tags": ["Veg", "Breakfast", "Sweet"]
  },
  {
    "id": 19,
    "title": "Gulab Jamun",
    "category": "Indian",
    "time": "40 min",
    "servings": 8,
    "difficulty": "Medium",
    "description": "images/download.jpg",
    "image": "images/WhatsApp Image 2025-11-20 at 9.16.17 PM.jpeg",
    "ingredients": ["Milk Powder", "Flour", "Sugar", "Rose Water", "Cardamom", "Ghee"],
    "instructions": "Form dough balls from milk powder mix. Fry on low heat. Soak in warm sugar syrup for 2 hours.",
    "tags": ["Dessert", "Sweet", "Festival"]
  },
  {
    "id": 20,
    "title": "Penne Arrabbiata",
    "category": "Italian",
    "time": "15 min",
    "servings": 2,
    "difficulty": "Easy",
    "description": "Pasta tossed in a spicy tomato sauce with garlic and chili flakes.",
    "image": "https://images.unsplash.com/photo-1608835291093-394b0c943a75?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Penne Pasta", "Tomatoes", "Garlic", "Red Chili Flakes", "Olive Oil", "Parsley"],
    "instructions": "Sauté garlic and chilies. Add tomatoes and cook down. Toss cooked pasta in sauce.",
    "tags": ["Veg", "Spicy", "Pasta"]
  },
  {
    "id": 21,
    "title": "Egg Fried Rice",
    "category": "Chinese",
    "time": "15 min",
    "servings": 2,
    "difficulty": "Easy",
    "description": "Wok-fried rice with scrambled eggs, soy sauce, and scallions.",
    "image": "images/Egg-fried-rice-2.jpg",
    "ingredients": ["Cooked Rice", "Eggs", "Soy Sauce", "Sesame Oil", "Green Onions", "Peas"],
    "instructions": "Scramble eggs. Stir fry white parts of onion. Add rice and sauce. Toss on high heat.",
    "tags": ["Non-Veg", "Rice", "Quick"]
  },
  {
    "id": 22,
    "title": "Caesar Salad",
    "category": "Western",
    "time": "15 min",
    "servings": 2,
    "difficulty": "Easy",
    "description": "Crisp romaine lettuce with parmesan, croutons, and creamy dressing.",
    "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Romaine Lettuce", "Parmesan", "Croutons", "Caesar Dressing", "Lemon Juice"],
    "instructions": "Chop lettuce. Toss with dressing and cheese. Top with croutons and black pepper.",
    "tags": ["Veg", "Salad", "Side"]
  },
  {
    "id": 23,
    "title": "Chole Bhature",
    "category": "Indian",
    "time": "60 min",
    "servings": 2,
    "difficulty": "Medium",
    "description": "Spicy chickpea curry served with deep-fried fluffy bread.",
    "image": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Chickpeas", "Maida Flour", "Yogurt", "Spices", "Onion", "Tomato"],
    "instructions": "Pressure cook chickpeas. Make gravy. Knead dough, rest, roll and deep fry bhature puff.",
    "tags": ["Veg", "Breakfast", "Indulgent"]
  },
  {
    "id": 24,
    "title": "Focaccia Bread",
    "category": "Italian",
    "time": "120 min",
    "servings": 6,
    "difficulty": "Medium",
    "description": "Oven-baked Italian bread topped with rosemary, olive oil, and sea salt.",
    "image": "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Bread Flour", "Yeast", "Olive Oil", "Rosemary", "Sea Salt", "Water"],
    "instructions": "Make dough and let rise. Dimple dough with fingers. Drizzle generously with oil and herbs. Bake.",
    "tags": ["Veg", "Baking", "Side"]
  },
  {
    "id": 25,
    "title": "Wonton Soup",
    "category": "Chinese",
    "time": "30 min",
    "servings": 2,
    "difficulty": "Medium",
    "description": "Clear broth served with delicate pork and shrimp dumplings.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Wonton Wrappers", "Ground Pork", "Chicken Broth", "Ginger", "Scallions"],
    "instructions": "Fill wrappers with pork. Boil broth with ginger slices. Cook wontons in broth for 4 mins.",
    "tags": ["Non-Veg", "Soup", "Comfort Food"]
  },
  {
    "id": 26,
    "title": "Mac and Cheese",
    "category": "Western",
    "time": "25 min",
    "servings": 4,
    "difficulty": "Easy",
    "description": "Macaroni pasta coated in a thick, creamy cheddar cheese sauce.",
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Macaroni", "Cheddar Cheese", "Milk", "Butter", "Flour", "Paprika"],
    "instructions": "Boil pasta. Make roux with butter and flour, add milk. Melt cheese into sauce. Combine.",
    "tags": ["Veg", "Pasta", "Kids"]
  },
  {
    "id": 27,
    "title": "Tandoori Chicken",
    "category": "Indian",
    "time": "50 min",
    "servings": 4,
    "difficulty": "Medium",
    "description": "Chicken legs marinated in yogurt and spices, roasted to perfection.",
    "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Chicken Legs", "Yogurt", "Tandoori Masala", "Lemon", "Ginger Garlic Paste"],
    "instructions": "Score chicken. Marinate 4hrs. Bake at high heat or grill until charred and cooked through.",
    "tags": ["Non-Veg", "Appetizer", "Healthy"]
  },
  {
    "id": 28,
    "title": "Panna Cotta",
    "category": "Italian",
    "time": "15 min",
    "servings": 4,
    "difficulty": "Medium",
    "description": "Silky sweetened cream dessert thickened with gelatin and molded.",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Heavy Cream", "Sugar", "Gelatin", "Vanilla Extract", "Berry Sauce"],
    "instructions": "Bloom gelatin. Simmer cream and sugar. Dissolve gelatin in cream. Pour into molds and chill 4hrs.",
    "tags": ["Dessert", "Sweet", "Cold"]
  },
  {
    "id": 29,
    "title": "Mapo Tofu",
    "category": "Chinese",
    "time": "25 min",
    "servings": 3,
    "difficulty": "Medium",
    "description": "Silken tofu in a spicy sauce made with fermented bean paste and minced meat.",
    "image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/7/10/MW1305-molly-yeh-mapo-tofu-with-pork_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1689024275985.webp",
    "ingredients": ["Silken Tofu", "Ground Pork", "Doubanjiang", "Sichuan Pepper", "Scallions"],
    "instructions": "Fry pork and bean paste. Add broth. Gently add tofu cubes. Simmer. Thicken with cornstarch.",
    "tags": ["Non-Veg", "Spicy", "Sichuan"]
  },
  {
    "id": 30,
    "title": "Apple Pie",
    "category": "Western",
    "time": "60 min",
    "servings": 8,
    "difficulty": "Medium",
    "description": "Classic dessert with spiced apple filling encased in a flaky buttery crust.",
    "image": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Apples", "Pie Crust", "Sugar", "Cinnamon", "Butter", "Nutmeg"],
    "instructions": "Peel and slice apples, mix with sugar/spices. Fill crust. Top with lattice crust. Bake until golden.",
    "tags": ["Dessert", "Baking", "Sweet"]
  },
  {
    "id": 31,
    "title": "Masala Dosa",
    "category": "Indian",
    "time": "40 min",
    "servings": 4,
    "difficulty": "Hard",
    "description": "Crispy fermented rice crepes filled with spiced potato masala.",
    "image": "images/WhatsApp Image 2025-11-20 at 9.47.25 PM.jpeg",
    "ingredients": ["Rice Batter", "Potatoes", "Mustard Seeds", "Turmeric", "Curry Leaves"],
    "instructions": "Spread batter on hot griddle thinly. Drizzle oil. Place potato filling inside. Fold and serve.",
    "tags": ["Veg", "South Indian", "Breakfast"]
  },
 {
    "id": 13,
    "title": "Sweet Lassi",
    "category": "Indian Drink",
    "time": "5 min",
    "servings": 2,
    "difficulty": "Easy",
    "description": "Thick sweetened yogurt drink flavored with rose or cardamom.",
    "image": "images/360_F_512585178_7hnfJGxxsybEDn0QXe4iQXg7CeiF7pju.jpg",
    "ingredients": ["Yogurt", "Sugar", "Cardamom Powder", "Ice cubes", "Rose Water"],
    "instructions": "Whisk yogurt and sugar vigorously until frothy. Add cardamom. Serve chilled.",
    "tags": ["Drink", "Summer", "Punjab"]
  },
  {
    "id": 33,
    "title": "Chow Mein",
    "category": "Chinese",
    "time": "20 min",
    "servings": 3,
    "difficulty": "Easy",
    "description": "Stir-fried noodles with vegetables and savory soy sauce.",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Egg Noodles", "Cabbage", "Carrots", "Soy Sauce", "Oyster Sauce", "Sesame Oil"],
    "instructions": "Boil noodles. Stir fry veggies in wok. Add noodles and sauce mix. Toss well on high heat.",
    "tags": ["Veg", "Noodles", "Quick"]
  },

  {
    "id": 35,
    "title": "Kheer",
    "category": "Indian",
    "time": "45 min",
    "servings": 4,
    "difficulty": "Easy",
    "description": "Traditional rice pudding made by simmering rice in milk and sugar.",
    "image": "images/sugar-free-badam-kheer-recipe.jpg",
    "ingredients": ["Milk", "Rice", "Sugar", "Cardamom", "Almonds", "Raisins"],
    "instructions": "Simmer rice in milk for 40 mins until thick. Add sugar and cardamom. Garnish with nuts.",
    "tags": ["Dessert", "Sweet", "Comfort Food"]
  },
  {
    "id": 39,
    "title": "Fish Curry",
    "category": "Indian",
    "time": "30 min",
    "servings": 3,
    "difficulty": "Medium",
    "description": "Spicy and tangy fish stew cooked with coconut milk and tamarind.",
    "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Fish Fillets", "Coconut Milk", "Tamarind", "Mustard Seeds", "Curry Leaves"],
    "instructions": "Temper spices. Add coconut milk and tamarind. Simmer fish gently in the sauce.",
    "tags": ["Non-Veg", "Seafood", "South Indian"]
  },

  {
    "id": 42,
    "title": "Steak Frites",
    "category": "Western",
    "time": "30 min",
    "servings": 2,
    "difficulty": "Medium",
    "description": "Pan-seared steak served with crispy french fries.",
    "image": "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Ribeye Steak", "Potatoes", "Butter", "Thyme", "Garlic", "Oil"],
    "instructions": "Sear steak in butter and herbs. Fry potato strips twice for crispiness. Serve together.",
    "tags": ["Non-Veg", "Meat", "Dinner"]
  },
  {
    "id": 43,
    "title": "Vada Pav",
    "category": "Indian",
    "time": "30 min",
    "servings": 4,
    "difficulty": "Medium",
    "description": "Deep fried potato dumpling placed inside a bread bun.",
    "image": "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Potatoes", "Gram Flour", "Pav Buns", "Green Chilies", "Garlic Chutney"],
    "instructions": "Make potato balls. Dip in batter and fry. Spread chutney on bun and insert vada.",
    "tags": ["Veg", "Street Food", "Spicy"]
  },
  {
    "id": 44,
    "title": "Gnocchi",
    "category": "Italian",
    "time": "50 min",
    "servings": 4,
    "difficulty": "Medium",
    "description": "Soft dough dumplings made from potato and flour.",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Potatoes", "Flour", "Egg", "Salt", "Sage Butter"],
    "instructions": "Boil and mash potatoes. Mix with flour/egg to form dough. Cut into pillows. Boil until they float.",
    "tags": ["Veg", "Pasta", "Comfort Food"]
  },
 {
    "id": 14,
    "title": "Bhindi Fry",
    "category": "Indian Main",
    "time": "20 min",
    "servings": 3,
    "difficulty": "Medium",
    "description": "Okra stir-fried with onions and dry spices until crisp.",
    "image": "images/bhindi-fry-500x500.jpg",
    "ingredients": ["Okra (Bhindi)", "Onion", "Turmeric", "Red Chili Powder", "Amchur (Mango Powder)"],
    "instructions": "Wash and dry okra completely. Chop. Stir fry with onions and spices in open pan (no lid) to avoid slime.",
    "tags": ["Lunch", "Vegan", "Side Dish"]
  },
  {
    "id": 46,
    "title": "Chocolate Brownies",
    "category": "Western",
    "time": "40 min",
    "servings": 9,
    "difficulty": "Easy",
    "description": "Rich, fudgy chocolate squares with a crinkly top.",
    "image": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Cocoa Powder", "Butter", "Sugar", "Eggs", "Flour", "Chocolate Chips"],
    "instructions": "Melt butter and sugar. Whisk in eggs. Fold in dry ingredients. Bake at 350F for 25 mins.",
    "tags": ["Dessert", "Baking", "Sweet"]
  },
  {
    "id": 47,
    "title": "Chicken Tikka Masala",
    "category": "Indian",
    "time": "50 min",
    "servings": 4,
    "difficulty": "Medium",
    "description": "Roasted marinated chicken chunks in a spiced curry sauce.",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Chicken", "Yogurt", "Tomato Sauce", "Cream", "Paprika", "Cumin"],
    "instructions": "Marinate and grill chicken. Simmer spiced tomato sauce. Add chicken and finish with cream.",
    "tags": ["Non-Veg", "Curry", "Popular"]
  },
  {
    "id": 48,
    "title": "Pesto Pasta",
    "category": "Italian",
    "time": "15 min",
    "servings": 2,
    "difficulty": "Easy",
    "description": "Pasta tossed in a fresh green sauce made of basil, pine nuts, and parmesan.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    "ingredients": ["Fusilli", "Fresh Basil", "Pine Nuts", "Parmesan", "Olive Oil", "Garlic"],
    "instructions": "Blend basil, nuts, cheese, and oil. Boil pasta. Toss hot pasta with pesto (do not cook sauce).",
    "tags": ["Veg", "Healthy", "Quick"]
  },
{
    "id": 21,
    "title": "Aloo Gobi (Dry)",
    "category": "Indian Main",
    "time": "25 min",
    "servings": 3,
    "difficulty": "Medium",
    "description": "Potatoes and cauliflower stir-fried with turmeric and ginger.",
    "image": "images/Baked-Aloo-Gobi-veganricha-2329-2-2.webp",
    "ingredients": ["Cauliflower", "Potatoes", "Ginger", "Turmeric", "Cumin", "Coriander Powder"],
    "instructions": "Heat oil. Add cumin and ginger. Add veggies and spices. Cover and steam-cook on low flame.",
    "tags": ["Lunch", "Vegan", "Healthy"]
  },
  {
    "id": 50,
    "title": "Donuts",
    "category": "Western",
    "time": "120 min",
    "servings": 12,
    "difficulty": "Hard",
    "description": "Sweet, deep-fried dough glazed with sugar or chocolate.",
    "image": "images/chocolaste-donut.webp",
    "ingredients": ["Flour", "Yeast", "Sugar", "Milk", "Butter", "Glaze"],
    "instructions": "Make yeast dough. Let rise. Cut rings. Deep fry. Dip in glaze while warm.",
    "tags": ["Dessert", "Fried", "Indulgent"]
  }
];


let allRecipes = [...recipes];
let currentFilter = 'all';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const recipesContainer = document.getElementById('recipesContainer');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('recipeModal');
const closeBtn = document.querySelector('.close');
const resultsText = document.getElementById('resultsText');
const filterTags = document.querySelectorAll('.tag');

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});
clearBtn.addEventListener('click', handleClear);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target == modal) closeModal();
});

filterTags.forEach(tag => {
    tag.addEventListener('click', handleFilter);
});

// Search Function
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        displayRecipes(allRecipes);
        return;
    }

    const filtered = allRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm)) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );

    displayRecipes(filtered);
}

// Filter Function
function handleFilter(e) {
    currentFilter = e.target.getAttribute('data-filter');
    
    // Update active tag
    filterTags.forEach(tag => tag.classList.remove('active'));
    e.target.classList.add('active');

    // Filter recipes
  if (currentFilter === 'all') {
    displayRecipes(allRecipes);
  } else {
    const filtered = allRecipes.filter(recipe => {
      // match category (case-insensitive)
      const catMatch = recipe.category && recipe.category.toLowerCase() === currentFilter.toLowerCase();

      // match tags (case-insensitive). For 'vegetarian' also match 'veg'
      const tagMatch = recipe.tags && recipe.tags.some(tag => {
        const t = tag.toLowerCase();
        if (currentFilter.toLowerCase() === 'vegetarian') return t.includes('veg');
        return t.includes(currentFilter.toLowerCase());
      });

      return catMatch || tagMatch;
    });

    displayRecipes(filtered);
  }

    // Clear search
    searchInput.value = '';
}

// Clear Function
function handleClear() {
    searchInput.value = '';
    currentFilter = 'all';
    filterTags.forEach(tag => tag.classList.remove('active'));
    filterTags[0].classList.add('active');
    displayRecipes(allRecipes);
}

// Display Recipes
function displayRecipes(recipesToShow) {
    recipesContainer.innerHTML = '';

    if (recipesToShow.length === 0) {
        noResults.style.display = 'block';
        resultsText.innerHTML = 'No recipes found';
        return;
    }

    noResults.style.display = 'none';
    resultsText.innerHTML = `Showing <strong>${recipesToShow.length}</strong> recipe${recipesToShow.length !== 1 ? 's' : ''}`;

    recipesToShow.forEach(recipe => {
        const card = createRecipeCard(recipe);
        recipesContainer.appendChild(card);
    });
}

// Create Recipe Card
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    // Check if image is a file path or emoji
    const isImageFile = recipe.image.includes('/') || recipe.image.includes('.');
    const imageHTML = isImageFile 
        ? `<img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">`
        : `<div class="recipe-image">${recipe.image}</div>`;
    
    card.innerHTML = `
        ${imageHTML}
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time}</span>
                <span>👥 ${recipe.servings}</span>
                <span>📊 ${recipe.difficulty}</span>
            </div>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-tags">
                ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
            </div>
            <button class="view-btn" onclick="openModal(${recipe.id})">View Recipe</button>
        </div>
    `;
    return card;
}

// Open Modal
function openModal(id) {
    const recipe = allRecipes.find(r => r.id === id);
    if (!recipe) return;

    document.getElementById('modalTitle').textContent = recipe.title;
    
    // Handle image - check if file path or emoji
    const modalImageEl = document.getElementById('modalImage');
    const isImageFile = recipe.image.includes('/') || recipe.image.includes('.');
    if (isImageFile) {
        modalImageEl.src = recipe.image;
        modalImageEl.alt = recipe.title;
    } else {
        modalImageEl.textContent = recipe.image;
    }
    
    document.getElementById('modalTime').textContent = recipe.time;
    document.getElementById('modalServings').textContent = recipe.servings;
    document.getElementById('modalDifficulty').textContent = recipe.difficulty;
    document.getElementById('modalInstructions').textContent = recipe.instructions;

    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  displayRecipes(allRecipes);
  filterTags[0].classList.add('active');
});