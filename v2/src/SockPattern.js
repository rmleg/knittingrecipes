import React from 'react';
import HeaderImage from './HeaderImage';
import headimage from './sock-head-image.jpg';
import HeaderText from './HeaderText';
import SockForm from './SockForm';
import Footer from './Footer';

class SockPattern extends React.Component {
    constructor() {
        super();
        this.state = {
            stsPerInch: 0,
            circumference: 0,
            footLength: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="container my-5">
                <div className="row header">
                    <HeaderText url="https://www.ravelry.com/patterns/library/sock-knitters-notebook-pattern-generator"
                        type="sock" />
                    <HeaderImage url={headimage} alt="Photo of a cake of single-ply green yarn 
                        on top of a book on a ledge with a blurred background of trees and a lake." />
                </div>
                <SockForm onChange={this.handleChange}/>
                {this.state.stsPerInch}
                {this.state.circumference}
                {this.state.footLength}
                <Footer url="https://unsplash.com/@casalegraphicdesign" photographer="Nick Casale" />
            </div>   
        );
    }
}

export default SockPattern;