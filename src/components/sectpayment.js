import Image from "next/image";
import { ContainerGrid } from "./container";

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
        <div className="flex justify-between w-full py-32 border-b-2 border-gray-400/30">
            <div className="w-full">
            <h2 className="text-6xl font-light"><span className="text-gray-500">LANISTAR </span> <br/>PAYMENT CARD</h2>
            </div>
            <div className="w-full">
            <ul className="flex flex-col gap-6 w-96">
                {ItensCorrect.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
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
  
