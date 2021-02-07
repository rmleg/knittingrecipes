import React from "react";
import { useHistory } from "react-router-dom";

function HomeForm(props) {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${props.projectType}`);
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
