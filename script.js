```javascript
/* =========================================
   THE CRAFTERZ
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    /* Close menu when a link is clicked */

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   SCROLL REVEAL ANIMATIONS
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header =
    document.querySelector(".site-header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   ESCAPE KEY
   Closes mobile navigation
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (navLinks) {
            navLinks.classList.remove("open");
        }

        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        }

    }

});


/* =========================================
   IMAGE ERROR HANDLING
   Prevents broken images from looking messy
========================================= */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        image.classList.add("image-error");

    });

});


/* =========================================
   PAGE LOADED
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

});
```
