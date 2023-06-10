<script lang="ts">
	import '@fontsource/roboto';
	import type { PageData } from './$types';
	import '../app.css';
	import Alert from '../components/Alert.svelte';
	import Sidebar from '../components/Sidebar.svelte';

	export let data: PageData;
</script>

<div class="min-w-[600px] roboto">
	<Alert />
	<Sidebar />
	<div class="flex bg-white">
		<div class="ml-20 w-full">
			<div class="shadow-lg bg-white px-3 py-2 sticky top-0 flex items-center justify-between">
				<h2 class="text-xl font-semibold">{data.slug ?? 'Recents'}</h2>
				<div class="flex items-center">
					{#if data.slug}
						<a href="/" class="text-gray-700 hover:text-gray-900 hover:underline text-sm">Recents</a
						>
					{/if}
				</div>
			</div>
			<div class="min-h-[600px]">
				<slot />
			</div>
		</div>
	</div>
</div>
