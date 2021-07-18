import React from "react";
import ReactDOM from "react-dom";
import App from "../src/Components/App"

ReactDOM.render(
  <App/>
  ,document.getElementById('root')
);

const myfirstelement = <h1>Hello React!</h1>

ReactDOM.render(myfirstelement, document.getElementById('root'));
const mobileBtn = document.getElementById('mobile-cta')
nav = document.querySelector('nav')
mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
nav.classList.remove('menu-btn');
})
