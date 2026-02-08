<script lang="ts">
	import { locale, localize, t } from '$lib/i18n';

	export let gallery: { title: { id: string; en: string } | string; location: { id: string; en: string } | string; image: string }[] = [];
</script>

<section id="gallery" class="container mx-auto px-6 pb-16">
	<div class="pt-6 text-center">
		<p class="text-base font-semibold uppercase tracking-[0.5em] text-slate-400">{$t('gallery.kicker')}</p>
		<h2 class="mt-2 font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
			{$t('gallery.title')}
		</h2>
		<p class="mx-auto mt-3 max-w-2xl text-base text-slate-500 md:text-lg">
			{$t('gallery.subtitle')}
		</p>
	</div>

	<div class="mt-8 grid gap-6 md:grid-cols-3">
		{#each gallery as item, index}
			<article
				class={`group overflow-hidden rounded-3xl shadow-lg ${
					index === 1 ? 'md:row-span-2' : ''
				}`}
			>
				<div class={`relative h-full w-full ${index === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
					<img
						src={item.image}
						alt={localize(item.title, $locale)}
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
					<div class="absolute bottom-4 left-4 right-4 text-white">
						<p class="text-sm font-semibold">{localize(item.title, $locale)}</p>
						<p class="text-xs text-white/80">{localize(item.location, $locale)}</p>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
