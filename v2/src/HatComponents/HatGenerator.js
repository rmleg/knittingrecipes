import React from 'react';
import HeaderImage from '../HeaderImage';
import headimage from './hat-head-image.jpg';
import HeaderText from '../HeaderText';
import Footer from '../Footer';
import ToTopButton from '../ToTopButton';
import {scrollToForm} from '../Utils.js';

class HatGenerator extends React.Component {
    constructor () {
        super();
        this.state = {
            stsPerInch: 0,
            circumference: 0,
            fittedOrSlouch: 'fitted',
            buttonText: 'Generate Pattern!',
            submitted: false,
            valid: false,
            fullStCount: 0,
            toTopButton: false
        }
    }

    render() {
        return (
            <div className="container my-5">
                {this.state.toTopButton && <ToTopButton onClick={scrollToForm} />}
                <div className="row header">
                    <HeaderText url="https://www.ravelry.com/patterns/library/size-matters-hat"
                        type="hat"
                        onClick={scrollToForm} />
                    <HeaderImage url={headimage} alt="Photo of a red, blue, yellow, and black beanie knit from handspun yarn." />
                </div>
                <form>
                    <input type="text" placeholder="test" />
                </form>
                <Footer />
            </div>   
        );
    }
}

export default HatGenerator;