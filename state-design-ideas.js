let state = {
	defaultSettings: {
		darkMode: true,
		difficulty: {
			showBackgroundImage: true,
			showGridOverlay: true,
			showCorrectPlacement: false
		},
		board: {
			defaultGridSize: 8
		}
	},
	users: [
		{
			userName: 'johnSmith',
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
			favourites: {
				imageLibrary: [
					1,
					2
				],
				userImageLibrary: [
					'6d1fe2e1-e2b3-4f59-a25e-a92af4658c7d',
					'1cae9141-a191-446b-8d4e-0282041817e1'
				]
			},
			userImageLibrary: [
				{
					imageName: 'beetles.jpg',
					id: '6d1fe2e1-e2b3-4f59-a25e-a92af4658c7d'
				},
				{
					imageName: 'castle.jpg',
					id: '1cae9141-a191-446b-8d4e-0282041817e1'
				},
				{
					imageName: 'yellow-flowers-in-a-field.jpg',
					id: '55f5362e-24ac-42f6-a8c4-a6e16c6ef7fa'
				}
			]
		},
		{
			userName: 'marySmith',
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
			favourites: {
				imageLibrary: [
					0,
					2,
					3
				],
				userImageLibrary: [
					'c68fcb9c-0bae-4bc1-b183-0118deb60f37',
					'63ad8bfb-90b5-4eeb-a944-4b1882d5ddb1'
				]
			},
			userImageLibrary: [
				{
					imageName: 'beach-stones.jpg',
					id: '73dc9e0b-5449-43fc-a547-fc18fce922a2'
				},
				{
					imageName: 'meteorite.jpg',
					id: 'ea2a34c3-17bc-416b-a5ad-56ab2a583728'
				},
				{
					imageName: 'the-graveyard.jpg',
					id: 'c68fcb9c-0bae-4bc1-b183-0118deb60f37'
				},
				{
					imageName: 'basketball.jpg',
					id: '63ad8bfb-90b5-4eeb-a944-4b1882d5ddb1'
				}
			]
		}
	],
	currentUser: 'marySmith',
	imageLibrary: [
		{
			imageName: 'bird.jpg',
			filePath: '/image-library/bird.jpg',
			id: 0
		},
		{
			imageName: 'ocean-waves.png',
			filePath: '/image-library/ocean-waves.png',
			id: 1
		},
		{
			imageName: 'tower-restaurant.jpg',
			filePath: '/image-library/tower-restaurant.jpg',
			id: 2
		},
		{
			imageName: 'bookshelf.jpg',
			filePath: '/image-library/bookshelf.jpg',
			id: 3
		}
	]
};