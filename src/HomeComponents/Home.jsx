import React, { useState, useEffect } from "react";
import "./Home.css";
import Footer from "../Footer";
import HomeForm from "./HomeForm";

function Home() {
  const [projectType, setProjectType] = useState("hat");

  useEffect(() => {
    document.body.classList.add("home");
    return () => document.body.classList.remove("home");
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setProjectType(value);
  };

  return (
    <>
      <title>
        Knitting Recipes | Knitting pattern generator for hats and socks
      </title>
      <meta
        name="description"
        content="Generate custom knitting patterns based on your own unique measurements and gauge."
      />
      <div className="container home">
        <main>
          <HomeForm
            onChange={handleChange}
            projectType={projectType}
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

export default Home;
