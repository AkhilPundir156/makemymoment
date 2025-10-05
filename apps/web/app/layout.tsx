"use client";
import { SessionProvider } from "next-auth/react";

import "@makemymoment/tailwind-config/styles.css";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-primary-bg">
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    );
}
