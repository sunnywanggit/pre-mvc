import './app4.css'

import $ from 'jquery'

const $html = `
<!-- app4 -->
<div id="app4">
    <div class="circle"></div>
</div>
`

const $ele = $($html).appendTo($('body>.page'))

const $circle = $('#app4 .circle')
const localKey = 'app4.active'
const active = localStorage.getItem(localKey) === 'yes'

$circle.toggleClass('active',active)

$circle.on('click',()=>{
    if($circle.hasClass('active')){
        $circle.removeClass('active')
        localStorage.setItem(localKey,'no')
    }else{
        $circle.addClass('active')
        localStorage.setItem(localKey,'yes')
    }
})