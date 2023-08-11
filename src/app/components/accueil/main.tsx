import Apropos from "./a-propos";
import Portfolio from "./portfolio";
import Service from "./service";
import Competence from "./competence";
import Contact from "./contact";

function Main() {
    return (
        <>
            <main className="font-custom">
                <div>
                    <p className="flex flex-col px-10 py-12 md:pl-60 md:pr-[400px]">
                        <span className="text-primary font-black text-xl md:text-6xl">Je suis un</span>
                        <span className="text-2xl font-bold md:text-7xl">
                        Développeur full stack<span className="font-black text-primary">.</span>
                        </span>
                    </p>
                    <button className="pl-10 md:pl-60">
                        <a href="#" className="px-6 py-3 bg-background rounded-2xl transition-all duration-500 hover:bg-blue-300">Derniers projets</a>
                    </button>
                </div>
                <Apropos />
            </main>
            <section className="font-custom">
                <Portfolio />
            </section>
            <section className="font-custom">
                <Service />
            </section>
            <section className="font-custom">
                <Competence />
            </section>
            <section className="font-custom">
                <Contact />
            </section>
        </>
    )
}

export default Main;