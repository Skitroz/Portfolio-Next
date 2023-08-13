import { BsFillTelephoneFill, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Logo from "../header/img/logo.png";
import Image from "next/image";
function Contact() {

    return (
        <>
            <div className='pt-16 mx-10 md:mx-80'>
                <h2 className='text-center font-black text-secondary text-xl md:text-2xl pb-8'>Contact</h2>
                <div className="flex flex-col md:flex-row md:justify-center items-center md:gap-36 pb-12 md:pb-10">
                    <div>
                        <h2 className="text-lg text-primary pb-2">Laissez-moi un message</h2>
                        <p className="text-blue-200 pb-8">Vous souhaitez collaborez avec moi ? Discuter d'un sujet ? Envoyez-moi un message via le formulaire, je vous réponds en moins de 24 heures !</p>
                        <div className="text-secondary">
                            <p className="flex items-center gap-4 pb-2"><BsFillTelephoneFill className="text-4xl text-secondary bg-primary p-2 rounded-xl" style={{ boxShadow: '0 0 16px #8fb3ff' }}/><a href="tel:+33638176964">06 38 17 69 64</a></p>
                            <p className="flex items-center gap-4 mb-6 md:mb-0"><MdEmail className="text-4xl text-secondary bg-primary p-2 rounded-xl" style={{ boxShadow: '0 0 16px #8fb3ff' }}/><a href="mailto:contact@matheobatelier.fr">contact@matheobatelier.fr</a></p>
                        </div>
                    </div>
                    <div>
                        <form className="text-secondary bg-blue-200 p-8 rounded-xl">
                            <div className="pb-4">
                                <label htmlFor="nom">Nom</label>
                                <input required type="text" name="nom" id="name" autoComplete="off" className="bg-primary rounded py-2 px-6"/>
                            </div>
                            <div className="pb-4">
                                <label htmlFor="prenom">Prénom</label>
                                <input required type="text" name="prenom" id="prenom" autoComplete="off" className="bg-primary rounded py-2 px-6"/>
                            </div>
                            <div className="pb-4">
                                <label htmlFor="email">Email</label>
                                <input minLength={5} maxLength={150} required type="email" name="email" id="email" autoComplete="off" className="bg-primary rounded py-2 px-6"/>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea minLength={10} maxLength={1000} name="message" id="message" rows={4} className="bg-primary rounded py-2 px-6" required></textarea>
                            </div>
                            <div>
                            <button type="submit" className="py-2 px-6 mt-4 rounded bg-primary">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="border-gray-300 border-t-2 pb-4 md:pb-10"></div>
                <div className="flex justify-between items-center gap-10 pb-5">
                    <div>
                        <Image src={Logo} alt="Logo de Mathéo BATELIER" width={100} />
                    </div>
                    <div>
                        <p className="text-center">2023 - Tous droits reservés.</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <a href="#"><BsInstagram className="text-4xl text-secondary bg-primary p-2 rounded-xl" style={{ boxShadow: '0 0 16px #8fb3ff' }}/></a>
                        <a href="#"><BsLinkedin className="text-4xl text-secondary bg-primary p-2 rounded-xl" style={{ boxShadow: '0 0 16px #8fb3ff' }}/></a>
                        <a href="#"><BsGithub className="text-4xl text-secondary bg-primary p-2 rounded-xl" style={{ boxShadow: '0 0 16px #8fb3ff' }}/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;