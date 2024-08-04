/*jshint esversion: 6 */

const animation_elements = document.querySelectorAll(".fade-in-on-scroll");
const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;


/*
-Add animation to element on scroll-
go throught all entries in observer
for each entry check if reduced motion is on
if not reduced motion add fade-in class to animate element
remove fade-in-on-scroll to only excecute operation once and to make sure elemtn doesnt return to inition transparent form 
*/ 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!!isReduced) {
            // Don't animatin because user has set motion to reduced
        } else {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                entry.target.classList.remove("fade-in-on-scroll");
            }
        }
    });
}, {
    threshold: 0.2
});

// let observer observe the elements with .fade-in-on-scroll class 
for (let i = 0; i < animation_elements.length; i++) {
    const el = animation_elements[i];

    observer.observe(el);
}

/* 
used following tutorial for help:
https://www.youtube.com/watch?v=sORoAeGhlj0
*/