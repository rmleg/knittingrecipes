"use client";

import { useState, useEffect } from "react";
import "@/app/ui/home/home.css";
import Footer from "@/app/ui/footer";
import HomeForm from "@/app/ui/home/form";

function Home() {
  const [projectType, setProjectType] = useState<"hat" | "socks">("hat");

  useEffect(() => {
    document.body.classList.add("home");
    return () => document.body.classList.remove("home");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjectType(e.currentTarget.value as "hat" | "socks");
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
          <HomeForm onChange={handleChange} projectType={projectType} />
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
