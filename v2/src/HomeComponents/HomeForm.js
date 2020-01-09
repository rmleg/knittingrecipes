import React from 'react';
import {useHistory} from 'react-router-dom'

function HomeForm(props) {

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/${props.projectType}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
            <div className="form-group">
                <label htmlFor="projectType"><span className="h1">I want to knit...</span></label>
                <select id="projectType" 
                    name="projectType" 
                    className="form-control" 
                    onChange={props.onChange}
                    value={props.projectType}>
                <option value="hat">a hat</option>
                <option value="socks">socks</option>
                </select>
            </div>
            </fieldset>
            <div>
                <input className="btn btn-info" type="submit" value="Let's go!" />
            </div>
        </form>
    );
}

export default HomeForm