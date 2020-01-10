import React from 'react';
import CuffDownCuff from './CuffDownCuff';
import ShortRowHeel from './ShortRowHeel';
import HeelFlap from './HeelFlap';
import Foot from './Foot';
import CuffDownToe from './CuffDownToe';

function CuffDownPattern(props) {
    return (
        <div className="col-lg-8" id="cuff-down-recipe">
            <CuffDownCuff state={props.state} />
            {props.state.heeltype === 'flap' ? 
                <HeelFlap state={props.state} /> : 
                <ShortRowHeel state={props.state} getMultiple={props.getMultiple} /> }
            <Foot state={props.state} />
            <CuffDownToe state={props.state} getMultiple={props.getMultiple} />
        </div>
    )
}

export default CuffDownPattern;