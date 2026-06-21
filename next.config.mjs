/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        // port: "",
        pathname: "/images/media/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        // port: "",
        pathname: "/api/portraits/**",
        search: "",
      },
    ],
  },
  /*suppose few days age we have a page called foods/food-details now we move this page contents to foods/details so it will automaticlly redirect user to the new page*/
  async redirects() {
    return [
      {
        source: "/foods/food-details/:id",
        destination: "/foods/details/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
