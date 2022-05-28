import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./header";
import ContactInfo from "./contactInfo";
import MobileNav from "./mobileNav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <div>
        <Header />
        <div>
          <ContactInfo />
        </div>
      </div>
      <div>
        <MobileNav />
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
