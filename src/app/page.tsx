import Navbar from "@/components/navbar/navbar";
import Hero from "@/pages/hero/hero";
import AsFrontend from "@/pages/asFrontend/asFrontend";
import CodeDesign from "@/pages/codeDesign/codeDesign";
import MoreThanSection from "@/pages/moreThanSection/moreThanSection";
import DesignAccuracySection from "@/pages/designAccuracySection/designAccuracySection";
import ExperienceSection from "@/pages/experienceSection/experienceSection";
import TestimoniSection from "@/pages/testimoniSection/testimoniSection";
import ClearSection from "@/pages/clearSection/clearSection";
import WorkSection from "@/pages/workSection/workSection";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="bg-[url('/assets/background/background.svg')] bg-cover bg-center max-w-full min-h-screen flex flex-col"
      >
        <Navbar />
        <Hero />
      </section>
      <section>
        <AsFrontend />
      </section>
      <section>
        <CodeDesign />
      </section>
      <section>
        <MoreThanSection />
      </section>
      <section>
        <DesignAccuracySection />
      </section>
      <section>
        <ExperienceSection />
      </section>
      <section>
        <TestimoniSection />
      </section>
      <section>
        <ClearSection />
      </section>
      <section>
        <WorkSection />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
