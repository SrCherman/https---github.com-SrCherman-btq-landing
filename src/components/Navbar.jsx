import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.svg';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolled(currentScrollY > 50);

            // Show/Hide logic (Mobile mostly)
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling DOWN -> Hide
                setIsVisible(false);
            } else {
                // Scrolling UP -> Show
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0 bg-black/90 backdrop-blur-xl border-b border-white/5 md:border-none md:bg-transparent ${scrolled ? 'md:bg-btq-dark/95 md:backdrop-blur-md md:py-4 md:shadow-lg' : 'md:py-6'}`}>
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="BTQ" className="h-16 md:h-20 w-auto object-contain" />
                </div>

                {/* Navigation Links - Always Visible */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
                    <a href="#menu" className="text-sm font-medium hover:text-gray-400 transition-colors">MENU</a>
                    <a href="https://maps.app.goo.gl/2x6NFkqmrr2F9ULE9" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-gray-400 transition-colors">LOCALIZAÇÃO</a>
                    <a href="https://www.instagram.com/btqfoz/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-gray-400 transition-colors">
                        INSTAGRAM
                    </a>
                    <a
                        href="https://btqdisconnectbarrestauranteevento.saipos.com/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-btq-white text-black font-bold text-sm tracking-wider rounded-sm hover:bg-gray-200 transition-all shadow-[0_0_10px_rgba(255,255,255,0.2)] animate-pulse hover:animate-none"
                    >
                        FAZER PEDIDO
                    </a>
                </div>
            </div>
        </nav>
    );
}
