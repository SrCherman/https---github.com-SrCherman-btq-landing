export default function InfoLocation() {
    return (
        <section id="location" className="py-20 bg-btq-gray relative overflow-hidden">
            <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row gap-8 md:gap-16">

                {/* Text Info */}
                <div className="flex-1 space-y-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">ONDE ESTAMOS</h2>
                        <a
                            href="https://maps.app.goo.gl/2x6NFkqmrr2F9ULE9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl leading-relaxed text-gray-300 hover:text-white transition-colors"
                        >
                            Av. Felipe Wandscheer, 3355<br />
                            Jardim São Paulo I, Foz do Iguaçu - PR<br />
                            CEP: 85856-530
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-4 text-btq-white">HORÁRIOS</h3>
                        <div className="flex flex-col gap-1 text-sm text-gray-400 font-light">
                            <p><span className="font-bold text-white w-20 inline-block">SEGUNDA:</span> 17:00 AS 01:00</p>
                            <p className="text-red-500 font-bold"><span className="w-20 inline-block">TERÇA:</span> FECHADO</p>
                            <p><span className="font-bold text-white w-20 inline-block">QUARTA:</span> 17:00 AS 01:00</p>
                            <p><span className="font-bold text-white w-20 inline-block">QUINTA:</span> 17:00 AS 01:00</p>
                            <p><span className="font-bold text-white w-20 inline-block">SEXTA:</span> 17:00 AS 01:00</p>
                            <p><span className="font-bold text-white w-20 inline-block">SÁBADO:</span> 17:00 AS 01:00</p>
                            <p><span className="font-bold text-white w-20 inline-block">DOMINGO:</span> 12:00 AS 01:00</p>
                        </div>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/2x6NFkqmrr2F9ULE9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 border border-btq-white text-btq-white font-bold tracking-widest hover:bg-white hover:text-black transition-colors"
                    >
                        VER NO MAPA
                    </a>
                </div>

                {/* Map Placeholder */}
                <div className="flex-1 h-[400px] bg-gray-800 relative shadow-lg border border-gray-800">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.087265842846!2d-54.5366!3d-25.5497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6910901e38959%3A0x7d287c8a666e9a9a!2sAv.%20Felipe%20Wandscheer%2C%203355%20-%20Jardim%20S%C3%A3o%20Paulo%20I%2C%20Foz%20do%20Igua%C3%A7u%20-%20PR%2C%2085856-530!5e0!3m2!1spt-BR!2sbr!4v1625680000000!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização BTQ"
                    ></iframe>
                </div>

            </div>
        </section>
    );
}
