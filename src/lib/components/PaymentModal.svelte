<script lang="ts">
	import { locale, localize, t } from '$lib/i18n';

	export let dialog: HTMLDialogElement | null = null;
	export let bookingName = '';
	export let paymentRef = '';
	export let paymentExpires = '';
	export let paymentItems: { name: { id: string; en: string } | string; price: number }[] = [];
	export let paymentParticipants = 1;
	export let paymentTotal = 0;
	export let rupiah: Intl.NumberFormat;
	export let onClose: () => void = () => {};
	export let onConfirm: () => void = () => {};
</script>

<dialog class="modal" bind:this={dialog}>
	<div class="modal-box max-w-xl rounded-[2rem] bg-white p-6 shadow-2xl">
		<div class="flex items-start justify-between gap-4">
			<div>
				<h3 class="text-xl font-semibold text-slate-900">{$t('paymentModal.title')}</h3>
				<p class="text-sm text-slate-500">
					{$t('paymentModal.subtitle', { name: bookingName || 'Traveler' })}
				</p>
			</div>
			<button
				class="btn rounded-full text-slate-500 btn-ghost btn-sm hover:text-slate-700"
				on:click={onClose}
				type="button"
			>
				x
			</button>
		</div>

		<div class="mt-5 rounded-2xl bg-slate-50 p-4 text-sm">
			<div class="flex items-center justify-between">
				<span class="text-slate-500">{$t('paymentModal.reference')}</span>
				<span class="font-semibold text-slate-900">{paymentRef}</span>
			</div>
			<div class="mt-2 flex items-center justify-between">
				<span class="text-slate-500">{$t('paymentModal.status')}</span>
				<span class="badge border-none bg-emerald-100 text-emerald-700">
					{$t('paymentModal.statusPending')}
				</span>
			</div>
			<div class="mt-2 flex items-center justify-between">
				<span class="text-slate-500">{$t('paymentModal.expires')}</span>
				<span class="font-semibold text-slate-900">{paymentExpires}</span>
			</div>
		</div>

		<div class="mt-5 space-y-3">
			<p class="text-sm font-semibold text-slate-700">{$t('paymentModal.tripSummary')}</p>
			{#each paymentItems as item}
				<div
					class="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
				>
					<span class="font-semibold text-slate-900">{localize(item.name, $locale)}</span>
					<span class="text-slate-600">{rupiah.format(item.price)}</span>
				</div>
			{/each}
			<div class="flex items-center justify-between text-sm text-slate-600">
				<span>{$t('paymentModal.participants')}</span>
				<span class="font-semibold text-slate-900">x{paymentParticipants}</span>
			</div>
			<div
				class="flex items-center justify-between rounded-xl bg-gradient-to-r from-rose-50 via-white to-emerald-50 px-4 py-3 text-base font-semibold text-slate-900"
			>
				<span>{$t('paymentModal.total')}</span>
				<span class="text-[#ff7a7a]">{rupiah.format(paymentTotal)}</span>
			</div>
		</div>

		<div class="mt-5 rounded-2xl bg-slate-900 px-4 py-4 text-sm text-white">
			<p class="text-xs tracking-[0.3em] text-white/60 uppercase">{$t('paymentModal.methodTitle')}</p>
			<div class="mt-3 space-y-2">
				<div class="flex items-center justify-between">
					<span>{$t('paymentModal.bankVA')}</span>
					<span class="font-semibold">BCA</span>
				</div>
				<div class="flex items-center justify-between">
					<span>{$t('paymentModal.vaNumber')}</span>
					<span class="font-semibold">8899 77 123 456 789</span>
				</div>
				<div class="flex items-center justify-between">
					<span>{$t('paymentModal.amount')}</span>
					<span class="font-semibold">{rupiah.format(paymentTotal)}</span>
				</div>
			</div>
		</div>

		<div class="mt-6 flex flex-wrap justify-end gap-3">
			<button
				class="btn rounded-full border border-slate-200 bg-white px-6 text-slate-700 hover:bg-slate-50"
				on:click={onClose}
				type="button"
			>
				{$t('paymentModal.close')}
			</button>
			<button
				class="btn rounded-full border-none bg-[#ff6b6b] px-6 text-white transition-transform duration-150 hover:bg-[#ff7b7b] active:scale-95"
				on:click={onConfirm}
				type="button"
			>
				{$t('paymentModal.confirm')}
			</button>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button on:click={onClose}>close</button>
	</form>
</dialog>
