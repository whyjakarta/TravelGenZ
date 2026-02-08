<script lang="ts">
	import { locale, localize, t } from '$lib/i18n';

	export let packages: any[] = [];
	export let selectedPackageId = '';
	export let selectedPackage: any;
	export let travelers = 1;
	export let addOnOptions: { id: string; label: { id: string; en: string } | string; price: number }[] = [];
	export let addOns: Record<string, boolean> = {};
	export let promoCode = '';
	export let paymentMethods: {
		id: string;
		label: { id: string; en: string } | string;
		note: { id: string; en: string } | string;
	}[] = [];
	export let paymentMethod = 'card';
	export let installmentPlans: {
		id: string;
		label: { id: string; en: string } | string;
		note: { id: string; en: string } | string;
		feeRate: number;
	}[] = [];
	export let installmentPlan = '3x';
	export let baseSubtotal = 0;
	export let addOnTotal = 0;
	export let serviceFee = 0;
	export let promoDiscount = 0;
	export let planFee = 0;
	export let grandTotal = 0;
	export let installmentCount = 1;
	export let dueNow = 0;

	export let rupiah: Intl.NumberFormat;
</script>

<section id="payment" class="bg-[var(--page-bg)] text-slate-900">
	<div class="container mx-auto max-w-5xl px-6 py-14">
		<div class="rounded-[2.5rem] bg-white p-8 shadow-[0_25px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 md:p-10">
			<div class="flex flex-wrap items-center justify-between gap-4">
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">{$t('payment.kicker')}</p>
					<h2 class="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
						{$t('payment.title')}
					</h2>
				</div>
				<span class="badge border-none bg-emerald-100 px-4 py-3 text-emerald-700">
					{$t('payment.noDatabase')}
				</span>
			</div>

			<div class="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
				<div class="space-y-5">
					<div class="flex items-center gap-4">
					<div class="flex items-center gap-2 text-xs text-slate-500">
						<span class="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-white">1</span>
						{$t('payment.step.choose')}
					</div>
					<div class="h-px flex-1 bg-slate-200"></div>
					<div class="flex items-center gap-2 text-xs text-slate-500">
						<span class="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-white">2</span>
						{$t('payment.step.customize')}
					</div>
					<div class="h-px flex-1 bg-slate-200"></div>
					<div class="flex items-center gap-2 text-xs text-slate-500">
						<span class="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-white">3</span>
						{$t('payment.step.pay')}
					</div>
				</div>

					<div class="grid gap-4 md:grid-cols-2">
					<label class="form-control">
						<div class="label text-[11px] text-slate-500">{$t('payment.selectPackage')}</div>
						<select
							class="select select-bordered w-full bg-white text-slate-700"
							bind:value={selectedPackageId}
						>
							{#each packages as trip}
								<option value={trip.id}>{localize(trip.name, $locale)}</option>
							{/each}
						</select>
					</label>
					<label class="form-control">
						<div class="label text-[11px] text-slate-500">{$t('payment.travelers')}</div>
						<input
							class="input input-bordered w-full bg-white text-slate-700"
							type="number"
							min="1"
							bind:value={travelers}
						/>
					</label>
				</div>

					<div class="rounded-2xl border border-slate-200 bg-white p-4">
					<p class="text-sm font-semibold text-slate-900">{$t('payment.addons')}</p>
					<div class="mt-3 grid gap-3 md:grid-cols-3">
						{#each addOnOptions as addOn}
							<label
								class="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700"
							>
								<input
									type="checkbox"
									class="checkbox checkbox-sm mt-0.5"
									bind:checked={addOns[addOn.id as keyof typeof addOns]}
								/>
								<span class="flex-1 leading-4">{localize(addOn.label, $locale)}</span>
								<span class="text-[11px] font-semibold text-slate-500">
									+{rupiah.format(addOn.price)}
								</span>
							</label>
						{/each}
					</div>
				</div>

					<div class="grid gap-4 md:grid-cols-2">
					<label class="form-control">
						<div class="label text-[11px] text-slate-500">{$t('payment.promoCode')}</div>
						<input
							class="input input-bordered w-full bg-white text-slate-700"
							placeholder="GENZUP"
							bind:value={promoCode}
						/>
					</label>
					<div class="space-y-2">
						<p class="text-[11px] text-slate-500">{$t('payment.paymentMethod')}</p>
						<div class="grid gap-2">
							{#each paymentMethods as method}
								<label
									class={`flex items-center justify-between rounded-xl border px-3 py-2 text-[11px] transition ${
										paymentMethod === method.id
											? 'border-slate-300 bg-slate-50'
											: 'border-slate-200 bg-white'
									}`}
								>
									<span>
										<span class="font-semibold">{localize(method.label, $locale)}</span>
										<span class="block text-slate-500">{localize(method.note, $locale)}</span>
									</span>
									<input
										type="radio"
										class="radio radio-sm"
										value={method.id}
										bind:group={paymentMethod}
									/>
								</label>
							{/each}
						</div>
					</div>
				</div>

					<div>
					<p class="text-[11px] text-slate-500">{$t('payment.installmentPlan')}</p>
					<div class="join mt-2">
						{#each installmentPlans as item}
							<input
								type="radio"
								name="installment"
								class="btn join-item border-slate-200 bg-white text-[11px] text-slate-700 hover:bg-slate-50"
								value={item.id}
								bind:group={installmentPlan}
								aria-label={localize(item.label, $locale)}
							/>
						{/each}
					</div>
				</div>
				</div>

			<div class="rounded-[2rem] bg-white p-4 text-slate-900 shadow-2xl">
				<div class="flex items-start justify-between">
					<div>
						<p class="text-xs uppercase tracking-[0.3em] text-slate-400">{$t('payment.orderSummary')}</p>
						<h3 class="mt-2 text-base font-semibold">{localize(selectedPackage.name, $locale)}</h3>
						<p class="text-[13px] text-slate-500">{localize(selectedPackage.location, $locale)}</p>
					</div>
					<span class="badge border-none bg-emerald-100 text-emerald-700">{$t('payment.secure')}</span>
				</div>

					<div class="mt-4 space-y-2 text-[13px] text-slate-500">
						<div class="flex items-center justify-between">
							<span>{$t('payment.basePrice')}</span>
							<span class="text-slate-900">{rupiah.format(baseSubtotal)}</span>
						</div>
						<div class="flex items-center justify-between">
							<span>{$t('payment.addonsLabel')}</span>
							<span class="text-slate-900">{rupiah.format(addOnTotal)}</span>
						</div>
						<div class="flex items-center justify-between">
							<span>{$t('payment.serviceFee')}</span>
							<span class="text-slate-900">{rupiah.format(serviceFee)}</span>
						</div>
						<div class="flex items-center justify-between">
							<span>{$t('payment.promo')}</span>
							<span class="text-emerald-600">- {rupiah.format(promoDiscount)}</span>
						</div>
						<div class="flex items-center justify-between">
							<span>{$t('payment.planFee')}</span>
							<span class="text-slate-900">{rupiah.format(planFee)}</span>
						</div>
					</div>

					<div class="mt-3 border-t border-slate-200 pt-3">
						<div class="flex items-center justify-between">
							<span class="text-sm font-semibold text-slate-900">{$t('payment.total')}</span>
							<span class="text-base font-semibold text-slate-900">{rupiah.format(grandTotal)}</span>
						</div>
						<p class="mt-1 text-[11px] text-slate-500">
							{$t('payment.paySchedule', { count: installmentCount, amount: rupiah.format(dueNow) })}
						</p>
					</div>

					<button
						class="btn mt-4 w-full rounded-full border-none bg-[#ff6b6b] text-white hover:bg-[#ff7b7b]"
					>
						{$t('payment.payNow')}
					</button>

					<div class="mt-3 rounded-xl bg-slate-50 p-2.5 text-[11px] text-slate-500">
						{$t('payment.note')}
					</div>
			</div>
		</div>
		</div>
	</div>
</section>
