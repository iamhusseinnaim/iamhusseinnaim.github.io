import React, { Component } from 'react';
import './Products.css'
import {newP,top} from './data';



class Products extends Component {
    state = {

    } 
    render() { 
        return (
            <div className='mt-5 m-auto grid grid-cols-1 justify-center xs:w-full p-4 md:max-w-7xl'>
                {newProducts()}
                {topProducts()}
            </div>
        );
    }
}

const newproductsList = ()=>{
    var result = []

    newP.map((product)=>{

        result.push(
                <div class="group relative">
                <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img src={product.img} alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                </div>
                <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-gray-300">
                    <a href="#">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        {product.title}
                    </a>
                    </h3>
                </div>
                <p class="text-sm font-medium text-gray-300"> {product.price} </p>
                </div>
            </div>
        )

    })

    return result
    

}

const topproductsList = ()=>{
    var result = []

    top.map((product)=>{

        result.push(
                <div class="group relative">
                <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img src={product.img} alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                </div>
                <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-gray-300">
                    <a href="#">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        {product.title}
                    </a>
                    </h3>
                </div>
                <p class="text-sm font-medium text-gray-300"> {product.price} </p>
                </div>
            </div>
        )

    })

    return result
    

}

const newProducts = ()=>{
    return(
                <div  class="bg-black w-full m-auto">
                <div class=" mx-auto p-4">
                    <h2 class="text-2xl  tracking-tight text-white"> احدث الموديلات  </h2>

                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                        {newproductsList()}

                    </div>
                </div>
                </div>
    )
}

const topProducts = ()=>{
    return(
                <div  class="bg-black w-full m-auto">
                <div class=" mx-auto p-4">
                    <h2 class="text-2xl  tracking-tight text-white">افضل مبيعات الموسم    </h2>

                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                        {topproductsList()}

                    </div>
                </div>
                </div>
    )
}


export default Products;