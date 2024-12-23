import Image from "next/image";
import { ContainerGrid } from "@/components/container";

export function SectionMindFul() {
    return (
        <div>
            <ContainerGrid>
                <ul className="flex justify-between py-20 border-b border-black/10">
                    <li className="flex items-center">
                        <Image
                            src={'/Icon-World.svg'}
                            alt="Icone"
                            width={72}
                            height={72}
                        />
                        <p className="pl-8 text-[#475567] text-base font-semibold max-w-60">ACCEPTED AT MORE THAN 38M TILLS</p>
                    </li>
                    <li className="flex items-center">
                        <Image
                            src={'/Icon-CardWorld.svg'}
                            alt="Icone"
                            width={72}
                            height={72}
                        />
                        <p className="pl-8 text-[#475567] text-base font-semibold max-w-60">Spend in multiple currencies</p>
                    </li>
                    <li className="flex items-center">
                        <Image
                            src={'/Icon-Money.svg'}
                            alt="Icone"
                            width={72}
                            height={72}
                        />
                        <p className="pl-8 text-[#475567] text-base font-semibold max-w-60">THATS IT! free money transfers</p>
                    </li>
                </ul>
            </ContainerGrid>
            <div className="">
                <ContainerGrid className={"py-20"}>
                    <div className="flex justify-between">
                        <h2 className="text-5xl text-[#7C8999] font-medium">GET <span className="text-[#475567]">MINDFUL</span></h2>
                        <div className="flex items-center gap-4">
                            <Image
                                src={'/Icon-Instagram.svg'}
                                alt="Icone"
                                width={15}
                                height={15}
                            />
                            <p className="text-base text-[#7C8999] font-semibold">FOLLOW US</p>
                        </div>
                    </div>
                </ContainerGrid>
                <div className="flex flex-col gap-11">
                    <div className="flex justify-end">
                        <Image
                            src={'/Group1.png'}
                            alt="Icone"
                            width={1412}
                            height={246}
                        />
                    </div>
                    <div className="flex justify-start">
                        <Image
                            src={'/Group2.png'}
                            alt="Icone"
                            width={1412}
                            height={246}
                        />
                    </div>
                    <div className="flex justify-end">
                        <Image
                            src={'/Group3.png'}
                            alt="Icone"
                            width={1412}
                            height={246}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}