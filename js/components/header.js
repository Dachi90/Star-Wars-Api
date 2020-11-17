export function header() {
  const $header = document.querySelector(".header");
  $header.innerHTML = `
<img src="assets/logo.jpg" alt="logo" class="logo"/>
<h1>Star Wars API</h1>
<div></div>
`;

  return $header;
}
