import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    state = {
        links:[
            {
                text:"الرئيسية ",
                link:'#home',
                classList:'border-b-2 pb-2 text-indigo-600 border-indigo-600 hover:border-gray-900'
            },
            {
                text:'مشاريعي',
                link:'/',
                classList:''
            },
            {
                text:'من انا ',
                link:'#about-me',
                classList:''
            },
            {
                text:'مهاراتي  ',
                link:'#skills',
                classList:''
            }
        ]
    } 

    get_links(){
        var items= [];

        this.state.links.forEach(element => {
            items.push(
                <li key={element.link} className='md:block sm:hidden '> <a data-href={element.link} className={`ml-2 mr-2 nav-item text-gray-500 text-1xl hover:text-gray-900 transition-colors ${element.classList}`} href={element.link}> {element.text} </a> </li>
            )
        });

        return items

    }



    render() { 
        return (
            <nav dir='rtl' className='  '>

        <button className="bg-indigo-500 md:block sm:hidden hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full">
        تواصل               
        </button>

                <ul className='md:flex sm:hidden items-center'>
                    {this.get_links()}
                </ul>
                {/* logo */}
                <div className='md:m-0 sm:m-auto text-3xl logo-wrapper text-indigo-600'>
                    <h1> Hussein Naim </h1>
                </div>
            </nav>
        );
    }
}
 
export default Nav;

