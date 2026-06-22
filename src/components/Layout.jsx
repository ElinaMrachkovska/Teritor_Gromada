import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-stone text-text">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
