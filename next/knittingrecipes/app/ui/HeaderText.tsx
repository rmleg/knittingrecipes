import Link from "next/link";
import { PatternType } from "../types";
import { MouseEventHandler } from "react";

function HeaderText({
  type,
  onClick,
  url,
}: {
  type: PatternType;
  onClick: MouseEventHandler;
  url: string;
}) {
  return (
    <div className="col-lg-4 vertical-center">
      <h1>
        A perfect fit every time:{" "}
        <a href="#sockform" onClick={onClick}>
          generate your custom {type} recipe below.
        </a>
      </h1>
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          View on Ravelry →
        </a>
      </p>
      <p>
        <Link href="/">Make something else?</Link>
      </p>
    </div>
  );
}

export default HeaderText;
