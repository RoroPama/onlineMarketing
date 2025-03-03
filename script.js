"use strict";

const section1 = document.querySelector(".section1");
const tab = [
  {
    name: "Google ads",
    icon: "",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui cumque provident voluptate",
  },
  {
    name: "média social",
    icon: "",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui cumque provident voluptate",
  },
  {
    name: "ressources humaines",
    icon: "",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui cumque provident voluptate",
  },
  {
    name: "gestion de projet",
    icon: "",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui cumque provident voluptate",
  },
  {
    name: "Design",
    icon: "",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui cumque provident voluptate",
  },
];

for (let i = 2; i <= 6; i++) {
  let box = document.createElement("div");
  box.classList.add(`box`);
  box.classList.add(`box${i}`);
  box.innerHTML = `
          <div class="name">
            <p>${tab[i - 2].name}</p>
            ${tab[i - 2].icon}
          </div>
          <p>
           ${tab[i - 2].text}
          </p>
          <div><button>lire plus</button></div>
        `;
  section1.appendChild(box);
  box.style.backgroundColor = "white";

  const NameBox = document.querySelector(`.section1 .box${i} .name p`);
  const buttonBox = document.querySelector(`.section1 .box${i} div button`);

  window.addEventListener("resize", function () {
    NameBox.style.fontSize =
      this.window.innerWidth / 16 < 42 ? "1.3rem" : "1.8rem";
  });
  NameBox.style.color = "#212529";
  buttonBox.style.backgroundColor = "transparent";
  buttonBox.style.padding = "0";
  box.style.color = "#0e3629";

  if (i === 2) {
    box.style.transform = " rotate(-7deg)";
    box.style.boderRadius = "5px";
    box.style.backgroundColor = "#0e3629";
    box.style.color = "#edf0f4";
    buttonBox.style.color = "#edf0f4";
    document.querySelector(`.section1 .box${i} .name p`).style.color =
      "#edf0f4";
  }
}

const TabStep = [
  {
    subtitle: "Contactez nous",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minus odio nesciunt, illo ducimus placeat nobis sint recusandae ipsa sit! Cum obcaecati officia soluta qui quos perferendis enim. Nemo, veniam?",
  },
  {
    subtitle: "Selectionnez votre modèle",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minus odio nesciunt, illo ducimus placeat nobis sint recusandae ipsa sit! Cum obcaecati officia soluta qui quos perferendis enim. Nemo, veniam?",
  },

  {
    subtitle: "Nous faisons un plan",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minus odio nesciunt, illo ducimus placeat nobis sint recusandae ipsa sit! Cum obcaecati officia soluta qui quos perferendis enim. Nemo, veniam?",
  },
  {
    subtitle: "Nous améliorons ton business",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minus odio nesciunt, illo ducimus placeat nobis sint recusandae ipsa sit! Cum obcaecati officia soluta qui quos perferendis enim. Nemo, veniam?",
  },
];

const listStep = document.querySelector(".list-step");

TabStep.forEach((el, i) => {
  const step = document.createElement("li");

  step.classList.add("step");
  step.classList.add(`step${i + 1}`);

  step.innerHTML = `  
  <h1>${el.subtitle}</h1>
  <p>
    ${el.text}
  </p>
`;

  listStep.appendChild(step);
});

// const section3 = document.querySelector(".section3");
// const section3_Cords = section3.getBoundingClientRect();

// console.log(logotype);

// let colorW = false;
// window.addEventListener("scroll", function (e) {
//   //console.log(section3_Cords.y);//1168

//   if (window.scrollY >= section3_Cords.top) {
//     console.log(window.scrollY); //1170

//     colorW = true;
//   }
//   if (
//     (window.scrollY <=
//       section3_Cords.top + navLinks.getBoundingClientRect().height ||
//       window.scrollY >= section3_Cords.top + section3_Cords.height) &&
//     colorW == true
//   ) {

//   }
// });

const logotype = document.querySelectorAll(".logotype");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-link");
const section3 = document.querySelector(".section3");
const openMenu = document.querySelector(".button-nav-menu");

let colorG = false;
const fn = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting == true) {
    colorG = true;
    logotype.forEach((element) => {
      element.style.color = "#edf0f4";
    });

    navLink.forEach((element) => {
      element.style.color = "#edf0f4";
    });

    openMenu.style.color = "#0e3629";
  }
  if (entry.isIntersecting == false && colorG == true) {
    logotype.forEach((element) => {
      element.style.color = "#212529";
      colorG = false;
    });

    navLink.forEach((element) => {
      element.style.color = "#212529";
    });
    openMenu.style.color = "#212529";
  }
};

const section3Observer = new IntersectionObserver(fn, {
  root: null,
  threshold: [0.2],
});

section3Observer.observe(section3);

/// MENU DE LA NAV
const listLinks = document.querySelector(".list-links");
const iconMenu = document.querySelectorAll(".button-nav-menu .icon");
console.log(iconMenu);
openMenu.addEventListener("click", function (e) {
  listLinks.classList.toggle("menu-mobileClosed");
  listLinks.classList.toggle("menu-mobileOpened");
  iconMenu.forEach((icon) => icon.classList.toggle("closed"));
});
