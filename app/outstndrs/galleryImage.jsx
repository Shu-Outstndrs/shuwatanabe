import Image from "next/image";

export function GalleryImage({ imagePath, w, h, colSpan }) {
  return (
    <div
      className={`${colSpan} min-w-lg p-2 bg-slate-800/60 backdrop-blur-md rounded-xl`}
    >
      <Image
        src={imagePath}
        width={w}
        height={h}
        style={{ objectFit: "contain" }}
        className="rounded-lg"
        alt="outstndrsGallery"
      ></Image>
    </div>
  );
}
