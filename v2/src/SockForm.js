import React from 'react';
import NumberInput from './NumberInput';

function SockForm(props) {
    return (
        <div className="row">
            <div className="col-md">
                <fieldset id="gauge-size">
                    <legend>Gauge and Size Information</legend>
                    <NumberInput 
                        label='Stitches per inch: ' 
                        name='stsPerInch' 
                        step='0.25' 
                        onChange={props.onChange} 
                    />

                    <NumberInput 
                        label='Circumference of foot in inches: ' 
                        name='circumference' 
                        step='0.125' 
                        onChange={props.onChange} 
                    />

                    <NumberInput 
                        label='Length of foot in inches: ' 
                        name='footLength' 
                        step='0.125' 
                        onChange={props.onChange} 
                    />
                </fieldset>
            </div>
        </div>

    );
}

export default SockForm;