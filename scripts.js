//get the form
const form = document.querySelector("form");

//function to fill pattern with data from the form
function fillElt (elt, num) {
    elt.innerHTML = num;
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


