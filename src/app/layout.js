import { VazirFd, IranianSans, YekanBakh, Vazirmatn } from "src/utils/fonts";

export const metadata = {
  title: "Torino",
  description: " Electronic Tourism System and travel agency",
  keywords: "tourism , travel , agency , tour",
  author: "pouya fakhri",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${VazirFd.variable} ${IranianSans.variable} ${YekanBakh.variable} ${Vazirmatn.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
