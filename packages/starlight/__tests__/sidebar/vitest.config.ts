import { defineVitestConfig } from '../test-config';

export default defineVitestConfig({
	title: 'Sidebar Test',
	sidebar: [
		// A single link item labelled “Home”.
		{ label: 'Home', link: '/' },
		// A group labelled “Start Here” containing two links.
		{
			label: 'Start Here',
			items: [
				{
					label: 'Introduction',
					link: '/intro',
					badge: {
						variant: 'success',
						text: 'New',
					},
				},
				{ label: 'Next Steps', link: '/next-steps', badge: 'Deprecated' },
				{
					label: 'Showcase',
					link: '/showcase',
					attrs: { class: 'showcase-link', target: '_blank' },
				},
			],
		},
		// A group containing internal links using the `slug` property or its shorthand string syntax.
		{
			label: 'Resources',
			items: ['resources/plugins', { slug: 'resources/themes' }],
		},
		// A group linking to all pages in the `reference` directory.
		{
			label: 'Reference',
			badge: 'Experimental',
			autogenerate: { directory: 'reference' },
		},
		// A group linking to all pages in the `api/v1` directory.
		{
			label: 'API v1',
			autogenerate: { directory: '/api/v1/', attrs: { class: 'current', 'data-version': '1' } },
		},
		// A group linking to all pages in the `Deprecated API/` directory.
		{
			label: 'API (deprecated)',
			autogenerate: { directory: '/Deprecated API/' },
		},
	],
});
