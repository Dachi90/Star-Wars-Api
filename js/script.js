import { footer } from "./components/footer.js";
import { header } from "./components/header.js";

const d = document;
const $wrap = d.querySelector(".wrap");

d.addEventListener("DOMContentLoaded", (e) => {
  $wrap.insertAdjacentElement("afterbegin", header());
  $wrap.insertAdjacentElement("beforeend", footer());
});
