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
  title: "Moniepoint — Simple, Smart Banking for Individuals & Businesses",
  description:
    "Moniepoint makes it easy to manage money, accept payments, and grow your business. Fast, secure, and built for modern entrepreneurs and everyday users.",
  keywords: [
    "Moniepoint",
    "digital banking",
    "payment platform",
    "Nigerian fintech",
    "business banking",
    "online banking",
    "POS Nigeria",
    "financial services"
  ],
  authors: [
    { name: "DevDanny", url: "https://x.com/dannyclassi_c" },
    { name: "Unclenebo", url: "https://x.com/Agbanebbie" } 
  ],
  openGraph: {
    title: "Moniepoint — Simple, Smart Banking for Individuals & Businesses",
    description:
      "Moniepoint provides secure digital banking and payment solutions for individuals and businesses in Africa. Manage your money, grow your business.",
    url: "https://moniepoint-revamp.vercel.app/",
    siteName: "Moniepoint",
    images: [
      {
        url: "https://moniepoint-revamp.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moniepoint Landing Page Preview",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moniepoint — Simple, Smart Banking for Individuals & Businesses",
    description:
      "Manage money, accept payments, and grow your business with Moniepoint’s secure and modern banking solutions.",
    images: ["https://moniepoint-revamp.vercel.app/og-image.jpg"],
    creator: "@Moniepoint",
  },
  metadataBase: new URL("https://moniepoint-revamp.vercel.app/"),
  alternates: {
    canonical: "https://moniepoint-revamp.vercel.app/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${onest.variable} antialiased overflow-x-hidden`}>
        {children}
        <div className="w-full h-screen"></div>
      </body>
    </html>
  );
}
