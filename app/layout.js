import './globals.css';

export const metadata = {
  title: 'Lumenitos Scan',
  description: 'A Mini Stellar Token Explorer',
  openGraph: {
    title: 'Lumenitos Scan',
    description: 'A Mini Stellar Token Explorer',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Lumenitos Scan',
    description: 'A Mini Stellar Token Explorer',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
