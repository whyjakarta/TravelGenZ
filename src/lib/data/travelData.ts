export const navItems = [
	{ id: 'home', label: { id: 'Beranda', en: 'Home' } },
	{ id: 'packages', label: { id: 'Paket', en: 'Packages' } },
	{ id: 'about', label: { id: 'Tentang', en: 'About' } },
	{ id: 'gallery', label: { id: 'Galeri', en: 'Gallery' } },
	{ id: 'reviews', label: { id: 'Ulasan', en: 'Reviews' } },
	{ id: 'contact', label: { id: 'Kontak', en: 'Contact' } }
];

export const heroImages = [
	'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=80',
	'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=80'
];

export const heroVideos = ['https://www.pexels.com/id-id/download/video/17487720/'];

export const stats = [
	{ value: '50+', label: { id: 'Destinasi', en: 'Destinations' } },
	{ value: '10K+', label: { id: 'Traveler Bahagia', en: 'Happy Travelers' } },
	{ value: '4.9', label: { id: 'Rating Rata-rata', en: 'Average Rating' } },
	{ value: '24/7', label: { id: 'Dukungan', en: 'Support' } }
];

export const categories = [
	{
		id: 'all',
		label: { id: 'Semua Trip', en: 'All Trips' },
		icon: '',
		dot: 'bg-gradient-to-r from-emerald-400 to-sky-400'
	},
	{ id: 'beach', label: { id: 'Pantai', en: 'Beach' }, icon: '', dot: 'bg-amber-400' },
	{ id: 'adventure', label: { id: 'Petualangan', en: 'Adventure' }, icon: '', dot: 'bg-rose-400' },
	{ id: 'cultural', label: { id: 'Budaya', en: 'Cultural' }, icon: '', dot: 'bg-violet-400' },
	{ id: 'diving', label: { id: 'Diving', en: 'Diving' }, icon: '', dot: 'bg-sky-400' }
];

