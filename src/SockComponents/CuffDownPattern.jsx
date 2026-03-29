import React from 'react';
import CuffDownCuff from './CuffDownCuff';
import ShortRowHeel from './ShortRowHeel';
import HeelFlap from './HeelFlap';
import Foot from './Foot';
import CuffDownToe from './CuffDownToe';

function CuffDownPattern(props) {
    return (
        <div className="col-lg-8" id="cuff-down-recipe">
            <CuffDownCuff fullStCount={props.fullStCount} />
            {props.heeltype === 'flap' ?
                <HeelFlap fullStCount={props.fullStCount} /> :
                <ShortRowHeel fullStCount={props.fullStCount} getMultiple={props.getMultiple} /> }
            <Foot direction={props.direction} footLength={props.footLength} />
            <CuffDownToe fullStCount={props.fullStCount} getMultiple={props.getMultiple} />
        </div>
    )
}

export default CuffDownPattern;