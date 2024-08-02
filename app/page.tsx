import About from "@/components/About";
import Ear from "@/components/Ear";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Cmf from "@/components/cmf";
import Earc from "@/components/Earc";
import Mainh from "@/components/Mainh";

export default function Home() {
  return (  
    <main className="relative bg-black flex justify-center items-center flex-col overflow-clip mx-auto  ">
      <div className="w-full">
          <FloatingNav navItems={navItems}/>
          <Mainh/>  
          <Hero/>
          <Ear/>
          <Earc/>
          <Cmf/>
          <About/>

      </div>
    </main>
  );
}
