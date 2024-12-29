import { ContainerGrid } from "@/components/container";
import Image from "next/image";

export function SectionHeader() {
    return (
        <div className="relative w-full h-full overflow-hidden z-10">
            <ContainerGrid className={"relative z-20 w-full h-full @desktop:h-[863px] pt-20"}>
                <div className="flex flex-col items-center justify-center text-center @desktop:items-start @desktop:justify-start @desktop:text-left">
                    <h1 className="text-5xl text-black font-light tracking-tight pb-6 @desktop:text-7xl">
                        <span className="text-zinc-400">BE</span>UNTOUCHABLE
                    </h1>
                    <p className="text-1xl tracking-tight text-zinc-600 font-medium w-full max-w-xl pb-10 @desktop:text-2xl">
                        A polymorphic payment card for those who know influence is the only currency that matters.
                    </p>
                    <button className="px-8 py-3 bg-[#07BCFF] text-white text-base font-semibold rounded-md hover:bg-[#008ECB] transition-colors">
                        PRE-REGISTER NOW
                    </button>
                    <p className="w-full max-w-64 text-base text-zinc-600 pt-12 pb-6">
                        <span className="font-semibold">COMING 2021:</span> GET THE APP TO GET ON THE WAITLIST
                    </p>
                    <div className="w-32 h-2 bg-[#07bdff77] rounded-full overflow-hidden">
                        <div className="w-14 h-full bg-[#07BCFF]"></div>
                    </div>
                </div>
            </ContainerGrid>

            {/* Corrigido: A tag div que contém a imagem foi ajustada */}
            <div className="block relative z-10 w-full h-full @desktop:absolute top-0 -right-8">
                <Image 
                    src="/bg-home.png" 
                    layout="fill" 
                    objectFit="cover" 
                    quality={100}
                    priority 
                    alt="Background Image" 
                />
            </div>
        </div>
    );
}
