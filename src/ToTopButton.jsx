import React from 'react';

function ToTopButton(props) {

    return (
        <button className="btn btn-info" id="to-top-btn" onClick={props.onClick} title="Go to top">
            &uarr; Edit Pattern
        </button>
    )
}

export default ToTopButton;