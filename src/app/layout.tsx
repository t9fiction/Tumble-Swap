import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./global.css";
import { Navbar } from "@/components";
import { ThemeProvider } from "@/context/ThemeProvider";
import { GlobalProvider } from "@/context/GlobalContext";
import ContextProvider from "@/context/WagmiProvider";
import { headers } from "next/headers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

// font-[family-name:var(--font-geist-mono)]

export const metadata: Metadata = {
  title: "Tumble Swap",
  description: "Your one stop for every Crypto Task",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch headers asynchronously
  const headersList = await headers();
  const cookies = headersList.get('cookie'); // Access the 'cookie' header
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ContextProvider cookies={cookies}>
          <GlobalProvider>
            <ThemeProvider>
              <Navbar />
              <div className="container mx-auto w-full py-8">
                {children}
              </div>
            </ThemeProvider>
          </GlobalProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
