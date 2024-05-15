'use client'
import React, { useRef, useEffect } from 'react';
import PageTitle from './layouts/PageTitle';
import ScrollDown from './layouts/ScrollDown';
import Overlay from './layouts/Overlay';

const HeroSection = () => {
    

    const videoRef = useRef(null);

    useEffect(() => {

        const videoElement = videoRef.current;
        videoElement.play();
        videoElement.addEventListener('ended', () => {
            videoElement.currentTime = 0;
            videoElement.play();
        });


    }, [])



    return (
        <div className="section hero">
            <div className="hero_effect">
                <Overlay/>

                <PageTitle
                    title={`آژانس برندینگ ماورانت`}
                    subTitle={`در کنارتان میمانیم`}
                />

                <ScrollDown />

                <video id='introVideo' className="hero_image" ref={videoRef} autoPlay muted loop playsInline>
                    <source src="/videos/intro-mavaranet.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                
            </div>
        </div>
    )
}
export default HeroSection