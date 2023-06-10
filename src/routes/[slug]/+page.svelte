<script lang="ts">
	import { recents, alerts } from '../../data/store';
	import type { PageData } from './$types';
	import { copy } from 'svelte-copy';

	export let data: PageData;

	const onCopy = (e: CustomEvent<string>): void => {
		let temp = $recents ?? [];
		const element = e.detail;
		if (temp.indexOf(element) === 0) {
			return;
		}
		if (temp.includes(element)) {
			temp.splice(temp.indexOf(element), 1);
			temp.unshift(element);
		} else if (temp.length === 32) {
			temp.pop();
			temp.unshift(element);
		} else {
			temp.unshift(element);
		}
		$recents = temp;
	};
</script>

<div class="my-grid mt-4">
	{#each data.data as d}
		<button
			class="btn-grid"
			on:svelte-copy={(event) => ($alerts = event.detail)}
			on:svelte-copy={onCopy}
			use:copy={d}
		>
			<div class="text-left whitespace-pre">
				{@html d.replace(/\n/g, '<br />')}
			</div>
		</button>
	{/each}
</div>
