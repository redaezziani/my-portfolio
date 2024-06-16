import ProjectCard from '@/components/projects/project-card';
const MainCard = () => {
  return (
    <ProjectCard className='relative touch-none select-none col-span-2 flex h-full max-h-[23.5rem] flex-col items-start justify-start'>

      <div className='absolute bottom-0 z-0 size-20 rounded-full bg-[#1BA0F2] blur-[100px] dark:bg-slate-100' />
      <div className='flex h-full w-full flex-col items-start justify-start gap-2 p-3'></div>
    </ProjectCard>
  );
};

export default MainCard;
