import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
