import { AiOutlineMobile } from 'react-icons/ai';
import { FaDesktop } from 'react-icons/fa';

function Service() {
    return (
        <>
            <div className='pt-16 mx-10 md:mx-80'>
                <h2 className='text-center font-black text-secondary text-xl md:text-2xl mb-8'>Services</h2>
                <div className='flex flex-col gap-16 md:gap-10 md:justify-center md:flex-row'>
                    <div className='p-4 border-4 rounded-xl border-primary h-[300px] md:h-[230px] md:w-[400px]' style={{ boxShadow: '0 0 16px #8fb3ff' }}>
                        <h2 className="flex items-center font-black text-blue-200 text-xl md:text-2xl mb-2 md:mb-4 justify-center text-center gap-2">
                            <FaDesktop className="text-4xl" />Développement web
                        </h2>
                        <p className='text-secondary'>
                            Propulsez vos idées en ligne ! Découvrez mon talent en développement web pour ordinateur. Transformez vos visions en sites web percutants. Explorez mon portfolio et plongez dans un monde de créativité numérique.
                        </p>
                    </div>
                    <div className='p-4 border-4 rounded-xl border-primary h-[300px] md:h-[230px] md:w-[400px]' style={{ boxShadow: '0 0 16px #8fb3ff' }}>
                        <h2 className="flex items-center font-black text-blue-200 text-xl md:text-2xl mb-2 md:mb-4 justify-center text-center gap-2">
                            <AiOutlineMobile className="text-4xl" />Développement App
                        </h2>
                        <p className='text-secondary flex justify-center'>
                            Bientôt...
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;