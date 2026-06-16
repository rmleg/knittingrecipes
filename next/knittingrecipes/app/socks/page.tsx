"use client";

import { useState, useEffect } from "react";
import HeaderImage from "@/app/ui/HeaderImage";
import HeaderText from "@/app/ui/HeaderText";
import SockForm from "@/app/ui/socks/SockForm";
import Recipe from "@/app/ui/socks/Recipe";
import Footer from "@/app/ui/Footer";
import ToTopButton from "@/app/ui/ToTopButton";
import {
  scrollToForm,
  getMultiple,
  throttledScrollWithToTopButton,
} from "@/app/utils/utils";
import { HeelType, SockDirection } from "@/app/types";

function SockGenerator() {
  const [stsPerInch, setStsPerInch] = useState<number>(0);
  const [circumference, setCircumference] = useState<number>(0);
  const [footLength, setFootLength] = useState<number>(0);
  const [direction, setDirection] = useState<SockDirection>("cuffdown");
  const [heelType, setheelType] = useState<HeelType>("flap");
  const [buttonText, setButtonText] = useState<string>("Generate Pattern!");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [fullStCount, setFullStCount] = useState<number>(0);
  const [toTopButton, setToTopButton] = useState<boolean>(false);

  useEffect(() => {
    throttledScrollWithToTopButton(setToTopButton);
  }, []);

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    switch (name) {
      case "stsPerInch":
        setStsPerInch(parseFloat(value));
        break;
      case "circumference":
        setCircumference(parseFloat(value));
        break;
      case "footLength":
        setFootLength(parseFloat(value));
        break;
      case "direction":
        setDirection(value as SockDirection);
        break;
      case "heelType":
        setheelType(value as HeelType);
        break;
      default:
        break;
    }
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
            width={2048}
            height={1280}
            colClass="col-lg-8"
            path="/sock-head-image.jpg"
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
            heelType={heelType}
            buttonText={buttonText}
            submitted={submitted}
          />

          {valid && (
            <Recipe
              direction={direction}
              heelType={heelType}
              fullStCount={fullStCount}
              footLength={footLength}
            />
          )}
        </div>
      </main>
      <Footer
        isUnsplashPhoto
        url="https://unsplash.com/@casalegraphicdesign"
        photographer="Nick Casale"
      />
    </>
  );
}

export default SockGenerator;
