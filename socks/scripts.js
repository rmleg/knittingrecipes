const knittingRecipes = function() {

    class Pattern {
        constructor(ease) {
            this.form = document.querySelector("form");
            this.ease = ease; //let hat people specify tighter or looser and set ease that way
            window.addEventListener('scroll', this.handleScrollBtn);
        }

        getMultiple = (num, mult) => {
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

        validateForm = () => {
            //checks if number inputs are numbers
            //radio button requirements are handled in the HTML
            const formInputs = Array.from(this.form.querySelectorAll('input'));
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

        goToTop = () => {
            this.form.scrollIntoView({behavior: "smooth"});
        }
 
        handleScrollBtn = () => {
            //get current scroll position:
            const currentScroll = window.scrollY;
            const formHeight = this.form.offsetTop + this.form.offsetHeight;
            const toTopButton = document.querySelector('#to-top-btn');
            if(currentScroll < formHeight) {
                toTopButton.classList.add('hide');
            }
            else {
                toTopButton.classList.remove('hide');
            }
        }

        //function to fill pattern with data from the form
        fillElt = (elt, num) => {
            elt.innerHTML = num;
        }

        findAndFill = (selector, num) => {
            //find selector items, loop through, fillElt with num
            const locations = document.querySelectorAll(selector);
            locations.forEach(location => this.fillElt(location, num));
        }

        getFullStCount = () => {
            const gauge = this.form.querySelector("input#gauge");
            const circumference = this.form.querySelector("input#circ");
            return gauge.value * circumference.value * ease;
        }
    
    }

    class SockPattern extends Pattern {
        constructor(ease) {
            super(ease);
            this.directionRadios = this.form.querySelectorAll("fieldset#constr-direction input");
            this.directionRadios.forEach(radio => 
                radio.addEventListener("change", this.handleConstrChange)    
            );
        }

        handleConstrChange = (e) => {
            console.log(e);
        //Function to show or hide heel selector based on construction direction
            //get heel fields
            const heelFields = document.querySelector("fieldset#heel-type");
            //get the note about using a short row heel with a toe up construction
            const willUseShortRowHeel = this.form.querySelector("#toe-up-short-row");
            //if direction is cuff down, show heel choices
            if (e.target.value === "cuffdown") {
                heelFields.classList.remove("hide");
                willUseShortRowHeel.classList.add("hide");
            }
            //if direction is toe up, hide heel choices
            else {
                heelFields.classList.add("hide");
                willUseShortRowHeel.classList.remove("hide");
            }
        }

        handleHeelType = (direction) => {
            const heelType = this.form.querySelector('input[name="heeltype"]:checked').value;
            const shortRowInstructions = document.querySelectorAll('.shortRowInstructions');
            if(heelType === 'flap' && direction === 'cuffdown') {
                document.querySelector('#flapInstructions').classList.remove('hide');
                shortRowInstructions.forEach(instr => instr.classList.add('hide'));
                this.fillElt(document.querySelector('span#leglength'), 6);
            }
            else {
                shortRowInstructions.forEach(instr => instr.classList.remove('hide'));
                document.querySelector('#flapInstructions').classList.add('hide');
                this.fillElt(document.querySelector('span#leglength'), 7);
            }
        }
    }

    //get the form
    //const form = document.querySelector("form");

    //for hat, get this value from a form selection
    const ease = 0.9;
    const sockpatt = new SockPattern(ease);

    function fillPattern(direction) {
        const fullCircSts = sockpatt.getMultiple(sockpatt.getFullStCount(), 4);
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
                num: sockpatt.getMultiple((fullCircSts / 6), 2)
            },
            {
                selector: '.footlength',
                num: sockpatt.form.querySelector('input#length').value - 2
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
                num: sockpatt.getMultiple((((fullCircSts / 2) - 8) / 2), 2)
            }
        ];
        spansToFill.forEach(span => sockpatt.findAndFill(span.selector, span.num));
        
        //get heel type
        sockpatt.handleHeelType(direction);
    }

    function showPattern() {
        if(sockpatt.validateForm()) {
            //Update button to read "Update Pattern!"
            const button = sockpatt.form.querySelector('input[type="submit"]');
            button.value="Update Pattern!";
            //Show recipe
            const recipe = document.querySelector('#recipe');
            recipe.classList.remove('hide');
            recipe.scrollIntoView({behavior: "smooth"});
            const direction = sockpatt.form.querySelector('input[name="direction"]:checked').value;
            const cuffDownRecipe = document.querySelector("#cuff-down-recipe");
            const toeUpRecipe = document.querySelector("#toe-up-recipe")
            if(direction === "cuffdown") {
                cuffDownRecipe.classList.remove("hide");
                toeUpRecipe.classList.add("hide");
            }
            else if(direction === "toeup") {1
                toeUpRecipe.classList.remove("hide");
                cuffDownRecipe.classList.add("hide");
            }
            fillPattern(direction);
            return true;
        }
        else {
            return false;
        }
    }

    return {
        showPattern: showPattern,
        goToTop: sockpatt.goToTop
    }
}();