import Image from "next/image";
import { Main } from "../main";
import { Footer } from "../footer";
import { Gallery } from "./gallery";

export default function Page() {
  return (
    <>
      <div className="lg:flex lg:flex-1 lg:min-h-[100vh]">
        <Main
          imgPath="/Outstndrs-white.png"
          title1="team"
          title2="outstndrs"
          age={false}
          description1="Minecraft, Education"
          description2="3DCG, Video"
        />
        <Gallery />
      </div>
    </>
  );
}
