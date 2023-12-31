import Image from "next/image";

type galleryImage = {
  imagePath: string;
  w: number;
  h: number;
  colSpan: string | undefined;
};

export function GalleryImage({ imagePath, w, h, colSpan }: galleryImage) {
  return (
    <div
      className={`${colSpan} flex justify-center min-w-lg p-1 bg-slate-800/60 backdrop-blur-md rounded-xl`}
    >
      <Image
        src={imagePath}
        width={w}
        height={h}
        style={{ objectFit: "cover" }}
        className="rounded-lg"
        alt="outstndrsGallery"
      ></Image>
    </div>
  );
}
