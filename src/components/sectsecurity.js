import Image from "next/image";
import { ContainerGrid } from "@/components/container";

const InfoSecurity = [
    {
        image: "/Icon-ProtectCard.svg",
        text: "Nlitz on-line shopping more securely with dynamic CVV2",
    },
    {
        image: "/Icon-HandCoins.svg",
        text: "You control your money, it doesn’t control you",
    },
    {
        image: "/Icon-PasswordShield.svg",
        text: "Securely with dynamic CVV2",
    },
    {
        image: "/Icon-ShieldProtect.svg",
        text: "Ant-hacker technology",
    },
]

export function SectionSecurity() {
    return(
        <ContainerGrid className={"py-28 flex flex-col justify-between @desktop:flex-row"}>
            <div className="flex flex-col items-center justify-center text-center @desktop:text-left @desktop:items-start @desktop:justify-start w-full @desktop:max-w-xl">
                <h2 className="text-3xl font-medium text-black/40 mb-6 @desktop:text-4xl">A SECURITY DETAIL FOR YOUR <span className="text-black">BANK DETAILS</span></h2>
                <p className="text-lg font-medium text-gray-700/80 mb-10">The most secure payment card in the world. Load up to 8 payment cards and get one-time PINs straight from the keypad</p>
                <ul>
                    {InfoSecurity.map((item, index) => (
                        <li key={index} className="flex items-start gap-4 mb-8 text-left">
                            <Image
                                src={item.image}
                                alt="Icons"
                                width={24}
                                height={24}
                            />
                            <p className="text-lg font-medium text-gray-700/60 tracking-tighter">{item.text}</p>
                        </li>
                    ))}
                </ul>
                <button className="mt-4 px-8 py-3 bg-[#07BCFF] text-white text-base font-semibold rounded-md hover:bg-[#008ECB] transition-colors" >SPEAKING OF DETAILS</button>
            </div>
            <div className="w-full flex items-center justify-center" >
                    <Image 
                        src={"/LanistarMoving.png"}
                        alt=""
                        width={415}
                        height={615}
                    />
            </div>
        </ContainerGrid>
    )
}