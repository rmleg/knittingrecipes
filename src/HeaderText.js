import React from 'react';
import {Link} from 'react-router-dom';

function HeaderText(props) {

    return(
        <div className="col-lg-4 vertical-center">
            <p className="h1">
                A perfect fit every time: <a href="#sockform" onClick={props.onClick}>generate your custom {props.type} recipe below.</a>
            </p>
            <p><a href={props.url} target="_blank" rel="noopener noreferrer">
                View on Ravelry →</a></p>
            <p><Link to="/">Make something else?</Link></p>
        </div>
    )
}

export default HeaderText