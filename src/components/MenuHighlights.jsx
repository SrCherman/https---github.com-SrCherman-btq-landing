export default function MenuHighlights() {
    const items = [
        { name: 'PIPOQUINHA DE QUIABO', price: 'R$ 21', desc: 'Crock de quiabo empanado na farinha de milho.' },
        { name: 'BOLINHO DE COSTELA', price: 'R$ 34', desc: 'Massa de mandioca recheada com costela desfiada. (6 unidades)' },
        { name: 'CHIPS DE JILÓ', price: 'R$ 21', desc: 'Finas fatias de jiló empanadas e fritas.' },
        { name: 'BATATA FRITA DA CASA', price: 'R$ 26', desc: 'Com alho frito e maionese de ervas.' },
        { name: 'FÍGADO NA PARRILLA', price: 'R$ 28', desc: 'Fígado acebolado grelhado na parrilla.' },
        { name: 'ARROZ DE COSTELA', price: 'R$ 25', desc: 'Arroz caldoso com costela desfiada e temperos da casa.' },
    ];

    return (
        <section id="menu" className="py-20 bg-black px-4">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center text-btq-white tracking-tighter">
                    OS QUERIDINHOS DA CASA
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {items.map((item, idx) => (
                        <div key={idx} className="border-b border-gray-800 pb-4 group hover:border-btq-white transition-colors duration-300">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold font-heading tranking-wide group-hover:text-gray-300 transition-colors uppercase">
                                    {item.name}
                                </h3>
                                <span className="text-lg font-mono text-gray-400">{item.price}</span>
                            </div>
                            <p className="text-gray-500 font-light text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://drive.google.com/file/d/1EgRt5IUrvR8JNVamAysQWTykbw9S9YPk/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-b border-white pb-1 text-sm tracking-widest hover:text-gray-400 transition-colors"
                    >
                        VER CARDÁPIO COMPLETO (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
}
