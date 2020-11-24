export function People(props, planet, films) {
  let { birth_year, eye_color, gender, hair_color, height, homeworld, name, skin_color } = props;
  const $people_films = document.createElement("ul");
  //const $people_films = document.querySelector(".films");

  /* films.forEach((film) => {
    let $film = document.createElement("li");
    $film.textContent = `${film}`;
    $people_films.appendChild($film);
  });
  console.log($people_films); */

  let $people_card = `
  <article class="people-card">
      <h3 class="name">${name}</h3>
      
      <div class="people-list">
      <ul>
        <li>Birthday: ${birth_year}</li>
        <li>Gender: ${gender}</li>
        <li>Planet: ${planet}</li>
      </ul>
      <ul>
        <li>Films:${films}</li>
      </ul>
      
      
      </div>
    </article>
  `;

  return $people_card;
}
