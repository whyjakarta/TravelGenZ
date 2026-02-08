<script lang="ts">
	import { locale, localize, t } from '$lib/i18n';

	export let dialog: HTMLDialogElement | null = null;
	export let cartItems: { id: string; name: { id: string; en: string } | string; price: number; image: string }[] = [];
	export let selectedCartIds: string[] = [];
	export let cartParticipants: Record<string, number> = {};
	export let rupiah: Intl.NumberFormat;
	export let onClose: () => void = () => {};
	export let onCheckout: () => void = () => {};
	export let onRemove: (id: string) => void = () => {};
</script>

<dialog class="modal" bind:this={dialog}>
	<div class="modal-box max-w-lg rounded-[2rem] bg-white p-6 shadow-2xl">
		<div class="flex items-start justify-between">
			<div>
				<h3 class="text-xl font-semibold text-slate-900">{$t('cart.title')}</h3>
				<p class="text-sm text-slate-500">{$t('cart.subtitle')}</p>
			</div>
			<button
				class="btn rounded-full text-slate-500 btn-ghost btn-sm hover:text-slate-700"
				on:click={onClose}
				type="button"
			>
				x
			</button>
		</div>

		<div class="mt-6 space-y-4">
			{#if cartItems.length === 0}
				<p class="text-sm text-slate-500">{$t('cart.empty')}</p>
			{:else}
				{#each cartItems as item, index}
					<div class="flex items-center gap-4">
						<input
							type="checkbox"
							class="checkbox checkbox-sm border-slate-300 text-emerald-500 [--chkbg:theme(colors.emerald.500)] [--chkfg:theme(colors.white)]"
							value={item.id}
							bind:group={selectedCartIds}
						/>
						<img src={item.image} alt={localize(item.name, $locale)} class="h-14 w-14 rounded-full object-cover" />
						<div class="flex-1">
							<p class="text-base font-semibold text-slate-900">{localize(item.name, $locale)}</p>
							<p class="text-sm text-slate-500">{rupiah.format(item.price)}</p>
							<label class="mt-3 flex items-center gap-2 text-xs text-slate-500">
								{$t('cart.participants')}
								<input
									class="input input-bordered input-xs w-16 bg-transparent text-slate-700 placeholder:text-slate-400"
									type="number"
									min="1"
									bind:value={cartParticipants[item.id]}
								/>
							</label>
						</div>
						<button
							class="btn text-slate-500 btn-ghost btn-sm hover:text-rose-500"
							on:click={() => onRemove(item.id)}
							type="button"
						>
							<svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
								<path
									d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v8h-2V9zm4 0h2v8h-2V9zM7 9h2v8H7V9zm2 10h6a2 2 0 002-2V9H7v8a2 2 0 002 2z"
								/>
							</svg>
						</button>
					</div>
					{#if index < cartItems.length - 1}
						<div class="border-t border-dashed border-slate-200"></div>
					{/if}
				{/each}
			{/if}
		</div>

		<div class="mt-6 flex flex-wrap justify-end gap-3">
			<button
				class="btn rounded-full border border-slate-200 bg-white px-6 text-slate-700 hover:bg-slate-50"
				on:click={onClose}
				type="button"
			>
				{$t('cart.close')}
			</button>
			<button
				class="btn rounded-full border-none bg-[#ff6b6b] px-6 text-white transition-transform duration-150 hover:bg-[#ff7b7b] active:scale-95 disabled:opacity-60"
				on:click={onCheckout}
				disabled={cartItems.length === 0}
				type="button"
			>
				{$t('cart.checkout')}
			</button>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button on:click={onClose}>close</button>
	</form>
</dialog>
