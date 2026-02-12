import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const images = [
    "/src/assets/planes/plane1.jpg",
    "/src/assets/planes/plane2.jpg",
    "/src/assets/planes/plane3.jpg",
];

export default function CinematicHero() {
    const [current, setCurrent] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;600&display=swap');
                
                .hero-background {
                    transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
                    transform: scale(1.05);
                }
                
                .hero-background.active {
                    transform: scale(1);
                }
                
                .hero-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 300;
                    line-height: 1.2;
                    letter-spacing: 1px;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
                }
                
                .hero-subtitle {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 300;
                    line-height: 1.6;
                    letter-spacing: 0.5px;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards;
                }
                
                .hero-buttons {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.9s forwards;
                }
                
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .luxury-button-primary {
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%) !important;
                    box-shadow: 0 8px 30px color-mix(in srgb, var(--color-gold) 40%, transparent);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                
                .luxury-button-primary::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                    transition: left 0.6s ease;
                }
                
                .luxury-button-primary:hover::before {
                    left: 100%;
                }
                
                .luxury-button-primary:hover {
                    box-shadow: 0 12px 40px color-mix(in srgb, var(--color-gold) 60%, transparent) !important;
                    transform: translateY(-3px);
                }
                
                .luxury-button-secondary {
                    position: relative;
                    background: rgba(255, 255, 255, 0.1) !important;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(245, 245, 245, 0.3) !important;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                
                .luxury-button-secondary:hover {
                    background: rgba(255, 255, 255, 0.2) !important;
                    border-color: rgba(245, 245, 245, 0.6) !important;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 30px rgba(255, 255, 255, 0.1);
                }
                
                .hero-overlay {
                    background: linear-gradient(
                        135deg,
                        rgba(0, 0, 0, 0.6) 0%,
                        rgba(34, 34, 34, 0.4) 50%,
                        color-mix(in srgb, var(--color-gold) 15%, transparent) 100%
                    );
                }
                
                .accent-line {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 4px;
                    height: 0;
                    background: linear-gradient(180deg, var(--color-gold), var(--color-gold-dark));
                    animation: lineGrow 1s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards;
                }
                
                @keyframes lineGrow {
                    to {
                        height: 120px;
                    }
                }
                
                .floating-dots {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    pointer-events: none;
                }
                
                .dot {
                    position: absolute;
                    width: 3px;
                    height: 3px;
                    background: color-mix(in srgb, var(--color-gold) 40%, transparent);
                    border-radius: 50%;
                    animation: float 8s ease-in-out infinite;
                }
                
                .dot:nth-child(1) { left: 20%; animation-delay: 0s; }
                .dot:nth-child(2) { left: 40%; animation-delay: 2s; }
                .dot:nth-child(3) { left: 60%; animation-delay: 4s; }
                .dot:nth-child(4) { left: 80%; animation-delay: 6s; }
                
                @keyframes float {
                    0%, 100% { transform: translateY(100vh) scale(1); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-100px) scale(1.5); opacity: 0; }
                }
            `}</style>

            <section className="relative h-[85vh] w-full overflow-hidden bg-luxury-black">
                {/* Background Images */}
                {images.map((img, index) => (
                    <div
                        key={img}
                        className={`hero-background absolute inset-0 ${index === current ? "opacity-100 active" : "opacity-0"
                            }`}
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                ))}

                {/* Floating Dots */}
                <div className="floating-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>

                {/* Overlay */}
                <div className="hero-overlay absolute inset-0" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
                    <div className="max-w-2xl relative">
                        <div className="accent-line"></div>

                        <div style={{ paddingLeft: '32px' }}>
                            <h1 className="hero-title text-5xl md:text-7xl text-white mb-6">
                                Private Aviation,
                                <br />
                                <span style={{ fontWeight: 600 }}>Simplified.</span>
                            </h1>

                            <p className="hero-subtitle text-gray-300 mb-10 text-lg md:text-xl">
                                Book private flights. Operate charter aircraft.
                                <br />
                                One platform built for modern aviation.
                            </p>

                            <div className="hero-buttons flex gap-4">
                                <Button
                                    variant="contained"
                                    className="luxury-button-primary"
                                    sx={{
                                        color: "#222222",
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: 600,
                                        letterSpacing: '0.5px',
                                        padding: '14px 36px',
                                        fontSize: '15px',
                                        borderRadius: '4px',
                                        textTransform: 'none',
                                    }}
                                >
                                    Request a Flight
                                </Button>

                                <Button
                                    variant="outlined"
                                    className="luxury-button-secondary"
                                    sx={{
                                        color: "#f5f5f5",
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: 500,
                                        letterSpacing: '0.5px',
                                        padding: '14px 36px',
                                        fontSize: '15px',
                                        borderRadius: '4px',
                                        textTransform: 'none',
                                    }}
                                >
                                    Request Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 rounded-full transition-all duration-500 ${index === current
                                ? 'w-12 bg-linear-to-r from-gold to-luxury-black'
                                : 'w-8 bg-white/30'
                                }`}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}