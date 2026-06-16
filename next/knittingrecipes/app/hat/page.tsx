"use client";

import { useState, useEffect } from "react";
import HeaderImage from "@/app/ui/HeaderImage";
import HeaderText from "@/app/ui/HeaderText";
import Footer from "@/app/ui/Footer";
import ToTopButton from "@/app/ui/ToTopButton";
import HatForm from "@/app/ui/hat/HatForm";
import { scrollToForm, getMultiple } from "@/app/utils/utils";
import { throttle } from "lodash";
import Recipe from "@/app/ui/hat/Recipe";

function HatGenerator() {
  const [stsPerInch, setStsPerInch] = useState<number>(0);
  const [rowsPerInch, setRowsPerInch] = useState<number>(0);
  const [circumference, setCircumference] = useState<number>(0);
  const [height, setHeight] = useState<number>(5.75);
  const [fittedOrSlouchy, setFittedOrSlouchy] = useState<"fitted" | "slouchy">(
    "fitted",
  );
  const [buttonText, setButtonText] = useState<string>("Generate Pattern!");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [fullStCount, setFullStCount] = useState<number>(0);
  const [toTopButton, setToTopButton] = useState<boolean>(false);

  useEffect(() => {
    const throttled = throttle(() => {
      const form = document.querySelector("form");
      if (form?.offsetTop !== undefined && form?.offsetHeight !== undefined) {
        const formHeight = form?.offsetTop + form?.offsetHeight;
        setToTopButton(window.scrollY >= formHeight);
      }
    }, 100);
    window.addEventListener("scroll", throttled);
    return () => window.removeEventListener("scroll", throttled);
  }, []);

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    switch (name) {
      case "stsPerInch":
        setStsPerInch(parseFloat(value));
        break;
      case "rowsPerInch":
        setRowsPerInch(parseFloat(value));
        break;
      case "circumference":
        setCircumference(parseFloat(value));
        break;
      case "height":
        setHeight(parseFloat(value));
        break;
      case "fittedOrSlouchy":
        setFittedOrSlouchy(value as "fitted" | "slouchy");
        break;
      default:
        break;
    }
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

  const handleSubmit = (e: React.SubmitEvent) => {
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
            path="/hat-head-image.jpg"
            alt="A red, blue, yellow, and black beanie knit from handspun yarn."
            height={2129}
            width={2838}
          />
        </div>
        <div className="content-container px-5 py-5 mt-5" id="sockform">
          <HatForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            stsPerInch={stsPerInch}
            rowsPerInch={rowsPerInch}
            circumference={circumference}
            height={height}
            fittedOrSlouchy={fittedOrSlouchy}
            buttonText={buttonText}
            submitted={submitted}
          />

          {valid && (
            <Recipe
              fullStCount={fullStCount}
              fittedOrSlouchy={fittedOrSlouchy}
              height={height}
              rowsPerInch={rowsPerInch}
            />
          )}
        </div>
      </main>
      <Footer
        isUnsplashPhoto={false}
        url="https://rachelmiraphoto.com"
        photographer="me"
      />
    </>
  );
}

export default HatGenerator;
