export function Home() {
  const $home = document.createElement("div");
  $home.classList.add("home");

  $home.innerHTML = `
  
  
  <a href="#/people" > <img src="../assets/characters.jpg"/> <p>Characters</p> </a>
  <a href="#/planets" > <img src="../assets/planets.jpg"/> <p>Planets</p> </a>
  <a href="#/films" > <img src="../assets/films.jpg"/> <p>Films</p> </a>
  <a href="#/spacies" > <img src="../assets/species.jpg"/> <p>Species</p> </a>
  <a href="#/vehicles" > <img src="../assets/vehicles.png"/> <p>Vehicles</p> </a>
  <a href="#/starships" > <img src="../assets/starships.jpg"/> <p>Starships</p> </a>
  
  `;

  return $home;
}
