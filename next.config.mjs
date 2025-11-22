/** @type {import('next').NextConfig} */
const nextConfig = {
  
  async redirects() {
    return [
      {
        source:'/',
        destination:'/artwork/home',
        permanent:true,
      },
    ]
  },

  images:{
    remotePatterns:[
      {
        hostname:"ik.imagekit.io",
        protocol:"https",
      },
    ]
  }

};

export default nextConfig;
