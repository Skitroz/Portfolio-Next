import Header from '../header/header';
import Footer from '../footer/footer';
import Main from './main';

function Accueil(){
    return (
        <>
            <div className='bg-accent'>
                <Header />
                <Main/>
                <Footer />
            </div>
        </>
    )
}

export default Accueil;