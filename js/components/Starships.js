export function Starships(props, pilots, films) {
  let { cost_in_credits, manufacturer, max_atmosphering_speed, model, name, passengers, starship_class } = props;

  let $starship_card = `
  <article class="card">
      <h3 class="name">${name}</h3>
      
      <div class="list">
      <ul>
        <li>Model: <span>${model}</span></li>
        <li>Manufacturer: <span>${manufacturer}</span></li>
        <li>Cost: <span>${cost_in_credits}</span></li>
      </ul>
      <ul>
        <li>Speed: <span>${max_atmosphering_speed}</span></li>
        <li>Passengers: <span>${passengers}</span></li>
        <li>Class: <span>${starship_class}</span></li>
      </ul>
      </div>
      <details class="details"><summary>Pilots</summary>${pilots}</details>
      <details class="details"><summary>Films</summary>${films}</details>
    </article>
    
  `;

  return $starship_card;
}
