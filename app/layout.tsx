import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Everyday Wellness - Track Your Health Journey",
  description: "A comprehensive wellness tracking application with food logging, challenges, and progress monitoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-primary-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">🌱 Everyday Wellness</h1>
              <div className="flex gap-4">
                <a href="/" className="hover:text-primary-100 transition">Home</a>
                <a href="/challenges" className="hover:text-primary-100 transition">Challenges</a>
                <a href="/food-log" className="hover:text-primary-100 transition">Food Log</a>
                <a href="/progress" className="hover:text-primary-100 transition">Progress</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 mt-16 py-8">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2025 Everyday Wellness. Built with Next.js & Supabase.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
