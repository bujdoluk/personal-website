import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDictionary, getLocale } from "@/lib/i18n";

export default async function Home() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero dict={dict} />
        <About dict={dict} />
        <Experience dict={dict} />
        <Skills dict={dict} />
        <Projects dict={dict} />
        <Resume dict={dict} />
        <Contact />
      </main>
      <Footer dict={dict} />
    </>
  );
}
