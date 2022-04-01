import React, { useEffect} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './components/partial/Nav';
import Header from './components/herosection/herosection'
import Aboutme from './components/aboutme/Aboutme';
import AOS from "aos";
import "aos/dist/aos.css";
import $ from 'jquery';
import anime from 'animejs/lib/anime.es.js';
import Skills from './components/skills/Skills';
ReactDOM.render(
  <React.StrictMode>
    <header className=' h-screen'>
      <Nav />
      <Header />
      <Aboutme />
      <Skills />
    </header>
  </React.StrictMode>,
  document.getElementById('root')
);


// global 

$(document).ready(function () {
    $('.nav-item').click(function (e) { 
      e.preventDefault();
      if(this.dataset.href != '/'){
        var offset = $($(this).data("href")).offset().top
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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

