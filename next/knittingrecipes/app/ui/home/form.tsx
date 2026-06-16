"use client";

import React from "react";
import { useRouter } from "next/navigation";

function HomeForm({
  projectType,
  onChange,
}: {
  projectType: "hat" | "socks";
  onChange: React.ChangeEventHandler<HTMLSelectElement, HTMLSelectElement>;
}) {
  const router = useRouter();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    router.push(`/${projectType}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <h1 id="projectTypeHeader">I want to knit...</h1>
        <select
          id="projectType"
          name="projectType"
          className="form-select form-select-lg"
          onChange={onChange}
          value={projectType}
          aria-labelledby="projectTypeHeader"
        >
          <option value="hat">a hat</option>
          <option value="socks">socks</option>
        </select>
      </div>
      <div>
        <input className="btn btn-info" type="submit" value="Let's go!" />
      </div>
    </form>
  );
}

export default HomeForm;
