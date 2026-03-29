import React from 'react';

function Foot(props) {
    if(props.direction === 'cuffdown') {
        return (
            <div>
                <h3>Foot</h3>
                <p>Knit every rnd until foot measures {props.footLength - 2} inches from the back of the heel.</p>
            </div>
        );
    }
    else {
        return (
            <div>
                <h3>Foot</h3>
                <p>Knit every rnd until work measures {props.footLength - 2} inches.</p>
            </div>
        );
    }
}

export default Foot;