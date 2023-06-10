export const prerender = true;

export function load({ params }) {
  const slug = params.slug === 'index.html' ? null : params.slug;
  return {
    slug
  };
}
