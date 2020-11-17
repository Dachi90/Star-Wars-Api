export function footer() {
  const $footer = document.querySelector(".footer");
  $footer.innerHTML += `
  <p>Source: <a href="https://swapi.dev/" target="_blank">Swapi</a></p>
`;

  return $footer;
}
