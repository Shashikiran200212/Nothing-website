import About from "@/components/About";
import Ear from "@/components/Ear";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (  
    <main className="relative bg-black flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="w-full">
          <FloatingNav navItems={navItems}/>
          <Hero/>
          <Ear/>
          <About/>

      </div>
    </main>
  );
}
