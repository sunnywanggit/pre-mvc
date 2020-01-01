import "./app1.css";
import $ from "jquery";

//所有和数据相关的内容都放到m里面
const m = {
  data: {
    n: parseInt(localStorage.getItem("n"))
  }
};

// 所有和视图相关的都放到V里面
const v = {
    el:null,
  html: `
<div class="output">
  <span id="number">{{n}}</span>
</div>
<div id="actions">
  <button id="add1">+1</button>
  <button id="minus2">-1</button>
  <button id="mul2">*2</button>
  <button id="divide2">÷2</button>
</div>
`,
  render(container) {
      if(v.el === null){
          v.el = $(v.html.replace(`{{n}}`,m.data.n)).appendTo($(container))
      }else{
          const newEl = $(v.html.replace(`{{n}}`,m.data.n))
          v.el.replaceWith(newEl)
          v.el = newEl;
      }
  }
};

//其他部分都放到C里面
const c = {
  init(container) {
      v.render(container)
    c.ui = {
      button1: $("#add1"),
      button2: $("#minus2"),
      button3: $("#mul2"),
      button4: $("#divide2"),
      number: $("#number")
    };
    c.bindEvents();
  },
  bindEvents() {
    c.ui.button1.on("click", () => {
        let n = parseInt(c.ui.number.text());
        n = n + 1;
        localStorage.setItem("n", n);
        c.ui.number.text(n);
    });
    c.ui.button2.on("click", () => {
        let n = parseInt(c.ui.number.text());
        n = n - 1;
        localStorage.setItem("n", n);
        c.ui.number.text(n);
    });
    c.ui.button3.on("click", () => {
      let n = parseInt(c.ui.number.text());
      n = n * 2;
      localStorage.setItem("n", n);
      c.ui.number.text(n);
    });
    c.ui.button4.on("click", () => {
      let n = parseInt(c.ui.number.text());
      n = n / 2;
      localStorage.setItem("n", n);
      c.ui.number.text(n);
    });
  }
};

export default c;