import { useEffect, useState } from "react"
import Benefits from "./components/BenefitsSection/Benefits"
import FAQ from "./components/FAQSection/FAQ"
import Footer from "./components/FooterSection/Footer"
import Hero from "./components/HeroSection/Hero"
import NavBar1 from "./components/NavBar1/NavBar1"
import NavBar2 from "./components/NavBar2/NavBar2"
import Navigate from "./components/NavigateSection/Navigate"
import Testimonials from "./components/TestimonialsSection/Testimonials"
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader/Loader"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      distance: '50px',
      once: false,
      mirror: true
    });
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;


  return (
    <>
      <header>
        <NavBar1 text="Admission is Open, Grab your seat now" />
        <NavBar2 list={["Home", "About Us", "Academics", "Admissions", "Student Life", "Contact"]} />
      </header>
      <Hero span="Welcome to Little Learners Academy"
        title="Where Young Minds Blossom and"
        titleSpan="Dreams Take Flight."
        desc="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
      />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Navigate />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
