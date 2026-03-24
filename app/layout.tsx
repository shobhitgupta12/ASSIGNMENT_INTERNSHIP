import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scroll Hero Animation',
  description: 'A premium scroll-driven hero section animation experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
