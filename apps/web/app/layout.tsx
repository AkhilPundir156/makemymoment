import type { Metadata } from "next";
import type { User } from "@makemymoment/types";


import "@makemymoment/tailwind-config/styles.css";
import "./globals.css";

const user: User = {
    id: "1",
    name: "John Doe",
    email: "john@doe.com",
    createdAt: "2023-01-01T00:00:00.000Z",
};

export const metadata: Metadata = {
    title: "Make my Moment",
    description: "CLI, Extension, Web tool to record video.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">

            <body className="bg-primary-dot">{children}
                <p>{user.name}</p>
            </body>
        </html>
    );
}
