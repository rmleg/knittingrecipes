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
            footLength: 0,
            direction: 'cuffdown',
            heeltype: 'flap',
            buttonText: 'Generate Pattern!',
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        //should show the pattern and change the button text
        //update button text
        this.setState({
            submitted: true
        });
        this.validateForm();
        e.preventDefault();
    }

    validateForm() {
        if (this.state.stsPerInch > 0 && this.state.circumference > 0 && this.state.footLength > 0) {
            this.setState({
                buttonText: 'Update Pattern!'
            });
        }
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
                <SockForm onChange={this.handleChange} onSubmit={this.handleSubmit} state={this.state}/>
                <Footer url="https://unsplash.com/@casalegraphicdesign" photographer="Nick Casale" />
            </div>   
        );
    }
}

export default SockPattern;