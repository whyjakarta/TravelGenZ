<script lang="ts">
	import { locale, localize, t } from '$lib/i18n';

	export let reviews: any[] = [];
	export let ratingStars: number[] = [];
</script>

<section id="reviews" class="container mx-auto px-6 pb-16">
	<div class="text-center">
		<h2 class="font-display text-3xl font-semibold md:text-4xl">
			{$t('reviews.title')}
			<span class="text-transparent bg-gradient-to-r from-rose-400 to-emerald-400 bg-clip-text">
				{$t('reviews.titleAccent')}
			</span>
		</h2>
		<p class="mx-auto mt-3 max-w-2xl text-sm text-slate-500">
			{$t('reviews.subtitle')}
		</p>
	</div>

	<div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
		{#each reviews as review}
			<article class="card bg-white shadow-lg">
				<div class="card-body gap-4">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-3">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-amber-300 text-sm font-semibold text-white"
							>
								{review.initials}
							</div>
							<div>
								<p class="text-sm font-semibold">{review.name}</p>
								<span class="badge badge-success badge-sm">{localize(review.badge, $locale)}</span>
							</div>
						</div>
					</div>
					<p class="text-sm text-slate-600">{localize(review.text, $locale)}</p>
					<div class="flex items-center justify-between text-xs text-slate-400">
						<div class="flex items-center gap-2">
							{#each ratingStars as star}
								<svg
									viewBox="0 0 24 24"
									class={`h-4 w-4 ${star <= review.rating ? 'text-amber-400' : 'text-slate-200'}`}
									fill="currentColor"
								>
									<path
										d="M12 17.3l-6.18 3.72 1.64-7.03-5.46-4.73 7.19-.62L12 2l2.81 6.64 7.19.62-5.46 4.73 1.64 7.03z"
									/>
								</svg>
							{/each}
							<span class="text-slate-500">{review.rating}.0</span>
						</div>
						<span>{review.date}</span>
					</div>
				</div>
			</article>
		{/each}
	</div>

	<div class="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
		<span class="text-xl font-semibold text-rose-400">5K+</span>
		<span class="text-xl font-semibold text-emerald-400">4.9</span>
		<span class="text-xl font-semibold text-amber-400">98%</span>
	</div>
</section>
