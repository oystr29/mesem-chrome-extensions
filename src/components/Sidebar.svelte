<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	const smilesTabs = [
		{
			title: '(◠‿◕)',
			label: 'Smile',
			text: browser ? chrome.i18n.getMessage('smilling') : 'Smile',
			color: 'bg-orange-500'
		},
		{
			title: '(•ө•)♡',
			text: browser ? chrome.i18n.getMessage('love') : 'Loved',
			label: 'Love',
			color: 'bg-red-500'
		},
		{
			title: '(^o^)',
			text: browser ? chrome.i18n.getMessage('hugging') : 'Hugging',
			label: 'Hugging',
			color: 'bg-lime-500'
		},
		{
			title: 'ᕙ~.~ᕗ',
			text: browser ? chrome.i18n.getMessage('flexing') : 'Flexing',
			label: 'Flexing',
			color: 'bg-yellow-700'
		},
		{
			title: '(◕ᴥ◕)',
			text: browser ? chrome.i18n.getMessage('animals') : 'Animals',
			label: 'Animals',
			color: 'bg-green-500'
		},
		{
			title: '(>0<)',
			text: browser ? chrome.i18n.getMessage('suprise') : 'Suprise',
			label: 'Suprise',
			color: 'bg-blue-500'
		},
		{
			title: '♪\\^ω^\\',
			text: browser ? chrome.i18n.getMessage('dancing') : 'Dancing',
			label: 'Dancing',
			color: 'bg-fuchsia-500'
		},
		{
			title: '乁•_•ㄏ',
			text: browser ? chrome.i18n.getMessage('shruggie') : 'Shruggie',
			label: 'Shruggie',
			color: 'bg-neutral-500'
		},
		{
			title: '┻━┻',
			text: browser ? chrome.i18n.getMessage('table_flip') : 'Table',
			label: 'Table',
			color: 'bg-rose-500'
		},
		{
			title: 'ತ_ʖತ',
			text: browser ? chrome.i18n.getMessage('look_disapproving') : 'Disapprove',
			label: 'Disapprove',
			color: 'bg-purple-500'
		},
		{
			title: '(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)',
			text: browser ? chrome.i18n.getMessage('crying') : 'Crying',
			label: 'Crying',
			color: 'bg-cyan-500'
		},
		{
			title: '(⊙_◎)',
			text: browser ? chrome.i18n.getMessage('nervous') : 'Nervous',
			label: 'Nervous',
			color: 'bg-amber-600'
		},
		{
			title: '☞￣ᴥ￣☞',
			text: browser ? chrome.i18n.getMessage('pointers') : 'pointers',
			label: 'Pointers',
			color: 'bg-slate-800'
		},
		{
			title: `(⁠ •_•⁠)`,
			text: browser ? chrome.i18n.getMessage('humans') : 'Humans',
			label: 'Human',
			color: 'bg-lime-700'
		}
	];
</script>

<aside class="w-20 h-screen top-0 h-600 pb-10 px-2 z-10 bg-white dark:bg-gray-950 text-black dark:text-white shadow-lg fixed">
	<div class="flex-col flex">
		{#each smilesTabs as smile, i}
			<a
				href={`/${smile.label}`}
				class={`sidebar-button group ${
					$page.url.pathname.includes(smile.label) ? `${smile.color} active` : 'inactive'
				}`}
			>
				{smile.title}
				<span class="tooltip group-hover:scale-100">{smile.text}</span>
			</a>
		{/each}
	</div>
</aside>
