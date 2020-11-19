/* import { footer } from "./components/footer.js";
import { header } from "./components/header.js"; */

const d = document;
const $wrap = d.querySelector(".wrap"),
  $cards = d.querySelectorAll(".card"),
  $sections = d.querySelector(".sections"),
  $content = d.querySelector(".content");

let idSelected;

d.addEventListener("DOMContentLoaded", (e) => {
  /* $wrap.insertAdjacentElement("afterbegin", header());
  $wrap.insertAdjacentElement("beforeend", footer()); */
  id();
});

function fadeOut(element) {
  element.style.opacity = "0";
  setTimeout(() => {
    element.style.display = "none";
  }, 200);
}

function fadeIn(element) {
  element.style.display = "grid";
  setTimeout(() => {
    element.style.opacity = "1";
  }, 500);
}

function id() {
  $cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      idSelected = card.id;
      //console.log(idSelected);

      fadeOut($sections);
      fadeIn($content);

      data(idSelected);
    });
  });
}

async function data(id) {
  //alert("prueba");
  /* d.querySelector(".data").innerHTML = `<h3>${id.toUpperCase()}</h3>`;
  d.querySelector(".data").style.color = "white"; */

  const $template = d.getElementById("people-template").content,
    $fragment = d.createDocumentFragment();

  const res = await fetch(`https://swapi.dev/api/${id}`);
  console.log(res);
  const json = await res.json();
  console.log(json);
  /* const people = await json.results;
  console.log(people); */
  /* const key = Object.keys(json.results[0]);
  console.log(key[0]); */

  json.results.forEach((el) => {
    //console.log(el);
    const keys = Object.keys(el);
    //console.log(keys);
    $template.querySelector("h3").textContent = el.name;

    const $clone = $template.cloneNode(true);
    $fragment.appendChild($clone);
  });
  $content.appendChild($fragment);
  let html = `<div class="buttons">
  <p type="button" class="button atras"> ⏪ </p><p class="button adelante"> ⏩ </p>
</div>`;
  $content.insertAdjacentHTML("afterend", html);
}
