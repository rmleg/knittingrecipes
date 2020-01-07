import React from 'react';
import HatAbbrevs from './HatAbbrevs';

function Recipe() {
    return(
        <div id="recipe" className="pt-5 mt-5 border-top">
            <h1 className="mb-5">Your Custom Hat Recipe</h1>
            <div className="row">
                <HatAbbrevs />
                <div className="col-lg-8">
                    todo: convert pattern to HTML. Update to use 2x2 rib. Include 
                    stitch calculations. auto scroll after clicking button?
                </div>
            </div>
        </div>
    );
}

export default Recipe;