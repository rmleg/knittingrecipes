//get the form
const form = document.querySelector("form");

function getFullStCount() {
    const gauge = form.querySelector("input#gauge");
    const circumference = form.querySelector("input#circ");
    return gauge.value * circumference.value * 0.9;
}

//function to fill pattern with data from the form
function fillElt (elt, num) {
    elt.innerHTML = num;
}

function fillPattern() {
    fillElt(document.querySelector("span.caston"), getFullStCount());
}

function showPattern() {
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


//Pattern components
//cuff
//leg
//heel
//foot
//toe




