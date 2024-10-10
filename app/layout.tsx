import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "River Walker - Medulloblastoma Awareness",
  description:
    "River Walker is an adorable and lively 3-year-old toddler facing a life-threatening battle against Medulloblastoma, a rare and aggressive form of brain and spinal cord cancer affecting fewer than 500 adults and children in the United States each year",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
