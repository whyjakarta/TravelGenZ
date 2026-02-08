<script lang="ts">
	import { locale, localize, t } from '$lib/i18n';

	export let dialog: HTMLDialogElement | null = null;
	export let bookingTripSafe: { name?: { id: string; en: string } | string; price?: number } | null = null;
	export let bookingName = '';
	export let bookingEmail = '';
	export let bookingPhone = '';
	export let bookingParticipants = 1;
	export let bookingAddress = '';
	export let bookingDate = '';
	export let bookingRequests = '';
	export let bookingCount = 1;
	export let bookingTotal = 0;
	export let rupiah: Intl.NumberFormat;
	export let onClose: () => void = () => {};
	export let onConfirm: () => void = () => {};
</script>

<dialog class="modal" bind:this={dialog}>
	<div class="modal-box max-w-xl rounded-[2rem] bg-white p-6 shadow-2xl">
		<div class="flex items-start justify-between gap-4">
			<div>
				<h3 class="text-2xl font-semibold text-slate-900">{$t('booking.title')}</h3>
				<p class="text-sm text-slate-500">{localize(bookingTripSafe?.name ?? '', $locale)}</p>
			</div>
			<button
				class="btn rounded-full text-slate-500 btn-ghost btn-sm hover:text-slate-700"
				on:click={onClose}
				type="button"
			>
				x
			</button>
		</div>

		<form class="mt-6 space-y-4">
			<label class="block text-xs font-semibold text-slate-500">
				{$t('booking.fullName')}
				<input
					class="mt-2 w-full rounded-xl border border-slate-200 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-white/60"
					placeholder={$t('booking.fullNamePlaceholder')}
					bind:value={bookingName}
				/>
			</label>
			<label class="block text-xs font-semibold text-slate-500">
				{$t('booking.email')}
				<input
					class="mt-2 w-full rounded-xl border border-slate-200 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-white/60"
					type="email"
					placeholder={$t('booking.emailPlaceholder')}
					bind:value={bookingEmail}
				/>
			</label>
			<label class="block text-xs font-semibold text-slate-500">
				{$t('booking.phone')}
				<input
					class="mt-2 w-full rounded-xl border border-slate-200 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-white/60"
					placeholder={$t('booking.phonePlaceholder')}
					bind:value={bookingPhone}
				/>
			</label>
			<label class="block text-xs font-semibold text-slate-500">
				{$t('booking.participants')}
				<input
					class="mt-2 w-full rounded-xl border border-slate-200 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-white/60"
					type="number"
					min="1"
					bind:value={bookingParticipants}
				/>
			</label>
			<label class="block text-xs font-semibold text-slate-500">
				{$t('booking.address')}
				<input
					class="mt-2 w-full rounded-xl border border-slate-200 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-white/60"
					placeholder={$t('booking.addressPlaceholder')}
					bind:value={bookingAddress}
				/>
			</label>
			<label class="block text-xs font-semibold text-slate-500">
				{$t('booking.date')}
				<input
					class="mt-2 w-full rounded-xl border border-slate-200 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-white/60"
					type="date"
					bind:value={bookingDate}
				/>
			</label>
			<label class="block text-xs font-semibold text-slate-500">
				{$t('booking.requests')}
				<textarea
					class="mt-2 min-h-[110px] w-full rounded-xl border border-slate-200 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-white/60"
					placeholder={$t('booking.requestsPlaceholder')}
					bind:value={bookingRequests}
				></textarea>
			</label>
		</form>

		<div class="mt-6 rounded-2xl bg-gradient-to-br from-rose-50 via-white to-emerald-50 p-4">
			<div class="flex items-center justify-between text-sm text-slate-500">
				<span>{$t('booking.pricePerPerson')}</span>
				<span class="font-semibold text-slate-900"
					>{rupiah.format(bookingTripSafe?.price ?? 0)}</span
				>
			</div>
			<div class="mt-2 flex items-center justify-between text-sm text-slate-500">
				<span>{$t('booking.participantsLabel')}</span>
				<span class="font-semibold text-slate-900">x{bookingCount}</span>
			</div>
			<div class="mt-4 flex items-center justify-between text-base font-semibold text-slate-900">
				<span>{$t('booking.totalAmount')}</span>
				<span class="text-2xl text-[#ff7a7a]">{rupiah.format(bookingTotal)}</span>
			</div>
		</div>

		<div class="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-xs text-amber-800">
			<span class="font-semibold">{$t('booking.paymentInfoTitle')}</span>
			{$t('booking.paymentInfoText')}
		</div>

		<div class="mt-6 flex flex-col gap-3 sm:flex-row">
			<button
				class="btn flex-1 rounded-full border border-[#ff7a7a] bg-transparent text-[#ff7a7a] hover:bg-[#ff7a7a]/10"
				on:click={onClose}
				type="button"
			>
				{$t('booking.cancel')}
			</button>
			<button
				class="btn flex-1 rounded-full border-none bg-[#ff6b6b] text-white hover:bg-[#ff7b7b]"
				on:click={onConfirm}
				type="button"
			>
				{$t('booking.confirm')}
			</button>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button on:click={onClose}>close</button>
	</form>
</dialog>
