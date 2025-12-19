// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';
import Icons from 'unplugin-icons/vite';

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
			favicon: '/logo.png',
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
					autogenerate: { directory: 'getting-started' }
				},

				{
					label: 'Basic',
					translations: {
						'zh-Hant': '基本'
					},
					items: [
						{
							label: 'Machines',
							translations: {
								'zh-Hant': '機器'
							},
							slug: 'basic/machines'
						},
						{
							label: 'Networking',
							translations: {
								'zh-Hant': '網路'
							},
							slug: 'basic/networking'
						},
						{
							label: 'Configuration',
							translations: {
								'zh-Hant': '設定'
							},
							autogenerate: { directory: 'basic/configuration' }
						}
					]
				},
				{
					label: 'Service',
					translations: {
						'zh-Hant': '服務'
					},
					items: [
						{
							label: 'Compute',
							translations: {
								'zh-Hant': '計算'
							},
							slug: 'service/compute'
						},
						{
							label: 'Models',
							translations: {
								'zh-Hant': '模型'
							},
							slug: 'service/models'
						},
						{
							label: 'Repositories',
							translations: {
								'zh-Hant': '儲存庫'
							},
							slug: 'service/repositories'
						},
						{
							label: 'Applications',
							translations: {
								'zh-Hant': '應用'
							},
							autogenerate: { directory: 'service/applications' }
						},
						{
							label: 'Storage',
							translations: {
								'zh-Hant': '儲存'
							},
							autogenerate: { directory: 'service/storage' }
						},
						{
							label: 'Settings',
							translations: {
								'zh-Hant': '設定'
							},
							autogenerate: { directory: 'service/settings' }
						}
					]
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
		plugins: [tailwindcss(), Icons({ compiler: 'astro' })]
	}
});
