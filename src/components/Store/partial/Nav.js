import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import me from '../images/home.jpg';

class Nav extends Component {
    state = {  } 
    render() { 
        return (
            <nav dir='rtl' className='p-5 bg-black  w-full flex items-center justify-between '>
                <h1 className='text-orange-600 text-3xl'> فخامة  </h1>
                <ul className='text-gray-400 flex   gap-2 text-xl'>
                    {/* <li> 
                        <a className="bg-white text-black p-4"> الرئيسية   </a>    
                    </li>
                    <li> 
                        <a className='p-4'> الرجال    </a>    
                    </li>
                    <li> 
                        <a className='p-4'> النساء   </a>    
                    </li> */}
                </ul>
                <div className='flex items-center gap-1'>
                <a href='/projects/store' className='text-xl'> <span className='material-icons text-gray-400'>local_mall</span> </a>
                <Avatar alt="Remy Sharp" src={me} />
                </div>
            </nav>
        );
    }
}

export default Nav;