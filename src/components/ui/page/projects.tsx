import MagicCard from '@/components/projects/magic-card';
const Projects = () => {
  return (
    <div
      id="projects"
      className="relative z-0 mt-10 flex min-h-96 w-full max-w-[74rem]  flex-col items-start justify-start gap-3 bg-transparent px-4 md:px-4"
    >
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        <MagicCard
          title="Ticketing System"
          description="A ticketing system for a company to manage their customer support."
          link=""
        >
         <img
         className=' border-b border-border  max-h-[14rem]'
         src="/frame-1.svg" alt="" />
        </MagicCard>
        <MagicCard
          title="Ticketing System"
          description="A ticketing system for a company to manage their customer support."
          link=""
        >
         <img
          className=' border-b border-border  max-h-[14rem]'
          src="/frame-2.svg" alt="" />
        </MagicCard>
        <MagicCard
          title="Blog Website Mdx Nextjs"
          description="This is a blog website built with Nextjs and Mdx seo friendly with tailwindcss."
          link="https://dev-hub-liard.vercel.app/"
        >
         <img
          className=' border-b border-border max-h-[14rem]'
         src="/project/project-3.png" alt="project-card" />
        </MagicCard>
      </div>
    </div>
  );
};

export default Projects;
