import React from 'react';
import Logo from '../img/logo.png';

const Header = () => {
    return (
        <div className='fixed z-50 w-screen flex p-6 px-16'>
            {/* desktop & tablet */}
            <div className='flex sm:hidden md:flex lg:flex w-full h-full p-4'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} alt="" className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </div>
            </div>

            <ul className='flex items-center gap-8 ml-auto'>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Home</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer w-20'>About Us</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Services</li>
            </ul>


            {/* moblie */}
            <div className='flex md:hidden w-full h-full p-4'></div>
        </div>
    )
}

export default Header 