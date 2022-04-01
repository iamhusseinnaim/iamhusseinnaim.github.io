import React, { Component,useEffect } from 'react';

class Aboutme extends Component {
    state = {  } 
    render() { 
            return (
            <div > 
              {/* about me */}
            <div  id='about-me' className='p-5 text-center  max-w-6xl m-auto flex flex-col justify-center items-center h-screen'>
                <div className='content-wrapper'>
                  
                    <div className='mt-3 text-5xl grid grid-cols-1'>
                      <p className='text-center m-auto text-indigo-700'>
                        حسين نعيم من العراق 22 سنة 
                        <br></br>
                        <span className='text-indigo-500 mt-3 mb-3 text-xl'> مبرمج مواقع - مطور ومصمم انظمة تجارة الكترونية  </span>
                        <br></br>
                        <span className='text-gray-400 text-3xl'>
                          بدأت تعلم البرمجة سنة 2017 وخلال الخمس سنوات الماضية طورت الكثير من انظمة التسوق و التوصيل عبر الأنترنت 
                          جذب اهتمامي مجال تطوير المواقع وبالأخص مجال التجارة الألكترونية و مايقدمه هذا المجال من مميزات رائعة لتسهيل حياة الناس واعطاء مفهوم جديد لتبادل السلع 
                        </span>
                      </p>
                    </div>
        
                </div>
              </div> 
        
            </div>
            );
    }
}
 
export default Aboutme;