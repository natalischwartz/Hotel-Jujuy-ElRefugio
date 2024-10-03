const d = document;

export default function hamburgerMenu(btn, nav, div, lis, btn2) {
 const $btn = d.querySelector(btn),
  $nav = d.querySelector(nav),
  $div = d.querySelector(div),
  $lis = d.querySelectorAll(lis),
  $btnAnimation = d.querySelector(btn2),
  $html = d.documentElement;

 $btn.addEventListener("click", (e) => {
  $div.classList.toggle("h-dvh");
  $nav.classList.toggle("hidden");
  $btnAnimation.classList.toggle("is-active");
  $html.classList.toggle("overflow-hidden")
 });

 $lis.forEach((element) => {
  element.addEventListener("click", (e) => {
   $div.classList.toggle("h-dvh");
   $nav.classList.toggle("hidden");
   $btnAnimation.classList.toggle("is-active");
   $html.classList.toggle("overflow-hidden")
  });
 });
}
