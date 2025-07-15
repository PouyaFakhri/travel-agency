import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="w-[85%] !mx-auto flex flex-col items-center justify-between min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
