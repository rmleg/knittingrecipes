import React from 'react';
import HeaderImage from './HeaderImage';
import headimage from './sock-head-image.jpg';
import HeaderText from './HeaderText';
import SockForm from './SockForm';
import Recipe from './Recipe';
import Footer from './Footer';
import ToTopButton from './ToTopButton';
import {throttle} from 'lodash';

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
            fullStCount: 0,
            toTopButton: false
        }
        this.handleScrollBtnThrottled = throttle(this.handleScrollBtn, 100);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.getMultiple = this.getMultiple.bind(this);
        this.scrollToForm = this.scrollToForm.bind(this);
        this.handleScrollBtn = this.handleScrollBtn.bind(this);
        this.handleScrollBtnThrottled = this.handleScrollBtnThrottled.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollBtnThrottled);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollBtnThrottled);
    }

    handleScrollBtn(e) {
        //get current scroll position:
        let currentScroll = window.scrollY;
        const form = document.querySelector('#sockform');
        let formHeight = form.offsetTop + form.offsetHeight;
        if(currentScroll < formHeight) {
            this.setState({
                toTopButton: false
            })
        }
        else {
            this.setState({
                toTopButton: true
            })
        }
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
        console.log("submitted");
        this.setState({
            submitted: true
        });
        if (this.validateForm()) {
            console.log('form is valid');
            this.setState(prevState => ({
                fullStCount: this.getMultiple(prevState.stsPerInch * prevState.circumference * 0.9, 4)
            }));
            const recipe = document.querySelector('#recipe');
            if(recipe) {
                console.log('recipe exists');
                //this doesn't exist the first time
                recipe.scrollIntoView({behavior: 'smooth'});
                const recipeTitle = recipe.querySelector('h1');
                recipeTitle.focus({preventScroll: true});
            }
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

    scrollToForm(e) {
        console.log('scrolling to form');
        e.preventDefault();
        const sockForm = document.querySelector('#sockform');
        sockForm.scrollIntoView({behavior: 'smooth'});
        const firstInput = sockForm.querySelector('input:first-of-type');
        firstInput.focus({preventScroll: true});
    }

    render() {
        return (
            <div className="container my-5">
                {this.state.toTopButton && <ToTopButton onClick={this.scrollToForm} />}
                <div className="row header">
                    <HeaderText url="https://www.ravelry.com/patterns/library/sock-knitters-notebook-pattern-generator"
                        type="sock"
                        onClick={this.scrollToForm} />
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