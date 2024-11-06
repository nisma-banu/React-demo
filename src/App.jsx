import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './pages/products';
import { Link, Route, Routes } from 'react-router-dom';

  function App() {
    const [menu,setMenu]=useState(false);
    function handleClick(){
     setMenu(!menu);
    }
 
  return (
    <div class="bg-amber-300 h-[100vh] pt-10">
    <nav class="px-10 md:w-[90%] sm:w-[100%] md:mx-auto flex md:flex-row justify-between items-center">
      <h3 class="text-3xl font-bold">Landoo</h3>
      <div class="md:static absolute  md:min-h-fit min-h-[40vh] top-[-100%] left-0 md:w-auto w-full  flex items-center px-5">
      <ul class='flex md:flex-row flex-col md:items-center  md:gap-[4vw]  space-x-2 text-lg'>
      <li class='list-none hover:underline hover:underline-offset-8'>Home</li>
      <li class='list-none hover:underline hover:underline-offset-8'>About Us</li>
      <li class='list-none hover:underline hover:underline-offset-8'>Contact Us</li>
      <li class='list-none hover:underline hover:underline-offset-8'><Link to={'/products'}>Products</Link></li>
      </ul>
      </div>
      <div class="px-5 font-bold md:space-x-4  items-center">
        <button class="px-5 py-1 border-2 border-solid rounded-full border-stone-900 hover:bg-slate-800 hover:text-white">Log In</button>
        <button class="px-5 py-1 border-2 border-solid rounded-full border-stone-900 hover:bg-black hover:text-white">Sign Up</button>
         <img class="inline" src="https://img.icons8.com/?size=30&id=59832&format=png" onClick={handleClick}></img>
      </div>
      
    </nav>{menu?
      <div class="md:static absolute bg-black text-white  md:min-h-fit min-h-[40vh] top-[25%] left-0 md:w-auto w-full  flex items-center px-5">
      <ul class='flex md:flex-row flex-col md:items-center  md:gap-[4vw]  space-x-2 text-lg'>
      <li class='list-none hover:underline hover:underline-offset-8'>Home</li>
      <li class='list-none hover:underline hover:underline-offset-8'>About Us</li>
      <li class='list-none hover:underline hover:underline-offset-8'>Contact Us</li>
      <li class='list-none hover:underline hover:underline-offset-8'>Products</li>
      </ul>
      </div>:null}
      
      <div class="md:pl-24 pl-12 my-28">
      <h2 class="font-extrabold text-4xl md:w-2/3 lg:w-1/3 ">Style You with Our products</h2>
      <div class="space-x-4 my-6">
        <button class="bg-slate-800 text-white px-6 py-1 rounded-xl hover:bg-white hover:solid-border hover:border-stone-900 hover:border-2 hover:text-black">Shop Now</button>
        <button class="bg-slate-800 text-white px-6 py-1 rounded-xl hover:bg-white hover:solid-border hover:border-stone-900 hover:border-2 hover:text-black">Get Offer</button>
      </div>
      </div>
       <Routes>
        <Route path="/products" element={<ProductList/>}></Route>
       
       </Routes>
       <div class="bg-black w-[100%] relative bottom-0 h-12 flex justify-center items-center">
         <p class="text-gray-300">@copyright
         </p>
       </div>


      </div>
      
    
  )

}

export default App
