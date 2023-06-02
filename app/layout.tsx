import React from 'react';
import './globals.css';
import Navigation from './components/Navigation.tsx';

export const metadata = {
  title: 'React Routing Assessment',
  description: 'Route away.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
