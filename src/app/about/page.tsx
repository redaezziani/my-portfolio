import BadgeShine from "@/components/projects/badge";
import Line from "@/components/projects/line";
import LineTow from "@/components/projects/line-2";
import LineThree from "@/components/projects/line-3";
import StikeyNav from "@/components/projects/stikey-nav";

const  HomePage= () => {
  return (
    <main className=" flex bg-black h-screen overflow-hidden justify-start items-center gap-3 relative flex-col overflow-x-hidden">
      <div className={`absolute z-[1] opacity-40   inset-0 bg-cover`}>
          <div className="w-full h-full bg-repeat bg-[url('./images/decorationBlockLight.svg')] dark:bg-[url('./images/decorationBlockDark.svg')]" style={{WebkitMaskImage: 'radial-gradient(70% 70% at 50.00% 30%, #000 0%, rgba(0, 0, 0, 0.25) 100%)'}}></div>
        </div>
      <div className="w-[1000px] z-0 min-h-96 bg-[#ec2456]/20 rounded-full blur-[120px] absolute -top-52 "/>
      <Line/>
      <LineTow/>
      <LineThree/>
      <BadgeShine/>
     
    </main>
  );
}

export default HomePage;
