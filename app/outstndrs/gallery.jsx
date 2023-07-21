import Image from "next/image";
import { GalleryImage } from "./galleryImage";

export function Gallery() {
  return (
    <div className="flex flex-col lg:w-[50vw] w-[100vw] mt-8 mx-auto mb-4 lg:px-4 px-2 text-white">
      <div className="text-2xl mb-8 text-center">
        <h1 className="lg:block hidden">Team Outstndrs Gallery</h1>
        <h1 className="lg:hidden block">Outstndrs Gallery</h1>
      </div>
      <div className="flex flex-initial">
        <div className="grid sm:grid-cols-2 grid-cols-2 gap-8 lg:w-[50vw] w-[95vw] mx-auto break-words">
          <GalleryImage
            imagePath="/wireframe.webp"
            w={1000}
            h={0}
            colSpan={"sm:col-span-2 col-span-1"}
          />
          <GalleryImage
            imagePath="/marsTower.webp"
            w={1000}
            h={0}
            colSpan={"row-span-2"}
          />
          <GalleryImage imagePath="/marsBuild1.webp" w={1000} h={0} />
          <GalleryImage imagePath="/mameBuild1.webp" w={1000} h={0} />
          <GalleryImage imagePath="/Day.webp" w={1000} h={0} />
        </div>
      </div>
    </div>
  );
}
