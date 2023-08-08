import Header from '../header/header';
import Footer from '../footer/footer';
import Main from './main';

function Accueil(){
    return (
        <>
            <div className='bg-background h-screen w-screen'>
                <Header />
                <Main/>
                <Footer />
            </div>
        </>
    )
}

export default Accueil;