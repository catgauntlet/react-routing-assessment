import React from 'react';
import './globals.css';
import Navigation from './components/Navigation/Navigation.tsx';
import { AuthenticationContextProvider } from './context/authentication.tsx';

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
        <AuthenticationContextProvider>
          <Navigation />
          <main>
            {children}
          </main>
        </AuthenticationContextProvider>
      </body>
    </html>
  );
}
