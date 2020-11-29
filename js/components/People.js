export function People(props, planet, films) {
  let { birth_year, eye_color, gender, hair_color, height, homeworld, name, skin_color } = props;

  let $films_card = `
  <article class="card">
      <h3 class="name">${name}</h3>
      
      <div class="list">
      <ul>
        <li>Birthday: <span>${birth_year}</span></li>
        <li>Gender: <span>${gender}</span></li>
        <li>Planet: <span>${planet}</span></li>
      </ul>
      <ul>
        <li>Height: <span>${height}</span></li>
        <li>Skin: <span>${skin_color}</span></li>
        <li>Eyes: <span>${eye_color}</span></li>
      </ul>
      </div>
      <details class="details"><summary>Films</summary>${films}</details>
    </article>
    
  `;

  return $films_card;
}
