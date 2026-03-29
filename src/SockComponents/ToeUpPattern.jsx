import React from "react";
import ToeUpToe from "./ToeUpToe";
import Foot from "./Foot";
import ShortRowHeel from "./ShortRowHeel";
import ToeUpCuff from "./ToeUpCuff";

function ToeUpPattern(props) {
  return (
    <div className="col-lg-8" id="toe-up-recipe">
      <ToeUpToe fullStCount={props.fullStCount} />
      <Foot direction={props.direction} footLength={props.footLength} />
      <ShortRowHeel fullStCount={props.fullStCount} getMultiple={props.getMultiple} />
      <ToeUpCuff />
    </div>
  );
}

export default ToeUpPattern;
