export function Planet(props, films, people) {
  let { climate, diameter, gravity, name, population, rotation_period, terrain } = props;

  let $planet_card = `
  <article class="card">
      <h3 class="name">${name}</h3>
      
      <div class="list">
      <ul>
        <li>Population: ${population}</li>
        <li>Diameter: ${diameter}</li>
        <li>Weather: ${climate}</li>
      </ul>
      <ul>
        <li>Gravity: ${gravity}</li>
        <li>Rotation: ${rotation_period}</li>
        <li>Terrain: ${terrain}</li>
      </ul>
      </div>
      <details class="details"><summary>Films</summary>${films}</details>
      <details class="details"><summary>Residents</summary>${people}</details>
    </article>
    
  `;

  return $planet_card;
}
