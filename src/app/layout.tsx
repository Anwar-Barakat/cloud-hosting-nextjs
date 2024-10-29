import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "900"], // Adjust weights as needed
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cloud Hosting | DigitalOcean",
  description: "Simplify your cloud infrastructure with DigitalOcean.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
