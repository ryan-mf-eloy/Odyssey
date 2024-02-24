import Image from "next/image";

import GlowingStarsBackground from "@/components/ui/glowing-stars-background";
import SiteHeader from "@/components/ui/site-header";
import Footer from "@/components/ui/footer";
import Tabs from "@/components/ui/tabs";
import Button from "@/components/ui/button";
import Pricing from "@/components/ui/pricing";

import image from '../../public/dashboard-example.webp'

export default function Home() {
  const tabs = [
    {
      title: "Integrations",
      value: "integrations",
      content: (
        <div className="w-full overflow-hidden text-center relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Integrations</p>
         <Image
          src={image.src}
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
        </div>
      ),
    },
    {
      title: "Follow Development",
      value: "follow-development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-center p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Follow Development</p>
         <Image
          src={image.src}
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
        </div>
      )
      }
    ]
  return (
    <>
      <SiteHeader />
      <main className="pt-16 shadow-vignette min-h-screen relative flex flex-col items-center justify-center">
        <GlowingStarsBackground className="min-h-screen absolute top-0 bottom-0 right-0 left-0" />

        <div className="pt-10 flex flex-col items-center justify-center max-w-4xl text-center">
          <h1 className="text-8xl font-extrabold mb-6">Odyssey</h1>
          <p className="max-w-2xl text-zinc-400 text-lg mb-6">Simplifying software development. Agile task management, real-time collaboration, and powerful analytics in one seamless solution.</p>
        </div>

        <Tabs
          tabs={tabs}
          contentClassName="bg-zinc-600 bg-opacity-5 backdrop-blur-[8px] mt-8"
          containerClassName="bg-zinc-950"
        />

        <Pricing />
      </main>

      <Footer />
    </>
  );
}
