let state = {
	defaultSettings: {
		darkMode: true,
		difficulty: {
			showBackgroundImage: true,
			showGridOverlay: true,
			showCorrectPlacement: false
		},
		boardConfig: {
			defaultGridSize: 8
		}
	},
	users: [
		{
			firstName: 'Mary',
			lastName: 'Smith',
			age: 27,
			aboutMe: 'My name is Mary, and I just love jigsaw puzzles! My favourite jigsaw category is Architecture, but I also like ones with plants in them.',
			email: 'mary_smith@gmail.com',
			isLoggedIn: true,
			userPreferences: {
				darkMode: true,
				difficulty: {
					showBackgroundImage: false,
					showGridOverlay: false,
					showCorrectPlacement: true
				},
			},
			userImageLibrary: [
				{
					imageName: 'beach-stones.jpg',
					isFavourite: false
				},
				{
					imageName: 'meteorite.jpg',
					isFavourite: true
				},
				{
					imageName: 'the-graveyard.jpg',
					isFavourite: true
				},
				{
					imageName: 'basketball.jpg',
					isFavourite: false
				}
			]
		},
		{
			firstName: 'John',
			lastName: 'Smith',
			age: 42,
			aboutMe: 'My name is John, and I\'m pretty boring.',
			email: 'jsmith2000@yahoo.com',
			isLoggedIn: false,
			userPreferences: {
				darkMode: false,
				difficulty: {
					showBackgroundImage: true,
					showGridOverlay: false,
					showCorrectPlacement: true
				},
			},
			userImageLibrary: [
				{
					imageName: 'beetles.jpg',
					isFavourite: true
				},
				{
					imageName: 'castle.jpg',
					isFavourite: false
				},
				{
					imageName: 'yellow-flowers-in-a-field.jpg',
					isFavourite: false
				}
			]
		}
	],
	imageLibrary: [
		{
			imageName: 'bird.jpg',
			filePath: '/images' 
			isFavourite: false
		},
		{
			imageName: 'ocean-waves.png',
			isFavourite: false
		},
		{
			imageName: 'tower-restaurant.jpg',
			isFavourite: true
		}
	]
};