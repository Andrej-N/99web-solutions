import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { Portfolio } from "@/components/site/portfolio";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
