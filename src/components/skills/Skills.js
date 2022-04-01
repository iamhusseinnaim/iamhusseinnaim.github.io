import React, { Component } from 'react';
import htmlpng from '../../images/html.png'
import csspng from '../../images/css-3.png'
import jspng from '../../images/js.png'
import postgrespng from '../../images/postgre.png'
import mysqlpng from '../../images/mysql.png'
class Skills extends Component {
    state = {
        skills:[
            {
                text:"HTML",
                score:90,
                img:htmlpng,
                classList:" outline outline-offset-8 outline-orange-500 text-orange-500 rounded-full p-3 text-center flex flex-col justify-center items-center"
            },
            {
                text:"JAVASCRIPT",
                score:80,
                img:jspng,
                classList:" outline outline-offset-8 outline-yellow-400 text-yellow-400  rounded-full p-3 text-center flex flex-col justify-center items-center"
            },
            {
                text:"CSS",
                score:95,
                img:csspng,
                classList:" outline outline-offset-8 outline-blue-500 text-blue-500  rounded-full p-3 text-center flex flex-col justify-center items-center"
            },
            {
                text:"POSTGRESQL",
                score:70,
                img:postgrespng,
                classList:"  bg-blue-700 text-white  rounded-full p-3 text-center flex flex-col justify-center items-center"
            },
            {
                text:"MYSQL",
                score:50,
                img:mysqlpng,
                classList:" bg-gray-400 text-white  rounded-full p-3 text-center flex flex-col justify-center items-center"
            },
        ]
    } 

    style(){
        return {
            width:'300px',
            height:'300px',
            margin:"20px"
        }
    }

    get_skills(){
        var items = []
        this.state.skills.forEach(element => {
            items.push(
                <div style={this.style()} key={element.text} className={`${element.classList}`}>
                    <h1 className='text-3xl '> {element.text} </h1>
                    <img src={element.img} width="100" />
                    <p className='text-2xl'> {element.score}% </p>
                </div>)

        });

        return items

    }
    render() { 
        return (
            <div id='skills' className='h-screen p-3 max-w-7xl m-auto' >

                <h1 className='text-center bg-indigo-500 p-3 h-32 text-white  flex items-center justify-center w-full text-5xl'>  مهاراتي في البرمجة  </h1>
                <hr/>
                <div dir='ltr' className='flex justify-center mt-5 items-center flex-wrap text-black'>
                    {this.get_skills()}
                </div>

            </div>
        );
    }
}

export default Skills;