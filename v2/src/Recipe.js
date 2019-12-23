import React from 'react';
import CuffDownPattern from './CuffDownPattern';
import ToeUpPattern from './ToeUpPattern';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.state
        };
        this.getMultiple = props.getMultiple;
    }

    componentDidMount() {
        const recipe = document.querySelector('#recipe');
        recipe.scrollIntoView({behavior: 'smooth'});
    }

    componentDidUpdate() {
        const recipe = document.querySelector('#recipe');
        recipe.scrollIntoView({behavior: 'smooth'});
    }

    static getDerivedStateFromProps(props, state) {
        return {
            ...props.state
        }
    }

    render() {
        return (
            <div id="recipe" className="pt-5 mt-5 border-top">
                <h1 className="mb-5">Your Custom Sock Recipe</h1>
                { this.state.direction === 'cuffdown' &&
                    <CuffDownPattern state={this.state} getMultiple={this.getMultiple} />
                }
                { this.state.direction === 'toeup' &&
                    <ToeUpPattern state={this.state} getMultiple={this.getMultiple} />
                }
            </div>
        )
    }
}

export default Recipe;