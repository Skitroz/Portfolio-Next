import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Logo from './img/logo.png';

function Header() {
    const [open, setOpen] = useState(false);

    const navlinks = [
        {
            title: 'À propos',
            link: '#a-propos',
        },
        {
            title: 'Portfolio',
            link: '#portfolio',
        },
        {
            title: 'Service',
            link: '#service',
        },
        {
            title: 'Expérience',
            link: '#experience',
        },
    ];

    return (
        <header className="bg-background text-text font-custom sticky top-0 z-50">
            <div className='sm:px-6 lg:px-8 flex justify-center items-center gap-6 md:gap-0 md:justify-between relative'>
                <div className='mx-4'>
                    <a href='/'>
                        <Image src={Logo} alt='' width={64} className='bg-accent' />
                    </a>
                </div>
                <div className='flex items-center'>
                    {/* navlinks */}
                    <div className='hidden md:flex md:items-center'>
                        <div className='sm:ml-10 sm:flex space-x-4'>
                            {navlinks.map((link, index) => (
                                <a
                                    key={index}
                                    className='hover:text-gray-500 transition-all duration-500 py-2 md:ml-6 rounded-md text-md font-medium'
                                    href={link.link}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='mx-4'>
                        <button>
                            <a href='#contact' className='px-6 py-3 bg-accent rounded-2xl transition-all duration-500 hover:bg-blue-600 text-secondary'>
                                Contact
                            </a>
                        </button>
                    </div>
                </div>
                {/* menu responsive */}
                <div className='mx-4 relative lg:hidden'>
                    <button type='button' onClick={() => setOpen(!open)} className='transition-all duration-500 flex items-center justify-center rounded-md text-text hover:text-gray-500'>
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                    {open && (
                        <div className='md:hidden bg-white absolute right-0 mt-4 p-4 top-auto'>
                            {navlinks.map((link, index) => (
                                <a key={index} className='block py-2 px-4 hover:bg-gray-100' href={link.link}>
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
