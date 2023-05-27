import React from 'react';
import Image from 'next/image';
import cover from '../assets/home-cover.png';
import partner from '../assets/3-partner.png';
import bottom from '../assets/home-bottom.png';

const Home = () => {
    return (
        <div className="z-10 fixed top-0 left-0 bg-[url(../assets/back.png)] bg-cover bg-center w-screen tablet:h-screen mobile:h-full bg-no-repeat overflow-y-auto overflow-x-hidden">
            <div className='tablet:mt-32 mobile:mt-44 tablet:px-12 mobile:px-7 w-screen tablet:h-screen mobile:h-full flex flex-col items-center justify-start'>
                <div className="page-info flex items-center tablet:flex-row tablet:justify-between mobile:justify-center mobile:flex-col h-[33rem]">
                    <div className="textual-info tablet:w-1/2 mobile:w-full h-full">
                        <div className="big-text flex flex-col items-start justify-between h-full">
                            <h2 className='text-6xl text-white text-title font-semibold'>Cloud-Based Digital Screens signage Solution For <span className='text-yellow-400 underline-offset-4'>Retail</span></h2>
                            <p className='text-white'>Manag, create, publish and engage with your digital screens and display's using Wilyer comprehensivesignage solution</p>
                            <Image className='mb-5' src={partner}></Image>
                            <div className="action-btn w-full flex items-center justify-between">
                                <button className='bg-white px-10 rounded text-primary py-3 w-1/2'>
                                    Book A Demo
                                </button>
                                <a className='w-1/2 flex items-center justify-center text-white cursor-pointer'><u>Learn More</u></a>
                            </div>
                        </div>
                    </div>
                    <div className="image-info w-1/2 h-full flex items-center justify-center">
                        <Image className='rounded-3xl w-auto h-auto' src={cover} alt="" />
                    </div>
                </div>
                <div className="advertise-info tablet:mt-24 mobile:mt-32 mobile:mb-12">
                    <Image src={bottom}></Image>
                </div>

            </div>
        </div>
    )
}

export default Home