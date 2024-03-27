import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

// Get this info from some external source (e.g. CMS)
const pages = {
  home: "/",
  about: "/about",
  blog: "/blog",
  gallery: "/gallery",
  category: "/category",
  contact: "/contact",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "xSTatic",
  description: "xSTatic graffiti jam festival",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-center p-4">
          <ul className="flex uppercase gap-8">
            {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
