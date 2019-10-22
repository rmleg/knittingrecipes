const knittingRecipes = function() {
    //get the form
    const form = document.querySelector("form");

    function getFullStCount() {
        const gauge = form.querySelector("input#gauge");
        const circumference = form.querySelector("input#circ");
        return gauge.value * circumference.value * 0.9;
    }

    //function to fill pattern with data from the form
    function fillElt(elt, num) {
        elt.innerHTML = num;
    }

    function validateForm() {
        //checks if number inputs are numbers
        //radio button requirements are handled in the HTML
        const formInputs = Array.from(form.querySelectorAll('input'));
        console.log(formInputs);
        let valid = true;
        //check if text inputs are valid numbers and are greater than 0
        formInputs.forEach(input => {
            if(input.type === 'number') {
                //number fields are the only ones that take user input
                //don't need to check other input types
                if(Number(input.value) === NaN) {
                    //if found an invalid number field, add class, set valid to false
                    input.classList.add('invalid', 'NaN');
                    valid = false;
                }
                else if(Number(input.value) <= 0) {
                    //valid numbers are greater than 0
                    input.classList.add('invalid', 'zero');
                    valid = false;
                }
            }
        });
        return valid;
    }

    function fillPattern() {
        fillElt(document.querySelector("span.caston"), getFullStCount());
    }

    function showPattern() {
        if(validateForm()) {
            const direction = form.querySelector('input[name="direction"]:checked').value;
            console.log(direction);
            const cuffDownRecipe = document.querySelector("#cuff-down-recipe");
            const toeUpRecipe = document.querySelector("#toe-up-recipe")
            if(direction === "cuffdown") {
                cuffDownRecipe.classList.remove("hide");
                toeUpRecipe.classList.add("hide");
            }
            else if(direction === "toeup") {
                toeUpRecipe.classList.remove("hide");
                cuffDownRecipe.classList.add("hide");
            }
            fillPattern();
            return true;
        }
        else {
            return false;
        }
    }

    function handleConstrChange() {
    //Function to show or hide heel selector based on construction direction
        //get heel fields
        const heelFields = document.querySelector("fieldset#heel-type");
        //get the note about using a short row heel with a toe up construction
        const willUseShortRowHeel = form.querySelector("#toe-up-short-row");
        //if direction is cuff down, show heel choices
        if (this.value === "cuffdown") {
            heelFields.classList.remove("hide");
            willUseShortRowHeel.classList.add("hide");
        }
        //if direction is toe up, hide heel choices
        else {
            heelFields.classList.add("hide");
            willUseShortRowHeel.classList.remove("hide");
        }
    }

    //get construction direction radio buttons
    const radios = form.querySelectorAll("fieldset#constr-direction input");
    //loop through radio buttons, add event listener to each
    radios.forEach(radio => 
        radio.addEventListener("change", handleConstrChange)    
    );

    return {
        showPattern: showPattern
    }
    //Pattern components
    //cuff
    //leg
    //heel
    //foot
    //toe
}();