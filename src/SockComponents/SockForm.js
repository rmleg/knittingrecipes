import React from 'react';
import NumberInput from '../NumberInput';

function SockForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="row">
                <div className="col-md">
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
                            label='Circumference of foot in inches: ' 
                            name='circumference' 
                            step='0.125' 
                            onChange={props.onChange} 
                            state={props.state}
                        />

                        <NumberInput 
                            label='Length of foot in inches: ' 
                            name='footLength' 
                            step='0.125' 
                            onChange={props.onChange} 
                            state={props.state}
                        />
                    </fieldset>
                </div>
                <div className="col-md">
                    <fieldset id="constr-direction" className="form-group">
                        <legend>Construction Direction<br></br><span>Which direction do you want to knit the socks?</span></legend>
                            <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                id="toeup" 
                                name="direction" 
                                value="toeup"
                                onChange={props.onChange} 
                                required 
                                checked={props.state.direction === 'toeup'} />
                            <label className="form-check-label" htmlFor="toeup">Toe Up</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                id="cuffdown" 
                                name="direction" 
                                value="cuffdown" 
                                onChange={props.onChange}
                                required 
                                checked={props.state.direction === 'cuffdown'} />
                            <label className="form-check-label" htmlFor="cuffdown">Cuff Down</label>
                        </div>
                        {/* show short row heel message if direction is toe up */}
                        {props.state.direction === 'toeup' && 
                            <p id="toe-up-short-row">Your toe-up sock recipe will include a short-row heel.</p> }
                    </fieldset>
                    {/* only show heel choices if direction is cuff down */}
                    { props.state.direction === 'cuffdown' && 
                    <fieldset id="heel-type" className="form-group">
                        <legend>Heel Type<br></br><span>What kind of heel do you want to use?</span></legend>
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                id="flap" 
                                name="heeltype" 
                                value="flap" 
                                onChange={props.onChange}
                                required 
                                checked={props.state.heeltype === 'flap'} />
                            <label className="form-check-label" htmlFor="flap">Heel flap with gusset</label>
                        </div>
                
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                id="shortrow" 
                                name="heeltype" 
                                value="shortrow" 
                                onChange={props.onChange}
                                required 
                                checked={props.state.heeltype === 'shortrow'} />
                            <label className="form-check-label" htmlFor="shortrow">Short row heel</label>
                        </div>

                    </fieldset> }

                    <div>
                        <input className="btn btn-info" type="submit" value={props.state.buttonText} />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SockForm;