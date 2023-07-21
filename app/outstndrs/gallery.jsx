import Image from "next/image";
import { GalleryImage } from "./galleryImage";

export function Gallery() {
  return (
    <div className="flex flex-col justify-center mt-8 mx-auto mb-4 lg:px-4 px-2 text-white">
      <div className="text-2xl mb-8 text-center">
        <h1 className="lg:block hidden">Team Outstndrs Gallery</h1>
        <h1 className="lg:hidden block">Outstndrs Gallery</h1>
      </div>
      <div className="flex flex-1">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:w-[50vw] w-[95vw] mx-auto break-words">
          <GalleryImage
            imagePath="/wireframe.jpeg"
            w={10000}
            h={0}
            colSpan={"lg:col-span-2 col-span-1"}
          ></GalleryImage>
          <GalleryImage imagePath="/Day.webp" w={1000} h={0}></GalleryImage>
          <GalleryImage imagePath="/Day.webp" w={100} h={0}></GalleryImage>
          <GalleryImage imagePath="/Day.webp" w={100} h={0}></GalleryImage>
          <GalleryImage imagePath="/Day.webp" w={1000} h={0}></GalleryImage>
        </div>
      </div>
    </div>
  );
}
