import React from "react";

function SockAbbrevs({ direction, heeltype }) {
  return (
    <div className="col-lg-4">
      <p>
        These instructions are written for the magic loop or two circular
        needles methods, as they reference the first needle and second needle.
        To adapt for dpns, the first needle is dpn one and two and the second
        needle is dpn three and four.
      </p>
      <h3>Abbreviations</h3>
      <ul className="abbrList">
        <li>BOR = beginning of round</li>
        <li>k = knit</li>
        {direction === "toeup" && <li>kfb = k in front and back of same st</li>}
        <li>p = purl</li>
        {heeltype === "flap" && <li>p2tog = p two together</li>}
        <li>Rep = repeat</li>
        <li>Rnd(s) = round(s)</li>
        <li>RS = right side</li>
        <li>sl = slip (purlwise unless otherwise specified)</li>
        {direction === "cuffdown" && (
          <li>
            ssk ={" "}
            <a
              href="https://www.lionbrand.com/faq/80.html?language="
              target="_blank"
              rel="noopener noreferrer"
            >
              slip, slip, knit (left-leaning decrease)
            </a>
          </li>
        )}
        <li>st(s) = stitch(es)</li>
        <li>WS = wrong side</li>
        {heeltype === "shortrow" && (
          <li>
            w&t ={" "}
            <a
              href="http://www.purlsoho.com/create/2008/06/18/short-rows/"
              target="_blank"
              rel="noopener noreferrer"
            >
              wrap and turn
            </a>
          </li>
        )}
        <li>wyib = with yarn in back</li>
        <li>wyif = with yarn in front</li>
      </ul>
    </div>
  );
}

export default SockAbbrevs;
