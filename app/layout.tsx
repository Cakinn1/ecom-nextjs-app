import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";

export const metadata = {
  title: "Ecom Next.Js 13.4.1",
  description: "Created By Cakin",
};
const monsterrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={monsterrat.className}>
      <body>
        <Header />

        {children}
        <footer></footer>
      </body>
    </html>
  );
}
