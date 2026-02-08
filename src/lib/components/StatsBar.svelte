<script lang="ts">
	import { locale, localize } from '$lib/i18n';

	export let stats: { value: string; label: { id: string; en: string } | string }[] = [];
</script>

<section class="container mx-auto -mt-4 px-6 pb-12 relative z-20">
	<div class="grid gap-4 rounded-3xl bg-white/40 p-6 shadow-xl backdrop-blur md:grid-cols-4">
		{#each stats as stat}
			<div class="rounded-2xl bg-white/25 p-4 text-center shadow-sm">
				<p class="text-2xl font-semibold text-slate-900">{stat.value}</p>
				<p class="text-xs text-slate-500">{localize(stat.label, $locale)}</p>
			</div>
		{/each}
	</div>
</section>
