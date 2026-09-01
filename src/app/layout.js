import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  metadataBase: new URL("https://learvix.vercel.app"),

  title: {
    default: "LEARVIX — Study Smarter With AI",
    template: "%s | LEARVIX",
  },

  description:
    "Practical AI tools, study guides, exam preparation tips, note-taking workflows, and productivity resources for students.",

  keywords: [
    "AI for students",
    "AI study tools",
    "study guides",
    "exam preparation",
    "AI note taking",
    "AI PDF tools",
    "student productivity",
  ],

  openGraph: {
    title: "LEARVIX — Study Smarter With AI",
    description:
      "Practical AI tools and study guides designed to help students learn smarter.",
    type: "website",
    siteName: "LEARVIX",
  },

  twitter: {
    card: "summary_large_image",
    title: "LEARVIX — Study Smarter With AI",
    description:
      "Practical AI tools and study guides designed to help students learn smarter.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}