import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Element } from "react-scroll";

import Navbar from "./components/1.navbar/Navbar";
import HeroSection from "./components/2.hero/Hero";
// import ServicesSection from "./components/3.services/Services";
import PortfolioSection from "./components/4.portfolio/Portfolio";
import Gallery from "./components/5.gallery/Gallery";
import Testimonials from "./components/6.testimonial/Testimonials";
import CallToAction from "./components/7.ctaSection/CalltoAction";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalogs/CatalogoDecori";
import CalceCruda from "./components/catalogs/CalceCruda";
import Mirror from "./components/catalogs/Mirror";
import Ironic from "./components/catalogs/Ironic";
import Cartongesso from "./components/cartongesso/Cartongesso";

const theme = createTheme({
  typography: {
    fontFamily: "Arapey",
    body1: {
      fontFamily: "Arapey, serif",
    },
    body2: {
      fontFamily: "Arapey, serif",
    },
  },
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/catalogoDecori" element={<Catalog />} />
          {/* <Route path="/services" element={<ServicesSection />} /> */}
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/call-to-action" element={<CallToAction />} />
          <Route path="/calce-cruda" element={<CalceCruda />} />
          <Route path="/Ironic" element={<Ironic />} />
          <Route path="/mirror" element={<Mirror />} />
          <Route path="/cartongesso" element={<Cartongesso />} />

          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      {/* <Element name="services">
        <ServicesSection />
      </Element> */}
      <Element name="portfolio">
        <PortfolioSection />
      </Element>
      <Gallery />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/1.navbar/Navbar";
// import HeroSection from "./components/2.hero/Hero";
// import ServicesSection from "./components/3.services/Services";
// import PortfolioSection from "./components/4.portfolio/Portfolio";
// import Gallery from "./components/5.gallery/Gallery";
// import Testimonials from "./components/6.testimonial/Testimonials";
// import CallToAction from "./components/7.ctaSection/CalltoAction";
// import Footer from "./components/footer/Footer";
// import Catalog from "./components/catalogs/CatalogoDecori";
// import CalceCruda from "./components/catalogs/CalceCruda";

// function App() {
//   return (
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/catalogoDecori" element={<Catalog />} />
//           <Route path="/services" element={<ServicesSection />} />
//           <Route path="/portfolio" element={<PortfolioSection />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/testimonials" element={<Testimonials />} />
//           <Route path="/call-to-action" element={<CallToAction />} />
//           <Route path="/calce-cruda" element={<CalceCruda />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//         <Footer />
//       </Router>
//   );
// }

// function Home() {
//   return (
//     <>
//       <HeroSection />
//       <ServicesSection />
//       <PortfolioSection />
//       <Gallery />
//       <Testimonials />
//       <CallToAction />
//     </>
//   );
// }

// export default App;
