// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://otterscale.com',
	integrations: [
		starlight({
			title: 'OtterScale Docs',
			logo: {
				src: './src/assets/logo.png'
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/otterscale/otterscale'
				}
			],
			editLink: {
				baseUrl: 'https://github.com/otterscale/otterscale.github.io/edit/main/docs/'
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' }
					]
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' }
				}
			],
			customCss: ['./src/styles/global.css']
		})
	],
	vite: {
		plugins: [tailwindcss()]
	}
});
