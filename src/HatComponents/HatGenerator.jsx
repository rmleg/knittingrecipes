import React, { useState, useEffect } from "react";
import HeaderImage from "../HeaderImage";
import headimage from "./hat-head-image.jpg";
import HeaderText from "../HeaderText";
import Footer from "../Footer";
import ToTopButton from "../ToTopButton";
import HatForm from "./HatForm";
import Recipe from "./Recipe";
import { scrollToForm, getMultiple } from "../Utils.js";
import { throttle } from "lodash";

function HatGenerator() {
  const [stsPerInch, setStsPerInch] = useState(0);
  const [rowsPerInch, setRowsPerInch] = useState(0);
  const [circumference, setCircumference] = useState(0);
  const [height, setHeight] = useState(5.75);
  const [fittedOrSlouchy, setFittedOrSlouchy] = useState("fitted");
  const [buttonText, setButtonText] = useState("Generate Pattern!");
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [fullStCount, setFullStCount] = useState(0);
  const [toTopButton, setToTopButton] = useState(false);

  const setters = {
    stsPerInch: setStsPerInch,
    rowsPerInch: setRowsPerInch,
    circumference: setCircumference,
    height: setHeight,
    fittedOrSlouchy: setFittedOrSlouchy,
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
    if (stsPerInch > 0 && circumference > 0) {
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
      <title>Hat Recipe | Knitting Recipes</title>
      <meta
        name="description"
        content="Generate a custom hat knitting pattern based on your own unique measurements and gauge."
      />
      <main className="container my-5">
        {toTopButton && <ToTopButton onClick={scrollToForm} />}
        <div className="row header">
          <HeaderText
            url="https://www.ravelry.com/patterns/library/size-matters-hat"
            type="hat"
            onClick={scrollToForm}
          />
          <HeaderImage
            colClass="col-lg-8"
            url={headimage}
            alt="A red, blue, yellow, and black beanie knit from handspun yarn."
          />
        </div>
        <div className="content-container px-5 py-5 mt-5" id="sockform">
          <HatForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            state={{ stsPerInch, rowsPerInch, circumference, height, fittedOrSlouchy, buttonText, submitted, valid, fullStCount, toTopButton }}
          />

          {valid && (
            <Recipe
              fullStCount={fullStCount}
              fittedOrSlouchy={fittedOrSlouchy}
              height={height}
              rowsPerInch={rowsPerInch}
              getMultiple={getMultiple}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HatGenerator;