export const packages = [
	{
		id: 'bali',
		name: { id: 'Petualangan Vibes Pantai Bali', en: 'Bali Beach Vibes Adventure' },
		location: { id: 'Bali, Indonesia', en: 'Bali, Indonesia' },
		days: { id: '5 Hari', en: '5 Days' },
		difficulty: 'easy',
		description: {
			id: 'Jelajahi pantai Bali, pura, dan nightlife dalam petualangan 5 hari yang epik!',
			en: 'Explore Bali beaches, temples, and nightlife in this epic 5-day adventure!'
		},
		rating: 4.8,
		reviews: 127,
		price: 3500000,
		original: 4500000,
		discount: 22,
		featured: true,
		accent: 'text-[#ff7a7a]',
		image:
			'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
		tags: ['beach']
	},
	{
		id: 'bromo',
		name: { id: 'Trekking Sunrise Bromo', en: 'Bromo Sunrise Trek' },
		location: { id: 'Gunung Bromo, Jawa Timur', en: 'Mount Bromo, East Java' },
		days: { id: '3 Hari', en: '3 Days' },
		difficulty: 'moderate',
		description: {
			id: 'Saksikan sunrise legendaris di Bromo bareng squad kamu!',
			en: 'Catch the legendary sunrise at Mount Bromo with your squad!'
		},
		rating: 4.9,
		reviews: 203,
		price: 2200000,
		original: 2800000,
		discount: 21,
		featured: true,
		accent: 'text-[#5fd3c2]',
		image:
			'https://plus.unsplash.com/premium_photo-1697730106011-f9bbe48d7248?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJvbW98ZW58MHx8MHx8fDA%3D',
		tags: ['adventure']
	},
	{
		id: 'raja-ampat',
		name: { id: 'Diving Surga Raja Ampat', en: 'Raja Ampat Paradise Diving' },
		location: { id: 'Raja Ampat, Papua', en: 'Raja Ampat, Papua' },
		days: { id: '7 Hari', en: '7 Days' },
		difficulty: 'hard',
		description: {
			id: 'Eksplor surga bawah laut dengan diving kelas dunia di Raja Ampat.',
			en: 'Explore underwater paradise with world-class diving in Raja Ampat.'
		},
		rating: 5.0,
		reviews: 89,
		price: 12500000,
		original: 15000000,
		discount: 17,
		featured: true,
		accent: 'text-[#5fd3c2]',
		image:
			'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
		tags: ['diving', 'beach']
	},
	{
		id: 'komodo',
		name: { id: 'Ekspedisi Komodo', en: 'Komodo Dragon Expedition' },
		location: { id: 'Taman Nasional Komodo, NTT', en: 'Komodo National Park, NTT' },
		days: { id: '4 Hari', en: '4 Days' },
		difficulty: 'moderate',
		description: {
			id: 'Island hopping dan bertemu komodo di petualangan epik ini.',
			en: 'Island hop and meet real-life dragons in this epic adventure.'
		},
		rating: 4.9,
		reviews: 178,
		price: 4800000,
		original: 6000000,
		discount: 20,
		featured: true,
		accent: 'text-[#ff7a7a]',
		image:
			'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
		tags: ['adventure']
	},
	{
		id: 'yogyakarta',
		name: { id: 'Escape Budaya Yogyakarta', en: 'Yogyakarta Cultural Escape' },
		location: { id: 'Yogyakarta, Jawa Tengah', en: 'Yogyakarta, Central Java' },
		days: { id: '4 Hari', en: '4 Days' },
		difficulty: 'easy',
		description: {
			id: 'Menyelam ke budaya, candi, dan street food khas Jogja.',
			en: 'Deep dive into culture, temples, and street food scenes.'
		},
		rating: 4.7,
		reviews: 156,
		price: 2800000,
		original: 3500000,
		discount: 20,
		featured: true,
		accent: 'text-[#5fd3c2]',
		image:
			'https://images.unsplash.com/photo-1705905343745-6d901a93e946?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		tags: ['cultural']
	},
	{
		id: 'lombok',
		name: { id: 'Lombok Surf & Chill', en: 'Lombok Surf and Chill' },
		location: { id: 'Lombok, Nusa Tenggara Barat', en: 'Lombok, West Nusa Tenggara' },
		days: { id: '6 Hari', en: '6 Days' },
		difficulty: 'easy',
		description: {
			id: 'Belajar surf dan chill di pantai-pantai indah Lombok.',
			en: 'Learn to surf and chill at Lombok beautiful beaches.'
		},
		rating: 4.6,
		reviews: 92,
		price: 3800000,
		original: 4500000,
		discount: 16,
		featured: true,
		accent: 'text-[#ff7a7a]',
		image:
			'https://media.istockphoto.com/id/472831484/id/foto/pegunungan-di-taman-nasional-komodo-di-indonesia.jpg?s=612x612&w=0&k=20&c=u_jZPeZdb6T8ytVSRmaJJOTfmfvFVGyXcgKZ969N2NQ=',
		tags: ['beach', 'diving']
	}
];

export const destinationDetails: Record<
	string,
	{
		subtitle: { id: string; en: string } | string;
		overview: { id: string; en: string } | string;
		highlights: ({ id: string; en: string } | string)[];
		itinerary: {
			title: { id: string; en: string } | string;
			text: { id: string; en: string } | string;
		}[];
		includes: ({ id: string; en: string } | string)[];
		tips: ({ id: string; en: string } | string)[];
		gallery: string[];
	}
