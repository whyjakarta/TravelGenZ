<svelte:head>
	<title>{$t('meta.title')}</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300..800&family=Outfit:wght@300..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import StatsBar from '$lib/components/StatsBar.svelte';
	import PackagesSection from '$lib/components/PackagesSection.svelte';
	import PaymentSection from '$lib/components/PaymentSection.svelte';
	import GallerySection from '$lib/components/GallerySection.svelte';
	import ReviewsSection from '$lib/components/ReviewsSection.svelte';
	import CtaSection from '$lib/components/CtaSection.svelte';
	import FooterSection from '$lib/components/FooterSection.svelte';
	import BookingModal from '$lib/components/BookingModal.svelte';
	import CartModal from '$lib/components/CartModal.svelte';
	import PaymentModal from '$lib/components/PaymentModal.svelte';
	import DetailModal from '$lib/components/DetailModal.svelte';
	import { locale, localize, t } from '$lib/i18n';
	import {
		addOnOptions,
		categories,
		destinationDetails,
		difficultyBadge,
		gallery,
		installmentPlans,
		navItems,
		packages,
		paymentMethods,
		ratingStars,
		reviews,
		stats
	} from '$lib/data/travelData';
	let rupiah: Intl.NumberFormat;
	$: rupiah = new Intl.NumberFormat($locale === 'en' ? 'en-US' : 'id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0
	});

	let activeCategory = 'all';
	let searchTerm = '';
	let selectedPackageId = packages[0].id;
	let travelers = 2;
	let promoCode = '';
	let paymentMethod = 'card';
	let installmentPlan = '3x';
	let addOns = {
		insurance: true,
		guide: false,
		creator: false
	};
	let bookingTrip = packages[0];
	let bookingName = '';
	let bookingEmail = '';
	let bookingPhone = '';
	let bookingParticipants = 1;
	let bookingAddress = '';
	let bookingDate = '';
	let bookingRequests = '';
	const whatsappNumber = '62881027799877';
	let detailTrip = packages[0];
	let detailDialog: HTMLDialogElement | null = null;
	let theme: 'light' | 'dark' = 'light';

	$: filteredPackages = packages.filter((trip) => {
		const matchesCategory = activeCategory === 'all' || trip.tags.includes(activeCategory);
		const query = searchTerm.trim().toLowerCase();
		const matchesSearch =
			query.length === 0 ||
			localize(trip.name, $locale).toLowerCase().includes(query) ||
			localize(trip.location, $locale).toLowerCase().includes(query);
		return matchesCategory && matchesSearch;
	});

	$: selectedPackage = packages.find((trip) => trip.id === selectedPackageId) ?? packages[0];

	$: addOnTotal = addOnOptions.reduce((total, item) => {
		return addOns[item.id as keyof typeof addOns] ? total + item.price : total;
	}, 0);

	$: baseSubtotal = selectedPackage.price * travelers;
	$: serviceFee = 35000;
	$: promoDiscount =
		promoCode.trim().toUpperCase() === 'GENZUP' ? (baseSubtotal + addOnTotal) * 0.08 : 0;
	$: rawTotal = baseSubtotal + addOnTotal + serviceFee - promoDiscount;
	$: plan = installmentPlans.find((item) => item.id === installmentPlan) ?? installmentPlans[0];
	$: planFee = rawTotal * plan.feeRate;
	$: grandTotal = rawTotal + planFee;
	$: installmentCount = installmentPlan === '6x' ? 6 : installmentPlan === '3x' ? 3 : 1;
	$: dueNow = grandTotal / installmentCount;

	$: bookingTripSafe = bookingTrip ?? packages[0];
	$: bookingCount = Math.max(1, Number(bookingParticipants) || 1);
	$: bookingTotal = (bookingTripSafe?.price ?? 0) * bookingCount;
	$: detailData = destinationDetails[detailTrip.id] ?? {
		subtitle: detailTrip.location,
		overview: detailTrip.description,
		highlights: [
			{ id: 'Itinerary terkurasi', en: 'Curated itinerary' },
			{ id: 'Momen Instagrammable', en: 'Instagrammable moments' },
			{ id: 'Spot kuliner lokal', en: 'Local culinary stops' }
		],
		itinerary: [
			{
				title: { id: 'Hari 1', en: 'Day 1' },
				text: { id: 'Arrival, chill, dan eksplor kota.', en: 'Arrival, chill, and city exploration.' }
			},
			{
				title: { id: 'Hari 2', en: 'Day 2' },
				text: { id: 'Highlight utama dan spot foto.', en: 'Main highlights and photo stops.' }
			},
			{
				title: { id: 'Hari 3', en: 'Day 3' },
				text: { id: 'Free time dan kepulangan.', en: 'Free time and departure.' }
			}
		],
		includes: [
			{ id: 'Akomodasi', en: 'Accommodation' },
			{ id: 'Transport lokal', en: 'Local transport' },
			{ id: 'Guide', en: 'Guide' }
		],
		tips: [
			{ id: 'Gunakan sepatu nyaman', en: 'Bring comfy shoes' },
			{ id: 'Datang pagi untuk cahaya terbaik', en: 'Arrive early for the best light' }
		],
		gallery: [detailTrip.image]
	};

	let bookingDialog: HTMLDialogElement | null = null;
	let cartDialog: HTMLDialogElement | null = null;
	let cartItems = [...packages];
	let selectedCartIds = cartItems.map((item) => item.id);
	let cartParticipants: Record<string, number> = Object.fromEntries(
		cartItems.map((item) => [item.id, 1])
	);
	let paymentDialog: HTMLDialogElement | null = null;
	let paymentItems: (typeof packages)[number][] = [];
	let paymentTotal = 0;
	let paymentParticipants = 1;
	let paymentRef = '';
	let paymentExpires = '';

	onMount(() => {
		const storedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
		theme = storedTheme === 'dark' ? 'dark' : 'light';
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('theme-dark', theme === 'dark');
		}
	});

	const setTheme = (value: 'light' | 'dark') => {
		theme = value;
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('theme-dark', theme === 'dark');
		}
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('theme', theme);
		}
	};

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
};

