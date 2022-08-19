import { writable } from "svelte/store";

export const smileIndex = writable(0);

export const alert = writable("")

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
    title: "ಠ_ಠ",
    label: "Look of Disapproving",
    name: "look-disapproving",
    color: "bg-purple-500",
    data: beda,
  },
  {
    title: "ಥ‿ಥ",
    label: "Crying",
    name: "crying",
    color: "bg-cyan-500",
    data: menangis,
  },
  {
    title: "~_~",
    label: "Nervous",
    name: "nervous",
    color: "bg-amber-500",
    data: gugup,
  },
  {
    title: "→_→",
    label: "Pointers",
    name: "pointers",
    color: "bg-slate-800",
    data: penunjuk,
  },
];