> = {
	bali: {
		subtitle: {
			id: 'Beach vibes, sunset spots, dan island culture.',
			en: 'Beach vibes, sunset spots, and island culture.'
		},
		overview: {
			id: 'Bali menyatukan pantai tropis, hidden cove, hingga budaya yang hangat. Trip ini fokus pada sunrise, beach club, dan spot foto yang aesthetic.',
			en: 'Bali blends tropical beaches, hidden coves, and warm culture. This trip focuses on sunrise, beach clubs, and aesthetic photo spots.'
		},
		highlights: [
			{ id: "Sunrise di Nusa Penida + Angel's Billabong", en: "Sunrise in Nusa Penida + Angel's Billabong" },
			{ id: 'Beach club hopping di Seminyak & Canggu', en: 'Beach club hopping in Seminyak & Canggu' },
			{ id: 'Kopi lokal, art market, dan cultural night', en: 'Local coffee, art market, and cultural night' }
		],
		itinerary: [
			{
				title: { id: 'Hari 1', en: 'Day 1' },
				text: { id: 'Arrival, check-in, sunset warm-up di beach cafe.', en: 'Arrival, check-in, sunset warm-up at a beach cafe.' }
			},
			{
				title: { id: 'Hari 2', en: 'Day 2' },
				text: { id: 'Explore Uluwatu, beach time, golden hour photos.', en: 'Explore Uluwatu, beach time, golden hour photos.' }
			},
			{
				title: { id: 'Hari 3', en: 'Day 3' },
				text: { id: 'Nusa Penida day trip + snorkeling.', en: 'Nusa Penida day trip + snorkeling.' }
			},
			{
				title: { id: 'Hari 4', en: 'Day 4' },
				text: { id: 'Canggu vibes, local market, night hangout.', en: 'Canggu vibes, local market, night hangout.' }
			},
			{
				title: { id: 'Hari 5', en: 'Day 5' },
				text: { id: 'Free time + departure.', en: 'Free time + departure.' }
			}
		],
		includes: [
			{ id: 'Hotel 4D/3N', en: 'Hotel 4D/3N' },
			{ id: 'Transport lokal', en: 'Local transport' },
			{ id: 'Breakfast', en: 'Breakfast' },
			{ id: 'Guide Gen Z', en: 'Gen Z guide' }
		],
		tips: [
			{ id: 'Bawa sunblock & waterproof pouch', en: 'Bring sunblock & a waterproof pouch' },
			{ id: 'Sunset terbaik jam 17:30-18:00', en: 'Best sunset around 17:30-18:00' }
		],
		gallery: [
			'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
			'https://plus.unsplash.com/premium_photo-1674539250113-156c53fef54b?q=80&w=1200&auto=format&fit=crop'
		]
	},
	bromo: {
		subtitle: {
			id: 'Epic sunrise, lautan pasir, dan kabut pegunungan.',
			en: 'Epic sunrise, sea of sand, and mountain mist.'
		},
		overview: {
			id: 'Bromo adalah ikon sunrise Indonesia. Kamu akan naik jeep dini hari, trekking ringan ke view point, lalu main di lautan pasir.',
			en: "Bromo is Indonesia's sunrise icon. You'll take a pre-dawn jeep, do a light trek to the viewpoint, then explore the sea of sand."
		},
		highlights: [
			{ id: 'Sunrise view point klasik Bromo', en: 'Classic Bromo sunrise viewpoint' },
			{ id: 'Jeep off-road di lautan pasir', en: 'Off-road jeep in the sea of sand' },
			{ id: 'Smoke crater view + city light', en: 'Smoke crater view + city lights' }
		],
		itinerary: [
			{
				title: { id: 'Hari 1', en: 'Day 1' },
				text: { id: 'Check-in, briefing, dan makan malam hangat.', en: 'Check-in, briefing, and a warm dinner.' }
			},
			{
				title: { id: 'Hari 2', en: 'Day 2' },
				text: { id: '03:00 jeep ride, sunrise, crater, pasir berbisik.', en: '03:00 jeep ride, sunrise, crater, sea of sand.' }
			},
			{
				title: { id: 'Hari 3', en: 'Day 3' },
				text: { id: 'Breakfast, souvenir hunt, perjalanan pulang.', en: 'Breakfast, souvenir hunt, trip home.' }
			}
		],
		includes: [
			{ id: 'Jeep sunrise', en: 'Sunrise jeep' },
			{ id: 'Hotel 2N', en: 'Hotel 2N' },
			{ id: 'Breakfast', en: 'Breakfast' },
			{ id: 'Local guide', en: 'Local guide' }
		],
		tips: [
			{ id: 'Jaket tebal wajib', en: 'Warm jacket is mandatory' },
			{ id: 'Bawa masker untuk pasir', en: 'Bring a mask for the sand' }
		],
		gallery: [
			'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
		]
	},
	'raja-ampat': {
		subtitle: { id: 'Surga bawah laut dan pulau karst.', en: 'Underwater paradise and karst islands.' },
		overview: {
			id: 'Raja Ampat adalah destinasi diving kelas dunia. Airnya crystal clear, coral masih pristine, dan island hopping-nya insane.',
			en: 'Raja Ampat is a world-class diving destination. The water is crystal clear, coral is pristine, and the island hopping is insane.'
		},
		highlights: [
			{ id: 'Snorkeling di lagoon biru', en: 'Snorkeling in blue lagoons' },
			{ id: 'Island hopping + drone view karst', en: 'Island hopping + karst drone views' },
			{ id: 'Sunset boat ride', en: 'Sunset boat ride' }
		],
		itinerary: [
			{
				title: { id: 'Hari 1', en: 'Day 1' },
				text: { id: 'Arrival, briefing, sunset chill.', en: 'Arrival, briefing, sunset chill.' }
			},
			{
				title: { id: 'Hari 2', en: 'Day 2' },
				text: { id: 'Diving/snorkeling + island hopping.', en: 'Diving/snorkeling + island hopping.' }
			},
			{
				title: { id: 'Hari 3', en: 'Day 3' },
				text: { id: 'Lagoon & hidden beach exploration.', en: 'Lagoon & hidden beach exploration.' }
			},
			{
				title: { id: 'Hari 4', en: 'Day 4' },
				text: { id: 'Free time, packing, departure.', en: 'Free time, packing, departure.' }
			}
		],
		includes: [
			{ id: 'Boat charter', en: 'Boat charter' },
			{ id: 'Diving gear', en: 'Diving gear' },
			{ id: 'Resort 3N', en: 'Resort 3N' },
			{ id: 'Meals', en: 'Meals' }
		],
		tips: [
			{ id: 'Bawa dry bag', en: 'Bring a dry bag' },
			{ id: 'Gunakan reef-safe sunscreen', en: 'Use reef-safe sunscreen' }
		],
		gallery: [
			'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80'
		]
	},
	komodo: {
		subtitle: { id: 'Island hopping + komodo spotting.', en: 'Island hopping + Komodo spotting.' },
		overview: {
			id: 'Petualangan ke NTT dengan trek ringan melihat komodo langsung di habitatnya dan island hopping ke spot cantik.',
			en: 'Adventure in NTT with light treks to see Komodos in their habitat and island hopping to beautiful spots.'
		},
		highlights: [
			{ id: 'Komodo trek', en: 'Komodo trek' },
			{ id: 'Pink beach snorkeling', en: 'Pink beach snorkeling' },
			{ id: 'Sunset di pulau kecil', en: 'Sunset on a small island' }
		],
		itinerary: [
			{
				title: { id: 'Hari 1', en: 'Day 1' },
				text: { id: 'Labuan Bajo arrival, sunset harbor.', en: 'Labuan Bajo arrival, sunset harbor.' }
			},
			{
				title: { id: 'Hari 2', en: 'Day 2' },
				text: { id: 'Komodo trekking + pink beach.', en: 'Komodo trekking + pink beach.' }
			},
			{
				title: { id: 'Hari 3', en: 'Day 3' },
				text: { id: 'Island hopping + snorkeling.', en: 'Island hopping + snorkeling.' }
			},
			{
				title: { id: 'Hari 4', en: 'Day 4' },
				text: { id: 'Free time + departure.', en: 'Free time + departure.' }
			}
		],
		includes: [
			{ id: 'Boat day trip', en: 'Boat day trip' },
			{ id: 'Guide ranger', en: 'Ranger guide' },
			{ id: 'Hotel 3N', en: 'Hotel 3N' },
			{ id: 'Meals', en: 'Meals' }
		],
		tips: [
			{ id: 'Gunakan sepatu trekking', en: 'Wear trekking shoes' },
			{ id: 'Ikuti arahan ranger', en: 'Follow ranger instructions' }
		],
		gallery: [
			'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
		]
	},
	yogyakarta: {
		subtitle: {
			id: 'Culture escape, temples, dan kuliner malam.',
			en: 'Culture escape, temples, and night street food.'
		},
		overview: {
			id: 'Trip ini fokus pada budaya Jawa, Borobudur sunrise, dan vibe kota pelajar yang santai tapi penuh cerita.',
			en: 'This trip focuses on Javanese culture, Borobudur sunrise, and the relaxed yet lively student-city vibe.'
		},
		highlights: [
			{ id: 'Borobudur sunrise', en: 'Borobudur sunrise' },
			{ id: 'Prambanan night view', en: 'Prambanan night view' },
			{ id: 'Street food tour Malioboro', en: 'Malioboro street food tour' }
		],
		itinerary: [
			{
				title: { id: 'Hari 1', en: 'Day 1' },
				text: { id: 'Arrival + Malioboro food trail.', en: 'Arrival + Malioboro food trail.' }
			},
			{
				title: { id: 'Hari 2', en: 'Day 2' },
				text: { id: 'Borobudur sunrise + coffee stop.', en: 'Borobudur sunrise + coffee stop.' }
			},
			{
				title: { id: 'Hari 3', en: 'Day 3' },
				text: { id: 'Prambanan + cultural show.', en: 'Prambanan + cultural show.' }
			},
			{
				title: { id: 'Hari 4', en: 'Day 4' },
				text: { id: 'City stroll + departure.', en: 'City stroll + departure.' }
			}
		],
		includes: [
			{ id: 'Hotel 3N', en: 'Hotel 3N' },
			{ id: 'Ticket temples', en: 'Temple tickets' },
			{ id: 'Local guide', en: 'Local guide' },
			{ id: 'Breakfast', en: 'Breakfast' }
		],
		tips: [
			{ id: 'Bawa topi + air minum', en: 'Bring a hat + water' },
			{ id: 'Datang pagi untuk spot sepi', en: 'Arrive early for quieter spots' }
		],
		gallery: [
			'https://images.unsplash.com/photo-1661342460029-bbcaf87f9a4a?q=80&w=1200&auto=format&fit=crop',
			'https://images.unsplash.com/photo-2lZlBv-TQI4?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1705905343745-6d901a93e946?q=80&w=1200&auto=format&fit=crop'
		]
	},
	lombok: {
		subtitle: {
			id: 'Pantai ramah surf dan hari tropis yang santai.',
			en: 'Surf-friendly beaches and chill tropical days.'
		},
		overview: {
			id: 'Lombok cocok buat yang pengen belajar surf, mengejar sunset, dan menikmati island life yang lebih chill dari Bali.',
			en: 'Lombok is perfect for learning surf, chasing sunsets, and enjoying a more chill island life than Bali.'
		},
		highlights: [
			{ id: 'Surf class di Kuta Lombok', en: 'Surf class in Kuta Lombok' },
			{ id: 'Secret beach hunt', en: 'Secret beach hunt' },
			{ id: 'Cafe hop + sunset session', en: 'Cafe hop + sunset session' }
		],
		itinerary: [
			{
				title: { id: 'Hari 1', en: 'Day 1' },
				text: { id: 'Check-in + beach sunset.', en: 'Check-in + beach sunset.' }
			},
			{
				title: { id: 'Hari 2', en: 'Day 2' },
				text: { id: 'Surf class + free time.', en: 'Surf class + free time.' }
			},
			{
				title: { id: 'Hari 3', en: 'Day 3' },
				text: { id: 'Hidden beach tour + snorkeling.', en: 'Hidden beach tour + snorkeling.' }
			},
			{
				title: { id: 'Hari 4', en: 'Day 4' },
				text: { id: 'Departure.', en: 'Departure.' }
			}
		],
		includes: [
			{ id: 'Surf class', en: 'Surf class' },
			{ id: 'Transport', en: 'Transport' },
			{ id: 'Hotel 3N', en: 'Hotel 3N' },
			{ id: 'Breakfast', en: 'Breakfast' }
		],
		tips: [
			{ id: 'Bawa rash guard', en: 'Bring a rash guard' },
			{ id: 'Sunset terbaik sekitar 17:45', en: 'Best sunset around 17:45' }
		],
		gallery: [
			'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
			'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80'
		]
	}
};

