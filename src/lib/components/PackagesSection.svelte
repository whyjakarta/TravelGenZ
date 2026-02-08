<script lang="ts">
	import { locale, localize, t } from '$lib/i18n';

	export let categories: { id: string; label: { id: string; en: string } | string; icon?: string }[] = [];
	export let activeCategory = 'all';
	export let searchTerm = '';
	export let filteredPackages: any[] = [];
	export let difficultyBadge: Record<string, string> = {};
	export let ratingStars: number[] = [];
	export let onView: (trip: any) => void = () => {};
	export let onBook: (trip: any) => void = () => {};
	export let rupiah: Intl.NumberFormat;
</script>

<section id="packages" class="container mx-auto px-6 pb-16">
	<div class="text-center">
		<h2
			class="font-display text-5xl font-extrabold tracking-tight text-transparent [background-image:linear-gradient(90deg,#ff6b6b,#f7b733,#34d399,#38bdf8,#7c3aed)] bg-clip-text md:text-6xl lg:text-7xl"
		>
			{$t('packages.title')}
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-base text-slate-500">
			{$t('packages.subtitle')}
		</p>
	</div>

	<div class="mt-10 flex flex-wrap justify-center gap-4">
		{#each categories as category}
			<button
				class={`btn rounded-full border border-slate-200 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white ${
					activeCategory === category.id
						? 'border-transparent bg-gradient-to-r from-emerald-400 to-sky-400 text-white shadow-lg'
						: ''
				}`}
				on:click={() => (activeCategory = category.id)}
			>
				{localize(category.label, $locale)}
			</button>
		{/each}
	</div>

	<div class="mt-6 flex flex-wrap items-center justify-center gap-4">
		<div class="w-full max-w-lg">
			<div class="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-xl">
				<input
					class="input input-ghost h-8 flex-1 bg-transparent text-sm text-slate-600 placeholder:text-slate-300"
					type="text"
					placeholder={$t('packages.searchPlaceholder')}
					bind:value={searchTerm}
				/>
				<button
					class="btn h-8 w-8 rounded-full border border-slate-200 bg-white p-0 text-slate-500 shadow-sm transition-all duration-300 hover:bg-slate-50"
				>
					<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor">
						<path
							d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 10-.7.7l.3.3v.8L20 20.5 21.5 19 15.5 14zm-6 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<div class="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-2">
		{#each filteredPackages as trip}
			<article
				class="group overflow-hidden rounded-[2rem] bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
			>
				<div class="relative h-56 overflow-hidden">
					<img
						src={trip.image}
						alt={localize(trip.name, $locale)}
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					<div class="absolute left-5 top-5 flex gap-2">
						<span class="badge border-none bg-amber-200 text-[11px] font-semibold text-amber-900">
							{$t('packages.featured')}
						</span>
					</div>
					<div class="absolute right-5 top-5">
						<span class="badge border-none bg-rose-400 text-[11px] font-semibold text-white">
							{$t('packages.save', { percent: trip.discount })}
						</span>
					</div>
				</div>
				<div class="space-y-3 px-7 pb-7 pt-6">
					<div class="flex items-center gap-2">
						<span
							class={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold ${difficultyBadge[trip.difficulty]}`}
						>
							<span class="h-2 w-2 rounded-full bg-current"></span>
							{$t(`difficulty.${trip.difficulty}`).toUpperCase()}
						</span>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-slate-900">{localize(trip.name, $locale)}</h3>
						<p class="mt-2 text-sm text-slate-500">{localize(trip.description, $locale)}</p>
					</div>
					<div class="flex flex-wrap items-center gap-4 text-xs text-slate-500">
						<span class="inline-flex items-center gap-2">
							<svg viewBox="0 0 24 24" class="h-4 w-4 text-slate-400" fill="currentColor">
								<path
									d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
								/>
							</svg>
							{localize(trip.location, $locale)}
						</span>
						<span class="inline-flex items-center gap-2">
							<svg viewBox="0 0 24 24" class="h-4 w-4 text-slate-400" fill="currentColor">
								<path d="M12 6a1 1 0 011 1v4.2l3 1.7a1 1 0 11-1 1.7l-3.5-2a1 1 0 01-.5-.87V7a1 1 0 011-1zm0-4a10 10 0 100 20 10 10 0 000-20z" />
							</svg>
							{localize(trip.days, $locale)}
						</span>
					</div>
					<div class="flex items-center gap-2 text-[11px] text-slate-500">
						<div class="flex items-center gap-1">
							{#each ratingStars as star}
								<svg
									viewBox="0 0 24 24"
									class={`h-4 w-4 ${star <= Math.round(trip.rating) ? 'text-amber-400' : 'text-slate-200'}`}
									fill="currentColor"
								>
									<path
										d="M12 17.3l-6.18 3.72 1.64-7.03-5.46-4.73 7.19-.62L12 2l2.81 6.64 7.19.62-5.46 4.73 1.64 7.03z"
									/>
								</svg>
							{/each}
						</div>
						<span class="text-sm font-semibold text-slate-900">{trip.rating}</span>
						<span>({$t('packages.reviews', { count: trip.reviews })})</span>
					</div>
					<div class="mt-3 flex items-center justify-between gap-3">
						<div>
							<p class="text-xs text-slate-400 line-through">{rupiah.format(trip.original)}</p>
							<p class={`text-3xl font-semibold ${trip.accent}`}>{rupiah.format(trip.price)}</p>
							<p class="text-xs text-slate-500">{$t('packages.perPerson')}</p>
						</div>
						<div class="flex items-center gap-2">
							<button
								class="btn rounded-full border border-slate-200 bg-white px-5 text-slate-700 transition-all duration-300 hover:bg-slate-50"
								on:click={() => onView(trip)}
							>
								{$t('packages.view')}
							</button>
							<button
								class="btn rounded-full border-none bg-[#ff6b6b] px-6 text-white transition-all duration-300 hover:bg-[#ff7b7b]"
								on:click={() => onBook(trip)}
							>
								{$t('packages.bookNow')}
							</button>
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
