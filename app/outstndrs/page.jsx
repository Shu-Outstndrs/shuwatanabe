import Image from "next/image";
import { BackToHome } from "../backToHome";
import { Main } from "../main";
import { Footer } from "../footer";
import { Gallery } from "./gallery";

export default function Page() {
  return (
    <>
      <BackToHome />
      <div className="lg:flex lg:flex-1 lg:min-h-[100vh]">
        <Main
          imgPath="/outstndrs-white.png"
          title1="team"
          title2="outstndrs"
          description1="Minecraft, Education"
          description2="3DCG, Video"
        />
        <Gallery />
      </div>
      <Footer />
    </>
  );
}
