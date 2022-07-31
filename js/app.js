$(document).ready(function () {
  $(".nav-links li a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - $("header").outerHeight() + 45,
        },
        800,
        function () {
          // window.location.hash = hash;
        }
      );
    }
  });
});

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const close = document.querySelectorAll(".close");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  close.forEach((item) => {
    item.addEventListener("click", () => {
      // Toggle nav
      nav.classList.toggle("nav-active");

      // Animate Links

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
    });
  });

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

$(".our-works .owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  center: true,
  dots: true,
  nav: true,
  items: 1.5,
  autoplayTimeout: 2000,
  autoplay: true,
  // navText: ["<", "<i class='fas fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    768: {
      items: 1.5,
    },
  },
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header .nav-links li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if ($(window).scrollTop() >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

// for (let i = 100; i < 100; i++) {
//   if (i % 2 == 1) {
//     console.log("Cut");
//   }
// }
