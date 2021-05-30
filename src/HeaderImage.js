import React from "react";

function HeaderImage({ colClass, url, alt }) {
  return (
    <div className={colClass}>
      <img src={url} alt={alt} className="img-fluid shadow-lg" />
    </div>
  );
}

export default HeaderImage;
