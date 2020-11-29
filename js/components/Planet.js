export function Planet(props, films, people) {
  let { climate, diameter, gravity, name, population, rotation_period, terrain } = props;

  let $planet_card = `
  <article class="card">
      <h3 class="name">${name}</h3>
      
      <div class="list">
      <ul>
        <li>Population: <span>${population}</span></li>
        <li>Diameter: <span>${diameter}</span></li>
        <li>Weather: <span>${climate}</span></li>
      </ul>
      <ul>
        <li>Gravity: <span>${gravity}</span></li>
        <li>Rotation: <span>${rotation_period}</span></li>
        <li>Terrain: <span>${terrain}</span></li>
      </ul>
      </div>
      <details class="details"><summary>Films</summary>${films}</details>
      <details class="details"><summary>Residents</summary>${people}</details>
    </article>
    
  `;

  return $planet_card;
}
