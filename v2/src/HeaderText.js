import React from 'react';

function HeaderText(props) {
    return(
        <div className="col-lg-4 vertical-center">
            <p className="h1">
                A perfect fit every time: generate your custom {props.type} recipe below.
            </p>
            <p><a href={props.url} target="_blank">
                View on Ravelry →</a></p>
        </div>
    )
}

export default HeaderText