export const reviews = [
	{
		name: 'Alya Rahman',
		initials: 'AR',
		rating: 5,
		badge: { id: 'Terverifikasi', en: 'Verified' },
		date: '6 February 2026',
		text: {
			id: 'Best trip ever. Itinerary rapi, guide chill, dan vibes sekelas festival. Semua spot fotonya epic.',
			en: 'Best trip ever. The itinerary was on point, the guide was chill, and the vibes were festival-level. Every photo spot was epic.'
		}
	},
	{
		name: 'Budi Santoso',
		initials: 'BS',
		rating: 5,
		badge: { id: 'Terverifikasi', en: 'Verified' },
		date: '6 February 2026',
		text: {
			id: 'Worth every rupiah. Pembayaran bisa cicil, update jelas, dan support cepat saat transit.',
			en: 'Worth every rupiah. Installments were easy, updates were clear, and support was fast during transit.'
		}
	},
	{
		name: 'Citra Dewi',
		initials: 'CD',
		rating: 4,
		badge: { id: 'Terverifikasi', en: 'Verified' },
		date: '6 February 2026',
		text: {
			id: 'Instagram heaven. Banyak momen aesthetic, jadwal fleksibel, dan crew super helpful.',
			en: 'Instagram heaven. Tons of aesthetic moments, flexible schedule, and a super helpful crew.'
		}
	},
	{
		name: 'Dimas Prakoso',
		initials: 'DP',
		rating: 5,
		badge: { id: 'Terverifikasi', en: 'Verified' },
		date: '6 February 2026',
		text: {
			id: 'Squad trip goals. Guide tahu spot tersembunyi, itinerary matang, dan vibesnya kompak.',
			en: 'Squad trip goals. The guide knew hidden gems, the itinerary was solid, and the vibes stayed tight.'
		}
	}
];

