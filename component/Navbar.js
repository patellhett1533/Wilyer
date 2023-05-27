import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/Main.png';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => {
        setToggle(toggle ? false : true);
    }
    return (
        <div>
            <div className='z-50 fixed top-0 left-0 tablet:px-20 mobile:px-12 w-full h-20 bg-no-repeat bg-[url("../assets/blur-strap.png")] flex items-center justify-between'>
                <div className="w-4/12 text-title text-white">
                    <Image className='w-24' src={logo}></Image>
                </div>
                <div className={toggle ? "w-8/12 menu-bar tablet:flex-row flex items-center tablet:justify-between tablet:bg-transparent mobile:bg-black/90 mobile:h-screen mobile:w-screen tablet:relative mobile:absolute mobile:top-0 mobile:left-0 mobile:flex-col mobile:justify-center" : "w-8/12 menu-bar tablet:flex-row tablet:flex items-center tablet:justify-between tablet:bg-transparent mobile:bg-black/90 mobile:h-screen mobile:w-screen tablet:relative mobile:absolute mobile:top-0 mobile:left-0 mobile:flex-col mobile:justify-center mobile:hidden"}>
                    <div className="menu-option flex tablet:flex-row mobile:flex-col items-center justify-center list-none text-white">
                        <li className='mr-12 flex items-center mobile:mb-3 tablet:mb-0'>Products <svg className='ml-2 cursor-pointer' width="12" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0517 0.524358C1.34459 0.231464 1.81947 0.231464 2.11236 0.524358L8.58203 6.99403L15.0517 0.524358C15.3446 0.231464 15.8195 0.231464 16.1124 0.524358C16.4053 0.817251 16.4053 1.29212 16.1124 1.58502L9.11236 8.58502C8.81947 8.87791 8.34459 8.87791 8.0517 8.58502L1.0517 1.58502C0.758808 1.29212 0.758808 0.817251 1.0517 0.524358Z" fill="white" />
                        </svg></li>
                        <li className='mr-12 flex items-center mobile:mb-3 tablet:mb-0'>Industries<svg className='ml-2 cursor-pointer' width="12" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0517 0.524358C1.34459 0.231464 1.81947 0.231464 2.11236 0.524358L8.58203 6.99403L15.0517 0.524358C15.3446 0.231464 15.8195 0.231464 16.1124 0.524358C16.4053 0.817251 16.4053 1.29212 16.1124 1.58502L9.11236 8.58502C8.81947 8.87791 8.34459 8.87791 8.0517 8.58502L1.0517 1.58502C0.758808 1.29212 0.758808 0.817251 1.0517 0.524358Z" fill="white" />
                        </svg></li>
                        <li className='mr-12 mobile:mb-3 tablet:mb-0'>Partners</li>
                        <li className='mr-12 mobile:mb-3 tablet:mb-0'>Pricing</li>
                        <li className=' flex items-center'>More<svg className='ml-2 cursor-pointer' width="12" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0517 0.524358C1.34459 0.231464 1.81947 0.231464 2.11236 0.524358L8.58203 6.99403L15.0517 0.524358C15.3446 0.231464 15.8195 0.231464 16.1124 0.524358C16.4053 0.817251 16.4053 1.29212 16.1124 1.58502L9.11236 8.58502C8.81947 8.87791 8.34459 8.87791 8.0517 8.58502L1.0517 1.58502C0.758808 1.29212 0.758808 0.817251 1.0517 0.524358Z" fill="white" />
                        </svg></li>
                    </div>
                    <div className="start-btn tablet:mt-0 mobile:mt-8">
                        <button className='bg-white px-10 rounded text-primary py-3'>
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="menu-btn laptop:hidden mobile:absolute mobile:right-12 mobile:block" onClick={toggleMenu} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </div>
    )

}

export default Navbar