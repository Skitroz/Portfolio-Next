import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import Image from 'next/image';
import CheerHope from './img/CheerHope.png';
import LouisVuitton from './img/LouisVuitton.png';
import LhumainEntreVosMains from "./img/L'humainEntreVosMains.png";
import RebelStats from './img/RebelStats.png';
import SkyzeProno from './img/SkyzeProno.png';

const Portfolio: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>('siteInternet');

    const toggleSection = (section: string) => {
        setOpenSection((prevSection) => (prevSection === section ? null : section));
    };

    return (
        <div>
            <div className="md:pb-16 pb-10">
                <h2 className="font-black text-xl md:text-2xl text-secondary text-center">Portfolio</h2>
                <ul className="flex text-secondary justify-center items-center mx-10 gap-4 text-center pt-4 md:gap-20">
                    <li
                        onClick={() => toggleSection('siteInternet')}
                        className={`cursor-pointer ${openSection === 'siteInternet' ? 'text-blue-300 md:text-xl' : ''}`}
                    >
                        Site internet
                    </li>
                    <li
                        onClick={() => toggleSection('projetGraphique')}
                        className={`cursor-pointer ${openSection === 'projetGraphique' ? 'text-blue-300 md:text-xl' : ''}`}
                    >
                        Projet graphique
                    </li>
                    <li
                        onClick={() => toggleSection('autreProjet')}
                        className={`cursor-pointer ${openSection === 'autreProjet' ? 'text-blue-300 md:text-xl' : ''}`}
                    >
                        Autre projet
                    </li>
                </ul>
            </div>
            {/* Contenu des sections */}
            {openSection === 'siteInternet' && (
                <div>
                    <div className='mx-10 md:mx-80'>
                        <div className='md:flex'>
                            <div className='md:flex md:flex-col'>
                                <h2 className='font-black text-primary text-2xl md:text-3xl mb-2 md:mb-4'>CheerHope</h2>
                                <p className='text-left text-secondary text-lg md:text-xl mb-4 md:mb-8'>Projet associatif réalisé au cours de la première année à la Normandie Web School.</p>
                                <a href="#" className='flex items-center gap-2 text-blue-200 mb-2 md:mb-4 text-lg md:text-xl'>
                                    <BsArrowRightShort className='text-xl md:text-2xl' /> En savoir davantage
                                </a>
                            </div>
                            <div className='pb-4 relative'>
                                <div className='absolute inset-0 border-4 border-primary mt-4'></div>
                                <Image src={CheerHope} alt="Capture d'écran de la page d'accueil de CheerHope" className='relative ml-4 md:w-[680px]' />
                            </div>
                        </div>
                    </div>
                    <div className='mx-10 pt-12 md:pt-[4.5rem] md:mx-80'>
                        <div className='md:flex md:flex-row-reverse'>
                            <div className='md:flex md:flex-col md:ml-8'>
                                <h2 className='font-black text-primary text-2xl md:text-3xl mb-2 md:mb-4'>Louis Vuitton</h2>
                                <p className='text-left text-secondary text-lg md:text-xl mb-4 md:mb-8'>Page vitrine réalisé pour un devoir en première année à la Normandie Web School.</p>
                                <a href="#" className='flex items-center gap-2 text-blue-200 mb-2 md:mb-4 text-lg md:text-xl'>
                                    <BsArrowRightShort className='text-xl md:text-2xl' /> En savoir davantage
                                </a>
                            </div>
                            <div className='pb-4 relative'>
                                <div className='absolute inset-0 border-4 border-primary mt-4'></div>
                                <Image src={LouisVuitton} alt="Capture d'écran de la page d'accueil de Louis Vuitton" className='relative ml-4 md:w-[700px]' />
                            </div>
                        </div>
                    </div>
                    <div className='mx-10 pt-12 md:pt-[4.5rem] md:mx-80'>
                        <div className='md:flex'>
                            <div className='md:flex md:flex-col md:ml-8'>
                                <h2 className='font-black text-primary text-2xl md:text-3xl mb-2 md:mb-4'>SkyzeProno</h2>
                                <p className='text-left text-secondary text-lg md:text-xl mb-4 md:mb-8'>Projet personnel d&apos;un site de pronostic totalement gratuit réalisé en HTML5 & CSS3
                                    [EN DÉVELOPPEMENT]</p>
                                <a href="#" className='flex items-center gap-2 text-blue-200 mb-2 md:mb-4 text-lg md:text-xl'>
                                    <BsArrowRightShort className='text-xl md:text-2xl' /> En savoir davantage
                                </a>
                            </div>
                            <div className='pb-4 relative'>
                                <div className='absolute inset-0 border-4 border-primary mt-4 md:mb-[9px]'></div>
                                <Image src={SkyzeProno} alt="Capture d'écran de la page d'accueil de SkyzeProno" className='relative ml-4 md:w-[900px]' />
                            </div>
                        </div>
                    </div>
                    <div className='mx-10 pt-12 md:pt-[4.5rem] md:mx-80'>
                        <div className='md:flex md:flex-row-reverse'>
                            <div className='md:flex md:flex-col md:ml-8'>
                                <h2 className='font-black text-primary text-2xl md:text-3xl mb-2 md:mb-4'>L&apos;humain entre vos mains</h2>
                                <p className='text-left text-secondary text-lg md:text-xl mb-4 md:mb-8'>Projet associatif réalisé lors de mon stage en première année à la Normandie Web School.</p>
                                <a href="#" className='flex items-center gap-2 text-blue-200 mb-2 md:mb-4 text-lg md:text-xl'>
                                    <BsArrowRightShort className='text-xl md:text-2xl' /> En savoir davantage
                                </a>
                            </div>
                            <div className='pb-4 relative'>
                                <div className='absolute inset-0 border-4 border-primary mt-4 md:mb-[12px]'></div>
                                <Image src={LhumainEntreVosMains} alt="Capture d'écran de la page d'accueil de l'humain entre vos mains" className='relative ml-4 md:w-[770px]' />
                            </div>
                        </div>
                    </div>
                    <div className='mx-10 pt-12 md:pt-[4.5rem] md:mx-80'>
                        <div className='md:flex'>
                        <div className='md:flex md:flex-col md:ml-8'>
                            <h2 className='font-black text-primary text-2xl md:text-3xl mb-2 md:mb-4'>RebelStats</h2>
                            <p className='text-left text-secondary text-lg md:text-xl mb-4 md:mb-8'>Projet personnel permettant de récupérer les statistiques des joueurs de League of Legends et bien plus encore
                                [EN DÉVELOPPEMENT]</p>
                            <a href="#" className='flex items-center gap-2 text-blue-200 mb-2 md:mb-4 text-lg md:text-xl'>
                                <BsArrowRightShort className='text-xl md:text-2xl' /> En savoir davantage
                            </a>
                            </div>
                            <div className='pb-4 relative'>
                                <div className='absolute inset-0 border-4 border-primary mt-4 md:mb-[32px]'></div>
                                <Image src={RebelStats} alt="Capture d'écran de la page d'accueil de RebelStats" className='relative ml-4 md:w-[1160px]' />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {openSection === 'projetGraphique' && (
                <div>
                    <p>Projet</p>
                </div>
            )}
            {openSection === 'autreProjet' && (
                <div>
                    <p>Autre</p>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