export const gallery = [
	{
		title: { id: 'Borobudur Sunrise', en: 'Borobudur Sunrise' },
		location: { id: 'Magelang, Jawa Tengah', en: 'Magelang, Central Java' },
		image:
			'https://media.istockphoto.com/id/2228210376/id/foto/wisatawan-muda-tersenyum-mengambil-foto-selfie-dengan-ponsel-di-candi-borobudur-di-indonesia.jpg?s=1024x1024&w=is&k=20&c=01L9roLwv1dBkM7cHls9o4NA24kAVeNEvdRfBZjPWEg='
	},
	{
		title: { id: 'Garis Pantai Bali', en: 'Bali Coastline' },
		location: { id: 'Nusa Penida, Bali', en: 'Nusa Penida, Bali' },
		image:
			'https://plus.unsplash.com/premium_photo-1674539250113-156c53fef54b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		title: { id: 'Candi Prambanan', en: 'Prambanan Temple' },
		location: { id: 'Yogyakarta, Jawa Tengah', en: 'Yogyakarta, Central Java' },
		image:
			'https://images.unsplash.com/photo-1661342460029-bbcaf87f9a4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		title: { id: 'Gunung Bromo', en: 'Mount Bromo' },
		location: { id: 'Jawa Timur', en: 'East Java' },
		image:
			'https://media.istockphoto.com/id/2252349728/id/foto/pemuda-bertopi-bergaya-berfoto-selfie-di-punggung-bukit-dengan-gunung-bromo-bersinar-di.jpg?s=1024x1024&w=is&k=20&c=1DrjOAWbBAiqPUVghqkEbBKO7PKIahA5L9_1-DfptXA='
	},
	{
		title: { id: 'Sunset Pantai Lombok', en: 'Lombok Beach Sunset' },
		location: { id: 'Nusa Tenggara Barat', en: 'West Nusa Tenggara' },
		image:
			'https://images.unsplash.com/photo-1733016658164-09acc5293ef8?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		title: { id: 'Traveler Squad', en: 'Traveler Squad' },
		location: { id: 'Gili Ketapang, Jawa Timur', en: 'Gili Ketapang, East Java' },
		image:
			'https://cdn-1.timesmedia.co.id/images/2024/06/15/Giliketapang.jpg'
	}
];

