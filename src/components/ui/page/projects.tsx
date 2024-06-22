import MagicCard from '@/components/projects/magic-card';

const Projects = () => {
  return (
    <div
      id='projects'
      className='relative z-0 mt-10 flex min-h-96 w-full max-w-[74rem]  flex-col items-start justify-start gap-3 bg-transparent px-4 md:px-4'
    >
      <div className='grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
        <MagicCard
          title='Ticketing System'
          description='A ticketing system for a company to manage their customer support.'
          link=''
        ></MagicCard>
        <MagicCard
          title='Ticketing System'
          description='A ticketing system for a company to manage their customer support.'
          link=''
        ></MagicCard>
        <MagicCard
          title='Ticketing System'
          description='A ticketing system for a company to manage their customer support.'
          link=''
        ></MagicCard>
      </div>
    </div>
  );
};

export default Projects;
