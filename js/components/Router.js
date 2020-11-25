import api from "../helpers/sw_api.js";
import { ajax } from "../helpers/ajax.js";
import { Home } from "./Home.js";
import { People } from "./People.js";
import { Buttons } from "./Buttons.js";
import { App } from "../app.js";
import { Planet } from "./Planet.js";
let page = 1;
function pages() {
  document.addEventListener("click", (e) => {
    let query = JSON.parse(localStorage.getItem("query"));
    console.log(page);

    if (e.target.matches(".forward") && query.next != null) {
      page++;
      App();
    }
    if (e.target.matches(".back") && query.previous != null) {
      page--;
      App();
    }
  });
}
document.addEventListener("DOMContenLoaded", pages());

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
          let $ul_people_films = document.createElement("ul");
          //console.log(people.results[i].homeworld);
          //console.log(people.results[i].films);
          await ajax({
            url: people.results[i].homeworld,
            cbSuccess: (planet) => {
              people_planet = planet.name;
              //console.log(people_planet);
            },
          });
          for (let x = 0; x < people.results[i].films.length; x++) {
            //console.log(people.results[i].films[x]);
            await ajax({
              url: people.results[i].films[x],
              cbSuccess: (film) => {
                //console.log(film.title);
                let $li_people_films = document.createElement("li");
                $li_people_films.textContent = film.title;
                $ul_people_films.appendChild($li_people_films);
              },
            });
          }
          let temp = document.createElement("div");
          temp.appendChild($ul_people_films);
          let temp_List_Films = temp.innerHTML;
          //console.log(temp_List_Films);
          //console.log($ul_people_films);
          html += People(people.results[i], people_planet, temp_List_Films);
        }
        $main.innerHTML = html;
        $main.appendChild(Buttons());
      },
    });
  } else if (hash == "#/planets") {
    let html = "";
    ajax({
      url: api.PLANETS + api.PAGES + page,
      cbSuccess: async (planets) => {
        console.log(planets.results);
        localStorage.setItem("query", JSON.stringify(planets));

        for (let i = 0; i < planets.results.length; i++) {
          let $ul_planet_films = document.createElement("ul");
          let $ul_planet_residents = document.createElement("ul");

          for (let x = 0; x < planets.results[i].films.length; x++) {
            //console.log(planets.results[i].films[x]);
            await ajax({
              url: planets.results[i].films[x],
              cbSuccess: (film) => {
                let $li_planet_films = document.createElement("li");
                $li_planet_films.textContent = film.title;
                $ul_planet_films.appendChild($li_planet_films);
              },
            });
          }
          let temp_film = document.createElement("div");
          temp_film.appendChild($ul_planet_films);
          let temp_List_Films = temp_film.innerHTML;

          for (let y = 0; y < planets.results[i].residents.length; y++) {
            //console.log(planets.results[i].residents[y]);
            await ajax({
              url: planets.results[i].residents[y],
              cbSuccess: (resident) => {
                console.log(resident);
                let $li_planet_resident = document.createElement("li");
                $li_planet_resident.textContent = resident.name;
                $ul_planet_residents.appendChild($li_planet_resident);
              },
            });
          }
          let temp_resident = document.createElement("div");
          temp_resident.appendChild($ul_planet_residents);
          let temp_List_Residents = temp_resident.innerHTML;

          html += Planet(planets.results[i], temp_List_Films, temp_List_Residents);
        }
        $main.innerHTML = html;
        $main.appendChild(Buttons());
      },
    });
  } else if (hash == "#/films") {
    $main.innerHTML = `<h3>Films</h3>`;
  } else if (hash == "#/spacies") {
    $main.innerHTML = `<h3>Spacies</h3>`;
  } else if (hash == "#/vehicles") {
    $main.innerHTML = `<h3>Vehicles</h3>`;
  } else if (hash == "#/starships") {
    $main.innerHTML = `<h3>Starships</h3>`;
  }

  d.querySelector(".loader").style.display = "none";
}
