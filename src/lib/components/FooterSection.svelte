<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<footer id="contact" class="bg-slate-950 text-white">
	<div class="container mx-auto grid gap-8 px-6 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
		<div>
			<div class="flex items-center gap-3">
				<div
					class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-violet-400 to-emerald-300"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6 text-white" fill="currentColor">
						<path
							d="M21 11.5l-6.5 1.3-4.6 4.6-.8-.4 2.3-4.7-3.2-3.2-4.7 2.3-.4-.8 4.6-4.6 1.3-6.5 1.2.6 2.3 5.1 5.1 2.3.6 1.3z"
						/>
					</svg>
				</div>
				<div>
					<p class="text-base font-semibold">TravelGenZ</p>
					<p class="text-xs text-white/60">{$t('footer.tagline')}</p>
				</div>
			</div>
			<p class="mt-4 text-sm text-white/70">
				{$t('footer.description')}
			</p>
			<div class="mt-5 flex gap-3">
				<span class="badge badge-outline text-white">Instagram</span>
				<span class="badge badge-outline text-white">TikTok</span>
				<span class="badge badge-outline text-white">YouTube</span>
			</div>
		</div>
		<div>
			<p class="text-sm font-semibold">{$t('footer.quickLinks')}</p>
			<div class="mt-3 flex flex-col gap-2 text-sm text-white/70">
				<span>{$t('nav.home')}</span>
				<span>{$t('nav.packages')}</span>
				<span>{$t('footer.aboutUs')}</span>
				<span>{$t('nav.reviews')}</span>
				<span>{$t('nav.contact')}</span>
			</div>
		</div>
		<div>
			<p class="text-sm font-semibold">{$t('footer.support')}</p>
			<div class="mt-3 flex flex-col gap-2 text-sm text-white/70">
				<span>{$t('footer.helpCenter')}</span>
				<span>{$t('footer.termsConditions')}</span>
				<span>{$t('footer.privacyPolicy')}</span>
				<span>{$t('footer.cancelPolicy')}</span>
				<span>{$t('footer.faq')}</span>
			</div>
		</div>
		<div>
			<p class="text-sm font-semibold">{$t('footer.newsletter')}</p>
			<p class="mt-2 text-sm text-white/70">{$t('footer.newsletterDesc')}</p>
			<div class="mt-4 flex gap-2">
				<input
					class="input input-bordered w-full bg-white/10 text-white"
					placeholder={$t('footer.emailPlaceholder')}
				/>
				<button class="btn rounded-full border-none bg-[#facc15] px-6 text-slate-900">
					{$t('footer.subscribe')}
				</button>
			</div>
		</div>
	</div>
	<div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
	<div class="container mx-auto flex flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/60 md:flex-row">
		<span>{$t('footer.rights')}</span>
		<div class="flex items-center gap-4">
			<span>{$t('footer.terms')}</span>
			<span>{$t('footer.privacy')}</span>
			<span>{$t('footer.cookies')}</span>
		</div>
	</div>
</footer>
