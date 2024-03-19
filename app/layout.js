import { Inter } from "next/font/google";
import "./styles/globals.css";
import Layout from "@/components/header/headerMenu";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Layout />
        {children}
        <Footer />
      </body>
    </html>
  );
}
