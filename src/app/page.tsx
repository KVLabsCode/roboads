import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Advantages } from "@/components/Advantages";
import { HowItWorks } from "@/components/HowItWorks";
import { FleetDirectory } from "@/components/FleetDirectory";
import { QuoteStrip } from "@/components/QuoteStrip";
import { BottomCTA } from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Advantages />
        <HowItWorks />
        <FleetDirectory />
        <QuoteStrip />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
