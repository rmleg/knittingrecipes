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
                    label='Rows per inch: ' 
                    name='rowsPerInch' 
                    step='0.25' 
                    onChange={props.onChange} 
                    state={props.state}
                />

                <div className="form-group">
                    <label htmlFor="height">Size:</label>
                    <select id="height"
                        className="form-control"
                        name="height"
                        value={props.state.height}
                        onChange={props.onChange}>
                        <option value="5.75">0-6 mo</option>
                        <option value="6.5">6-12 mo</option>
                        <option value="7.25">1-3 years</option>
                        <option value="7.75">3-10 years</option>
                        <option value="8.25">Teen / Adult small</option>
                        <option value="9.25">Adult medium</option>
                        <option value="10">Adult large</option>
                    </select>
                </div>

                <NumberInput 
                    label='Circumference of head in inches: ' 
                    name='circumference' 
                    step='0.125' 
                    onChange={props.onChange} 
                    state={props.state}
                />

                <p>If you are unable to measure the recipient's head, you can&nbsp;
                     <a href="https://www.woollywormhead.com/sizing" target="_blank" rel="noopener noreferrer">visit this page for example measurements</a>.</p>

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