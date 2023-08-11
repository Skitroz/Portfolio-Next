import { FaCss3Alt, FaHtml5, FaReact, FaNodeJs, FaPhp, FaWordpress, FaGitAlt, FaGithub } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoTailwindCss } from 'react-icons/bi';
import { SiMysql, SiPhpmyadmin } from 'react-icons/si';

function Competence() {
    return (
        <>
            <div className='pt-16 mx-10 md:mx-80'>
                <h2 className='text-center font-black text-secondary text-xl md:text-2xl pb-8'>Compétences</h2>
                <div className='justify-center gap-4 grid grid-cols-3 md:grid-cols-4'>
                    <div>
                        <h2 className='flex flex-col gap-2 items-center justify-center text-white'>
                            <FaCss3Alt className="text-6xl text-primary" />CSS3
                        </h2>
                    </div>
                    <div>
                        <h2 className='flex flex-col gap-2 items-center justify-center text-white'>
                            <FaHtml5 className="text-6xl text-primary" />HTML5
                        </h2>
                    </div>
                    <div>
                        <h2 className='flex flex-col gap-2 items-center justify-center text-white'>
                            <FaReact className="text-6xl text-primary" />React.JS
                        </h2>
                    </div>
                    <div>
                        <h2 className='flex flex-col gap-2 items-center justify-center text-white'>
                            <FaNodeJs className="text-6xl text-primary" />Node.JS
                        </h2>
                    </div>
                    <div>
                        <h2 className='flex flex-col gap-2 items-center justify-center text-white'>
                            <BiLogoJavascript className="text-6xl text-primary" />JavaScript
                        </h2>
                    </div>
                    <div>
                        <h2 className='flex flex-col gap-2 items-center justify-center text-white'>
                            <BiLogoTailwindCss className="text-6xl text-primary" />Tailwind
                        </h2>
                    </div>
                    <div>
                        <h2 className='flex flex-col gap-2 items-center justify-center text-white'>
                            <FaPhp className="text-6xl text-primary" />php
                        </h2>
                    </div>
                    <div>
                        <h2 className='flex flex-col gap-2 items-center justify-center text-white'>
                            <SiPhpmyadmin className="text-6xl text-primary" />phpMyAdmin
                        </h2>
                    </div>
                    <div>
                        <h2 className='flex flex-col gap-2 items-center justify-center text-white'>
                            <SiMysql className="text-6xl text-primary" />MySQL
                        </h2>
                    </div>
                    <div>
                        <h2 className='flex flex-col gap-2 items-center justify-center text-white'>
                            <FaWordpress className="text-6xl text-primary" />WordPress
                        </h2>
                    </div>
                    <div>
                        <h2 className='flex flex-col gap-2 items-center justify-center text-white'>
                            <FaGitAlt className="text-6xl text-primary" />Git
                        </h2>
                    </div>
                    <div>
                        <h2 className='flex flex-col gap-2 items-center justify-center text-white'>
                            <FaGithub className="text-6xl text-primary" />Github
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Competence;