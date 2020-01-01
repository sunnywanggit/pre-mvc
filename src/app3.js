import "./app3.css";

import $ from "jquery";

const $html = `
<!-- app3 -->
<div id="app3">
    <div id="box"></div>
</div>
`

const $ele = $($html).appendTo($('body>.page'))

const $box = $("#box");
const localKey = 'app.animation'
const active = localStorage.getItem(localKey) === 'yes' 

$box.toggleClass('animation',active)


$box.on("click", () => {
  if ($box.hasClass("animation")) {
    $box.removeClass("animation");
    localStorage.setItem(localKey,'no');
  } else {
    $box.addClass("animation");
    localStorage.setItem(localKey,'yes');
  }
});
