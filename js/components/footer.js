export function footer() {
  const $wrap = document.querySelector(".wrap");
  $wrap.innerHTML += `
  <footer class="footer">
        <p>Source: <a href="https://swapi.dev/" target="_blank">Swapi</a></p>
      </footer>
`;

  return $wrap;
}
