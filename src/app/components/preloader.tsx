"use client";

import React, { useEffect } from 'react';
import { preLoaderAnim } from '../../animations/index';
import '../../styles/preloader.scss';

function Preloader() {
    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <>
            <div className="container preloader bg-blue-50">
                <div className="loader">
                    <div className="loader--dot"></div>
                    <div className="loader--dot"></div>
                    <div className="loader--dot"></div>
                    <div className="loader--dot"></div>
                    <div className="loader--dot"></div>
                    <div className="loader--dot"></div>
                    <div className="loader--text"></div>
                </div>
            </div>

        </>
    )
}

export default Preloader;