

import ProjectCard from '@/components/projects/project-card';
const MainCard = () => {
    return (
        <ProjectCard
            className='col-span-2    relative flex justify-start items-start flex-col max-h-[23.5rem] h-full'
        >
            <div className="w-full bg-[url('./images/HabbitBackgroundtop.png')] inset-0 bg-cover absolute"/>

            
            <div className="size-20 bottom-0 z-0 absolute dark:bg-slate-100 bg-[#1BA0F2] blur-[100px] rounded-full" />
            <div className="w-full p-3 h-full flex flex-col gap-2 justify-start items-start">
                
            </div>
            
        </ProjectCard>
    )
}

export default MainCard