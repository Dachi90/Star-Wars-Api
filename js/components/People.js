export function People(props, planet, films) {
  let { birth_year, eye_color, gender, hair_color, height, homeworld, name, skin_color } = props;

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
        <li>Height: ${height}</li>
        <li>Skin: ${skin_color}</li>
        <li>Eyes: ${eye_color}</li>
      </ul>
      </div>
      <details class="details"><summary>Films</summary>${films}</details>
    </article>
    
  `;

  return $people_card;
}
