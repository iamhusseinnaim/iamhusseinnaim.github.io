import React, { useEffect} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AOS from "aos";
import "aos/dist/aos.css";
import $ from 'jquery';
import App from './App';
import Aside from "./components/Aside/Aside";
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Store from './components/Store/Store'
import { createBrowserHistory } from 'history';
ReactDOM.render(
  <React.StrictMode>
    <div className="bg-black">

      
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="projects/store" element={<Store />} />
        </Routes>
      </Router>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


// global 

$(document).ready(function () {
    $('a').click(function (e) { 
      e.preventDefault();
      var href = $(this).attr("href")
      console.log(href)
      if(href != '/'){
        $(this).addClass('active-link');
        $(this).siblings().removeClass('active-link');
        var offset = $(href).offset().top
        console.log(offset)
        $('html,body').animate({
          scrollTop:offset
        },500,'swing')
      }

      
      
    });
});

$(document).ready(function () {
    AOS.init();
    AOS.refresh();


});

function changeActiveLink(){
  var links = $("#top-menu a");
  var sections = $(".section");
  let len = sections.length;
  while(--len && window.scrollY +80 <sections[len].offsetTop){}

  $(links).removeClass('active-link');

  $(links[len]).addClass('active-link');

}

try{
  changeActiveLink();
  window.onscroll = changeActiveLink

}catch{

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


