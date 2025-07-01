import { VazirFd, IranianSans, YekanBakh, Vazirmatn } from "src/utils/fonts";
import "./globals.css";
import Layout from "src/components/layout/Layout";

export const metadata = {
  title: "Torino",
  description: " Electronic Tourism System and travel agency",
  keywords: "tourism , travel , agency , tour",
  author: "pouya fakhri",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${VazirFd.variable} ${IranianSans.variable} ${YekanBakh.variable} ${Vazirmatn.variable}`}
    >
      <body>
        <Layout >{children}</Layout>
      </body>
    </html>
  );
}
