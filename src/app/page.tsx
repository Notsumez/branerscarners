import Header from "./components/header";
import Image from "next/image";
import SectionHero from "./components/section-hero";
import SectionDiscover from "./components/section-discover";
import bgMain from '/public/bg-main.svg';

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <Image className="w-full h-screen object-cover" src={bgMain} alt="" />
      <SectionDiscover />
    </>
  );
}
