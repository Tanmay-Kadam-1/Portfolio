/* --------------- Grab elements from DOM --------------- */
const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counter = document.querySelectorAll(".counter span");
const progress_bar = document.querySelectorAll(".skills svg circle");

const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

window.addEventListener("scroll", () => {
	if (!skillsPlayed) skillsCounter();
});

/* --------------- Sticky Navbar --------------- */
function stickyNavbar() {
	header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* --------------- Reveal Animation --------------- */
let sr = ScrollReveal({
	duration: 2500,
	distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });

/* --------------- Skills Progress Bar Animation --------------- */

function hasReached(el) {
	let topPosition = el.getBoundingClientRect().top;

	if (window.innerHeight >= topPosition + el.offsetHeight) {
		return true;
	} else {
		return false;
	}
}

function updateCount(num, maxNum) {
	let currentNum = +num.innerText;

	if (currentNum < maxNum) {
		num.innerText = currentNum + 1;
		setTimeout(() => {
			updateCount(num, maxNum);
		}, 12);
	}
}

let skillsPlayed = false;

function skillsCounter() {
	if (!hasReached(first_skill)) return;

	skillsPlayed = true;

	sk_counter.forEach((counter, i) => {
		let target = +counter.dataset.target;
		let strokeValue = 427 - 427 * (target / 100);
		progress_bar[i].style.setProperty("--target", strokeValue);

		setTimeout(() => {
			updateCount(counter, target);
		}, 400);
	});

	progress_bar.forEach(
		(p) => (p.style.animation = "progress 2s ease-in-out forwards")
	);
}

/* --------------- Services Counter Animation --------------- */

/* --------------- Portfolio Filter Animation --------------- */
let mixer = mixitup(".portfolio-gallery", {
	selectors: {
		target: ".prt-card",
	},
	animation: {
		duration: 500,
	},
});

/* --------------- Modal Pop Up Animation Animation --------------- */

let currentIndex = 0;

zoom_icons.forEach((icn, i) =>
	icn.addEventListener("click", () => {
		prt_section.classList.add("open");
		document.body.classList.add("stopScrolling");
		currentIndex = i;
		changeImage(currentIndex);
	})
);

modal_overlay.addEventListener("click", () => {
	prt_section.classList.remove("open");
	document.body.classList.remove("stopScrolling");
});

prev_btn.addEventListener("click", () => {
	if (currentIndex == 0) {
		currentIndex = 5;
	} else {
		currentIndex--;
	}

	changeImage(currentIndex);
});
next_btn.addEventListener("click", () => {
	if (currentIndex == 5) {
		currentIndex = 0;
	} else {
		currentIndex++;
	}

	changeImage(currentIndex);
});

function changeImage(index) {
	images.forEach((img) => img.classList.remove("showImage"));
	console.log(images[index]);
	images[index].classList.add("showImage");
}

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */
