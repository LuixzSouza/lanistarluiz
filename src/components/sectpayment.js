import Image from "next/image";
import { ContainerGrid } from "@/components/container";

const ItensCorrect = [
  {
    texto: "Instant spending notifications across all your payment cards",
  },
  {
    texto: "Free Lanistar-to-Lanistar payments",
  },
  {
    texto: "Spend in multiple currencies",
  },
  {
    texto: "Track your spending",
  },
];

export function SectionPayment() {
    return (
      <ContainerGrid className={""}>
        <div className="flex flex-col justify-between w-full py-12 border-b-2 border-gray-400/30 @desktop:flex-row @desktop:py-32">
            <div className="w-full text-center pb-20 @desktop:text-left @desktop:pb-0">
              <h2 className="text-4xl font-light @desktop:text-6xl"><span className="text-gray-500">LANISTAR </span> <br/>PAYMENT CARD</h2>
            </div>
            <div className="w-full">
              <ul className="flex flex-col items-center justify-center gap-6 w-full text-center @desktop:max-w-96 @desktop:items-start @desktop:text-left">
                  {ItensCorrect.map((item, index) => (
                  <li key={index} className="flex items-start gap-6">
                      <Image src={"/IconCorrect.svg"} alt="Icon-Correct" width={23} height={23} />
                      <p>{item.texto}</p>
                  </li>
                  ))}
              </ul>
            </div>
        </div>
      </ContainerGrid>
    );
  }
  