const openBooking = (trip: (typeof packages)[number]) => {
		bookingTrip = trip;
		bookingParticipants = 1;
		bookingName = '';
		bookingEmail = '';
		bookingPhone = '';
		bookingAddress = '';
		bookingDate = '';
		bookingRequests = '';
		bookingDialog?.showModal();
	};

	const openDetail = (trip: (typeof packages)[number]) => {
		detailTrip = trip;
		detailDialog?.showModal();
	};

	const closeDetail = () => {
		detailDialog?.close();
	};

	const closeBooking = () => {
		bookingDialog?.close();
};

const openCart = () => {
		if (cartItems.length === 0) {
			cartItems = [...packages];
		}
		cartParticipants = Object.fromEntries(cartItems.map((item) => [item.id, 1]));
		selectedCartIds = cartItems.map((item) => item.id);
		cartDialog?.showModal();
	};

	const closeCart = () => {
		cartDialog?.close();
	};

	const removeCartItem = (id: string) => {
		cartItems = cartItems.filter((item) => item.id !== id);
		selectedCartIds = selectedCartIds.filter((itemId) => itemId !== id);
		const { [id]: _, ...rest } = cartParticipants;
		cartParticipants = rest;
	};

	const checkoutCart = () => {
		const selectedItems = cartItems.filter((item) => selectedCartIds.includes(item.id));
		if (selectedItems.length === 0) return;
		closeCart();
		openPaymentReceipt(selectedItems, bookingName || 'Traveler', 1, cartParticipants);
	};

	const openPaymentReceipt = (
		items: (typeof packages)[number][],
		customerName: string,
		participants: number,
		participantsMap?: Record<string, number>
	) => {
		paymentItems = items;
		if (participantsMap) {
			const totalParticipants = items.reduce(
				(sum, item) => sum + (participantsMap[item.id] ?? 1),
				0
			);
			paymentParticipants = Math.max(1, totalParticipants);
			paymentTotal = items.reduce(
				(sum, item) => sum + item.price * (participantsMap[item.id] ?? 1),
				0
			);
		} else {
			paymentParticipants = Math.max(1, participants);
			paymentTotal = items.reduce((sum, item) => sum + item.price, 0) * paymentParticipants;
		}
		paymentRef = `TRV-${Date.now().toString().slice(-8)}`;
		const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
		paymentExpires = expires.toLocaleString($locale === 'en' ? 'en-US' : 'id-ID', {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
		bookingName = customerName;
		paymentDialog?.showModal();
	};

	const closePaymentReceipt = () => {
		paymentDialog?.close();
	};

	const confirmPayment = () => {
		const itemLines = paymentItems
			.map(
				(item, index) =>
					`${index + 1}. ${localize(item.name, $locale)} (${rupiah.format(item.price)})`
			)
			.join('\n');
		const message = $t('wa.paymentMessage', {
			ref: paymentRef,
			name: bookingName || 'Traveler',
			items: itemLines,
			total: rupiah.format(paymentTotal),
			va: 'BCA 8899 77 123 456 789'
		});
		const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
		closePaymentReceipt();
		window.open(url, '_blank');
	};

	const confirmBooking = () => {
		const message = $t('wa.bookingMessage', {
			trip: localize(bookingTripSafe?.name ?? '-', $locale),
			name: bookingName || '-',
			email: bookingEmail || '-',
			phone: bookingPhone || '-',
			participants: bookingCount,
			date: bookingDate || '-',
			address: bookingAddress || '-',
			note: bookingRequests || '-',
			total: rupiah.format(bookingTotal)
		});
		const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
		closeBooking();
		window.open(url, '_blank');
	};
</script>



<div class="min-h-screen bg-[var(--page-bg)] text-[var(--page-text)]">
	<HeroSection {navItems} {theme} onToggleTheme={toggleTheme} onBookNow={openCart} />
	<StatsBar {stats} />
	<PackagesSection
		{categories}
		bind:activeCategory
		bind:searchTerm
		{filteredPackages}
		{difficultyBadge}
		{ratingStars}
		{rupiah}
		onView={openDetail}
		onBook={openBooking}
	/>
	<PaymentSection
		{packages}
		bind:selectedPackageId
		{selectedPackage}
		bind:travelers
		{addOnOptions}
		bind:addOns
		bind:promoCode
		{paymentMethods}
		bind:paymentMethod
		{installmentPlans}
		bind:installmentPlan
		{baseSubtotal}
		{addOnTotal}
		{serviceFee}
		{promoDiscount}
		{planFee}
		{grandTotal}
		{installmentCount}
		{dueNow}
		{rupiah}
	/>
	<GallerySection {gallery} />
	<ReviewsSection {reviews} {ratingStars} />
	<CtaSection whatsappNumber={whatsappNumber} />
	<FooterSection />

	<BookingModal
		bind:dialog={bookingDialog}
		{bookingTripSafe}
		bind:bookingName
		bind:bookingEmail
		bind:bookingPhone
		bind:bookingParticipants
		bind:bookingAddress
		bind:bookingDate
		bind:bookingRequests
		{bookingCount}
		{bookingTotal}
		{rupiah}
		onClose={closeBooking}
		onConfirm={() => openPaymentReceipt([bookingTripSafe], bookingName || 'Traveler', bookingCount)}
	/>

	<CartModal
		bind:dialog={cartDialog}
		{cartItems}
		bind:selectedCartIds
		bind:cartParticipants
		{rupiah}
		onClose={closeCart}
		onCheckout={checkoutCart}
		onRemove={removeCartItem}
	/>

	<PaymentModal
		bind:dialog={paymentDialog}
		{bookingName}
		{paymentRef}
		{paymentExpires}
		{paymentItems}
		{paymentParticipants}
		{paymentTotal}
		{rupiah}
		onClose={closePaymentReceipt}
		onConfirm={confirmPayment}
	/>

	<DetailModal
		bind:dialog={detailDialog}
		{detailTrip}
		{detailData}
		{difficultyBadge}
		{rupiah}
		onClose={closeDetail}
	/>
</div>

