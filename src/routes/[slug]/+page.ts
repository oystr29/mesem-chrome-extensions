import { mesem } from '../../data/store.js';

export const prerender = true;

export function load({ params }) {
	return mesem[params.slug];
}
