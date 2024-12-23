import { ContainerGrid } from "@/components/container";

export function SectionHeader() {
    return (
        <div className="relative bg-bg-rectangle w-full h-full overflow-hidden z-10">
        <ContainerGrid className={"bg-[#F9F9FC] w-full h-[863px] p-28"}>
            <div>
                <h1 className="text-7xl text-black font-light tracking-tight pb-6"><span className="text-zinc-400">BE</span>UNTOUCHABLE</h1>
                <p className="text-2xl tracking-tight text-zinc-600 font-medium w-full max-w-xl pb-10">A polymorpjic payment card for those who know influence is the only currency that matters.</p>
                <button className="px-8 py-3 bg-[#07BCFF] text-white text-base font-semibold rounded-md hover:bg-[#008ECB] transition-colors">PRE-REGISTER NOW</button>
                <p className="w-full max-w-64 text-base text-zinc-600 pt-12 pb-6"><span className="font-semibold">COMING 2021:</span>GET THE APP TO GET ON THE WAITLIST</p>
                <div className="w-32 h-2 bg-[#07bdff77] rounded-full overflow-hidden ">
                    <div className="w-14 h-full bg-[#07BCFF]">
                    </div>
                </div>
            </div>
        </ContainerGrid>
        <div className="absolute top-0 -right-8 bg-bg-homing w-full h-full bg-no-repeat bg-center"/>
        </div>
    )
}