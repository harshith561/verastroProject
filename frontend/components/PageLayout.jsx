import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
