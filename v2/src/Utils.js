export const scrollToForm = (e) => {
    e.preventDefault();
    const form = document.querySelector('form');
    form.scrollIntoView({behavior: 'smooth'});
    const firstInput = form.querySelector('input:first-of-type');
    firstInput.focus({preventScroll: true});
};

export const getMultiple = (num, mult) => {
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