import imgDrink from '../assets/ambience/drink.webp';
import imgEmbers from '../assets/ambience/embers.webp';
import imgBurger from '../assets/ambience/burguer.webp';
import imgPasties from '../assets/ambience/pasties.webp';
import imgCloseup from '../assets/ambience/clouseup.webp';

export default function AmbienceGrid() {
    const images = [
        { src: imgEmbers, span: 'md:col-span-2 md:row-span-2 col-span-2 row-span-1' }, // Feature (Big)
        { src: imgDrink, span: 'col-span-1 row-span-1' },
        { src: imgBurger, span: 'col-span-1 row-span-1' },
        { src: imgPasties, span: 'col-span-1 row-span-1' }, // Was wide, now square to fit symmetry
        { src: imgCloseup, span: 'col-span-1 row-span-1' },
    ];

    return (
        <section id="ambience" className="py-20 bg-btq-dark px-4">
            <div className="container mx-auto max-w-5xl">

                <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px] auto-rows-[200px]">
                    {images.map((img, idx) => (
                        <div key={idx} className={`relative overflow-hidden group ${img.span}`}>
                            <img
                                src={img.src}
                                alt={`Ambiente BTQ ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 md:grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
