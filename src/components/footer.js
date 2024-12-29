import Image from "next/image";
import { ContainerGrid } from "@/components/container";

const socialIcons = [
  { src: "/Icon-Gray-Instagram.svg", alt: "Instagram" },
  { src: "/Icon-Gray-Youtube.svg", alt: "YouTube" },
  { src: "/Icon-Gray-Twitter.svg", alt: "Twitter" }
];

const appStores = [
  { src: "/GooglePlay.svg", alt: "Google Play", width: 190, height: 56 },
  { src: "/AppStore.svg", alt: "App Store", width: 190, height: 56 }
];

const footerLinks = [
  { text: "Security" },
  { text: "Features" },
  { text: "Fundamentals" },
  { text: "About Us" }
];

const supportLinks = [
  { text: "Support" },
  { text: "Terms and Conditions" },
  { text: "Privacy Policy" }
];

export function Footer() {
  return (
    <ContainerGrid className="pt-28 pb-14">
      <ul className="no-underline flex flex-col items-center justify-between pb-14 gap-5 border-b border-black/40 @desktop:flex-row @desktop:items-start">
        {/* Logo Section */}
        <li className="flex items-start">
          <Image src="/FooterIcon.svg" alt="Footer Logo" width={48} height={48} />
        </li>

        {/* App Store Links */}
        <li className="flex flex-col gap-6">
          {appStores.map((store, index) => (
            <Image
              key={index}
              src={store.src}
              alt={store.alt}
              width={store.width}
              height={store.height}
            />
          ))}
        </li>

        {/* Influencers & Investors Section */}
        <li className="flex flex-col gap-6">
          <div className="flex gap-4">
            <Image src="/Icon-Stars.svg" alt="Influencers Icon" width={19} height={19} />
            <p>Influencers</p>
          </div>
          <div className="flex gap-4">
            <Image src="/Icon-ForCent.svg" alt="Investors Icon" width={19} height={19} />
            <p>Investors</p>
          </div>
        </li>

        {/* Footer Links */}
        <li className="flex flex-col text-center gap-8 @desktop:text-left">
          {footerLinks.map((link, index) => (
            <p key={index}>{link.text}</p>
          ))}
        </li>

        {/* Support Links */}
        <li className="flex flex-col text-center gap-8 @desktop:text-left">
          {supportLinks.map((link, index) => (
            <p key={index}>{link.text}</p>
          ))}
        </li>

        {/* Social Media Icons */}
        <li className="flex gap-8">
          {socialIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon.src}
              alt={icon.alt}
              width={18}
              height={18}
              className="transition-all duration-300 transform hover:scale-110"
            />
          ))}
        </li>
      </ul>

      {/* Footer Bottom */}
      <div className="flex flex-col gap-14 pt-16">
        <p>
          Lanistar Ltd is authorised by the Financial Conduct Authority ("FCA") under the Electronic Money Regulations 2011.
        </p>
        <div className="flex justify-between">
          <p className="text-[#475567] text-sm tracking-tighter font-medium">© 2021 Lanistar.com</p>
          <div className="flex gap-5">
            <p className="text-[#475567]">Powered by</p>
            <Image src="/Icon-TwoCircle.svg" alt="Two Circle Icon" width={42} height={21} />
            <Image src="/Icon-Symbol.svg" alt="Symbol Icon" width={29} height={18} />
          </div>
        </div>
      </div>
    </ContainerGrid>
  );
}
