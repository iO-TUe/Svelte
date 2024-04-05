import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		alias: {
			'~/*': "./src/components/*"
		},
		adapter: adapter()
	},
	onwarn: (warning, handler) => {
		if (warning.message.includes("a11y")) return;
		handler(warning);
	},
};
