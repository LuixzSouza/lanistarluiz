import Image from "next/image";
import { ContainerGrid } from "@/components/container";

export function SectionBetter() {
    return(
        <ContainerGrid className={"bg-bg-better bg-cover flex flex-col items-center justify-between text-center pt-14 @desktop:text-left @desktop:flex-row gap-9 @desktop:gap-0"}>
            <div className="w-[512]">
                <h2 className="w-[417] text-5xl font-normal text-[#FDFDFD]/70">WHAT’S BETTER THAN AIR MILES? <span className="text-[#FDFDFD]">ACTUAL AIR.</span></h2>
                <p className="py-7 text-lg font-medium text-[#F6F6F6]">We plant a tree for everyone who pre-registers and every new customer. And we’re planning to plant millions.</p>
                <button className="px-8 py-3 bg-[#07BCFF] text-white text-base font-semibold rounded-md hover:bg-[#008ECB] transition-colors">PRE-REGISTER NOW</button>
            </div>
            <div className="relative flex justify-start w-full h-[512]">
                <Image 
                    src={"/ImagesBetter.png"}
                    alt="Card"
                    width={621}
                    height={514}
                    className=""
                />
            </div>
        </ContainerGrid>
    )
}