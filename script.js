const main = document.querySelectorAll(".main");
const destination = document.querySelector(".destination");
const home = document.querySelector(".home");
const crew = document.querySelector(".crew");
const technology = document.querySelector(".technology");
const menu = document.querySelectorAll(".menu");
const destination_menu = document.querySelectorAll(".nav-menu");
const header_destination_li = document.querySelector(".header_destination_li");
const header_crew_li = document.querySelector(".header_crew_li");
const header_tech_li = document.querySelector(".header_tech_li");
// PLANET CLASS
const moon = document.querySelector(".moon");
const mars = document.querySelector(".mars");
const europa = document.querySelector(".europa");
const titan = document.querySelector(".titan");
// PLANET ID
const moon_id = document.getElementById("europa");
const mars_id = document.getElementById("titan");
const europa_id = document.getElementById("europa");
const titan_id = document.getElementById("titan");
// BOTH PLANET, HIDDEN
const destination_moon = document.querySelector(".moon.destination-container");
const destination_mars = document.querySelector(".mars.destination-container");
const destination_europa = document.querySelector(
  ".europa.destination-container"
);
const destination_titan = document.querySelector(
  ".titan.destination-container"
);

// FUNCTION
const configure = (select1, select2, select3, select4) => {
  select1.classList.remove("hidden");
  select2.classList.add("hidden");
  select3.classList.add("hidden");
  select4.classList.add("hidden");
};

// CHANGING PLANETS CODE

destination_menu.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id === "moon") {
      configure(destination_moon, mars, europa, titan);
    }
    if (e.target.id === "mars") {
      configure(destination_mars, moon, europa, titan);
    }
    if (e.target.id === "europa") {
      configure(destination_europa, moon, mars, titan);
    }
    if (e.target.id === "titan") {
      configure(destination_titan, moon, mars, europa);
    }
  });
});

// HEADER MENU ACTIVE BORDER
function remove_class() {
  header_menu_li.forEach((el) => {
    el.classList.remove("menu-active-home");
  });
}

const header_menu_li = document.querySelectorAll(".header_menu_li");
header_menu_li.forEach((el) => {
  el.addEventListener("click", () => {
    remove_class();
    el.classList.add("menu-active-home");
  });
});

const header_home_li = document.querySelector(".header_home_li");

// MOON
const home_border_line = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header_home_li.classList.remove("menu-active-home");
  } else header_home_li.classList.add("menu-active-home");
};

const home_observer = new IntersectionObserver(home_border_line, {
  root: null,
  threshold: 0.3,
});

home_observer.observe(home);

// DESTINATION
const destination_border_line = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    header_destination_li.classList.remove("menu-active-home");
  } else {
    header_destination_li.classList.add("menu-active-home");
  }
};
const destination_observer = new IntersectionObserver(destination_border_line, {
  root: null,
  threshold: 0.5,
});
destination_observer.observe(destination);

// CREW

const crew_border_line = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header_crew_li.classList.remove("menu-active-home");
  } else {
    header_crew_li.classList.add("menu-active-home");
  }
};

const crew_observer = new IntersectionObserver(crew_border_line, {
  root: null,
  threshold: 0.7,
});
crew_observer.observe(crew);

// TECHNOLOGY
const tech_border_line = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header_tech_li.classList.remove("menu-active-home");
  } else {
    header_tech_li.classList.add("menu-active-home");
  }
};

const tech_observer = new IntersectionObserver(tech_border_line, {
  root: null,
  threshold: 0.7,
});
tech_observer.observe(technology);

// CREW SELECTED BUTTON
const crew_buttons = document.querySelectorAll(".btn");
const commander = document.querySelector(".commander");
const flight = document.querySelector(".flight");
const pilot = document.querySelector(".pilot");
const specialist = document.querySelector(".specialist");

const commander_id = document.getElementById("commander");
const flight_id = document.getElementById("flight");
const pilot_id = document.getElementById("pilot");
const specialist_id = document.getElementById("specialist");

function remove_crew_button() {
  crew_buttons.forEach((btn) => {
    btn.classList.remove("btn-active");
  });
}

crew_buttons.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    remove_crew_button();
    if (e.target.id === "commander") {
      configure(commander, flight, pilot, specialist);
      document.querySelector(".crew-1").classList.add("btn-active");
    } else if (e.target.id === "flight") {
      configure(flight, commander, pilot, specialist);
      document.querySelector(".crew-2").classList.add("btn-active");
    } else if (e.target.id === "pilot") {
      configure(pilot, commander, flight, specialist);
      document.querySelector(".crew-3").classList.add("btn-active");
    } else if (e.target.id === "specialist") {
      configure(specialist, commander, flight, pilot);
      document.querySelector(".crew-4").classList.add("btn-active");
    }
  });
});

// TECHNOLOGY

const tech_buttons = document.querySelectorAll(".selections-buttons");
const selections = document.querySelectorAll(".selections");
const slider = document.querySelectorAll(".slider");
const vehicle = document.querySelector(".vehicle");
const spaceport = document.querySelector(".spaceport");
const spacecapsule = document.querySelector(".spacecapsule");
const vehicle_id = document.getElementById("vehicle");
const spaceport_id = document.getElementById("spaceport");
const spacecapsule_id = document.getElementById("spacecapsule");

const configure_technology = function (select1, select2, select3) {
  select1.classList.remove("hidden");
  select2.classList.add("hidden");
  select3.classList.add("hidden");
};

const active_button = function () {
  selections.forEach((el) => {
    el.addEventListener("click", () => {});
  });
};

tech_buttons.forEach((el) => {
  el.addEventListener("click", (e) => {
    remove_button();
    if (e.target.id === "vehicle") {
      configure_technology(vehicle, spaceport, spacecapsule);
      document.querySelector(".button1").classList.add("active");
    } else if (e.target.id === "spaceport") {
      configure_technology(spaceport, vehicle, spacecapsule);
      document.querySelector(".button2").classList.add("active");
    } else if (e.target.id === "spacecapsule") {
      configure_technology(spacecapsule, spaceport, vehicle);
      document.querySelector(".button3").classList.add("active");
    }
  });
});

function remove_button() {
  tech_buttons.forEach((el) => {
    el.classList.remove("active");
  });
}

// Mobile
const menu_btn = document.getElementById("menu-button");
const close_btn = document.getElementById("close-button");
const header_menu = document.querySelector(".header_menu");
const overlay = document.querySelector(".overlay");
menu_btn.addEventListener("click", () => {
  // header_menu.style.left = "0";
  header_menu.style.transform = "translate(0%)";
  header_menu.style.backgroundColor = "#ffffff6c";
  menu_btn.style.display = "none";
  overlay.classList.remove("hidden");
  console.log("object");
});

close_btn.addEventListener("click", () => {
  header_menu.style.transform = "translate(100%)";
  menu_btn.style.display = "block";

  // header_menu.style.left = "100%";
  overlay.classList.add("hidden");
});

console.log(window.scrollY);

window.addEventListener("scroll", () => {
  if (window.scrollY > 130) {
    document.getElementById("logo").style.display = "none";
  } else {
    document.getElementById("logo").style.display = "block";
  }
});
