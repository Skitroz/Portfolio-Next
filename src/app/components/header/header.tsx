import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';
import Image from "next/image";
import Logo from "./img/logo.png";

function Header() {
    return (
        <header className='py-4 text-text font-custom'>
            <nav className='flex justify-evenly items-center'>
                <div>
                    <a href="/"><Image src={Logo} alt='Logo de Mathéo BATELIER' width={80}/></a>
                </div>
                <ul className='flex gap-10'>
                    <li><a href="#accueil">Accueil</a></li>
                    <li><a href="#a-propos">À propos</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#competence">Compétence</a></li>
                    <li><button><a href="#contact" className='bg-primary py-4 px-8 rounded-xl'>Contact</a></button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;