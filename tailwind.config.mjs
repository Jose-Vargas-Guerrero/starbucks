/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'bannerImage' : "url('/src/images/xl-hero-desktop_2021.webp')",
			}
		},
	},
	plugins: [],
}
