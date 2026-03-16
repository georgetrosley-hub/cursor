import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ApiKeyProvider } from "@/app/context/api-key-context";
import { ThemeProvider } from "@/app/context/theme-context";
import { ToastProvider } from "@/app/context/toast-context";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cursor Enterprise GTM | Account & Deal Tracking",
  description: "Internal Cursor app for Enterprise GTM AEs — track accounts, deal flow, pipeline, and execution.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff3621' stroke-width='2'><path d='M5 4h8a3 3 0 013 3v10a3 3 0 01-3 3H8l-3 3V4z'/><circle cx='16' cy='8' r='1.5' fill='%23ff3621'/></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (() => {
      try {
        var s = localStorage.getItem("cursor-gtm-theme");
        var theme = (s === "light" || s === "dark") ? s : "dark";
        document.documentElement.dataset.theme = theme;
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.classList.toggle("light", theme === "light");
      } catch {}
    })();
  `;

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ApiKeyProvider>
            <ToastProvider>{children}</ToastProvider>
          </ApiKeyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
