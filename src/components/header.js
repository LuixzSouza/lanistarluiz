import Image from "next/image";
import { ContainerGrid } from "@/components/container";

const navigation = [
    {
        Link: "SECURITY",
        direc: "",
    },
    {
        Link: "FEATURES",
        direc: "",
    },
    {
        Link: "FUNDAMENTALS",
        direc: "",
    },
]

export function Heading() {
    return(
        <ContainerGrid className={"relative flex items-center justify-between h-24 border-b-2 border-gray-400/30 z-20"}>
            <div>
                <Image src={"./Logo.svg"} alt="Logo Lanistar" width={176} height={48} />
            </div>
            <div className="hidden items-center justify-between w-96 @desktop:flex">
                {navigation.map((item, index) => (
                    <div  key={index}>
                        <a href={item.direc}>{item.Link}</a>
                    </div>
                ))}
            </div>
            <div className="relative flex justify-between w-full gap-4 max-w-max @desktop:max-w-80">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <Image src={"./IconESA.svg"} alt="Logo Lanistar" width={24} height={24} />
                    <Image className="group-hover:rotate-180 transition-all" src={"./ArrowDonw.svg"} alt="Logo Lanistar" width={12} height={6} />
                    <div className="absolute flex flex-col p-3 shadow-2xl -bottom-20 left-0 gap-2 rounded-md opacity-0 bg-white group-hover:opacity-100 transition-opacity">
                        <Image src={"./IconESP.svg"} alt="Logo Lanistar" width={24} height={24}/>
                        <Image src={"./IconBR.svg"} alt="Logo Lanistar" width={24} height={24}/>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Image src={"./IconRegister.svg"} alt="Logo Lanistar" width={24} height={24} />
                    <span>PRE-REGISTER NOW</span>
                </div>
            </div>
        </ContainerGrid>
    )
}