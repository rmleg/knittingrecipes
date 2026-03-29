import React from "react";
import { useNavigate } from "react-router-dom";

function HomeForm(props) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${props.projectType}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <h1 id="projectTypeHeader">I want to knit...</h1>
        <select
          id="projectType"
          name="projectType"
          className="form-control form-control-lg"
          onChange={props.onChange}
          value={props.projectType}
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
