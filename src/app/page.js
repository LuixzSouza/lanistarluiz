import { Heading } from "@/components/header";
import { SectionHeader } from "@/components/secthome";
import { SectionPayment } from "@/components/sectPayment";
import { SectionSecurity } from "@/components/sectsecurity";
import { SectionSlide } from "@/components/slidebar";
import { SectionControlMoney } from "@/components/controlmoney";
import { SectionMindFul } from "@/components/mindiful";
import { SectionBetter } from "@/components/Better";
import { Footer } from "@/components/footer";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Heading/>
      <SectionHeader/>
      <SectionPayment/>
      <SectionSecurity/>
      <SectionSlide/>
      <SectionControlMoney/>
      <SectionMindFul/>
      <SectionBetter/>
      <Footer/>
    </>
  );
}
