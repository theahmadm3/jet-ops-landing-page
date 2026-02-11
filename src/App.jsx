import Header from "./components/Header";
import CinematicHero from "./components/CinematicHero";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import OperatorFeatures from "./components/OperatorFeatures";
import BrokerNetwork from "./components/BrokerNetwork";
import WhyJETOps from "./components/WhyJETOps";
import Trust from "./components/Trust";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-whitesmoke w-full">
      <Header />
      <main className="max-w-7xl w-full mx-auto">
        <CinematicHero />
        <Hero />
        <HowItWorks />
        <OperatorFeatures />
        <BrokerNetwork />
        <WhyJETOps />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
