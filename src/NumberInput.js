import React from 'react';

function NumberInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input id={props.name} 
                className={`form-control ${ (props.state.submitted && props.state[props.name] <= 0) && 'is-invalid'}`}
                type="number" 
                min="0" 
                step={props.step} 
                placeholder={props.state[props.name]}
                name={props.name}
                onChange={props.onChange} />
                {/* Show error message if form has been submitted but number is not greater than 0 */}
                { (props.state.submitted && props.state[props.name] <= 0) && 
                    <span className="error invalid-feedback">Please enter a number greater than 0</span> }
        </div>
    );
}

export default NumberInput