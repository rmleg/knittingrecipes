import React from 'react';

function NumberInput(props) {
    const value =
        props.value !== undefined ? props.value : props.state?.[props.name];
    const submitted =
        props.submitted !== undefined ? props.submitted : props.state?.submitted;
    const invalid = Boolean(submitted) && Number(value) <= 0;
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input id={props.name} 
                className={`form-control ${invalid && 'is-invalid'}`}
                type="number" 
                min="0" 
                step={props.step} 
                placeholder={value}
                name={props.name}
                onChange={props.onChange} />
                {/* Show error message if form has been submitted but number is not greater than 0 */}
                { invalid && 
                    <span className="error invalid-feedback">Please enter a number greater than 0</span> }
        </div>
    );
}

export default NumberInput