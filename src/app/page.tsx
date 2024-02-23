import { Button, buttonVariants } from "@/components/ui/button";
import GlowingStarsBackground from "@/components/ui/glowing-stars-background";

export default function Home() {
  return (
    <main>
      <section className="shadow-vignette min-h-screen relative flex flex-col items-center justify-center">
        <GlowingStarsBackground className="min-h-screen absolute top-0 bottom-0 right-0 left-0" />
        <h1 className="text-8xl font-thin pb-10">Interstellar</h1>
        
        <div className="flex flex-row gap-5">
          <Button size={"lg"}>Get Premium</Button>
        </div>
      </section>
    </main>
  );
}
