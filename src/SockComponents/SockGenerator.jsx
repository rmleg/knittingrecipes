import React, { useState, useEffect } from "react";
import HeaderImage from "../HeaderImage";
import headimage from "./sock-head-image.jpg";
import HeaderText from "../HeaderText";
import SockForm from "./SockForm";
import Recipe from "./Recipe";
import Footer from "../Footer";
import ToTopButton from "../ToTopButton";
import { throttle } from "lodash";
import { scrollToForm, getMultiple } from "../Utils.js";

function SockGenerator() {
  const [stsPerInch, setStsPerInch] = useState(0);
  const [circumference, setCircumference] = useState(0);
  const [footLength, setFootLength] = useState(0);
  const [direction, setDirection] = useState("cuffdown");
  const [heeltype, setHeeltype] = useState("flap");
  const [buttonText, setButtonText] = useState("Generate Pattern!");
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [fullStCount, setFullStCount] = useState(0);
  const [toTopButton, setToTopButton] = useState(false);

  const setters = {
    stsPerInch: setStsPerInch,
    circumference: setCircumference,
    footLength: setFootLength,
    direction: setDirection,
    heeltype: setHeeltype,
  };

  useEffect(() => {
    const throttled = throttle(() => {
      const form = document.querySelector("form");
      const formHeight = form.offsetTop + form.offsetHeight;
      setToTopButton(window.scrollY >= formHeight);
    }, 100);
    window.addEventListener("scroll", throttled);
    return () => window.removeEventListener("scroll", throttled);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setters[name](value);
  };

  const validateForm = () => {
    if (stsPerInch > 0 && circumference > 0 && footLength > 0) {
      setButtonText("Update Pattern!");
      setValid(true);
      return true;
    }
    setValid(false);
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validateForm()) {
      setFullStCount(getMultiple(stsPerInch * circumference * 0.9, 4));
      const pattern = document.querySelector("#recipe");
      if (pattern) pattern.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <title>Sock Recipe | Knitting Recipes</title>
      <meta
        name="description"
        content="Generate a custom sock knitting pattern based on your own unique measurements and gauge."
      />
      <main className="container my-5">
        {toTopButton && <ToTopButton onClick={scrollToForm} />}
        <div className="row header">
          <HeaderText
            url="https://www.ravelry.com/patterns/library/sock-knitters-notebook-pattern-generator"
            type="sock"
            onClick={scrollToForm}
          />
          <HeaderImage
            colClass="col-lg-8"
            url={headimage}
            alt="Cake of single-ply green yarn
                        on top of a book on a ledge with a blurred background of trees and a lake."
          />
        </div>
        <div className="content-container px-5 py-5 mt-5" id="sockform">
          <SockForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            stsPerInch={stsPerInch}
            circumference={circumference}
            footLength={footLength}
            direction={direction}
            heeltype={heeltype}
            buttonText={buttonText}
            submitted={submitted}
          />

          {valid && (
            <Recipe
              direction={direction}
              heeltype={heeltype}
              fullStCount={fullStCount}
              footLength={footLength}
              getMultiple={getMultiple}
            />
          )}
        </div>
      </main>
      <Footer
        url="https://unsplash.com/@casalegraphicdesign"
        photographer="Nick Casale"
      />
    </>
  );
}

export default SockGenerator;
