export function Buttons() {
  const $buttons = document.createElement("div"),
    $forward = document.createElement("button"),
    $back = document.createElement("button"),
    $main = document.getElementById("main");

  $buttons.classList.add("buttons");
  $forward.classList.add("button", "forward");
  $forward.innerHTML = "&#8680;";
  $back.classList.add("button", "back");
  $back.innerHTML = "&#8678;";

  $buttons.appendChild($back);
  $buttons.appendChild($forward);

  /*   if (location.hash === "#/characters") {
    $main.appendChild($buttons);
  } */

  return $buttons;
}
