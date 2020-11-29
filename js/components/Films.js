export function Films(props, characters) {
  let { director, episode_id, opening_crawl, producer, release_date, title } = props;

  let $planet_card = `
  <article class="card">
      <h3 class="name">${title}</h3>
      
      <div class="list">
      <ul>
        <li>Episode: <span>${episode_id}</span></li>
        <li>Release date: <span>${release_date}</span></li>
        
      </ul>
      <ul>
        <li>Director: <span>${director}</span></li>
        <li>Producer: <span>${producer}</span></li>
      
      </ul>
      </div>
      <details class="details"><summary>Storyline</summary>${opening_crawl}</details>
      <details class="details"><summary>Characters</summary>${characters}</details>
    </article>
    
  `;

  return $planet_card;
}
