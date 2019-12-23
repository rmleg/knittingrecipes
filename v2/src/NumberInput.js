import React from 'react';

function NumberInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input id={props.name} 
                className="form-control" 
                type="number" 
                min="0" 
                step={props.step} 
                placeholder="0"
                name={props.name}
                onChange={props.onChange} />
            <span className="error"></span>
        </div>
    );
}

export default NumberInput