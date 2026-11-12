import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'STUDENT LIVING OS', description: 'Operación conectada para residencias estudiantiles.', manifest: '/manifest.webmanifest', applicationName: 'STUDENT LIVING OS', themeColor: '#0b1115' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
