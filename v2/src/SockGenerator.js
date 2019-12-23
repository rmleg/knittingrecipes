import React from 'react';
import HeaderImage from './HeaderImage';
import headimage from './sock-head-image.jpg';
import HeaderText from './HeaderText';
import SockForm from './SockForm';
import Recipe from './Recipe';
import Footer from './Footer';

class SockGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            stsPerInch: 0,
            circumference: 0,
            footLength: 0,
            direction: 'cuffdown',
            heeltype: 'flap',
            buttonText: 'Generate Pattern!',
            submitted: false,
            valid: false,
            fullStCount: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.getMultiple = this.getMultiple.bind(this);
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
        if (this.validateForm()) {
            this.setState(prevState => ({
                fullStCount: this.getMultiple(prevState.stsPerInch * prevState.circumference * 0.9, 4)
            }));
        }
        e.preventDefault();
    }

    validateForm() {
        if (this.state.stsPerInch > 0 && this.state.circumference > 0 && this.state.footLength > 0) {
            this.setState({
                buttonText: 'Update Pattern!',
                valid: true
            });
            return true;
        }
        else {
            this.setState({
                valid: false
            });
            return false;
        }
    }

    getMultiple(num, mult) {
        /*return the largest number smaller than num that
         *is a multiple of mult
         */
        //if mult is already a mult of num, return num
        if(num % mult === 0) {
            return num;
        }
        else {
            //round num down to the nearest whole number
            const numFloor = Math.floor(num);
            if(numFloor % mult === 0) {
                //if numFloor is multiple of mult, return numFloor
                return numFloor;
            }
            else {
                //subtract 1 from numFloor until it is
                //a multitple of mult. return numFloor
                for(let i = 1; i < mult; ++i) {
                    if((numFloor - i) % mult === 0) {
                        return numFloor - i;
                    }
                }
            }
        }
        return false;
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

                <SockForm onChange={this.handleChange} onSubmit={this.handleSubmit} state={this.state} />
                
                {this.state.valid &&
                    <Recipe state={this.state} getMultiple={this.getMultiple} />
                }
                <Footer url="https://unsplash.com/@casalegraphicdesign" photographer="Nick Casale" />
            </div>   
        );
    }
}

export default SockGenerator;