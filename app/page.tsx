import Navbar from "@/components/navbar";
import Courses from "@/components/sections/courses";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <Courses />
    </div>
  );
}
