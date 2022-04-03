import './App.css';
import 'aos/dist/aos.css';
import React, { Component } from 'react';
import mepng from './me.png'
import MenuIcon from '@mui/icons-material/Menu';

class App extends Component {

  state = {  
    count:0
  } 
  increace =()=>{
    this.setState({count:this.state.count+1})
  }
  render() { 
    return (
      <div className="flex justify-center flex-wrap  bg-indigo-700 w-full h-screen items-center">

        <img src={mepng} className=" md:max-w-md" />
        <div className='text-center'>
          <h1 className='text-4xl md:text-7xl   transition-all fredoka-font text-white'>Hussein Naim</h1>
          <h3 className='font-light text-2xl md:text-4xl fredoka-font text-indigo-300'>  
          Web developer , software engineer
          <br></br>
          and 
          <strong className=' text-yellow-300 ml-1 mr-1'>Founder</strong> of <a href="https://www.boomiraq.com" className='text-white underline'> Boom Iraq platform </a>
          </h3>
        </div>
      </div>
      );
  }
}
 
export default App;

