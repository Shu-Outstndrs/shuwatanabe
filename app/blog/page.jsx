import { Main } from "../main";
import { Footer } from "../footer";
import { SideCards } from "./sideBlogCards";

export default function Page() {
  return (
    <>
      <div className="lg:flex lg:flex-auto">
        <div className="lg:block hidden max-w-[50vw]">
          <Main
            imgPath="/ShuSirokuro600.webp"
            title1="shu blog"
            age
            description1="Digital, Mathematics"
            description2="WebDesign, Lang"
          />
        </div>
        <div className="dark:bg-gray-900/30 bg-slate-300/50 min-h-screen lg:min-w-[50vw] backdrop-blur-sm">
          <SideCards />
        </div>
      </div>
      <Footer />
    </>
  );
}
