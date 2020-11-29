export function Species(props, films, character) {
  let { avarage_height, avarage_lifespan, classification, designation, language, name } = props;

  let $species_card = `
  <article class="card">
      <h3 class="name">${name}</h3>
      
      <div class="list">
      <ul>
        <li>Classification: <span>${classification}</span></li>
        <li>Language: <span>${language}</span></li>
      </ul>
      <ul>
        <li>Height: <span>${avarage_height}</span></li>
        <li>Lifespan: <span>${avarage_lifespan}</span></li>
        <li>Designation: <span>${designation}</span></li>
      </ul>
      </div>
      <details class="details"><summary>Films</summary>${films}</details>
      <details class="details"><summary>Characters</summary>${character}</details>
    </article>
    
  `;

  return $species_card;
}
