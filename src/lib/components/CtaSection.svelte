<script lang="ts">
	import { t } from '$lib/i18n';

	export let whatsappNumber = '62881027799877';
</script>

<section class="container mx-auto px-6 pb-16">
	<div class="rounded-[2.5rem] bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-8 py-10 text-white shadow-2xl md:px-12 md:py-12">
		<div class="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
			<div class="max-w-2xl">
				<p class="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">{$t('cta.kicker')}</p>
				<h3 class="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
					{$t('cta.title')}
				</h3>
				<p class="mt-3 text-sm text-white/90 md:text-base">
					{$t('cta.body')}
				</p>
			</div>
			<a
				class="btn rounded-full border-2 border-white bg-white/10 px-8 text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-slate-900"
				href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent($t('cta.whatsappMessage'))}`}
				target="_blank"
				rel="noreferrer"
			>
				{$t('cta.button')}
			</a>
		</div>
	</div>
</section>
