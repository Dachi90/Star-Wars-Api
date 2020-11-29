export function Vehicles(props, films) {
  let { cargo_capacity, cost_in_credits, length, model, name, passengers, vehicle_class } = props;

  let $vehicles_card = `
  <article class="card">
      <h3 class="name">${name}</h3>
      
      <div class="list">
      <ul>
        <li>Cargo capacity: <span>${cargo_capacity}</span></li>
        <li>Cost: <span>${cost_in_credits}</span></li>
        <li>Length: <span>${length}</span></li>
      </ul>
      <ul>
        <li>Model: <span>${model}</span></li>
        <li>Passemgers: <span>${passengers}</span></li>
        <li>Class: <span>${vehicle_class}</span></li>
      </ul>
      </div>
      <details class="details"><summary>Films</summary>${films}</details>
    </article>
    
  `;

  return $vehicles_card;
}
