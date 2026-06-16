"use client";

import { useEffect } from "react";
import CuffDownPattern from "@/app/ui/socks/CuffDownPattern";
import ToeUpPattern from "@/app/ui/socks/ToeUpPattern";
import SockAbbrevs from "@/app/ui/socks/SockAbbrevs";
import { HeelType, SockDirection } from "@/app/types";

function Recipe({
  direction,
  heelType,
  fullStCount,
  footLength,
}: {
  direction: SockDirection;
  heelType: HeelType;
  fullStCount: number;
  footLength: number;
}) {
  useEffect(() => {
    document.querySelector("#recipe")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div id="recipe" className="pt-5 mt-5 border-top">
      <h2 className="mb-5">Your Custom Sock Recipe</h2>
      <div className="row">
        <SockAbbrevs direction={direction} heelType={heelType} />
        {direction === "cuffdown" && (
          <CuffDownPattern
            heelType={heelType}
            fullStCount={fullStCount}
            footLength={footLength}
            direction={direction}
          />
        )}
        {direction === "toeup" && (
          <ToeUpPattern
            fullStCount={fullStCount}
            footLength={footLength}
            direction={direction}
          />
        )}
      </div>
    </div>
  );
}

export default Recipe;
