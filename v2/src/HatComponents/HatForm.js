import React from 'react';
import NumberInput from '../NumberInput';

function HatForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <fieldset id="gauge-size">
                <legend>Gauge and Size Information</legend>
                <NumberInput 
                    label='Stitches per inch: ' 
                    name='stsPerInch' 
                    step='0.25' 
                    onChange={props.onChange}
                    state={props.state}
                />

                <NumberInput 
                    label='Circumference of head in inches: ' 
                    name='circumference' 
                    step='0.125' 
                    onChange={props.onChange} 
                    state={props.state}
                />

                <div className="form-group">
                    <label htmlFor="fittedOrSlouchy">Fitted or slouchy?</label>
                    <select id="fittedOrSlouchy"
                        className="form-control"
                        name="fittedOrSlouchy"
                        value={props.state.fittedOrSlouchy}
                        onChange={props.onChange}>
                        <option value="fitted">Fitted</option>
                        <option value="slouchy">Slouchy</option>
                    </select>
                </div>
            </fieldset>

            <div>
                <input className="btn btn-info" type="submit" value={props.state.buttonText} />
            </div>
        </form>
    );
}

export default HatForm;