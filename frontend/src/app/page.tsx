import Hero from "@/components/Hero";
import Scroll from "@/components/Scroll";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
export default function Home() {
  return (
    <section className="bg-black min-h-screen">
      <Hero />
      <Scroll />
      <Statistics />
      <Sponsors />
      <Footer />
    </section>
  );
}
