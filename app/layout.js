import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Nadia Cindy Novita Sari — Chapter 26",
  description: "Selamat bertambah usia yang ke-26, Nadia Cindy Novita Sari (Mbakyu). Kartu ucapan digital eksklusif.",
  authors: [{ name: "faiz wlekk" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#E7E6DF] text-[#0D0E10] min-h-screen selection:bg-[#00FF77] selection:text-[#0D0E10]">
        {children}
      </body>
    </html>
  );
}
