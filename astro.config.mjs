// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

export const locales = {
	root: { label: 'English', lang: 'en' },
	'zh-hant': { label: '繁體中文', lang: 'zh-Hant' }
};

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
			locales,
			editLink: {
				baseUrl: 'https://github.com/otterscale/otterscale.github.io/edit/main/docs/'
			},
			sidebar: [
				{
					label: 'Introduction',
					slug: 'introduction',
					translations: {
						'zh-Hant': '簡介'
					}
				},
				{
					label: 'Getting Started',
					translations: {
						'zh-Hant': '開始使用'
					},
					autogenerate: { directory: 'getting-started' }
				},

				{
					label: 'basic',
					translations: {
						'zh-Hant': '基本'
					},
					autogenerate: { directory: 'basic' }
				},
				{
					label: 'service',
					translations: {
						'zh-Hant': '服務'
					},
					autogenerate: { directory: 'service' }
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
