/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts:false,
	env: {
		APP_URL: 'http://localhost:3000',
		APP_ENV:'',
		APP_SERVER_URL:'http://192.168.0.107:4200'
	},

	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://192.168.0.107:4200/api:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `http://192.168.0.107:4200/uploads:path*`,
			},
		]
	},
	images:{
		domains:['localhost','192.168.0.107','http://192.168.0.107:4200','http://192.168.0.107:4200/','http://192.168.0.107:4200/uploads','192.168.0.107:4200']
	}

}

module.exports = nextConfig
