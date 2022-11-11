import { writable } from "svelte/store";

// Recent Storage
const recentStorage = localStorage.getItem("recentStorage");
export const recents = writable<Array<string>>(JSON.parse(recentStorage) || []);
recents.subscribe((value) => {
  console.log(value);
  localStorage.setItem("recentStorage", JSON.stringify(value));
});

// i18n
export const copied = chrome.i18n.getMessage('copied');
export const recent = chrome.i18n.getMessage('recent');

// TabIndex
const currIndex = localStorage.getItem("currIndex");
export const smileIndex = writable<number>(Number(currIndex) || 0);
smileIndex.subscribe((value) =>
  localStorage.setItem("currIndex", String(value))
);

export const alerts = writable("");

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
} from "./smilesData.json";

export const smiles = [
  {
    title: "(◠‿◕)",
    label: chrome.i18n.getMessage('smilling'),
    name: "smilling",
    color: "bg-orange-500",
    data: tersenyum,
  },
  {
    title: "(•ө•)♡",
    label: chrome.i18n.getMessage('love'),
    name: "love",
    color: "bg-red-500",
    data: cinta,
  },
  {
    title: "(^o^)",
    label: chrome.i18n.getMessage("hugging"),
    name: "hugging",
    color: "bg-lime-500",
    data: memeluk,
  },
  {
    title: "ᕙ~.~ᕗ",
    label: chrome.i18n.getMessage("flexing"),
    name: "flexing",
    color: "bg-yellow-700",
    data: otot,
  },
  {
    title: "(◕ᴥ◕)",
    label: chrome.i18n.getMessage("animals"),
    name: "animals",
    color: "bg-green-500",
    data: hewan,
  },
  {
    title: "(>0<)",
    label: chrome.i18n.getMessage("suprise"),
    name: "suprise",
    color: "bg-blue-500",
    data: terkejut,
  },
  {
    title: "♪\\^ω^\\",
    label: chrome.i18n.getMessage("dancing"),
    name: "dancing",
    color: "bg-fuchsia-500",
    data: menari,
  },
  {
    title: "乁•_•ㄏ",
    label: chrome.i18n.getMessage("shruggie"),
    name: "shruggie",
    color: "bg-neutral-500",
    data: bahu,
  },
  {
    title: "┻━┻",
    label: chrome.i18n.getMessage("table_flip"),
    name: "table-flip",
    color: "bg-rose-500",
    data: meja,
  },
  {
    title: "ತ_ʖತ",
    label: chrome.i18n.getMessage("look_disapproving"),
    name: "look-disapproving",
    color: "bg-purple-500",
    data: beda,
  },
  {
    title: "(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)",
    label: chrome.i18n.getMessage("crying"),
    name: "crying",
    color: "bg-cyan-500",
    data: menangis,
  },
  {
    title: "(⊙_◎)",
    label: chrome.i18n.getMessage("nervous"),
    name: "nervous",
    color: "bg-amber-600",
    data: gugup,
  },
  {
    title: "☞￣ᴥ￣☞",
    label: chrome.i18n.getMessage("pointers"),
    name: "pointers",
    color: "bg-slate-800",
    data: penunjuk,
  },
];
