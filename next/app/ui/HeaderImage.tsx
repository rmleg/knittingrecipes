import Image from "next/image";
import React from "react";

function HeaderImage({
  colClass,
  path,
  alt,
  // raw actual height and width of image, not desired display size
  height,
  width,
}: {
  colClass: string;
  path: string;
  alt: string;
  height: number;
  width: number;
}) {
  return (
    <div className={colClass}>
      <Image
        src={path}
        alt={alt}
        width={width}
        height={height}
        className="img-fluid shadow-lg"
      />
    </div>
  );
}

export default HeaderImage;
