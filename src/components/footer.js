import Image from "next/image";
import { ContainerGrid } from "./container";

export function Footer() {
    return (
        <ContainerGrid className={'pt-28 pb-14'}>
            <ul className="no-underline flex items-start justify-between pb-14 border-b border-black/40">
                <li className="flex items-start">
                    <Image 
                        src={'/FooterIcon.svg'}
                        alt=""
                        width={48}
                        height={48}
                    />
                </li>
                <li className="flex flex-col gap-6">
                    <Image 
                        src={'/GooglePlay.svg'}
                        alt=""
                        width={190}
                        height={56}
                    />
                    <Image 
                        src={'/AppStore.svg'}
                        alt=""
                        width={190}
                        height={56}
                    />
                </li>
                <li className="flex flex-col gap-6">
                    <div className="flex gap-4">
                        <Image 
                            src={'/Icon-Stars.svg'}
                            alt=""
                            width={19}
                            height={19}
                        />
                        <p>Influencers</p>
                    </div>
                    <div className="flex gap-4">
                        <Image 
                            src={'/Icon-ForCent.svg'}
                            alt=""
                            width={19}
                            height={19}
                        />
                        <p>Investors</p>
                    </div>
                </li>
                <li className="flex flex-col gap-8" >
                    <p>Security</p>
                    <p>Features</p>
                    <p>Fundamentals</p>
                    <p>About Us</p>
                </li>
                <li className="flex flex-col gap-8">
                    <p>Support</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </li>
                <li className="flex gap-8">
                    <Image
                        src={'/Icon-Gray-Instagram.svg'}
                        alt=""
                        width={18}
                        height={18}
                    />
                    <Image
                        src={'/Icon-Gray-Youtube.svg'}
                        alt=""
                        width={18}
                        height={18}
                    />
                    <Image
                        src={'/Icon-Gray-Twitter.svg'}
                        alt=""
                        width={18}
                        height={18}
                    />
                </li>
            </ul>
            <div className="flex flex-col gap-14 pt-16">
                <p className="text-[#475567] text-sm font-normal" >Lanistar Ltd is a registered EMD agent (FRN: 902996) of Modulr FS Limited and may distribute and redeem e-money and provide payment services. Modulr FS Limited is authorised by the Financial Conduct Authority ("FCA") under the Electronic Money Regulations 2011 (FRN: 900573) for the issuing of electronic money and to provide payment services. Lanistar Limited ("Lanistar") is currently only carrying out pre-launch marketing in preparation for a future launch of Lanistar branded payment cards ("Cards"). Lanistar is finalising arrangements with various partner firms who are authorised and/or regulated (by the FCA and other overseas regulators) and the Cards will only be launched and go-live when those arrangements are in place.</p>
                <div className="flex justify-between"> 
                    <p className="text-[#475567] text-sm tracking-tighter font-medium">© 2021 Lanistar.com</p>
                    <div className="flex gap-5">
                        <p className="text-[#475567] " >Powered by</p>
                        <Image 
                            src={'/Icon-TwoCircle.svg'}
                            alt="Img DOIS cIRCULO"
                            width={42}
                            height={21}
                        />
                        <Image 
                            src={'/Icon-Symbol.svg'}
                            alt="Img DOIS cIRCULO"
                            width={29}
                            height={18}
                        />
                    </div>
                </div>
            </div>
        </ContainerGrid>
    )
}