import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "taiga.io",
    description: "",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    storageKey="jotion-theme-2"
                >
                    <Toaster position="bottom-center" />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

export default RootLayout;