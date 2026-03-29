import React, { useEffect } from "react";
import CuffDownPattern from "./CuffDownPattern";
import ToeUpPattern from "./ToeUpPattern";
import SockAbbrevs from "./SockAbbrevs";

function Recipe(props) {
  useEffect(() => {
    document.querySelector("#recipe").scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div id="recipe" className="pt-5 mt-5 border-top">
      <h2 className="mb-5">Your Custom Sock Recipe</h2>
      <div className="row">
        <SockAbbrevs
          direction={props.direction}
          heeltype={props.heeltype}
        />
        {props.direction === "cuffdown" && (
          <CuffDownPattern
            heeltype={props.heeltype}
            fullStCount={props.fullStCount}
            footLength={props.footLength}
            direction={props.direction}
            getMultiple={props.getMultiple}
          />
        )}
        {props.direction === "toeup" && (
          <ToeUpPattern
            fullStCount={props.fullStCount}
            footLength={props.footLength}
            direction={props.direction}
            getMultiple={props.getMultiple}
          />
        )}
      </div>
    </div>
  );
}

export default Recipe;
