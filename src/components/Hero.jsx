import heroBg from '../assets/hero-bg.webp';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Bar vibe"
                    className="w-full h-full object-cover grayscale-[80%] brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-btq-dark via-transparent to-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-32 md:mt-16">
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight tracking-tight">
                    BTQ: A MELHOR DECISÃO DO SEU DIA!
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                    O ponto de encontro para quem não dispensa um bom drink e um petisco de boteco.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a
                        href="https://btqdisconnectbarrestauranteevento.saipos.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-btq-white text-btq-black font-bold text-sm tracking-wider hover:bg-gray-200 transition-colors"
                    >
                        VER CARDÁPIO
                    </a>
                    <a
                        href="https://maps.app.goo.gl/2x6NFkqmrr2F9ULE9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-btq-white text-btq-white font-bold text-sm tracking-wider hover:bg-btq-white hover:text-btq-black transition-colors"
                    >
                        COMO CHEGAR
                    </a>
                </div>
            </div>
        </section>
    );
}
