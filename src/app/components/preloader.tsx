import React, { useEffect, useState } from 'react';
import { preLoaderAnim } from '../../animations/index';
import '../../styles/preloader.scss';

function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        preLoaderAnim();
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); 
    }, []);

    return (
        <div className={`container preloader ${isLoading ? '' : 'fade-out'}`}>
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
    );
}

export default Preloader;