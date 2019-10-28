const knittingRecipes = function() {
    //get the form
    const form = document.querySelector("form");

    function getMultiple(num, mult) {
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
                for(const i = 1; i < mult; ++i) {
                    if((numFloor - i) % mult === 0) {
                        return numFloor - i;
                    }
                }
            }
        }
        return false;
    }

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
        let valid = true;
        //check if text inputs are valid numbers and are greater than 0
        formInputs.forEach(input => {
            if(input.type === 'number') {
                //reset error message
                input.nextElementSibling.innerHTML = "";
                input.nextElementSibling.classList.remove('invalid-feedback');
                input.classList.remove('is-invalid');
                //number fields are the only ones that take user input
                //don't need to check other input types
                if(Number(input.value) === NaN || Number(input.value) <= 0) {
                    //if found an invalid number field, add class, set valid to false
                    input.classList.add('is-invalid');
                    //set error message
                    input.nextElementSibling.innerHTML = "Please enter a number greater than 0";
                    input.nextElementSibling.classList.add('invalid-feedback');
                    valid = false;
                }
            }
        });
        return valid;
    }

    function findAndFill(selector, num) {
        //find selector items, loop through, fillElt with num
        const locations = document.querySelectorAll(selector);
        locations.forEach(location => fillElt(location, num));
    }

    function handleHeelType() {
        const heelType = form.querySelector('input[name="heeltype"]:checked').value;
        const shortRowInstructions = document.querySelectorAll('.shortRowInstructions');
        if(heelType === 'flap') {
            document.querySelector('#flapInstructions').classList.remove('hide');
            shortRowInstructions.forEach(instr => instr.classList.add('hide'));
            //document.querySelector('.shortRowInstructions').classList.add('hide');
            fillElt(document.querySelector('span#leglength'), 6);
        }
        else {
            //document.querySelector('.shortRowInstructions').classList.remove('hide');
            shortRowInstructions.forEach(instr => instr.classList.remove('hide'));
            document.querySelector('#flapInstructions').classList.add('hide');
            fillElt(document.querySelector('span#leglength'), 7);
        }
    }

    function fillPattern() {
        const fullCircSts = getMultiple(getFullStCount(), 4);
        const spansToFill = [
            {
                selector: '.caston',
                num: fullCircSts
            },
            {
                selector: '.heelsts',
                num: fullCircSts / 2
            },
            {
                selector: '#heel-flap-repeats',
                num: (fullCircSts / 4) - 1
            },
            {
                selector: '#heelturnp',
                num: (fullCircSts / 4) + 2
            },
            {
                selector: '#unwrappedsts',
                num: getMultiple((fullCircSts / 6), 2)
            },
            {
                selector: '.footlength',
                num: form.querySelector('input#length').value - 2
            },
            {
                selector: '#toests',
                num: fullCircSts / 2
            },
            {
                selector: '.finaltoests',
                num: (fullCircSts / 2) - 8
            },
            {
                selector:'.half-finaltoests',
                num: getMultiple((((fullCircSts / 2) - 8) / 2), 2)
            }
        ];
        spansToFill.forEach(span => findAndFill(span.selector, span.num));
        
        //get heel type
        handleHeelType();
    }

    function showPattern() {
        if(validateForm()) {
            //Update button to read "Update Pattern!"
            const button = form.querySelector('input[type="submit"]');
            button.value="Update Pattern!";
            //Show recipe
            const recipe = document.querySelector('#recipe');
            recipe.classList.remove('hide');
            recipe.scrollIntoView({behavior: "smooth"});
            const direction = form.querySelector('input[name="direction"]:checked').value;
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
}();