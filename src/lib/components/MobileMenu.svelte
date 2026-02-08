<script lang="ts">
	import { locale, localeOptions, localize, t } from '$lib/i18n';

	export let open = false;
	export let links: { label: { id: string; en: string } | string; href: string }[] = [];
	export let theme: 'light' | 'dark' = 'light';
	export let onClose: () => void = () => {};
	export let onBookNow: () => void = () => {};
	export let onToggleTheme: () => void = () => {};
</script>

{#if open}
	<div class="fixed inset-0 z-50 md:hidden">
		<button
			class="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
			on:click={onClose}
			aria-label="Close menu"
		></button>
		<aside class="absolute top-0 left-0 h-full w-[78%] max-w-xs bg-white shadow-2xl">
			<div class="flex items-center justify-between border-b border-slate-200 px-6 py-5">
				<div class="flex items-center gap-3 text-slate-900">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-violet-400 to-emerald-300 text-white"
					>
						<svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
							<path
								d="M21 11.5l-6.5 1.3-4.6 4.6-.8-.4 2.3-4.7-3.2-3.2-4.7 2.3-.4-.8 4.6-4.6 1.3-6.5 1.2.6 2.3 5.1 5.1 2.3.6 1.3z"
							/>
						</svg>
					</div>
					<span class="text-lg font-semibold">TravelGenZ</span>
				</div>
				<button
					class="btn rounded-full text-slate-500 btn-ghost btn-sm hover:text-slate-700"
					on:click={onClose}
					type="button"
				>
					x
				</button>
			</div>

			<nav class="divide-y divide-slate-200">
				{#each links as link}
					<a
						class="block px-6 py-4 text-base font-medium text-slate-700 hover:bg-slate-50"
						href={link.href}
						on:click={onClose}
					>
						{localize(link.label, $locale)}
					</a>
				{/each}
			</nav>

			<div class="px-6 py-6">
				<div class="mb-4 flex items-center gap-2">
					{#each localeOptions as option}
						<button
							class={`btn flex-1 rounded-full btn-sm ${
								$locale === option.id
									? 'border-none bg-slate-900 text-white'
									: 'border border-slate-200 bg-white text-slate-700'
							}`}
							type="button"
							on:click={() => locale.set(option.id)}
						>
							{option.label}
						</button>
					{/each}
				</div>
				<button
					class="btn w-full rounded-full border-none bg-[#ff6b6b] text-white hover:bg-[#ff7b7b]"
					on:click={() => {
						onClose();
						onBookNow();
					}}
					type="button"
				>
					{$t('nav.bookNow')}
				</button>
				<button
					class="btn mt-3 w-full rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
					on:click={onToggleTheme}
					type="button"
				>
					{theme === 'dark' ? $t('theme.switchToLight') : $t('theme.switchToDark')}
				</button>
				<p class="mt-3 text-xs text-slate-500">
					{$t('mobile.note')}
				</p>
			</div>
		</aside>
	</div>
{/if}
