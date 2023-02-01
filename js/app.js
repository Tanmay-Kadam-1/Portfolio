/* --------------- Grab elements from DOM --------------- */
const header = document.querySelector("header");

/* --------------- Sticky Navbar --------------- */
function stickyNavbar() {
	header.classList.toggle("scrolled", window.pageYOffset > 0);
	console.log(window.pageYOffset);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* --------------- Reveal Animation --------------- */

/* --------------- Skills Progress Bar Animation --------------- */

/* --------------- Services Counter Animation --------------- */

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */
