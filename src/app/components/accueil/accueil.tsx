import '../../../styles/accueil.scss'
import Header from './header';
import Footer from './footer';
import Main from './main';

function Accueil(){
    return (
        <>
            <div className='content-to-hide bg-background h-screen w-screen'>
                <Header />
                <Main/>
                <Footer />
            </div>
        </>
    )
}

export default Accueil;