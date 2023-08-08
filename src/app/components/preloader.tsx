"use client";

import React, { useEffect } from 'react';
import { preLoaderAnim } from '../../animations/index';
import '../../styles/preloader.scss';
import preloader from '../preloader.gif';
import Image from 'next/image';

function Preloader() {
    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <>
            <div className="preloader">
                <Image src={preloader} alt="preloader"/>
            </div>
        </>
    )
}

export default Preloader;