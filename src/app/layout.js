import { VazirFd, IranianSans, YekanBakh, Vazirmatn } from "src/utils/fonts";
import "./globals.css";
import Layout from "src/components/layout/Layout";
import QueryProvider from "src/providers/QueryProvider";
import { ToastContainer } from "react-toastify";

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
      className={`${VazirFd.variable} ${IranianSans.variable} ${YekanBakh.variable} ${Vazirmatn.variable} `}
    >
      <body>
        <QueryProvider>
          <Layout>{children}</Layout>
          <ToastContainer
            position="top-right"
            autoClose={3900}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            theme="dark"
            toastClassName="super-toast"
            bodyClassName="super-toast-body"
            progressClassName="super-toast-progress"
          />
        </QueryProvider>
      </body>
    </html>
  );
}
