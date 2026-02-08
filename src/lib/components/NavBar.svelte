<script lang="ts">
	import { locale, localeOptions, localize, t } from '$lib/i18n';

	export let navItems: { id: string; label: { id: string; en: string } }[] = [];
	export let theme: 'light' | 'dark' = 'light';
	export let onToggleTheme: () => void = () => {};
	export let onBookNow: () => void = () => {};
	export let onOpenMobileMenu: () => void = () => {};
</script>

<nav class="container mx-auto flex items-center justify-between px-6 py-6 text-white">
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
			<p class="text-lg font-semibold">TravelGenZ</p>
			<p class="text-xs text-white/80">{$t('nav.tagline')}</p>
		</div>
	</div>

	<div class="hidden items-center gap-8 text-sm font-medium md:flex">
	{#each navItems as item}
		<a class="text-white/80 transition hover:text-white" href={`#${item.id}`}>
			{localize(item.label, $locale)}
		</a>
	{/each}
	</div>

	<button
		class="btn ml-auto text-white btn-ghost btn-sm md:hidden"
		type="button"
		aria-label="Open menu"
		on:click={onOpenMobileMenu}
	>
		<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>

	<div class="flex items-center gap-3">
		<div class="dropdown dropdown-end hidden md:block">
			<button
				class="btn btn-ghost btn-sm text-white/80 hover:text-white"
				aria-label="Switch language"
				type="button"
			>
				{$locale.toUpperCase()}
			</button>
			<ul
				class="menu dropdown-content z-[60] mt-2 w-36 rounded-xl bg-slate-900/90 p-2 text-sm text-white shadow-xl"
			>
				{#each localeOptions as option}
					<li>
						<button
							class={`w-full rounded-lg px-3 py-2 text-left hover:bg-white/10 ${
								$locale === option.id ? 'bg-white/10 text-white' : 'text-white/80'
							}`}
							type="button"
							on:click={() => locale.set(option.id)}
						>
							{option.label}
						</button>
					</li>
				{/each}
			</ul>
		</div>
		<button
			class="btn btn-ghost btn-sm hidden text-white/80 hover:text-white md:flex"
			on:click={onToggleTheme}
			type="button"
			aria-pressed={theme === 'dark'}
			aria-label="Toggle theme"
		>
			{#if theme === 'dark'}
				<svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
					<path d="M21 14.5A9 9 0 119.5 3a7 7 0 1011.5 11.5z" />
				</svg>
			{:else}
				<svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
					<path
						d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-16a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm10-8a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM5 12a1 1 0 01-1 1H2a1 1 0 110-2h2a1 1 0 011 1zm12.07-5.07a1 1 0 010 1.41l-1.42 1.42a1 1 0 11-1.41-1.42l1.41-1.41a1 1 0 011.42 0zM6.76 17.24a1 1 0 010 1.41l-1.42 1.42a1 1 0 11-1.41-1.42l1.41-1.41a1 1 0 011.42 0zM17.24 17.24a1 1 0 011.41 0l1.42 1.42a1 1 0 11-1.42 1.41l-1.41-1.41a1 1 0 010-1.42zM6.76 6.76a1 1 0 01-1.41 0L3.93 5.34a1 1 0 111.41-1.41l1.42 1.41a1 1 0 010 1.42z"
					/>
				</svg>
			{/if}
		</button>
		<button
			class="btn-shock btn rounded-full border-none bg-[#ff6b6b] px-6 text-white transition-transform duration-150 hover:bg-[#ff7b7b] active:scale-95"
			on:click={onBookNow}
		>
			{$t('nav.bookNow')}
		</button>
	</div>
</nav>
