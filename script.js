//auto written text //
const text = document.querySelector("#text");
const textwritten = "Hello Everyone !";
let i = 0;
window.onload = writeText();

function writeText() {
  text.innerText = textwritten.slice(0, i);

  i++;
  if (i > textwritten.length) {
    i = 1;
  }
  setTimeout(writeText, 200);
}

//mobile navigation //
const btnNav = document.querySelector(".mob-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

const navlinks = document.querySelectorAll(".nav-link");
navlinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
  });
});

//progress//

window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // you're at the bottom of the page
    console.log("bottom");
    let bar = document.querySelectorAll(".bar");
    bar.forEach((progress) => {
      let value = progress.getAttribute("data-done");
      progress.style.width = `${value}%`;
      progress.style.opacity = 1;
    });
  }
};

//smooth scrolling effect//
const alllinks = document.querySelectorAll("a:link");

alllinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    //scroll back to top//
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const secEl = document.querySelector(href);
      console.log(secEl);
      secEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

//sticky navigation//
const secheroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      // document.querySelector(".header").classList.add("sticky");
      document.body.classList.add("sticky");
      document.querySelector(".header").style.backgroundColor = "#fdf2e9";
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in viewport
    root: null,
    threshold: 0,
    rootMargin: "-40px",
  }
);

obs.observe(secheroEl);
