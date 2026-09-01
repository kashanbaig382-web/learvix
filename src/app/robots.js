export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://learvix-ai.vercel.app/sitemap.xml",
  };
}