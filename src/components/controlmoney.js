import Image from "next/image"
import { ContainerGrid } from "@/components/container";

export function SectionControlMoney() {
    return(
        <ContainerGrid className={'relative bg-[#0A1D2E] py-32 flex justify-between'}>
            <div className="w-full max-w-96 mr-32">
                <h2 className="text-[#7C8999] text-5xl font-medium">CONTROL YOUR <br/> <span className="text-white" >MONEY FLOW</span></h2>
            </div>
            <div className="w-full flex">
                <ul className="w-full">
                    <li className="pb-6">
                        <Image 
                            src={'Icon-Transfer.svg'}
                            alt=""
                            width={42}
                            height={42}
                        />
                    </li>
                    <li className="pb-4">
                        <h4 className="text-white text-lg font-medium pb-4">SEND MONEY FOR FREE</h4>
                        <p className="text-[#A6AEB8] text-base font-normal">Lanistar to Lanistar payments are free, so there’s no reason not to settle up.</p>
                    </li>
                    <li className="pb-6">
                        <Image 
                            src={'Icon-Business.svg'}
                            alt=""
                            width={42}
                            height={42}
                        />
                    </li>
                    <li className="pb-4">
                        <h4 className="text-white text-lg font-medium pb-4">TRACK YOUR SPENDING</h4>
                        <p className="text-[#A6AEB8] text-base font-normal">See and track your spending across all your payment cards in real-time. And if you want instant notifications when money comes in or out, we’ve got that too.</p>
                    </li>
                </ul>
                <ul className="w-full">
                    <li className="pb-6">
                        <Image 
                            src={'Icon-Credit.svg'}
                            alt=""
                            width={42}
                            height={42}
                        />
                    </li>
                    <li className="pb-4">
                        <h4 className="text-white text-lg font-medium pb-4" >SEND MONEY FOR FREE</h4>
                        <p className="text-[#A6AEB8] text-base font-normal">Lanistar to Lanistar payments are free, so there’s no reason not to settle up.</p>
                    </li>
                    <li className="pb-6">
                        <Image 
                            src={'Icon-Support.svg'}
                            alt=""
                            width={42}
                            height={42}
                        />
                    </li>
                    <li className="pb-4">
                        <h4 className="text-white text-lg font-medium pb-4">24/7 MULTI-LINGUAL SUPPORT</h4>
                        <p className="text-[#A6AEB8] text-base font-normal">Need us? We’re up. 24/7 multilingual support, in-app or on WhatsApp. You’re in control.</p>
                    </li>
                    <li className="pb-6">
                        <Image 
                            src={'Icon-CreditCards.svg'}
                            alt=""
                            width={42}
                            height={42}
                        />
                    </li>
                    <li>
                        <h4 className="text-white text-lg font-medium pb-4">STACK, SWAP, DON T STOP</h4>
                        <p className="text-[#A6AEB8] text-base font-normal">One payment card per account? Yeah no. Our payment cards are polymorphic, meaning you can stack multiple cards in one, and swap between.</p>
                    </li>
                </ul>
            </div>
            <Image 
                src={'/mockup.png'}
                alt="Mockup"
                width={1440}
                height={699}
                className="absolute bottom-0 left-0"
            />
        </ContainerGrid>
    )
}