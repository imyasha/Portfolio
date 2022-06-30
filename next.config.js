const moduleExports = {
	poweredByHeader: false,
	swcMinify: true,
	assetPrefix: process.env.ASSET_HOST || '',
	productionBrowserSourceMaps: process.env.NODE_ENV === 'production',
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	images: {
		domains: ['media.graphcms.com', 'media.graphassets.com'],
	},
};

module.exports = moduleExports;
