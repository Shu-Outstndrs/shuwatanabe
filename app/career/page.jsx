import { Main } from "../main";
import { Footer } from "../footer";
import { Career } from "./career";
import { BackToHome } from "../backToHome";

export default function Page() {
  return (
    <>
      <BackToHome />
      <div className="lg:flex lg:flex-auto">
        <div className="lg:block hidden max-w-[50vw]">
          <Main
            imgPath="/ShuSirokuro600.webp"
            title1="shu"
            title2="outstndrs"
            age
            description1="Digital, Mathematics"
            description2="WebDesign, Lang"
          />
        </div>
        <div className="dark:bg-gray-900/60 bg-slate-300/50 min-h-screen lg:min-w-[50vw]">
          <Career />
        </div>
      </div>
      <Footer />
    </>
  );
}
