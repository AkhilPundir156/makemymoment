// import "@makemymoment/ui/styles.css";
import "./globals.css";
import "@makemymoment/tailwind-config/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Make my Moment",
    description: "CLI, Extension, Web tool to record video.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-secondary-bg">{children}</body>
        </html>
    );
}
