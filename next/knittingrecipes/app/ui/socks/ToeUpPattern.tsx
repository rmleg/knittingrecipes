import ToeUpToe from "./ToeUpToe";
import Foot from "./Foot";
import ShortRowHeel from "./ShortRowHeel";
import ToeUpCuff from "./ToeUpCuff";
import { SockDirection } from "@/app/types";

function ToeUpPattern({
  fullStCount,
  direction,
  footLength,
}: {
  fullStCount: number;
  direction: SockDirection;
  footLength: number;
}) {
  return (
    <div className="col-lg-8" id="toe-up-recipe">
      <ToeUpToe fullStCount={fullStCount} />
      <Foot direction={direction} footLength={footLength} />
      <ShortRowHeel fullStCount={fullStCount} />
      <ToeUpCuff />
    </div>
  );
}

export default ToeUpPattern;
