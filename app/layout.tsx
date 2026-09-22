import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-disp",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://saadshafique.dev"
  ),
  title: "Muhammad Saad Shafique | Android App Developer",
  description:
    "Muhammad Saad Shafique — Android App Developer with 3+ years of experience building and deploying high-performance mobile applications using Kotlin, Jetpack Compose, MVVM, Clean Architecture, Firebase, and Google Maps SDK.",
  openGraph: {
    title: "Muhammad Saad Shafique | Android App Developer",
    description:
      "Android App Developer specialized in Kotlin, Jetpack Compose, Clean Architecture, MVVM, Coroutines, Room DB, Firebase, and Google Play Store apps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Saad Shafique | Android App Developer",
    description:
      "Android App Developer specialized in Kotlin, Jetpack Compose, Clean Architecture, MVVM, Coroutines, Room DB, Firebase, and Google Play Store apps.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0D12",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
