// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';
import tailwindcss from '@tailwindcss/vite';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';
import Icons from 'unplugin-icons/vite';

export const locales = {
	root: { label: 'English', lang: 'en' },
	'zh-hant': { label: '繁體中文', lang: 'zh-Hant' }
};

// https://astro.build/config
export default defineConfig({
	site: 'https://otterscale.io',
	integrations: [
		starlight({
			title: 'OtterScale',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: true
			},
			favicon: '/otter-1.png',
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
				baseUrl: 'https://github.com/otterscale/otterscale.github.io/edit/main/'
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
					autogenerate: {
						directory: 'getting-started'
					}
				},
				...openAPISidebarGroups
			],
			customCss: ['./src/styles/global.css'],
			plugins: [
				starlightVersions({
					versions: [{ slug: 'v0.6' }]
				}),
				// Generate the OpenAPI documentation pages.
				starlightOpenAPI([
					{
						base: 'api',
						schema:
							'https://raw.githubusercontent.com/otterscale/api/refs/heads/main/openapi/openapi.yaml'
					}
				])
			]
		})
	],
	vite: {
		plugins: [tailwindcss(), Icons({ compiler: 'astro' })]
	}
});
