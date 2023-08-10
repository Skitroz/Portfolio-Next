import Image from "next/image";
import Matheo from "./img/Matheo.jpg";

function Apropos() {
    return (
        <div className="flex flex-col md:flex-row md:gap-16 justify-center items-center pt-20 md:py-32">
            <div className="relative">
                <div className="absolute inset-0 border-2 border-gray-800 transform rotate-12 shadow-lg rounded-[50px]"></div>
                <Image src={Matheo} alt="Tête de Mathéo BATELIER" className="rounded-[50px] transform rotate-6 py-10 mx-auto relative z-10" width={300} height={300} />
            </div>
            <div className="flex flex-col space-y-6 pt-16 text-left mx-10 pb-20 md:pb-0 text-secondary md:text-lg">
                <h2 className="font-black text-xl md:text-2xl">À propos</h2>
                <p className="md:w-[400px]">Je m&apos;appelle Mathéo Batelier, étudiant en deuxième année à la Normandie Web School, déterminé à devenir un développeur web créatif et compétent, explorant les multiples facettes du développement pour créer des expériences en ligne exceptionnelles.</p>
                <button className="text-text">
                    <a href="#" className="px-6 py-3 bg-background rounded-2xl transition-all duration-500 hover:bg-blue-300">Contactez-moi</a>
                </button>
            </div>
        </div>
    )
}


export default Apropos;
