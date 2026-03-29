import React, { useEffect } from "react";
import HatAbbrevs from "./HatAbbrevs";

function Recipe(props) {
  useEffect(() => {
    document.querySelector("#recipe").scrollIntoView({ behavior: "smooth" });
  }, []);

  let crownSetup = props.fullStCount % 8;

  return (
    <div id="recipe" className="pt-5 mt-5 border-top">
      <h2 className="mb-5">Your Custom Hat Recipe</h2>
      <div className="row">
        <HatAbbrevs />
        <div className="col-lg-8">
          <h3>Brim</h3>
          <p>
            Using the long tail or your favorite stretchy cast on, CO{" "}
            {props.fullStCount} sts. Join to work in the round, being
            careful not to twist.
          </p>
          <p>
            Rnd 1: *k2, p2; rep from * to end. Work rnd 1 until work measures
            2 inches from CO edge, or desired height of brim.
          </p>
          <p>
            <strong>Designer's Tip:</strong> To be able to fold up the brim
            for extra warmth, I recommend a height of at least 4 inches.
          </p>
          <h3>Hat Body</h3>
          {props.fittedOrSlouchy === "fitted" && (
            <p>
              Work in Stockinette stitch until work measures about&nbsp;
              {props.height < 8
                ? Math.round(
                    (Number(props.height) -
                      10 / props.rowsPerInch) *
                      10
                  ) / 10
                : Math.round(
                    (Number(props.height) -
                      16 / props.rowsPerInch) *
                      10
                  ) / 10}{" "}
              inches from CO edge.*
            </p>
          )}
          {props.fittedOrSlouchy === "slouchy" && (
            <p>
              Work in Stockinette stitch until work measures about&nbsp;
              {props.height < 8
                ? Math.round(
                    (Number(props.height) +
                      2 -
                      10 / props.rowsPerInch) *
                      10
                  ) / 10
                : Math.round(
                    (Number(props.height) +
                      2 -
                      16 / props.rowsPerInch) *
                      10
                  ) / 10}{" "}
              inches from CO edge.*
            </p>
          )}
          <p>
            *If you plan to wear your hat with a folded brim, fold your brim
            and measure from the bottom folded edge instead of the CO edge.
          </p>
          {crownSetup > 0 && (
            <div>
              <h3>Crown Setup</h3>
              <p>Next rnd: Decrease {crownSetup} sts evenly.</p>
            </div>
          )}
          <h3>Crown Decreases</h3>
          {props.height < 8 ? (
            <p>
              Rnd 1: *k6, k2tog; rep from * to end.
              <br />
              Rnd 2: k all sts.
              <br />
              Rnd 3: *k5, k2tog; rep from * to end.
              <br />
              Rnd 4: k all sts.
              <br />
              Rnd 5: *k4, k2tog; rep from * to end.
              <br />
              Rnd 6: k all sts.
              <br />
              Rnd 7: *k3, k2tog; rep from * to end.
              <br />
              Rnd 8: *k2, k2tog; rep from * to end.
              <br />
              Rnd 9: *k1, k2tog; rep from * to end.
              <br />
              Rnd 10: *k2tog; rep from * to end.
            </p>
          ) : (
            <p>
              Rnd 1: *k6, k2tog; rep from * to end.
              <br />
              Rnd 2: k all sts.
              <br />
              Rnd 3: k all sts.
              <br />
              Rnd 4: *k5, k2tog; rep from * to end.
              <br />
              Rnd 5: k all sts.
              <br />
              Rnd 6: k all sts.
              <br />
              Rnd 7: *k4, k2tog; rep from * to end.
              <br />
              Rnd 8: k all sts.
              <br />
              Rnd 9: k all sts.
              <br />
              Rnd 10: *k3, k2tog; rep from * to end.
              <br />
              Rnd 11: k all sts.
              <br />
              Rnd 12: *k2, k2tog; rep from * to end.
              <br />
              Rnd 13: k all sts.
              <br />
              Rnd 14: *k1, k2tog; rep from * to end.
              <br />
              Rnd 15: k all sts.
              <br />
              Rnd 16: *k2tog; rep from * to end.
            </p>
          )}
          <p>If more than 8 sts remain, work Rnd 16 until 8 sts remain.</p>
          <h3>Finishing</h3>
          <p>
            Cut yarn, leaving a 6-inch tail. Draw tail through remaining sts
            and secure. Weave in ends, block, and enjoy!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
