import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
            $components: 'src/lib/components',
            $scripts: 'src/lib/scripts',
            $images: 'src/lib/images',
            $sounds: 'src/lib/sounds'
        }
	}
};

export default config;
