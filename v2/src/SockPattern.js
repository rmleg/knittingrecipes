import React from 'react';
import HeaderImage from './HeaderImage';
import headimage from './sock-head-image.jpg';
import HeaderText from './HeaderText';
import Footer from './Footer';

function SockPattern() {
    return (
        <div className="container my-5">
            <div className="row header">
                <HeaderText url="https://www.ravelry.com/patterns/library/sock-knitters-notebook-pattern-generator"
                    type="sock" />
                <HeaderImage url={headimage} alt="Photo of a cake of single-ply green yarn 
                    on top of a book on a ledge with a blurred background of trees and a lake." />
            </div>
            <Footer url="https://unsplash.com/@casalegraphicdesign" photographer="Nick Casale" />
        </div>   
    )
}

export default SockPattern;