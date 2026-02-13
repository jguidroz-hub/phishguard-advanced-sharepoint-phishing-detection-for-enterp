import type { Metadata } from 'next';
import { Providers } from './providers';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PhishGuard - Advanced SharePoint phishing detection for enterprise email security',
  description: 'Value Proposition: Detects sophisticated credential phishing attacks using compromised SharePoint links that bypass Mimecast and Defender, protecting enterprises from advanced social engineering.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
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
        </Providers>
      </body>
    </html>
  );
}
