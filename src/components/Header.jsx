import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BsCartFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { SiAboutdotme } from 'react-icons/si'
import { MdAdd, MdLogout, MdOpacity, MdOutlineMiscellaneousServices } from 'react-icons/md';
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

    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]))
        } else {
            setIsMenu(!isMenu)
        }
    };

    const logout = () => {
        setIsMenu(false);
        localStorage.clear();
        dispatch({
            type: actionType.SET_USER,
            user: null,

        });
    }


    return (
        <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 backdrop-blur-sm'>
            {/* desktop & tablet */}
            <div className='hidden md:flex  lg:flex w-full h-full p-4 items-center justify-between '>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} alt="" className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>My Restaurant</p>
                </Link>


                <div className='flex items-center gap-8'>
                    <motion.ul initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }} className='flex items-center gap-8 duration-100'>
                        <Link to={'/'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Home</Link>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Services</li>
                    </motion.ul>
                    <div className='relative flex items-center justify-center '>
                        <BsCartFill className='text-textColor text-2xl cursor-pointer hover:text-headingColor ' />

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
                        {isMenu && (
                            <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className='w-48 bg-primary shadow-xl absolute flex flex-col top-12 right-0 rounded-xl '>
                                {user && user.email === "vedantbhavsar.a10@gmail.com" && (
                                    <Link to={'/createItems'}>
                                        <p className='px-4 py-2 bg-primary  hover:rounded-t-md cursor-pointer hover:bg-slate-200 flex items-center transition-all duration-100 ease-in-out'>
                                            <MdAdd className='mr-2' />New Items</p>
                                    </Link>
                                )}
                                <hr />
                                <p className='px-4 py-2 bg-primary hover:rounded-b-md cursor-pointer hover:bg-slate-200 flex items-center transition-all duration-100 ease-in-out' onClick={logout}><MdLogout className='mr-2' />Logout</p>
                            </motion.div>
                        )
                        }
                    </div>
                </div>
            </div>



            {/* moblie */}
            <div className='flex md:hidden sm:flex w-full h-full p-2 justify-between'>

                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} alt="" className='w-8 object-cover' />
                    <p className='text-headingColor text-lg font-bold'>My Restaurant</p>
                </Link>

                <div className='relative'>
                    <div className='flex'>
                        <div className='flex items-center justify-center '>
                            <BsCartFill className='text-textColor text-2xl cursor-pointer hover:text-headingColor mr-9 ' />

                            <div className='absolute -top-0 left-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                                <p className='text-xs text-white font-semibold'>2</p>
                            </div>
                        </div>
                        <motion.img
                            whileTap={{ scale: 0.93 }}
                            src={user ? user.photoURL : Avatar}
                            alt="" className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                            onClick={login} />
                    </div>
                    {isMenu && (
                        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className='w-48 bg-primary shadow-xl absolute flex flex-col top-12 right-0 rounded-xl '>
                            {user && user.email === "vedantbhavsar.a10@gmail.com" && (
                                <Link to={'/createItems'}>
                                    <p className='px-4 py-2 bg-primary  hover:rounded-t-md cursor-pointer hover:bg-slate-200 flex items-center transition-all duration-100 ease-in-out'>
                                        <MdAdd className='mr-2' />New Items</p>
                                </Link>
                            )}
                            <ul className='flex  flex-col'>
                                <Link to={'/'} className=' px-4 py-2 bg-primary  cursor-pointer hover:bg-slate-200 flex items-center transition-all duration-100 ease-in-out'><AiFillHome className='mr-2' />Home</Link>
                                <hr />
                                <li className='px-4 py-2 bg-primary  cursor-pointer hover:bg-slate-200 flex items-center transition-all duration-100 ease-in-out '><HiOutlineMenuAlt2 className='mr-2' /> Menu</li>
                                <hr />
                                <li className='px-4 py-2 bg-primary  cursor-pointer hover:bg-slate-200 flex items-center transition-all duration-100 ease-in-out'><SiAboutdotme className='mr-2' /> About Me</li>
                                <hr />
                                <li className='px-4 py-2 bg-primary  cursor-pointer hover:bg-slate-200 flex items-center transition-all duration-100 ease-in-out'><MdOutlineMiscellaneousServices className='mr-2' />Services</li>
                            </ul>
                            <hr />
                            <p className='px-4 py-2 bg-primary hover:rounded-b-md cursor-pointer hover:bg-slate-200 flex items-center transition-all duration-100 ease-in-out' onClick={logout} ><MdLogout className='mr-2' />Logout</p>
                        </motion.div>
                    )
                    }
                </div>


            </div>
        </header>
    )
}

export default Header;