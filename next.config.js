/** @type {import('next').NextConfig} */

const nextConfig = {
	//whatever config you have
	//...
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [{ loader: '@svgr/webpack', options: { icon: true } }],
		});

		return config;
	},
};

// const nextConfig = {
// 	reactStrictMode: true,
// 	swcMinify: true,
// };

// const nextConfig = {
// 	reactStrictMode: true,
// 	swcMinify: true,

// 	webpack(config) {
// 		config.module.rules.push({
// 			test: /\.svg$/,
// 			issuer: {
// 				test: /\.(js|ts)x?$/,
// 				// for webpack 5 use
// 				// { and: [/\.(js|ts)x?$/] }
// 			},

// 			use: ['@svgr/webpack'],
// 		});

// 		return config;
// 	}
// };



// module.exports = nextConfig;
