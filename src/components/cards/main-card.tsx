

import ProjectCard from '@/components/projects/project-card';
const MainCard = () => {
    return (
        <ProjectCard
            className='col-span-2    relative flex justify-start items-start flex-col max-h-[23.5rem] h-full'
        >
            <div className="size-20 bottom-0 z-0 absolute dark:bg-slate-100 bg-[#1BA0F2] blur-[100px] rounded-full" />
            <div className="w-full p-3 h-full flex flex-col gap-2 justify-start items-start">
                <div className="flex mt-6 flex-col justify-start items-start md:max-w-5xl">
                    <span className=" text-sm font-medium capitalize ">
                       Real Web Code , no templates no shortcuts
                    </span>
                    <span className=" text-sm mt-3  text-gray-500">
                        I build websites from scratch using the latest web technologies. No templates, no shortcuts. Just real web code that's built to last.
                    </span>
                </div>
            </div>
            
        </ProjectCard>
    )
}

export default MainCard