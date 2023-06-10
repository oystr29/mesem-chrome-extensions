<script>
	import { page } from '$app/stores';
	// @ts-ignore
	import { tooltip } from '@svelte-plugins/tooltips';

	const smilesTabs = [
		{
			title: '(◠‿◕)',
			label: 'Smile',
			color: 'bg-orange-500'
		},
		{
			title: '(•ө•)♡',
			// label: chrome.i18n.getMessage('love'),
			label: 'Love',
			color: 'bg-red-500'
		},
		{
			title: '(^o^)',
			// label: chrome.i18n.getMessage('hugging'),
			label: 'Hugging',
			color: 'bg-lime-500'
		},
		{
			title: 'ᕙ~.~ᕗ',
			// label: chrome.i18n.getMessage('flexing'),
			label: 'Flexing',
			color: 'bg-yellow-700'
		},
		{
			title: '(◕ᴥ◕)',
			// label: chrome.i18n.getMessage('animals'),
			label: 'Animals',
			color: 'bg-green-500'
		},
		{
			title: '(>0<)',
			// label: chrome.i18n.getMessage('suprise'),
			label: 'Suprise',
			color: 'bg-blue-500'
		},
		{
			title: '♪\\^ω^\\',
			// label: chrome.i18n.getMessage('dancing'),
			label: 'Dancing',
			color: 'bg-fuchsia-500'
		},
		{
			title: '乁•_•ㄏ',
			// label: chrome.i18n.getMessage('shruggie'),
			label: 'Shruggie',
			color: 'bg-neutral-500'
		},
		{
			title: '┻━┻',
			// label: chrome.i18n.getMessage('table_flip'),
			label: 'Table',
			color: 'bg-rose-500'
		},
		{
			title: 'ತ_ʖತ',
			// label: chrome.i18n.getMessage('look_disapproving'),
			label: 'Disapprove',
			color: 'bg-purple-500'
		},
		{
			title: '(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)',
			// label: chrome.i18n.getMessage('crying'),
			label: 'Crying',
			color: 'bg-cyan-500'
		},
		{
			title: '(⊙_◎)',
			// label: chrome.i18n.getMessage('nervous'),
			label: 'Nervous',
			color: 'bg-amber-600'
		},
		{
			title: '☞￣ᴥ￣☞',
			// label: chrome.i18n.getMessage('pointers'),
			label: 'Pointers',
			color: 'bg-slate-800'
		},
		{
			title: `(⁠ •_•⁠)`,
			label: 'Human',
			color: 'bg-lime-700'
		}
	];
</script>

<aside class="w-20 h-screen top-0 h-600 pb-10 px-2 z-10 bg-whites shadow-lg fixed">
	<div class="flex-col flex">
		{#each smilesTabs as smile, i}
			<a
				href={`/${smile.label}`}
				class={`sidebar-button group ${
					$page.url.pathname.includes(smile.label) ? `${smile.color} active` : 'inactive'
				}`}
			>
				{smile.title}
				<span class="tooltip group-hover:scale-100">{smile.label}</span>
			</a>
		{/each}
	</div>
</aside>
