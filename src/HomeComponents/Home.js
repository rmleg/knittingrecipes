import React from "react";
import "./Home.css";
import Footer from "../Footer";
import HomeForm from "./HomeForm";
import { Helmet } from "react-helmet";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      projectType: "hat",
    };
    this.body = document.querySelector("body");
  }

  componentDidMount = () => {
    this.body.classList.add("home");
  };

  componentWillUnmount = () => {
    this.body.classList.remove("home");
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <Helmet>
          <title>
            Knitting Recipes | Knitting pattern generator for hats and socks
          </title>
          <meta
            name="description"
            content="Generate custom knitting patterns based on your own unique measurements and gauge."
          />
        </Helmet>
        <div className="container home">
          <main>
            <HomeForm
              onChange={this.handleChange}
              projectType={this.state.projectType}
            />
            <Footer
              photographer="Soraya García"
              url="https://unsplash.com/@sorayismo"
            />
          </main>
        </div>
      </>
    );
  }
}

export default Home;
