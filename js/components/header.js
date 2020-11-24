import { Title } from "./Title.js";
import { Logo } from "./Logo.js";

export function Header() {
  const $header = document.createElement("header");

  $header.classList.add("header");
  $header.appendChild(Logo());
  $header.appendChild(Title());

  return $header;
}
