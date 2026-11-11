import { Bangers, Manrope } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Catálogo Rick and Morty",
  description: "Catálogo com 10 personagens de Rick and Morty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${bangers.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
