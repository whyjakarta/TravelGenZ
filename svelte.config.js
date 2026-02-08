import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Netlify adapter for deployment.
		adapter: adapter()
	}
};

export default config;
