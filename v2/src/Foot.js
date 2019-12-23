import React from 'react';

function Foot(props) {
    if(props.state.direction === 'cuffdown') {
        return (
            <div>
                <h3>Foot</h3>
                <p>Knit every rnd until foot measures {props.state.footLength - 2} inches from the back of the heel.</p>
            </div>
        );
    }
    else {
        return (
            <div>
                <h3>Foot</h3>
                <p>Knit every rnd until work measures {props.state.footLength - 2} inches.</p>
            </div>
        );
    }
}

export default Foot;