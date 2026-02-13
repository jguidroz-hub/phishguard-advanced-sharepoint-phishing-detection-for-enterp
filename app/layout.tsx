import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PhishGuard - Advanced SharePoint phishing detection for enterprise email security',
  description: 'Value Proposition: Detects sophisticated credential phishing attacks using compromised SharePoint links that bypass Mimecast and Defender, protecting enterprises from advanced social engineering.

Target Customer: Mid to large enterprises (1000+ employees) with existing email security that need additional SharePoint-specific protection

---
Category: Micro-SaaS
Target Market: Mid to large enterprises (1000+ employees) with existing email security that need additional SharePoint-specific protection
Source Hypothesis ID: 91786df8-b50a-4e99-a69f-255d4dfd436c
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">PhishGuard - Advanced SharePoint phishing detection for enterprise email security</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
