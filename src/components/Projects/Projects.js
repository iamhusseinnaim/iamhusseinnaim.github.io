import React, { Component } from 'react';
import './Projects.css';

import fakhama from '../../images/fakhama.png'
class Projects extends Component {
  state = {
    projects:[
      {
        name:"Fakhama Store",
        img:fakhama,
        link:'/projects/store'
      }
    ]
  } 

  get_projects = ()=>{
    var items = []

    this.state.projects.map((project)=>{
      items.push(
        <a href={project.link} className='grid grid-cols-1'>

          <h1 className='text-3xl text-indigo-500 mt-2 mb-2 underline'> {project.name} </h1>
          <img src={project.img} className="max-w-full" />

        </a>
      )
    })

    return items

  }

  render() { 
    return (
    <div className='pb-5'>
      <h1 className='text-5xl w-full text-center fredoka-font text-white mt-3 mb-3 '> My Projects </h1>
      <div className='h-screen section m-auto p-5 bg-gray-800 text-white fredoka-font max-w-7xl grid grid-cols-1 gap-1'>
        
        {this.get_projects()}

      </div>
    </div>
    );
  }
}
 
export default Projects;

