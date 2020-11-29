import api from "../helpers/sw_api.js";
import { ajax } from "../helpers/ajax.js";
import { Home } from "./Home.js";
import { People } from "./People.js";
import { Buttons } from "./Buttons.js";
import { App } from "../app.js";
import { Planet } from "./Planet.js";
import { Films } from "./Films.js";
import { Species } from "./Species.js";
import { Vehicles } from "./Vehicles.js";
import { extraData } from "../helpers/extraData.js";
import { Starships } from "./Starships.js";
let page = 1;

document.addEventListener("click", (e) => {
  let query = JSON.parse(localStorage.getItem("query"));
  console.log(page);

  if (e.target.matches(".forward") && query.next != null) {
    page++;
    App();
  } else if (e.target.matches(".back") && query.previous != null) {
    page--;
    App();
  } else {
    return false;
  }
});

export async function Router() {
  const d = document,
    $main = d.getElementById("main");

  let { hash } = location;
  //console.log(hash);
  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    $main.appendChild(Home());
    page = 1;
  } else if (hash == "#/people") {
    await ajax({
      url: api.PEOPLE + api.PAGES + page,
      cbSuccess: async (people) => {
        localStorage.setItem("query", JSON.stringify(people));
        //console.log(localStorage.getItem("query"));
        //console.log(people);
        //console.log(page);
        let html = "";
        let people_planet = "";

        for (let i = 0; i < people.results.length; i++) {
          //console.log(people.results[i]);
          //console.log(people.results[i].homeworld);
          //console.log(people.results[i].films);
          await ajax({
            url: people.results[i].homeworld,
            cbSuccess: (planet) => {
              people_planet = planet.name;
              //console.log(people_planet);
            },
          });

          html += People(people.results[i], people_planet, await extraData(people.results[i].films));
        }
        $main.innerHTML = html;
        $main.appendChild(Buttons());
      },
    });
  } else if (hash == "#/planets") {
    let html = "";
    await ajax({
      url: api.PLANETS + api.PAGES + page,
      cbSuccess: async (planets) => {
        //console.log(planets.results);
        localStorage.setItem("query", JSON.stringify(planets));

        for (let i = 0; i < planets.results.length; i++) {
          html += Planet(planets.results[i], await extraData(planets.results[i].films), await extraData(planets.results[i].residents));
        }
        $main.innerHTML = html;
        $main.appendChild(Buttons());
      },
    });
  } else if (hash == "#/films") {
    let html = "";

    await ajax({
      url: api.FILMS + api.PAGES + page,
      cbSuccess: async (films) => {
        //console.log(films.results);
        //localStorage.setItem("query", JSON.stringify(films)); Solo hay 6 películas por lo cual no necesitaré hacer una paginación.
        for (let i = 0; i < films.results.length; i++) {
          html += Films(films.results[i], await extraData(films.results[i].characters));
        }
        $main.innerHTML = html;
        //$main.appendChild(Buttons());
      },
    });
  } else if (hash == "#/spacies") {
    let html = "";

    await ajax({
      url: api.SPECIES + api.PAGES + page,
      cbSuccess: async (species) => {
        localStorage.setItem("query", JSON.stringify(species));
        console.log(species.results);

        for (let i = 0; i < species.results.length; i++) {
          //console.log(species.results[i]);

          html += Species(species.results[i], await extraData(species.results[i].films), await extraData(species.results[i].people));
        }
        $main.innerHTML = html;
        $main.appendChild(Buttons());
      },
    });
  } else if (hash == "#/vehicles") {
    await ajax({
      url: api.VEHICLES + api.PAGES + page,
      cbSuccess: async (vehicles) => {
        localStorage.setItem("query", JSON.stringify(vehicles));
        let html = "";

        for (let i = 0; i < vehicles.results.length; i++) {
          //console.log(vehicles.results[i]);
          html += Vehicles(vehicles.results[i], await extraData(vehicles.results[i].films));
        }
        $main.innerHTML = html;
        $main.appendChild(Buttons());
      },
    });
  } else if (hash == "#/starships") {
    await ajax({
      url: api.STARSHIPS + api.PAGES + page,
      cbSuccess: async (starships) => {
        localStorage.setItem("query", JSON.stringify(starships));
        let html = "";

        for (let i = 0; i < starships.results.length; i++) {
          console.log(starships.results[i]);

          html += Starships(starships.results[i], await extraData(starships.results[i].pilots), await extraData(starships.results[i].films));
        }
        $main.innerHTML = html;
        $main.appendChild(Buttons());
      },
    });
  }

  d.querySelector(".loader").style.display = "none";
}
