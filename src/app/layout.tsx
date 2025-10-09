import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Moniepoint, Simple, Smart Banking for Individuals & Businesses",
  description:
    "Moniepoint makes it easy to manage money, accept payments, and grow your business. Fast, secure, and built for modern entrepreneurs and everyday users.",
  metadataBase: new URL("https://moniepoint-revamp.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://moniepoint-revamp.vercel.app",
    siteName: "Moniepoint",
    title: "Moniepoint, Simple, Smart Banking for Individuals & Businesses",
    description:
      "Moniepoint provides secure digital banking and payment solutions for individuals and businesses in Africa. Manage your money, grow your business.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moniepoint Landing Page Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moniepoint, Simple, Smart Banking for Individuals & Businesses",
    description:
      "Manage money, accept payments, and grow your business with Moniepoint’s secure and modern banking solutions.",
    images: ["/opengraph-image.jpg"],
    creator: "@Moniepoint",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
