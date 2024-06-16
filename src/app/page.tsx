import LineTow from '@/components/projects/line-2';
import LineThree from '@/components/projects/line-3';
import About from '@/components/ui/home/about';
import CardsSection from '@/components/ui/home/cards-section';
import Footer from '@/components/ui/home/footer';
import Header from '@/components/ui/home/header';
import Hero from '@/components/ui/home/hero';
import Projects from '@/components/ui/home/projects';
const HomePage = () => {
  return (
    <main className='relative flex flex-col gap-3 items-center justify-start overflow-x-hidden'>
      {/* <LineThree />
      <LineTow /> */}
      <div className='absolute top-0 z-0 w-full'>
        <div className='h-20 w-full max-w-7xl bg-sky-500 blur-[200px]' />
      </div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <div className='flex w-full items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <p className='opacity-70'>
            Build with me a wondrful project and let s make it happen
          </p>
          <span className='flex'>
            the project will be build with the latest technologies and will be a
            great experience for both of us
            <svg
              className='ml-2 hidden md:block'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width={20}
              height={20}
              fill={'none'}
            >
              <path
                d='M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinejoin='round'
              />
              <path
                d='M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinejoin='round'
              />
            </svg>
          </span>
        </div>
      </div>
      <CardsSection />
      <Footer />
    </main>
  );
};

export default HomePage;
