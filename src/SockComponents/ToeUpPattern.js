import React from "react";
import ToeUpToe from "./ToeUpToe";
import Foot from "./Foot";
import ShortRowHeel from "./ShortRowHeel";
import ToeUpCuff from "./ToeUpCuff";

function ToeUpPattern(props) {
  return (
    <div className="col-lg-8" id="toe-up-recipe">
      <ToeUpToe fullStCount={props.state.fullStCount} />
      <Foot state={props.state} />
      <ShortRowHeel state={props.state} getMultiple={props.getMultiple} />
      <ToeUpCuff state={props.state} />
    </div>
  );
}

export default ToeUpPattern;
