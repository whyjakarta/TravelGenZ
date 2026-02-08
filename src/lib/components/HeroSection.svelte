<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from './NavBar.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import { heroImages, heroVideos } from '$lib/data/travelData';
	import { t } from '$lib/i18n';

	export let navItems: { id: string; label: { id: string; en: string } }[] = [];
	export let theme: 'light' | 'dark' = 'light';
	export let onToggleTheme: () => void = () => {};
	export let onBookNow: () => void = () => {};
	$: mobileLinks = navItems.map((item) => ({
		label: item.label,
		href: `#${item.id}`
	}));

	const fadeDurationMs = 6000;
	const photoDurationMs = 10000;
	const videoDurationMs = 20000;
	const rotateEveryMs = photoDurationMs;
	let baseIndex = 0;
	let overlayIndex = heroImages.length > 1 ? 1 : 0;
	let showOverlay = false;
	let heroInterval: ReturnType<typeof setInterval> | null = null;
	let heroTimeout: ReturnType<typeof setTimeout> | null = null;
	let cycleTimeout: ReturnType<typeof setTimeout> | null = null;
	let videoReady = false;
	let videoFailed = false;
	let mobileMenuOpen = false;
	let showVideo = false;

	const handleVideoReady = () => {
		videoReady = true;
		if (!videoFailed) startVideoCycle();
	};

	const handleVideoError = () => {
		videoFailed = true;
		videoReady = false;
		showVideo = false;
		startPhotoCycle();
	};

	const openMobileMenu = () => {
		mobileMenuOpen = true;
	};

	const closeMobileMenu = () => {
		mobileMenuOpen = false;
	};

	const stopPhotoRotation = () => {
		if (heroInterval) clearInterval(heroInterval);
		if (heroTimeout) clearTimeout(heroTimeout);
		heroInterval = null;
		heroTimeout = null;
		showOverlay = false;
	};

	const startPhotoRotation = () => {
		stopPhotoRotation();
		if (heroImages.length < 2) return;
		heroInterval = setInterval(() => {
			overlayIndex = (baseIndex + 1) % heroImages.length;
			showOverlay = true;
			if (heroTimeout) clearTimeout(heroTimeout);
			heroTimeout = setTimeout(() => {
				baseIndex = overlayIndex;
				showOverlay = false;
			}, fadeDurationMs);
		}, rotateEveryMs);
	};

	const startPhotoCycle = () => {
		showVideo = false;
		startPhotoRotation();
		if (cycleTimeout) clearTimeout(cycleTimeout);
		if (heroVideos.length === 0 || videoFailed) return;
		const cycleLength = Math.max(1, heroImages.length) * rotateEveryMs;
		cycleTimeout = setTimeout(() => {
			if (videoReady && !videoFailed) startVideoCycle();
		}, cycleLength);
	};

	const startVideoCycle = () => {
		if (heroVideos.length === 0 || videoFailed) {
			startPhotoCycle();
			return;
		}
		showVideo = true;
		stopPhotoRotation();
		if (cycleTimeout) clearTimeout(cycleTimeout);
		cycleTimeout = setTimeout(() => {
			startPhotoCycle();
		}, videoDurationMs);
	};

	onMount(() => {
		startPhotoCycle();
		return () => {
			if (heroInterval) clearInterval(heroInterval);
			if (heroTimeout) clearTimeout(heroTimeout);
			if (cycleTimeout) clearTimeout(cycleTimeout);
		};
	});

	$: canShowVideo = showVideo && videoReady && !videoFailed;
</script>

<section id="home" class="relative overflow-hidden min-h-screen">
	<div
		class="absolute inset-0 z-10 bg-[linear-gradient(120deg,rgba(15,23,42,0.72),rgba(15,23,42,0.35),rgba(15,23,42,0.05))]"
	></div>
	<div class="absolute inset-0 z-2">
		{#if heroVideos.length > 0}
			<video
				class={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
					canShowVideo ? 'opacity-100' : 'opacity-0'
				}`}
				autoplay
				muted
				loop
				playsinline
				poster={heroImages[baseIndex]}
				on:loadeddata={handleVideoReady}
				on:error={handleVideoError}
			>
				{#each heroVideos as src}
					<source src={src} type="video/mp4" />
				{/each}
			</video>
		{/if}
		<div
			class={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
				canShowVideo ? 'opacity-0' : 'opacity-100'
			}`}
			style={`background-image: url('${heroImages[baseIndex]}')`}
		></div>
		<div
			class={`absolute inset-0 bg-cover bg-center transition-opacity ease-in-out ${
				showOverlay ? 'opacity-100' : 'opacity-0'
			}`}
			style={`background-image: url('${heroImages[overlayIndex]}'); transition-duration: ${fadeDurationMs}ms;`}
		></div>
	</div>
	<div class="absolute -top-20 -right-20 z-20 h-64 w-64 rounded-full bg-white/30 blur-3xl"></div>
	<div class="absolute bottom-16 left-0 z-20 h-72 w-72 rounded-full bg-rose-400/30 blur-3xl"></div>
	<div class="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-16 bg-gradient-to-b from-transparent to-[#f5f6fb]"></div>

	<div class="relative z-20">
		<NavBar
			{navItems}
			{theme}
			onToggleTheme={onToggleTheme}
			onBookNow={onBookNow}
			onOpenMobileMenu={openMobileMenu}
		/>

		<MobileMenu
			open={mobileMenuOpen}
			links={mobileLinks}
			{theme}
			onClose={closeMobileMenu}
			onBookNow={onBookNow}
			onToggleTheme={onToggleTheme}
		/>

		<div class="container mx-auto px-6 pt-20 pb-24 text-center text-white">
			<div class="mx-auto max-w-4xl">
				<h1 class="font-display hero-title text-5xl font-extrabold tracking-tight text-transparent bg-clip-text md:text-6xl lg:text-7xl">
					{$t('hero.title')}
					<span
						class="mt-0.5 block bg-gradient-to-r from-[#7ee5ff] via-[#6ee7b7] to-[#a78bfa] bg-clip-text text-3xl font-bold tracking-normal text-transparent normal-case md:text-5xl lg:text-5xl"
					>
						{$t('hero.subtitle')}
					</span>
				</h1>
				<p class="mt-5 text-base text-white/85 md:text-lg">
					{$t('hero.description')}
				</p>
				<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
					<a
						class="btn-shock btn rounded-full border-none bg-[#ff6b6b] px-8 text-white transition-transform duration-150 hover:bg-[#ff7b7b] active:scale-95"
						href="#packages"
					>
						{$t('hero.explore')}
					</a>
					<a
						class="btn-shock btn rounded-full border border-white/50 bg-white/10 px-8 text-white transition-transform duration-150 hover:bg-white/20 active:scale-95"
						href="#gallery"
					>
						{$t('hero.viewGallery')}
					</a>
				</div>
			</div>
		</div>
	</div>
	<div id="about" class="sr-only">{$t('nav.about')} TravelGenZ</div>
</section>
