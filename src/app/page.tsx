import Header from '@/components/ui/page/header';
import Hero from '@/components/ui/page/hero';
import LightBg from '@/components/ui/page/light-bg';
import About from '@/components/ui/page/about';
import CardsSection from '@/components/ui/page/cards-section';
import InfoText from '@/components/ui/page/info-text';
import Projects from '@/components/ui/page/projects';
import Footer from '@/components/ui/page/footer';

const HomePage = () => {
  return (
    <main className='relative flex flex-col items-center justify-start gap-3 overflow-x-hidden'>
      <Header />
      <Hero />
      <LightBg />
      <About />
      <CardsSection />
      <InfoText />
      <Projects />
      <Footer />
    </main>
  );
};

export default HomePage;
