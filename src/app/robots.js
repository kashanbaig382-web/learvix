export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://learvix.vercel.app/sitemap.xml",
  };
}