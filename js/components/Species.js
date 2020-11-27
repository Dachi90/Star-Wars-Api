export function Species(props, films, character) {
  let { avarage_height, avarage_lifespan, classification, designation, language, name } = props;

  let $species_card = `
  <article class="card">
      <h3 class="name">${name}</h3>
      
      <div class="list">
      <ul>
        <li>Classification: ${classification}</li>
        <li>Language: ${language}</li>
      </ul>
      <ul>
        <li>Height: ${avarage_height}</li>
        <li>Lifespan: ${avarage_lifespan}</li>
        <li>Designation: ${designation}</li>
      </ul>
      </div>
      <details class="details"><summary>Films</summary>${films}</details>
      <details class="details"><summary>Characters</summary>${character}</details>
    </article>
    
  `;

  return $species_card;
}
