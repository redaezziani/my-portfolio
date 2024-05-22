import About from "@/components/ui/home/about";
import CardsSection from "@/components/ui/home/cards-section";
import Footer from "@/components/ui/home/footer";
import Header from "@/components/ui/home/header";
import Hero from "@/components/ui/home/hero";
import Projects from "@/components/ui/home/projects";
import { Toaster } from "@/components/ui/toaster";
const  HomePage= () => {
  return (
    <main className=" flex justify-start items-center gap-3 relative flex-col overflow-x-hidden">
      <div className="w-full absolute top-0">
        <div className="w-full max-w-7xl h-20 bg-sky-500 blur-[200px] "/>
      </div>
      <div className=" absolute ">
        <Toaster />
      </div>
     <Header />
     <Hero />
     <About />
     <Projects />
     <CardsSection />
     <Footer />
     
    </main>
  );
}

export default HomePage;
