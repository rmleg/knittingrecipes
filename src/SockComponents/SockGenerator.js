import React from "react";
import HeaderImage from "../HeaderImage";
import headimage from "./sock-head-image.jpg";
import HeaderText from "../HeaderText";
import SockForm from "./SockForm";
import Recipe from "./Recipe";
import Footer from "../Footer";
import ToTopButton from "../ToTopButton";
import { throttle } from "lodash";
import { scrollToForm, getMultiple } from "../Utils.js";
import { Helmet } from "react-helmet";

class SockGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      stsPerInch: 0,
      circumference: 0,
      footLength: 0,
      direction: "cuffdown",
      heeltype: "flap",
      buttonText: "Generate Pattern!",
      submitted: false,
      valid: false,
      fullStCount: 0,
      toTopButton: false,
    };
    this.handleScrollBtnThrottled = throttle(this.handleScrollBtn, 100);
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScrollBtnThrottled);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScrollBtnThrottled);
  };

  handleScrollBtn = (e) => {
    //get current scroll position:
    let currentScroll = window.scrollY;
    const form = document.querySelector("form");
    let formHeight = form.offsetTop + form.offsetHeight;
    if (currentScroll < formHeight) {
      this.setState({
        toTopButton: false,
      });
    } else {
      this.setState({
        toTopButton: true,
      });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    //should show the pattern and change the button text
    //update button text
    this.setState({
      submitted: true,
    });
    if (this.validateForm()) {
      this.setState((prevState) => ({
        fullStCount: getMultiple(
          prevState.stsPerInch * prevState.circumference * 0.9,
          4
        ),
      }));
      const pattern = document.querySelector("#recipe");
      if (pattern) {
        //this doesn't exist the first time
        pattern.scrollIntoView({ behavior: "smooth" });
      }
    }
    e.preventDefault();
  };

  validateForm = () => {
    if (
      this.state.stsPerInch > 0 &&
      this.state.circumference > 0 &&
      this.state.footLength > 0
    ) {
      this.setState({
        buttonText: "Update Pattern!",
        valid: true,
      });
      return true;
    } else {
      this.setState({
        valid: false,
      });
      return false;
    }
  };

  render = () => {
    return (
      <>
        <Helmet>
          <title>Sock Pattern Generator | Knitting Recipes</title>
          <meta
            name="description"
            content="Generate a custom sock knitting pattern based on your own unique measurements and gauge."
          />
        </Helmet>
        <main className="container my-5">
          {this.state.toTopButton && <ToTopButton onClick={scrollToForm} />}
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
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              state={this.state}
            />

            {this.state.valid && (
              <Recipe state={this.state} getMultiple={getMultiple} />
            )}
          </div>
        </main>
        <Footer
          url="https://unsplash.com/@casalegraphicdesign"
          photographer="Nick Casale"
        />
      </>
    );
  };
}

export default SockGenerator;
