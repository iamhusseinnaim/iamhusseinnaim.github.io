import './About.css';
import React, { Component } from 'react';
import me from '../../me.png'

class About extends Component {
  state = {  } 
  render() { 
    return (
      <div>
      
            <div id='about' className="flex section justify-center flex-wrap   w-full h-screen items-center">


                <div className='text-center' data-aos='fade-left'>
                  <img className='rounded-full m-auto img-fluid ' src={me} />
                  <h1 className='text-4xl md:text-7xl   transition-all fredoka-font text-orange-300'> about me  </h1>
                  <h3 className='font-light text-2xl md:text-4xl fredoka-font text-indigo-100  text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-200'>  
                  Hussein Naim from Iraq 22yo 
                </h3>
                <p className='text-blue-300 text-xl'> 
                    E-commerce systems expert & web developer & systems developer
                </p>
                <p className='text-2xl text-white'>
                  five years of experience in web apps & systems design field 
                </p>

                </div>
          </div>
          <div className='h-screen'></div>

      </div>
    );
  }
}
 
export default About;

