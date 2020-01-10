import React from 'react'

function HeaderImage(props) {
    return (
        <div className={props.colClass}>
            <img src={props.url} 
            alt={props.alt}
            className="img-fluid shadow-lg" />
        </div>
    )
}

export default HeaderImage