import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Footer from "@/components/common/Footer";
import Sponsors from "@/components/Sponsors";
import AboutUs from "@/components/Home/AboutUs";
import WhyUs from "@/components/Home/WhyUs";
import WhyCredBeetle from "@/components/Home/WhyCredBeetle";
import HappyTeam from "@/components/Home/HappyTeam";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <section className="bg-black min-h-screen">
      <Hero />
      <AboutUs />
      <WhyUs />
      <WhyCredBeetle />
      <Statistics />
      <HappyTeam />
      <Testimonials />
      <Sponsors />
      <Footer />
    </section>
  );
}
