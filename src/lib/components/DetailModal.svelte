<script lang="ts">
	import { locale, localize, t } from '$lib/i18n';

	export let dialog: HTMLDialogElement | null = null;
	export let detailTrip: {
		id: string;
		name: { id: string; en: string } | string;
		location: { id: string; en: string } | string;
		days: { id: string; en: string } | string;
		difficulty: string;
		description: { id: string; en: string } | string;
		price: number;
		image: string;
	} | null = null;
	export let detailData: {
		subtitle: { id: string; en: string } | string;
		overview: { id: string; en: string } | string;
		highlights: ({ id: string; en: string } | string)[];
		itinerary: { title: { id: string; en: string } | string; text: { id: string; en: string } | string }[];
		includes: ({ id: string; en: string } | string)[];
		tips: ({ id: string; en: string } | string)[];
		gallery: string[];
	};
	export let difficultyBadge: Record<string, string> = {};
	export let rupiah: Intl.NumberFormat;
	export let onClose: () => void = () => {};
</script>

<dialog class="modal" bind:this={dialog}>
	<div class="modal-box max-w-5xl rounded-[2.5rem] bg-white p-0 shadow-2xl">
		<div class="relative h-64 overflow-hidden rounded-t-[2.5rem] md:h-72">
			<img
				src={detailTrip?.image}
				alt={localize(detailTrip?.name ?? '', $locale)}
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent"></div>
			<div class="absolute left-6 right-6 top-6 flex items-start justify-between text-white">
				<div>
					<p class="text-xs uppercase tracking-[0.3em] text-white/70">{$t('detail.kicker')}</p>
					<h3 class="mt-2 text-2xl font-semibold md:text-3xl">
						{localize(detailTrip?.name ?? '', $locale)}
					</h3>
					<p class="mt-1 text-sm text-white/80">{localize(detailData?.subtitle ?? '', $locale)}</p>
				</div>
				<button
					class="btn rounded-full text-white btn-ghost btn-sm hover:text-white"
					on:click={onClose}
					type="button"
				>
					x
				</button>
			</div>
			<div class="absolute bottom-5 left-6 right-6 flex flex-wrap items-center gap-2 text-xs text-white/80">
				<span class="badge border-none bg-white/20">{localize(detailTrip?.location ?? '', $locale)}</span>
				<span class="badge border-none bg-white/20">{localize(detailTrip?.days ?? '', $locale)}</span>
				<span class={`badge border-none ${difficultyBadge[detailTrip?.difficulty ?? ''] ?? ''}`}>
					{$t(`difficulty.${detailTrip?.difficulty ?? ''}`)}
				</span>
				<span class="badge border-none bg-white/20">{rupiah.format(detailTrip?.price ?? 0)}</span>
			</div>
		</div>

		<div class="grid gap-8 px-6 py-7 lg:grid-cols-[1.1fr_0.9fr]">
			<div class="space-y-6">
				<div>
					<h4 class="text-lg font-semibold text-slate-900">{$t('detail.overview')}</h4>
					<p class="mt-2 text-sm text-slate-600">{localize(detailData?.overview ?? '', $locale)}</p>
				</div>
				<div>
					<h4 class="text-lg font-semibold text-slate-900">{$t('detail.highlights')}</h4>
					<div class="mt-3 grid gap-3 md:grid-cols-3">
						{#each detailData?.highlights ?? [] as item}
							<div class="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
								{localize(item, $locale)}
							</div>
						{/each}
					</div>
				</div>
				<div>
					<h4 class="text-lg font-semibold text-slate-900">{$t('detail.itinerary')}</h4>
					<div class="mt-3 space-y-3 border-l border-slate-200 pl-4">
						{#each detailData?.itinerary ?? [] as step}
							<div>
								<p class="text-sm font-semibold text-slate-900">
									{localize(step.title, $locale)}
								</p>
								<p class="text-xs text-slate-600">{localize(step.text, $locale)}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="space-y-6">
				<div class="rounded-2xl bg-slate-50 p-4">
					<h4 class="text-sm font-semibold text-slate-900">{$t('detail.included')}</h4>
					<ul class="mt-3 space-y-2 text-xs text-slate-600">
						{#each detailData?.includes ?? [] as item}
							<li class="flex items-center gap-2">
								<span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
								{localize(item, $locale)}
							</li>
						{/each}
					</ul>
				</div>

				<div class="rounded-2xl bg-slate-50 p-4">
					<h4 class="text-sm font-semibold text-slate-900">{$t('detail.tips')}</h4>
					<ul class="mt-3 space-y-2 text-xs text-slate-600">
						{#each detailData?.tips ?? [] as item}
							<li class="flex items-center gap-2">
								<span class="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
								{localize(item, $locale)}
							</li>
						{/each}
					</ul>
				</div>

				<div>
					<h4 class="text-sm font-semibold text-slate-900">{$t('detail.gallery')}</h4>
					<div class="mt-3 grid grid-cols-3 gap-3">
						{#each detailData?.gallery ?? [] as image}
							<img
								src={image}
								alt={localize(detailTrip?.name ?? '', $locale)}
								class="h-20 w-full rounded-2xl object-cover"
							/>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 px-6 py-5">
			<div>
				<p class="text-xs text-slate-400">{$t('detail.ready')}</p>
				<p class="text-base font-semibold text-slate-900">{$t('detail.readySubtitle')}</p>
			</div>
			<div class="flex items-center gap-3">
				<a
					class="btn rounded-full border border-slate-200 bg-white px-6 text-slate-700 hover:bg-slate-50"
					href={`/destinations/${detailTrip?.id ?? ''}`}
				>
					{$t('detail.openPage')}
				</a>
				<button
					class="btn rounded-full border-none bg-[#ff6b6b] px-6 text-white hover:bg-[#ff7b7b]"
					on:click={onClose}
					type="button"
				>
					{$t('detail.close')}
				</button>
			</div>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button on:click={onClose}>close</button>
	</form>
</dialog>
