export const prerender = true;

export function load({ params }) {
	return {
		slug: params.slug
	};
}
