export const standardRelays = [
	'wss://nostr-pub.wellorder.net',
	'wss://nos.lol',
	'wss://relay.damus.io',
	'wss://relay.snort.social',
	'wss://relay.zbd.gg',
	'wss://nostr.wine'
];

export type recipeTag =
	| string
	| {
			title: string;
			visableTitle?: string;
			emoji?: string;
	  };

export type recipeTagSimple = {
	title: string;
	emoji?: string;
};

export const recipeTags: recipeTagSimple[] = [
	{ title: 'Alcohol', emoji: '🍸' },
	{ title: 'Almond' },
	{ title: 'American', emoji: '🇺🇸' },
	{ title: 'Apple', emoji: '🍎' },
	{ title: 'Argentinian', emoji: '🇦🇷' },
	{ title: 'Asian', emoji: '🥢' },
	{ title: 'Australian', emoji: '🇦🇺' },
	{ title: 'Austrian', emoji: '🇦🇹' },
	{ title: 'Bacon', emoji: '🥓' },
	{ title: 'Baked' },
	{ title: 'Bariatric' },
	{ title: 'Basic' },
	{ title: 'Beans', emoji: '🧆' },
	{ title: 'Beef', emoji: '🐄' },
	{ title: 'Beetroot' },
	{ title: 'Belgian', emoji: '🇧🇪' },
	{ title: 'Brazilian', emoji: '🇧🇷' },
	{ title: 'Bread', emoji: '🍞' },
	{ title: 'Breakfast', emoji: '🍳' },
	{ title: 'Broccoli' },
	{ title: 'Cabbage' },
	{ title: 'Cajun' },
	{ title: 'Cake', emoji: '🍰' },
	{ title: 'Cheese', emoji: '🧀' },
	{ title: 'Cheesefare' },
	{ title: 'Chicken', emoji: '🍗' },
	{ title: 'Chinese', emoji: '🥡' },
	{ title: 'Chocolate', emoji: '🍫' },
	{ title: 'Christmas', emoji: '🎄' },
	{ title: 'Coconut', emoji: '🥥' },
	{ title: 'Cookies', emoji: '🍪' },
	{ title: 'Corn', emoji: '🌽' },
	{ title: 'Cream', emoji: '🥛' },
	{ title: 'Curry' },
	{ title: 'Danish' },
	{ title: 'Dessert', emoji: '🧁' },
	{ title: 'Digestivo' },
	{ title: 'Dominican', emoji: '🇩🇴' },
	{ title: 'Dough' },
	{ title: 'Dressing' },
	{ title: 'Drink', emoji: '🍹' },
	{ title: 'Duck', emoji: '🦆' },
	{ title: 'Dumpling', emoji: '🥟' },
	{ title: 'Dutch', emoji: '🇳🇱' },
	{ title: 'Easter', emoji: '🐰' },
	{ title: 'Easy' },
	{ title: 'Eggs', emoji: '🥚' },
	{ title: 'English', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
	{ title: 'Fasting' },
	{ title: 'Feta', emoji: '🧀' },
	{ title: 'Filipino', emoji: '🇵🇭' },
	{ title: 'Fish', emoji: '🐟' },
	{ title: 'French', emoji: '🇫🇷' },
	{ title: 'Fruit', emoji: '🍇' },
	{ title: 'Fry' },
	{ title: 'Galician' },
	{ title: 'Garlic', emoji: '🧄' },
	{ title: 'German', emoji: '🇩🇪' },
	{ title: 'Greek', emoji: '🇬🇷' },
	{ title: 'Ham', emoji: '🍖' },
	{ title: 'Hungarian', emoji: '🇭🇺' },
	{ title: 'Indian', emoji: '🇮🇳' },
	{ title: 'Irish', emoji: '☘️' },
	{ title: 'Israeli', emoji: '🇮🇱' },
	{ title: 'Italian', emoji: '🇮🇹' },
	{ title: 'Jam' },
	{ title: 'Japanese', emoji: '🇯🇵' },
	{ title: 'Keto' },
	{ title: 'Lamb', emoji: '🐑' },
	{ title: 'Lebanese', emoji: '🇱🇧' },
	{ title: 'Lemons', emoji: '🍋' },
	{ title: 'Lentil' },
	{ title: 'Liquor', emoji: '🥃' },
	{ title: 'Liver', emoji: '🍖' },
	{ title: 'Lunch', emoji: '🍴' },
	{ title: 'Meat', emoji: '🥩' },
	{ title: 'Mediterranean', emoji: '🏖️' },
	{ title: 'Mexican', emoji: '🇲🇽' },
	{ title: 'Middle-Eastern' },
	{ title: 'Milk', emoji: '🥛' },
	{ title: 'Mushrooms', emoji: '🍄' },
	{ title: 'Mutton', emoji: '🐑' },
	{ title: 'Noodles', emoji: '🍜' },
	{ title: 'Oven', emoji: '🔥' },
	{ title: 'Palestinian' },
	{ title: 'Pancake', emoji: '🥞' },
	{ title: 'Pasta', emoji: '🍝' },
	{ title: 'Pastry', emoji: '🥐' },
	{ title: 'Pate' },
	{ title: 'Peppers', emoji: '🌶️' },
	{ title: 'Peruvian', emoji: '🇵🇪' },
	{ title: 'Pie', emoji: '🥧' },
	{ title: 'Pizza', emoji: '🍕' },
	{ title: 'Polish', emoji: '🇵🇱' },
	{ title: 'Pork', emoji: '🐖' },
	{ title: 'Portuguese', emoji: '🇵🇹' },
	{ title: 'Potato', emoji: '🥔' },
	{ title: 'Pub' },
	{ title: 'Quebec', emoji: '🍁' },
	{ title: 'Quick' },
	{ title: 'Raw' },
	{ title: 'Rice', emoji: '🍚' },
	{ title: 'Roast', emoji: '🍖' },
	{ title: 'Romanian', emoji: '🇷🇴' },
	{ title: 'Russian', emoji: '🇷🇺' },
	{ title: 'Salad', emoji: '🥗' },
	{ title: 'Sandwich', emoji: '🥪' },
	{ title: 'Sauce', emoji: '🍲' },
	{ title: 'Sausage', emoji: '🌭' },
	{ title: 'Seafood', emoji: '🦐' },
	{ title: 'Shrimp', emoji: '🦐' },
	{ title: 'Side' },
	{ title: 'Slowcooked' },
	{ title: 'Snack', emoji: '🍿' },
	{ title: 'Soup', emoji: '🍲' },
	{ title: 'Sourdough', emoji: '🍞' },
	{ title: 'Southern' },
	{ title: 'Southwest' },
	{ title: 'Spanish', emoji: '🇪🇸' },
	{ title: 'Spice', emoji: '🌶️' },
	{ title: 'Spicy', emoji: '🌶️' },
	{ title: 'Spinach', emoji: '🍃' },
	{ title: 'Spread' },
	{ title: 'Squash' },
	{ title: 'Steak', emoji: '🥩' },
	{ title: 'Stew', emoji: '🍲' },
	{ title: 'Stock', emoji: '🍲' },
	{ title: 'Supper', emoji: '🍽️' },
	{ title: 'Swedish', emoji: '🇸🇪' },
	{ title: 'Sweet', emoji: '🍬' },
	{ title: 'Swiss', emoji: '🇨🇭' },
	{ title: 'Syrup', emoji: '🍯' },
	{ title: 'Thai', emoji: '🇹🇭' },
	{ title: 'Tofu', emoji: '🥢' },
	{ title: 'Tomato', emoji: '🍅' },
	{ title: 'Tortilla', emoji: '🌮' },
	{ title: 'Traditional' },
	{ title: 'Traybake' },
	{ title: 'Tuna', emoji: '🐟' },
	{ title: 'Tunisian', emoji: '🇹🇳' },
	{ title: 'Turkey', emoji: '🦃' },
	{ title: 'Turkish', emoji: '🇹🇷' },
	{ title: 'Ukrainian', emoji: '🇺🇦' },
	{ title: 'Uzbek', emoji: '🇺🇿' },
	{ title: 'Veal', emoji: '🐄' },
	{ title: 'Vegetables', emoji: '🥦' },
	{ title: 'Vietnamese', emoji: '🇻🇳' },
	{ title: 'Wholemeal' },
	{ title: 'Wine', emoji: '🍷' },
	{ title: 'Yucatecan', emoji: '🇲🇽' }
];