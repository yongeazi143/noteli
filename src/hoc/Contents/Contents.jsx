import AboutUs from "../../components/AboutUs/AboutUs";
import Companies from "../../components/Companies/Companies";
import ContactUs from "../../components/ContactUs/ContactUs";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import Usages from "../../components/Usages/Usages";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Content() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Companies />
      <Usages />
      <AboutUs />
      <ContactUs />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Content;
