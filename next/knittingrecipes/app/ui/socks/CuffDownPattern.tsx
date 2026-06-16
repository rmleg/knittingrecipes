import CuffDownCuff from "./CuffDownCuff";
import ShortRowHeel from "./ShortRowHeel";
import HeelFlap from "./HeelFlap";
import Foot from "./Foot";
import CuffDownToe from "./CuffDownToe";
import { HeelType, SockDirection } from "@/app/types";

function CuffDownPattern({
  fullStCount,
  heelType,
  direction,
  footLength,
}: {
  fullStCount: number;
  heelType: HeelType;
  direction: SockDirection;
  footLength: number;
}) {
  return (
    <div className="col-lg-8" id="cuff-down-recipe">
      <CuffDownCuff fullStCount={fullStCount} />
      {heelType === "flap" ? (
        <HeelFlap fullStCount={fullStCount} />
      ) : (
        <ShortRowHeel fullStCount={fullStCount} />
      )}
      <Foot direction={direction} footLength={footLength} />
      <CuffDownToe fullStCount={fullStCount} />
    </div>
  );
}

export default CuffDownPattern;
