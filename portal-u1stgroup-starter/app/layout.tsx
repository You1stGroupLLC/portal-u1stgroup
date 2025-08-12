import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You 1st Group Portal",
  description: "Internal tools for assessors, permits, and renewals",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold">You 1st Group Portal</h1>
            <p className="text-sm opacity-70">portal.u1stgroup.com</p>
          </header>
          {children}
          <footer className="mt-16 text-xs opacity-60">© {new Date().getFullYear()} You 1st Group LLC</footer>
        </div>
      </body>
    </html>
  );
}
