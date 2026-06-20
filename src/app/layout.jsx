import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartProvider from "@/context/CartProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const poppins = Poppins({
  weight: ["100", "400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Dev Story",
    template: "%s | Dev Story",
  },
  description: "Our dev story app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body
        className={`${poppins.className} min-h-full flex flex-col gap-3 my-3`}
      >
        <header>
          <Navbar></Navbar>
        </header>
        <CartProvider>
          <main className="container">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
