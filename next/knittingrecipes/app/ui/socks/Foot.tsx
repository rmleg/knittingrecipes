import { SockDirection } from "@/app/types";

function Foot({
  direction,
  footLength,
}: {
  direction: SockDirection;
  footLength: number;
}) {
  if (direction === "cuffdown") {
    return (
      <div>
        <h3>Foot</h3>
        <p>
          Knit every rnd until foot measures {footLength - 2} inches from the
          back of the heel.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Foot</h3>
        <p>Knit every rnd until work measures {footLength - 2} inches.</p>
      </div>
    );
  }
}

export default Foot;
