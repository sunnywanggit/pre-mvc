import './app2.css'
import $ from 'jquery'

const $html = `
<!-- app2 -->
<div id="app2">
  <div class="tab-bar">
    <ol>
      <li class="left-tab">tab1</li>
      <li class="right-tab">tab2</li>
    </ol>
  </div>
  <div class="tab-content">
    <ol>
      <li>tab1-content</li>
      <li>tab2-content</li>
    </ol>
  </div>
</div>
`

const $ele = $($html).appendTo('body>.page')

const $tabBar = $('#app2 .tab-bar')
const $tabCon = $('#app2 .tab-content')
const localKey = 'app2.index'
const active = localStorage.getItem(localKey) || 0

$tabBar.on('click','li', e=>{
    let $li = $(e.currentTarget)
    let index = $li.index()
    localStorage.setItem(localKey,index)
   $tabCon.children().children().eq(index).addClass('active')
   .siblings().removeClass('active')
})

$tabCon.children().children().eq(active).addClass('active')