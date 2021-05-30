import React from "react";

function CuffDownToe(props) {
  return (
    <div>
      <h3>Toe</h3>
      <p>
        Knit to the beginning of the instep sts, then begin the toe decreases as
        follows:
      </p>
      <p>
        Rnd 1, instep/needle 1: k1, ssk, k to last 3 sts of instep, k2tog, k1
        <br />
        Rnd 1, sole/needle 2: k1, ssk, k to last 3 sts of sole, k2tog, k1
        <br />
        Rnd 2: k around
      </p>
      <p>
        Rep rnds 1 and 2 until you have {props.state.fullStCount / 2} sts
        remaining. Then, rep rnd 1 twice more.
      </p>
      <p>
        At the end of your decreases, you should have{" "}
        {props.state.fullStCount / 2 - 8} sts remaining,{" "}
        {props.getMultiple((props.state.fullStCount / 2 - 8) / 2, 2)} on the
        instep and {props.getMultiple((props.state.fullStCount / 2 - 8) / 2, 2)}{" "}
        on the sole.
      </p>
      <p>
        Cut the yarn, leaving a tail long enough to graft the toe. Use the{" "}
        <a
          href="http://www.knitty.com/ISSUEsummer04/FEATtheresasum04.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kitchener stitch
        </a>{" "}
        to graft the toe closed.
      </p>
    </div>
  );
}

export default CuffDownToe;
