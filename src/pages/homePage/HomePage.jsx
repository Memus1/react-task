import React from 'react'
import img2 from "../../assets/images/IMAGE.png"
import icon1 from "../../assets/images/IMAGE (4).svg"
import icon4 from "../../assets/images/IMAGE (3).svg"
import icon3 from "../../assets/images/IMAGE (2).svg"
import icon2 from "../../assets/images/IMAGE (5).svg"
import frame1 from "../../assets/images/Frame (1).png"
import frame2 from "../../assets/images/Frame (2).png"
import frame3 from "../../assets/images/Frame (3).png"
import frame4 from "../../assets/images/Frame (4).png"


function HomePage() {
  return (
    <>
      <div className="w-full relative h-screen banner dark:grayscale">
         <p className=" text-white text-2xl font-bold text-center insert-0 flex justify-center items-center bottom-109 left-1/3 transform-translate-x-1/2" >
          Furniture designed to live in harmony, creating distinctive and <br /> timeless spaces</p>
        <button className=' text-white border border-white py-2 px-6 bottom-94 '>Discover now</button>
        <h2 className=' bg-black text-white pl-3 absolute bottom-0 left-5 pr-3 py-2 '>   Do you know what is your decor style?</h2>
      </div>

      <div className="flex justify-between items-center space-x-8 p-5">

        <div className="flex items-center space-x-4">
          <img src={icon3} alt="" className="w-12 h-12 object-contain" />
          <h1 className="font-semibold">Free Shipping</h1>
        </div>


        <div className="flex items-center space-x-4">
          <img src={icon4} alt="" className="w-12 h-12 object-contain" />
          <h1 className="font-semibold">Awarded Product Design</h1>
        </div>

        <div className="flex items-center space-x-4">
          <img src={icon1} alt="" className="w-12 h-12 object-contain" />
          <h1 className=" font-semibold">Ecofriendly Approach</h1>
        </div>

        <div className="flex items-center space-x-4">
          <img src={icon2} alt="" className="w-12 h-12 object-contain" />
          <h1 className="font-semibold">Crafted in Spain</h1>
        </div>
      </div>



      <div className="grid grid-cols-4 mt-5 w-full dark:grayscale">
        <img className='w-full' src={frame1} alt="" />
        <img className='w-full' src={frame2} alt="" />
        <img className='w-full' src={frame3} alt="" />
        <img className='w-full' src={frame4} alt="" />

      </div>
<div className='bg-yellow-400 sm:bg-yellow-200 w-full md:bg-pink-400 lg:bg-blue-700 xl:bg-orange-400 2xl:bg-black h-96'>
      <div className=' w-full '></div>
      
      </div>
      
    </>
  )
}

export default HomePage