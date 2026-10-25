import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Synergy from "@/components/Synergy";
import Process from "@/components/Process";
import Estimator from "@/components/Estimator";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-background pt-20">
        <Hero />
        <Services />
        <Synergy />
        <Process />
        <Estimator />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
