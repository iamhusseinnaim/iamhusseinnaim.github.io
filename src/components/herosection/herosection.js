import React, { Component } from 'react';
import me from './me.jpg'

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div id='home' data-aos="fade-right"  className='grid md:grid-cols-2 sm:grid-cols-1  h-full items-center justify-center pl-4 pr-4 '>
                <div dir='rtl' className='flex flex-col gap-5 justify-center items-start p-3'>
                    <h1 className='text-5xl text-black'> مرحبا بك في معرض اعمالي   </h1>
                    <h3 className='text-2xl text-gray-400'>
                        
                    انا حسين  من العراق   مطور و مبرمج انظمة تجارة ألكترونية <span > مالك ومطور منصة <a href="https://www.boomiraq.com" target="_blank" className='  ml-2 mr-2 text-indigo-600'> بووم  </a> للوساطة التجارية  </span>  
                    <br></br>
                    <q className='mt-3 text-xl text-gray-400'> مهتم بتطوير و حل مشاكل  التسوق الألكتروني  </q>
                    </h3>

                    <a href='#projects' className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full">
                        تصفح اخر الأعمال 
                    </a>

                </div>
                <div className='flex justify-center'>
                    <img className=' outline outline-offset-8 p-0 m-0 outline-indigo-600 justify-center max-h-fit  md:max-w-md sm:max-w-xs rounded-full' src={me} />
                </div>
            </div>
        );
    }
}

export default Header;
