import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';
import Image from "next/image";
import Logo from "./img/logo.png";

function Header() {
    return (
        <>
            <div>
                <nav className='flex justify-center items-center gap-40 mx-4 py-4'>
                    <div>
                        <ul className='flex gap-4 text-text'>
                            <li><a href="/projet-web">Web</a></li>
                            <li><a href="/projet-graphique">Graphique</a></li>
                            <li><a href="/information">Information</a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="/"><Image src={Logo} alt="Logo Mathéo BATELIER" width={80} height={100} /></a>
                    </div>
                    <div>
                        <ul className='flex gap-4 text-text'>
                            <li><a href="https://www.instagram.com/skitroz/" target='_blank' className='flex gap-1 items-center justify-center'><FiInstagram /> Instagram</a></li>
                            <li><a href="https://github.com/Skitroz" target='_blank' className='flex gap-1 items-center justify-center'><FiGithub />Github</a></li>
                            <li><a href="https://www.linkedin.com/in/matheobtl/" target='_blank' className='flex gap-1 items-center justify-center'><FiLinkedin />LinkedIn</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;