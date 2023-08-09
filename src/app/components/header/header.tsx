import { FaBars, FaTimes } from 'react-icons/fa';
import Image from "next/image";
import Logo from "./img/logo.png";
import { useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false);

    const navlinks = [
        {
            title: "À propos",
            link: "#a-propos"
        },
        {
            title: "Portfolio",
            link: "#portfolio"
        },
        {
            title: "Service",
            link: "#service"
        },
        {
            title: "Expérience",
            link: "#experience"
        },
    ]

    return (
        <header className="bg-bakcground text-text font-custom">
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-center gap-40 sm:h-16'>
                    <div className='flex justify-center items-center w-screen sm:w-auto'>
                        <a href="/"><Image src={Logo} alt='' width={80} /></a>
                    </div>
                    {/* navlinks */}
                    <div className='hidden md:flex md:items-center'>
                        <div className='sm:ml-10 sm:flex'>
                            {navlinks.map((link, index) => (
                                <a key={index} className='hover:text-gray-500 transition-all duration-500 py-2 md:ml-6 rounded-md text-md font-medium' href={link.link}>{link.title}</a>
                            ))}
                        </div>
                    </div>
                    <div className=''>
                        <button><a href="#contact" className='px-6 py-3 bg-background rounded-2xl transition-all duration-500 hover:bg-blue-300'>Contact</a></button>
                    </div>
                </div>
                {/* menu responsive */}
                <div className='-mr-2 flex justify-center md:hidden'>
                    <button type='button' onClick={() => setOpen(!open)} className='transition-all duration-500 flex items-center justify-center p-2 rounded-md text-text hover:text-gray-500'>
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                {open && (
                    <div className='md:hidden'>
                        <div className='flex flex-col items-center justify-center space-y-0'>
                            {navlinks.map((link, index) => (
                                <a key={index} className='hover:text-gray-400 block px-3 py-2 rounded-md text-md font-medium' href={link.link}>{link.title}</a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;