import Image from "next/image";
import LogoCarousel from "@/components/LogoCarousel";

export default function Home() {
  return (
    <main className="w-full relative">
      <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">

        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/blue-pattern-bg.svg"
            alt="Fondo Hero"
            fill
            priority
            className="object-cover -z-20"
          />

          {/* <div className="absolute inset-0 bg-black/80 -z-10" /> */}
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="text-lg md:text-2xl mt-2 font-light tracking-widest text-gray-300
          ">
            Piezas en acrílico que hacen brillar tu espacio
          </p>

          <button className="mt-8 px-10 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg shadow-black/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 font-bold uppercase tracking-widest">
            Explorar catálogo
          </button>
        </div>

      </section>

      <LogoCarousel />

      <section className="h-screen bg-white">
      </section>
    </main>
  );
}