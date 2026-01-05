/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Pehle wale (jo tumhare paas the)
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "media.bookmundi.com",
      },
      {
        protocol: "https",
        hostname: "media.cntravellerme.com",
      },
      {
        protocol: "https",
        hostname: "c8.alamy.com",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
      },

      // Ab ye naye domains add kiye hain (humare projects ke images ke liye)
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "workdo.io",
      },
      {
        protocol: "https",
        hostname: "www.xplantr.com",
      },
      {
        protocol: "https",
        hostname: "simplybook.me",
      },
      {
        protocol: "https",
        hostname: "s3-alpha.figma.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "www.goclixy.com",
      },
      {
        protocol: "https",
        hostname: "kmmatrimony.wordpress.com",
      },
      {
        protocol: 'https',
        hostname: '**', // Sab external domains allow (development ke liye ok, production mein specific add karo)
      },
      { protocol: 'https', hostname: 'img.freepik.com' },
    { protocol: 'https', hostname: 'www.intuit.com' },
    { protocol: 'https', hostname: 'www.shutterstock.com' },
    { protocol: 'https', hostname: 'png.pngtree.com' },
    ],
  },
};

export default nextConfig;