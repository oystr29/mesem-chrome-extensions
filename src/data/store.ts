import { writable } from "svelte/store";

// Recent Storage
const recentStorage = localStorage.getItem("recentStorage");
export const recents = writable<Array<string>>(JSON.parse(recentStorage) || []);
recents.subscribe((value) => {
  console.log(value);
  localStorage.setItem("recentStorage", JSON.stringify(value));
});

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
    label: "Smilling",
    name: "smilling",
    color: "bg-orange-500",
    data: tersenyum,
  },
  {
    title: "(•ө•)♡",
    label: "Love",
    name: "love",
    color: "bg-red-500",
    data: cinta,
  },
  {
    title: "(^o^)",
    label: "Hugging",
    name: "hugging",
    color: "bg-lime-500",
    data: memeluk,
  },
  {
    title: "ᕙ~.~ᕗ",
    label: "Flexing",
    name: "flexing",
    color: "bg-yellow-700",
    data: otot,
  },
  {
    title: "(◕ᴥ◕)",
    label: "Animals",
    name: "animals",
    color: "bg-green-500",
    data: hewan,
  },
  {
    title: "(>0<)",
    label: "Suprise",
    name: "suprise",
    color: "bg-blue-500",
    data: terkejut,
  },
  {
    title: "♪\\^ω^\\",
    label: "Dancing",
    name: "dancing",
    color: "bg-fuchsia-500",
    data: menari,
  },
  {
    title: "乁•_•ㄏ",
    label: "Shruggie",
    name: "shruggie",
    color: "bg-neutral-500",
    data: bahu,
  },
  {
    title: "┻━┻",
    label: "Table Flip",
    name: "table-flip",
    color: "bg-rose-500",
    data: meja,
  },
  {
    title: "ತ_ʖತ",
    label: "Look of Disapproving",
    name: "look-disapproving",
    color: "bg-purple-500",
    data: beda,
  },
  {
    title: "(⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)",
    label: "Crying",
    name: "crying",
    color: "bg-cyan-500",
    data: menangis,
  },
  {
    title: "(⊙_◎)",
    label: "Nervous",
    name: "nervous",
    color: "bg-amber-600",
    data: gugup,
  },
  {
    title: "☞￣ᴥ￣☞",
    label: "Pointers",
    name: "pointers",
    color: "bg-slate-800",
    data: penunjuk,
  },
];
