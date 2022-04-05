import './App.css';
import 'aos/dist/aos.css';
import React, { Component } from 'react';
import mepng from './me.png'
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import About from "./components/About/About";
import Aside from './components/Aside/Aside';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

class App extends Component {

  state = {  
    count:0
  } 
  increace =()=>{
    this.setState({count:this.state.count+1})
  }
  render() { 
    return (

      <div className="sections">
            <Aside/>
        
            <div className='section'>
            
            <div id='home' className="flex justify-center flex-wrap   w-full h-screen items-center">


                <div className='text-center' data-aos='fade-left'>
                  <h1 className='text-4xl md:text-7xl   transition-all fredoka-font text-white'>Hussein Naim</h1>
                  <h3 className='font-light text-2xl md:text-4xl fredoka-font text-indigo-300'>  
                  Web developer , software engineer
                  <br></br>
                  and the
                  <strong className=' text-yellow-300 ml-1 mr-1'>Founder</strong> of <a href="https://www.boomiraq.com" className='text-white underline'> Boom Iraq platform </a>
                  </h3>

                  <a href='mailto:phusseinnaim@gmail.com' className='p-3 bg-white block w-32 m-auto mt-2 rounded text-xl fredoka-font text-indigo-600'> contact </a>
                </div>
          </div>



      </div>
      <About/>
      <Skills/>
      <Projects />
      </div>

      );
  }
}
 
export default App;

