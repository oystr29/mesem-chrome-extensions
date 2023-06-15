import { writable } from 'svelte/store';

type Name =
	| 'smilling'
	| 'love'
	| 'hugging'
	| 'flexing'
	| 'animals'
	| 'suprise'
	| 'dancing'
	| 'shruggie'
	| 'table-flip'
	| 'look-disapproving'
	| 'crying'
	| 'nervous'
	| 'pointers'
	| 'human';

type Mesem = {
	title: string;
	text: string;
	label: string;
	color: string;
	data: string[];
};

// Recent Storage
export const recents = writable(browser && JSON.parse(`${localStorage.getItem('recentStorage')}`));

recents.subscribe((value) => {
	if (browser) localStorage.setItem('recentStorage', JSON.stringify(value));
});

export const lastTab = writable(browser && JSON.parse(`${localStorage.getItem('lastTab')}`));

lastTab.subscribe((value) => {
	if (browser) localStorage.setItem('lastTab', value);
});

// i18n
// export const copied =  chrome.i18n.getMessage('copied');
// export const recent = chrome.i18n.getMessage('recent');
export const copied = 'Sudah Dicopy';
export const recent = '';

// TabIndex
// const currIndex = localStorage.getItem('currIndex');
// export const smileIndex = writable<number>(Number(currIndex) || 0);
// smileIndex.subscribe((value) => localStorage.setItem('currIndex', String(value)));

export const alerts = writable('');

import {
	bahu,
	beda,
	cinta,
	gugup,
	hewan,
	meja,
	memeluk,
	menangis,
	menari,
	otot,
	penunjuk,
	terkejut,
	tersenyum,
	human
} from './smile.json';
import { browser } from '$app/environment';

export const mesem: Record<string, Mesem> = {
	Smile: {
		title: '(◠‿◕)',
		text: browser ? chrome.i18n.getMessage('smilling') : 'Smile',
		label: 'Smile',
		color: 'bg-orange-500',
		data: tersenyum
	},
	Love: {
		title: '(•ө•)♡',
		text: browser ? chrome.i18n.getMessage('love') : 'Love',
		label: 'Love',
		color: 'bg-red-500',
		data: cinta
	},
	Hugging: {
		title: '(^o^)',
		text: browser ? chrome.i18n.getMessage('Hugging') : 'Hugging',
		label: 'Hugging',
		color: 'bg-lime-500',
		data: memeluk
	},
	Flexing: {
		title: 'ᕙ~.~ᕗ',
		text: browser ? chrome.i18n.getMessage('flexing') : 'Flexing',
		label: 'Flexing',
		color: 'bg-yellow-700',
		data: otot
	},
	Animals: {
		title: '(◕ᴥ◕)',
		text: browser ? chrome.i18n.getMessage('animals') : 'Animals',
		label: 'Animals',
		color: 'bg-green-500',
		data: hewan
	},
	Suprise: {
		title: '(>0<)',
		text: browser ? chrome.i18n.getMessage('suprise') : 'Suprise',
		label: 'Suprise',
		color: 'bg-blue-500',
		data: terkejut
	},
	Dancing: {
		title: '♪\\^ω^\\',
		text: browser ? chrome.i18n.getMessage('dancing') : 'Dancing',
		label: 'Dancing',
		color: 'bg-fuchsia-500',
		data: menari
	},
	Shruggie: {
		title: '乁•_•ㄏ',
		text: browser ? chrome.i18n.getMessage('shruggie') : 'Shruggie',
		label: 'Shruggie',
		color: 'bg-neutral-500',
		data: bahu
	},
	Table: {
		title: '┻━┻',
		text: browser ? chrome.i18n.getMessage('table_flip') : 'Table',
		label: 'Table',
		color: 'bg-rose-500',
		data: meja
	},
	Disapprove: {
		title: 'ತ_ʖತ',
		text: browser ? chrome.i18n.getMessage('look_disapproving') : 'Disapprove',
		label: 'Disapprove',
		color: 'bg-purple-500',
		data: beda
	},
	Crying: {
		title: '(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)',
		text: browser ? chrome.i18n.getMessage('crying') : 'Crying',
		label: 'Crying',
		color: 'bg-cyan-500',
		data: menangis
	},
	Nervous: {
		title: '(⊙_◎)',
		text: browser ? chrome.i18n.getMessage('nervous') : 'Nervous',
		label: 'Nervous',
		color: 'bg-amber-600',
		data: gugup
	},
	Pointers: {
		title: '☞￣ᴥ￣☞',
		text: browser ? chrome.i18n.getMessage('pointers') : 'Pointers',
		label: 'Pointers',
		color: 'bg-slate-800',
		data: penunjuk
	},
	Human: {
		title: `(\\_/)\n(•_•⁠ )`,
		text: browser ? chrome.i18n.getMessage('humans') : 'Humans',
		label: 'Human',
		color: 'bg-lime-700',
		data: human
	}
};
