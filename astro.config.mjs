// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
	site: 'https://otterscale.com',
	integrations: [
		starlight({
			title: 'OtterScale',
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
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en'
				},
				'zh-hant': {
					label: '繁體中文',
					lang: 'zh-Hant'
				}
			},
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
				},
				...openAPISidebarGroups
			],
			customCss: ['./src/styles/global.css'],
			plugins: [
				// Generate the OpenAPI documentation pages.
				starlightOpenAPI([
					{
						base: 'api',
						schema:
							'https://raw.githubusercontent.com/otterscale/otterscale/refs/heads/main/api/openapi.yaml'
					}
				])
			]
		})
	],
	vite: {
		plugins: [tailwindcss()]
	}
});
