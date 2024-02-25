import Image from "next/image";

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
    },
    {
      title: "Kanban",
      value: "kanban",
      content: (
        <div className="w-full overflow-hidden text-center relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Kanban</p>
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
      title: "Analytics",
      value: "analytics",
      content: (
        <div className="w-full overflow-hidden text-center relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Analytics</p>
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
    ]
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        <section className="shadow-vignette pb-24 w-full h-full flex flex-col items-center justify-center dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
          <div className="mt-6 flex flex-col items-center justify-center max-w-4xl text-center">
            <h1 className="text-8xl font-extrabold mb-6">Odyssey</h1>
            <p className="max-w-2xl text-zinc-400 text-lg mb-6">Simplifying software development. Agile task management, real-time collaboration, and powerful analytics in one seamless solution.</p>
            <Button>Get Started</Button>
          </div>

            <Tabs
              tabs={tabs}
              contentClassName="bg-zinc-500 bg-opacity-5 backdrop-blur-[25px] mt-8"
              containerClassName="bg-zinc-950 mt-10"
            />
        </section>

        <Pricing />
      </main>

      <Footer />
    </>
  );
}
