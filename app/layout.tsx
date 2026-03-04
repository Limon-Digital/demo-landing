import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Limon Digital | Landing Page",
  description: "Landing page one-page de Limon Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
