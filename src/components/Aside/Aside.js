import React, { Component } from 'react';
import './Aside.css';

class Aside extends Component {
  state = {
    links:[
      {
        text:'home',
        link:'#home',
        styles:{},
        active:true
      },
      {
        text:'Aboyt me',
        link:'#about',
        styles:{},
        active:false
      },
      {
        text:'my skills',
        link:'#skills',
        styles:{},
        active:false
      },
      {
        text:'Projects',
        link:'#projects',
        styles:{},
        active:false
      },
    ]
   } 

   get_links = ()=>{
     var items = []

     this.state.links.map((item)=>{
       var classList = ''
       if(item.active){
         classList = classList+ ' active-link'
       }

       items.push(
        <a key={item.link} href={item.link} className={` ${classList} uppercase`} > {item.text} </a> 
       )

     })

     

     return items

   }

   handleClick = ()=>{
  
   }

  render() { 
    return (

      <div id='top-menu' className="aside-wrapper aside bg-black fredoka-font text-xl rounded flex-col justify-center flex items-center text-gray-300">
          {this.get_links()}
      </div>

    );
  }
}
 
export default Aside;