/** @type {import('next').NextConfig} */
const redirects = async () =>  {
	return [
		{
			source: '/',
			destination: '/home',
			permanent: true,
		},
	];
};

const nextConfig = {
	redirects,
}

module.exports = nextConfig
