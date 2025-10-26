import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dog vs Lion',
  description: 'A playful interaction: dog barks, lion runs.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