export const paymentMethods = [
	{ id: 'card', label: { id: 'Kartu', en: 'Card' }, note: { id: 'Visa, Mastercard, JCB', en: 'Visa, Mastercard, JCB' } },
	{ id: 'wallet', label: { id: 'E-Wallet', en: 'E-Wallet' }, note: { id: 'GoPay, OVO, DANA', en: 'GoPay, OVO, DANA' } },
	{
		id: 'bank',
		label: { id: 'Transfer Bank', en: 'Bank Transfer' },
		note: { id: 'Virtual account, ATM', en: 'Virtual account, ATM' }
	}
];

export const installmentPlans = [
	{
		id: 'full',
		label: { id: 'Bayar penuh', en: 'Pay in full' },
		note: { id: 'Harga terbaik', en: 'Best price' },
		feeRate: 0
	},
	{
		id: '3x',
		label: { id: 'Cicilan 3x', en: '3x installments' },
		note: { id: 'Ringan per bulan', en: 'Light monthly' },
		feeRate: 0.03
	},
	{
		id: '6x',
		label: { id: 'Cicilan 6x', en: '6x installments' },
		note: { id: 'Paling ringan', en: 'Lowest monthly' },
		feeRate: 0.06
	}
];

export const addOnOptions = [
	{ id: 'insurance', label: { id: 'Proteksi perjalanan', en: 'Travel protection' }, price: 150000 },
	{ id: 'guide', label: { id: 'Guide privat', en: 'Private guide' }, price: 250000 },
	{ id: 'creator', label: { id: 'Kit kreator konten', en: 'Content creator kit' }, price: 175000 }
];

export const difficultyBadge: Record<string, string> = {
	easy: 'bg-emerald-100 text-emerald-700',
	moderate: 'bg-amber-100 text-amber-700',
	hard: 'bg-rose-100 text-rose-700'
};

export const ratingStars = [1, 2, 3, 4, 5];
