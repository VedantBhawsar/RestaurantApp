import React from 'react';
import { Link } from 'react-router-dom';

import { BsCartFill } from 'react-icons/bs';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { motion } from 'framer-motion';

import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../firebase.config';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/Stateprovider'


const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();

    const login = async () => {
        const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
        })
    };


    return (
        <header className='fixed z-50 w-screen flex p-6 px-16 '>
            {/* desktop & tablet */}
            <div className='flex sm:hidden md:flex lg:flex w-full h-full p-4 items-center justify-between '>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} alt="" className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>My Restaurant</p>
                </Link>


                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Services</li>
                    </ul>
                    <div className='relative flex items-center justify-center '>
                        <BsCartFill className='text-textColor text-2xl cursor-pointer ' />
                        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>2</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <motion.img
                            whileTap={{ scale: 0.93 }}
                            src={user ? user.photoURL : Avatar}
                            alt="" className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                            onClick={login} />
                    </div>
                </div>
            </div>



            {/* moblie */}
            <div className='flex md:hidden w-full h-full p-4'></div>
        </header>
    )
}

export default Header 