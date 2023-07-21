import Image from "next/image";
import { Main } from "./main";
import { Footer } from "./footer";
import { SideCards } from "./sideCards";

export default function Home() {
  return (
    <>
      <div className="lg:flex lg:flex-1 lg:min-h-[100vh]">
        <Main
          imgPath="/ShuSirokuro600.webp"
          title1="shu"
          title2="outstndrs"
          age
          description1="Digital, Mathematics"
          description2="WebDesign, Lang"
        />
        <SideCards />
      </div>
      <Footer />
    </>
  );
}
