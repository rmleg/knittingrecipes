import React from "react";

function Footer(props) {
  return (
    <footer className="border-top pt-5 mt-5">
      <p>
        Created by{" "}
        <a
          href="http://rachelleggett.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rachel Leggett
        </a>
        .
        <span className="social">
          <a
            href="https://ravelry.com/people/arbortwist"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Ravelry profile."
          >
            <span
              aria-hidden="true"
              className="grow mx-1 fab fa-ravelry"
            ></span>
          </a>
          <a
            href="https://instagram.com/arbortwist"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Instagram."
          >
            <span
              aria-hidden="true"
              className="grow mx-1 fab fa-instagram"
            ></span>
          </a>
          <a
            href="https://twitter.com/rleggos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Twitter profile."
          >
            <span
              aria-hidden="true"
              className="grow mx-1 fab fa-twitter"
            ></span>
          </a>
          <a
            href="https://www.linkedin.com/in/rmleg/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile."
          >
            <span
              aria-hidden="true"
              className="grow mx-1 fab fa-linkedin-in"
            ></span>
          </a>
          <a
            href="https://github.com/rmleg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Github profile."
          >
            <span aria-hidden="true" className="grow mx-1 fab fa-github"></span>
          </a>
        </span>
      </p>
      <p>
        <a href="https://arbortwist.com">Check out my knitting patterns here</a>
        , or{" "}
        <a href="https://startdesigningtoday.com">
          learn to design your own knitting patterns here
        </a>
        .
      </p>
      {props.url && (
        <p>
          Stock photo by{" "}
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.photographer}
          </a>{" "}
          on{" "}
          <a
            href="http://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
          .
        </p>
      )}
    </footer>
  );
}

export default Footer;
