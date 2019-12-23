import React from 'react';

function HeaderText(props) {

    return(
        <div className="col-lg-4 vertical-center">
            <p className="h1">
                A perfect fit every time: <a href="#sockform">generate your custom {props.type} recipe below.</a>
            </p>
            <p><a href={props.url} target="_blank" rel="noopener noreferrer">
                View on Ravelry →</a></p>
        </div>
    )
}

export default HeaderText