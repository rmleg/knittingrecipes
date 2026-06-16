import { throttle } from "lodash";

export const scrollToForm = () => {
  // e.preventDefault();
  const form = document.querySelector("form");
  form?.scrollIntoView({ behavior: "smooth" });
  const firstInput: HTMLInputElement | null | undefined = form?.querySelector(
    "input:first-of-type",
  );
  firstInput?.focus({ preventScroll: true });
};

export const getMultiple = (num: number, mult: number) => {
  /*return the largest number smaller than num that
   *is a multiple of mult
   */
  //if mult is already a mult of num, return num
  if (num % mult === 0) {
    return num;
  } else {
    //round num down to the nearest whole number
    const numFloor = Math.floor(num);
    if (numFloor % mult === 0) {
      //if numFloor is multiple of mult, return numFloor
      return numFloor;
    } else {
      //subtract 1 from numFloor until it is
      //a multitple of mult. return numFloor
      for (let i = 1; i < mult; ++i) {
        if ((numFloor - i) % mult === 0) {
          return numFloor - i;
        }
      }
    }
  }
  return 0;
};

export const throttledScrollWithToTopButton = (
  setToTopButton: (value: React.SetStateAction<boolean>) => void,
) => {
  const throttled = throttle(() => {
    const form = document.querySelector("form");
    if (form?.offsetTop !== undefined && form?.offsetHeight !== undefined) {
      const formHeight = form?.offsetTop + form?.offsetHeight;
      setToTopButton(window.scrollY >= formHeight);
    }
  }, 100);
  window.addEventListener("scroll", throttled);
  return () => window.removeEventListener("scroll", throttled);
};
