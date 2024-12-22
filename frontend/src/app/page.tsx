import Hero from "@/components/Hero";
import Scroll from "@/components/Scroll";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import AboutUs from "@/components/Home/AboutUs";
import WhyUs from "@/components/Home/WhyUs";
import WhyCredBeetle from "@/components/Home/WhyCredBeetle";
export default function Home() {
  return (
    <section className="bg-black min-h-screen">
      <Hero />
      <AboutUs />
      <WhyUs />
      <WhyCredBeetle />
      <Scroll />
      <Statistics />
      <Sponsors />
      <Footer />
    </section>
  );
}
