import Benefits from "./components/BenefitsSection/Benefits"
import FAQ from "./components/FAQSection/FAQ"
import Footer from "./components/FooterSection/Footer"
import Hero from "./components/HeroSection/Hero"
import NavBar1 from "./components/NavBar1/NavBar1"
import NavBar2 from "./components/NavBar2/NavBar2"
import Navigate from "./components/NavigateSection/Navigate"
import Testimonials from "./components/TestimonialsSection/Testimonials"
import './index.css'
function App() {

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
    </>
  )
}

export default App
