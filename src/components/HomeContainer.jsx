import React from 'react'
import Delivery from '../img/delivery.png';

const HomeContainer = () => {
    return (
        <section id='Home' className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 h-screen w-full'>
            <div className='px-2 flex-1 flex flex-col items-start md:items-start justify-start gap-2'>
                <div className='flex justify-start items-center gap-2 bg-orange-100 px-4 py-2 rounded-full'>
                    <p className='font-semibold text-orange-500'>Bike Delivery</p>
                    <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
                        <img src={Delivery} className='w-full h-full object-contain' alt="" />
                    </div>
                </div>

                <p className='text-[2.5rem] md:text-[5rem]  font-bold tracking-wide text-headingColor'>The Fastest Delivery In <span className='text-orange-500'>Your City</span></p>

                <p className='text-base text-textColor justify-center text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maxime ex quasi deleniti magni soluta ut architecto necessitatibus cumque corporis perferendis modi reiciendis culpa dolore quia ipsam? Amet, aperiam eos.</p>
                <button className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 my-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 font-semibold text-white flex md:w-auto justify-center' type='button'>Order Now</button>
            </div>

            <div className='py-2 flex-1'>

            </div>
        </section>
    )
}

export default HomeContainer;