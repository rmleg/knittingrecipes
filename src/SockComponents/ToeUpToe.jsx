import React from "react";

function ToeUpToe({ fullStCount }) {
  return (
    <div>
      <h3>Toe</h3>
      <p>
        Using{" "}
        <a
          href="http://knitty.com/ISSUEspring06/FEATmagiccaston.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Judy's Magic Cast On
        </a>
        , cast on{" "}
        <span data-testid="toeup-startingStCount">
          {fullStCount / 2 - 8 - ((fullStCount / 2 - 8) % 4)}
        </span>{" "}
        sts.
      </p>
      <p>
        Rnd 1: kfb, k to 2 sts before end of first needle, kfb, k1, kfb, k to 2
        sts before end of second needle, kfb, k1
        <br />
        Rnd 2: k around
      </p>
      <p>
        Rep rnds 1 and 2 until you have{" "}
        <span data-testid="toeup-finalStCount">{fullStCount}</span> sts.{" "}
        <em>
          For a slightly more rounded toe, try repeating the first rnd twice
          before starting to repeat both rnds.
        </em>
      </p>
    </div>
  );
}

export default ToeUpToe;
