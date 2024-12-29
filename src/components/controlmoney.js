import Image from "next/image";
import { ContainerGrid } from "@/components/container";

export function SectionControlMoney() {
    return (
        <ContainerGrid className="relative bg-[#0A1D2E] py-32 flex flex-col @desktop:flex-row @tablet:px-6">
            {/* Título */}
            <div className="w-full max-w-96 mx-auto mb-12 @desktop:mb-0 @desktop:w-1/2">
                <h2 className="text-[#7C8999] text-5xl font-medium text-center @desktop:text-left">
                    CONTROL YOUR <br /> <span className="text-white">MONEY FLOW</span>
                </h2>
            </div>

            {/* Lista de funcionalidades */}
            <div className="relative z-20 w-full flex flex-col @desktop:flex-row @desktop:w-1/2">
                {/* Primeira coluna de funcionalidades */}
                <ul className="w-full @desktop:w-1/2 flex flex-col @desktop:mr-8">
                    <li className="pb-6 flex items-center justify-start">
                        <Image src="Icon-Transfer.svg" alt="" width={42} height={42} />
                    </li>
                    <li className="pb-4">
                        <h4 className="text-white text-lg font-medium pb-4">SEND MONEY FOR FREE</h4>
                        <p className="text-[#A6AEB8] text-base font-normal">Lanistar to Lanistar payments are free, so there’s no reason not to settle up.</p>
                    </li>
                    <li className="pb-6 flex items-center justify-start">
                        <Image src="Icon-Business.svg" alt="" width={42} height={42} />
                    </li>
                    <li className="pb-4">
                        <h4 className="text-white text-lg font-medium pb-4">TRACK YOUR SPENDING</h4>
                        <p className="text-[#A6AEB8] text-base font-normal">See and track your spending across all your payment cards in real-time. And if you want instant notifications when money comes in or out, we’ve got that too.</p>
                    </li>
                </ul>

                {/* Segunda coluna de funcionalidades */}
                <ul className="w-full @desktop:w-1/2 flex flex-col">
                    <li className="pb-6 flex items-center justify-start">
                        <Image src="Icon-Credit.svg" alt="" width={42} height={42} />
                    </li>
                    <li className="pb-4">
                        <h4 className="text-white text-lg font-medium pb-4">SEND MONEY FOR FREE</h4>
                        <p className="text-[#A6AEB8] text-base font-normal">Lanistar to Lanistar payments are free, so there’s no reason not to settle up.</p>
                    </li>
                    <li className="pb-6 flex items-center justify-start">
                        <Image src="Icon-Support.svg" alt="" width={42} height={42} />
                    </li>
                    <li className="pb-4">
                        <h4 className="text-white text-lg font-medium pb-4">24/7 MULTI-LINGUAL SUPPORT</h4>
                        <p className="text-[#A6AEB8] text-base font-normal">Need us? We’re up. 24/7 multilingual support, in-app or on WhatsApp. You’re in control.</p>
                    </li>
                    <li className="pb-6 flex items-center justify-start">
                        <Image src="Icon-CreditCards.svg" alt="" width={42} height={42} />
                    </li>
                    <li>
                        <h4 className="text-white text-lg font-medium pb-4">STACK, SWAP, DON’T STOP</h4>
                        <p className="text-[#A6AEB8] text-base font-normal">One payment card per account? Yeah no. Our payment cards are polymorphic, meaning you can stack multiple cards in one, and swap between.</p>
                    </li>
                </ul>
            </div>

            {/* Mockup Image */}
            <Image src="/mockup.png" alt="Mockup" width={1440} height={699} className="absolute z-10 bottom-0 left-0 w-full @desktop:w-auto @desktop:left-1/2 @desktop:-translate-x-1/2" />
        </ContainerGrid>
    );
}
