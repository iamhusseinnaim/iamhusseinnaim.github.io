import React, { Component } from 'react';
import './Skills.css';
import SkillBar from 'react-skillbars';

const skills = [
  {
    text:"HTML",
    level:"90%",
    score:90,
    bg:"bg-orange-400"
  },
  {
    text:"JS",
    level:"95%",
    score:95,
    bg:"bg-yellow-400"
  },
  {
    text:"CSS",
    level:"80%",
    score:80,
    bg:"bg-indigo-400"
  },
  {
    text:"TAILWINDCSS",
    level:"50%",
    score:50,
    bg:"bg-indigo-300"
  },
    {
    text:"BOOTSTRAP",
    level:"90%",
    score:90,
    bg:"bg-violet-700"
  },
  {
    text:"REACT",
    level:"50%",
    score:50,
    bg:"bg-indigo-400"
  },
  {
    text:"PYTHON",
    level:"95%",
    score:95,
    bg:"bg-indigo-600"
  },
  {
    text:"DJANGO",
    level:"90%",
    score:90,
    bg:"bg-green-300"
  },
  {
    text:"APIS",
    level:"99%",
    score:99,
    bg:"bg-red-500"
  },
  {
    text:"SYSTEM DESIGN",
    level:"90%",
    score:90,
    bg:"bg-indigo-900"
  },
  {
    text:"PROBLEMS SOLVING ",
    level:"80%",
    score:80,
    bg:"bg-green-400"
  },

  {
    text:"databases languages",
    level:"90%",
    score:90,
    bg:"bg-indigo-300"
  },


]

class Skills extends Component {
  state = {  } 

  skills = ()=>{
    var result = []
    skills.map((skill)=>{

      result.push(
        <div key={skill.text} className="skill w-full text-white" >
        <p className="label"> {skill.text} </p>
        <div className="skill-parent">
            <div className={`skill-progress  ${skill.bg} skill-value-${skill.score}`}>
                
            </div>
            <div className="skill-value" data-bg="#000"> {skill.level}</div>
        </div>
      </div>
      )

    })

    return result
  }

  render() { 
    return (
      <div id='skills' className=' section pb-12 bt-12 min-h-screen grid grid-cols-1 m-auto h-full justify-center sm:w-full md:max-w-7xl pl-3  w-full'>
    
          <div className=' pr-3  m-auto w-full grid items-start md:grid-cols-3 xs:grid-cols-1'>
          {this.skills()}
          </div>
      </div>
    );
  }
}
 
export default Skills;

