<svelte:head>
	<title>{$t('detail.destinationDetail')} - TravelGenZ</title>
</svelte:head>

<script lang="ts">
	import { page } from '$app/stores';
	import { destinationDetails, difficultyBadge, packages } from '$lib/data/travelData';
	import { locale, localize, t } from '$lib/i18n';

	let rupiah: Intl.NumberFormat;
	$: rupiah = new Intl.NumberFormat($locale === 'en' ? 'en-US' : 'id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0
	});

	$: trip = packages.find((item) => item.id === $page.params.id) ?? packages[0];
	$: detailData =
		destinationDetails[trip.id] ?? {
			subtitle: trip.location,
			overview: trip.description,
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
			gallery: [trip.image]
		};
</script>

<div class="min-h-screen bg-[#f5f6fb] text-slate-900">
	<section class="container mx-auto px-6 py-10">
		<a class="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700" href="/#packages">
			<span><-</span> {$t('detail.backToPackages')}
		</a>

		<div class="mt-6 overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
			<div class="relative h-72 md:h-96">
				<img src={trip.image} alt={localize(trip.name, $locale)} class="h-full w-full object-cover" />
				<div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent"></div>
				<div class="absolute bottom-6 left-6 right-6 text-white">
					<p class="text-xs uppercase tracking-[0.3em] text-white/70">{$t('detail.destinationDetail')}</p>
					<h1 class="mt-2 text-3xl font-semibold md:text-4xl">{localize(trip.name, $locale)}</h1>
					<p class="mt-2 text-sm text-white/80">{localize(detailData.subtitle, $locale)}</p>
					<div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/80">
						<span class="badge border-none bg-white/20">{localize(trip.location, $locale)}</span>
						<span class="badge border-none bg-white/20">{localize(trip.days, $locale)}</span>
						<span class={`badge border-none ${difficultyBadge[trip.difficulty]}`}>
							{$t(`difficulty.${trip.difficulty}`)}
						</span>
						<span class="badge border-none bg-white/20">{rupiah.format(trip.price)}</span>
					</div>
				</div>
			</div>

			<div class="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr]">
				<div class="space-y-6">
					<div>
						<h2 class="text-lg font-semibold text-slate-900">{$t('detail.overview')}</h2>
						<p class="mt-2 text-sm text-slate-600">{localize(detailData.overview, $locale)}</p>
					</div>

					<div>
						<h2 class="text-lg font-semibold text-slate-900">{$t('detail.highlights')}</h2>
						<div class="mt-3 grid gap-3 md:grid-cols-3">
							{#each detailData.highlights as item}
								<div class="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
									{localize(item, $locale)}
								</div>
							{/each}
						</div>
					</div>

					<div>
						<h2 class="text-lg font-semibold text-slate-900">{$t('detail.itinerary')}</h2>
						<div class="mt-3 space-y-3 border-l border-slate-200 pl-4">
							{#each detailData.itinerary as step}
								<div>
									<p class="text-sm font-semibold text-slate-900">{localize(step.title, $locale)}</p>
									<p class="text-xs text-slate-600">{localize(step.text, $locale)}</p>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<div class="space-y-6">
					<div class="rounded-2xl bg-slate-50 p-4">
						<h2 class="text-sm font-semibold text-slate-900">{$t('detail.included')}</h2>
						<ul class="mt-3 space-y-2 text-xs text-slate-600">
							{#each detailData.includes as item}
								<li class="flex items-center gap-2">
									<span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
									{localize(item, $locale)}
								</li>
							{/each}
						</ul>
					</div>

					<div class="rounded-2xl bg-slate-50 p-4">
						<h2 class="text-sm font-semibold text-slate-900">{$t('detail.tips')}</h2>
						<ul class="mt-3 space-y-2 text-xs text-slate-600">
							{#each detailData.tips as item}
								<li class="flex items-center gap-2">
									<span class="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
									{localize(item, $locale)}
								</li>
							{/each}
						</ul>
					</div>

					<div>
						<h2 class="text-sm font-semibold text-slate-900">{$t('detail.gallery')}</h2>
						<div class="mt-3 grid grid-cols-3 gap-3">
							{#each detailData.gallery as image}
								<img
									src={image}
									alt={localize(trip.name, $locale)}
									class="h-20 w-full rounded-2xl object-cover"
								/>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 px-8 py-6">
				<div>
					<p class="text-xs text-slate-400">{$t('detail.ready')}</p>
					<p class="text-base font-semibold text-slate-900">{$t('detail.readySubtitle')}</p>
				</div>
				<div class="flex items-center gap-3">
					<a
						class="btn rounded-full border border-slate-200 bg-white px-6 text-slate-700 hover:bg-slate-50"
						href="/#packages"
					>
						{$t('detail.backToHome')}
					</a>
					<a class="btn rounded-full border-none bg-[#ff6b6b] px-6 text-white hover:bg-[#ff7b7b]" href="/#packages">
						{$t('detail.bookNow')}
					</a>
				</div>
			</div>
		</div>
	</section>
</div>

