import React, { Component } from 'react';
import './Store.css';
import Nav from './partial/Nav';
import home from './images/home.jpg'
import Products from './apps/Products'
import section from './images/section.jpg';
import section2 from './images/section2.jpg';
class Store extends Component {
  state = {  } 
  render() { 
    return (
      <div dir="rtl" className='fixed overflow-auto h-full w-full z-50 bg-black'> 

          <Nav/>
          {/* content */}
          <div></div>
          <div className='content min-h-screen w-full  pt-20   '>
            {Header()}
          </div>
          <div className="min-h-screen">
              {Sections()}
          </div>

          <div className="min-h-screen">
              <Products/>
          </div>

      </div>
    );
  }
}

const Header = ()=>{
  const styles = {
    backgroundRepeat:'no-repeat'
  }

  return (
    <div dir='rtl' style={styles} className='min-h-screen grid md:grid-cols-2 xs:grid-cols-1  header w-full justify-start p-10 items-center '>

      <div className='p-4 bg-black h-full w-fit'>
        <h1 className='text-orange-600 text-9xl'> فخامة  </h1>
            <p  className="text-gray-400 max-w-2xl text-xl">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
    إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
            </p>
            <button className="bg-orange-600 rounded p-3 m-2  text-white"> تسوق الأن  </button>
      </div>
      <img src={home} className="max-h-full" />
    </div>

    
  )

}



const Sections =()=>{
  return (
    <div className="max-w-7xl m-auto">

      <div className='grid xs:grid-cols-1 md:grid-cols-2'>

        <div className="text-orange-600 p-3 text-5xl">
          <h1> اطلالة مميزة  </h1>
          <p className="text-gray-400 text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. </p>
        </div>

        <img src={section} className="max-h-fit" />

      </div>

      <div className='grid xs:grid-cols-1 md:grid-cols-2'>
      <img src={section2} className="max-h-fit" />

          <div className="text-orange-600 p-3 text-5xl">
            <h1>  تصاميم خاصة  </h1>
            <p className="text-gray-400  text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. </p>
          </div>

          

          </div>

    </div>
  )
}


export default Store;