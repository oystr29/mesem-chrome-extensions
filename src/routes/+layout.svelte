<script lang="ts">
	// @ts-ignore
	import { tooltip } from '@svelte-plugins/tooltips';
	import '@fontsource/roboto';
	import type { PageData } from './$types';
	import '../app.css';
	import Alert from '../components/Alert.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import HomeIcon from '../components/icons/HomeIcon.svelte';
	import GithubIcon from '../components/icons/GithubIcon.svelte';

	export let data: PageData;
</script>

<div class="min-w-[600px] roboto">
	<Alert />
	<Sidebar />
	<div class="flex bg-white">
		<div class="ml-20 w-full">
			<div class="shadow-lg bg-white px-3 py-2 sticky top-0 flex items-center justify-between">
				<h2 class="text-xl font-semibold">{data.slug ?? 'Latest'}</h2>
				<div class="flex items-center pr-10">
					<a
						use:tooltip={{
							arrow: false,
							content: 'Latest',
							position: 'bottom',
							autoposition: true,
							align: 'center',
							animation: 'fade'
						}}
						href="/"
						class="text-gray-700 mr-3 group hover:text-gray-900 hover:underline text-sm"
					>
						<HomeIcon isActive={!data.slug} />
					</a>
					<a
						use:tooltip={{
							arrow: false,
							content: 'Github',
							position: 'bottom',
							autoposition: true,
							align: 'center',
							animation: 'fade'
						}}
						target="_blank"
						href="https://github.com/oktoala/mesem-chrome-extensions"
					>
						<GithubIcon />
					</a>
				</div>
			</div>
			<div class="min-h-screen h-auto">
				<slot />
			</div>
		</div>
	</div>
</div>
