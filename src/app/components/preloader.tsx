"use client";

import React, { useEffect } from 'react';
import { preLoaderAnim } from '../../animations/index';

function Preloader() {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return (
        <>
            <div className="preloader h-screen w-screen bg-background text-text fixed bottom-0 left-0 right-0 z-[55] flex justify-center items-center overflow-hidden">
                <div className="texts-container flex gap-2 items-center justify-between text-[20px] font-bold overflow-hidden text-text">
                    <span className='hidden'>Bienvenue sur mon Portfolio.</span>
                    <span className='hidden'>Je suis un développeur,</span>
                    <span className='hidden'>Front & Back end.</span>
                </div>
            </div>
        </>
    )
}

export default Preloader;