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
		// label: chrome.i18n.getMessage('smilling'),
		label: 'Smile',
		color: 'bg-orange-500',
		data: tersenyum
	},
	Love: {
		title: '(•ө•)♡',
		// label: chrome.i18n.getMessage('love'),
		label: 'Love',
		color: 'bg-red-500',
		data: cinta
	},
	Hugging: {
		title: '(^o^)',
		// label: chrome.i18n.getMessage('hugging'),
		label: 'Hugging',
		color: 'bg-lime-500',
		data: memeluk
	},
	Flexing: {
		title: 'ᕙ~.~ᕗ',
		// label: chrome.i18n.getMessage('flexing'),
		label: 'Flexing',
		color: 'bg-yellow-700',
		data: otot
	},
	Animals: {
		title: '(◕ᴥ◕)',
		// label: chrome.i18n.getMessage('animals'),
		label: 'Animals',
		color: 'bg-green-500',
		data: hewan
	},
	Suprise: {
		title: '(>0<)',
		// label: chrome.i18n.getMessage('suprise'),
		label: 'Suprise',
		color: 'bg-blue-500',
		data: terkejut
	},
	Dancing: {
		title: '♪\\^ω^\\',
		// label: chrome.i18n.getMessage('dancing'),
		label: 'Dancing',
		color: 'bg-fuchsia-500',
		data: menari
	},
	Shruggie: {
		title: '乁•_•ㄏ',
		// label: chrome.i18n.getMessage('shruggie'),
		label: 'Shruggie',
		color: 'bg-neutral-500',
		data: bahu
	},
	Table: {
		title: '┻━┻',
		// label: chrome.i18n.getMessage('table_flip'),
		label: 'Table',
		color: 'bg-rose-500',
		data: meja
	},
	Disapprove: {
		title: 'ತ_ʖತ',
		// label: chrome.i18n.getMessage('look_disapproving'),
		label: 'Disapprove',
		color: 'bg-purple-500',
		data: beda
	},
	Crying: {
		title: '(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)',
		// label: chrome.i18n.getMessage('crying'),
		label: 'Crying',
		color: 'bg-cyan-500',
		data: menangis
	},
	Nervous: {
		title: '(⊙_◎)',
		// label: chrome.i18n.getMessage('nervous'),
		label: 'Nervous',
		color: 'bg-amber-600',
		data: gugup
	},
	Pointers: {
		title: '☞￣ᴥ￣☞',
		// label: chrome.i18n.getMessage('pointers'),
		label: 'Pointers',
		color: 'bg-slate-800',
		data: penunjuk
	},
	Human: {
		title: `(\\_/)\n(•_•⁠ )`,
		label: 'Human',
		color: 'bg-lime-700',
		data: human
	}
};
