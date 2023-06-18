<script lang="ts">
	import { mesem } from './../data/store';
	// @ts-ignore
	import { tooltip } from '@svelte-plugins/tooltips';
	import '@fontsource/roboto';
  import TrtIcon from '../../static/trbtn-icon.png'
	import type { PageData } from './$types';
	import '../app.css';
	import Alert from '../components/Alert.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import HomeIcon from '../components/icons/HomeIcon.svelte';
	import GithubIcon from '../components/icons/GithubIcon.svelte';
	import SunIcon from '../components/icons/SunIcon.svelte';
	import { browser } from '$app/environment';
	import MoonIcon from '../components/icons/MoonIcon.svelte';

	let darkMode = false;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			darkMode = true;
		} else {
			darkMode = false;
		}
	}

	export let data: PageData;

</script>



<div class="min-w-[600px] roboto">
	<Alert />
	<Sidebar />
	<div class="flex bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
		<div class="ml-20 w-full">
			<div
				class="shadow-lg bg-white dark:bg-gray-950 text-black dark:text-white px-3 py-2 sticky top-0 flex items-center justify-between"
			>
				<h2 class="text-xl font-semibold">{data.slug ? mesem[data.slug].text : 'Latest'}</h2>
				<div class="flex items-center pr-2">
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
						class="text-gray-700 mr-3 border-r pr-5 border-r-gray-600 group hover:text-gray-900 hover:underline text-sm"
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
						class="mr-3"
						href="https://github.com/oktoala/mesem-chrome-extensions"
					>
						<GithubIcon />
					</a>
					<button class="" on:click={handleSwitchDarkMode}>
						{#if darkMode}
							<MoonIcon />
						{:else}
							<SunIcon />
						{/if}
					</button>
          <a target="_blank" rel="noopener noreferrer" href="https://trakteer.id/oktavian_yoga/tip" class="h-6 ml-3">
            <img class="h-6" src={TrtIcon} alt="Traktir Icon" />
          </a>
				</div>
			</div>
			<div class="min-h-screen mx-5 h-auto">
				<slot />
			</div>
		</div>
	</div>
</div>
