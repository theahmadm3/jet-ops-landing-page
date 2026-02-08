import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";

export default function FinalCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Montserrat:wght@400;500;600&display=swap');
                
                .cta-section {
                    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
                    position: relative;
                    overflow: hidden;
                }
                
                .cta-section::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -10%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(250, 129, 18, 0.15) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 8s ease-in-out infinite;
                }
                
                .cta-section::after {
                    content: '';
                    position: absolute;
                    bottom: -50%;
                    right: -10%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(250, 129, 18, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                    animation: float 8s ease-in-out infinite reverse;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-30px) scale(1.1); }
                }
                
                .cta-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(250, 129, 18, 0.2);
                    border-radius: 12px;
                    padding: 40px 32px;
                    position: relative;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(40px);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .cta-card.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .cta-card:first-child {
                    transition-delay: 0.2s;
                }
                
                .cta-card:last-child {
                    transition-delay: 0.4s;
                }
                
                .cta-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #FA8112, #FFB366);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .cta-card:hover::before {
                    transform: scaleX(1);
                }
                
                .cta-card:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(250, 129, 18, 0.4);
                    transform: translateY(-8px);
                    box-shadow: 0 20px 50px rgba(250, 129, 18, 0.2);
                }
                
                .cta-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    color: #ffffff;
                    font-size: 28px;
                    margin-bottom: 24px;
                    position: relative;
                    display: inline-block;
                }
                
                .cta-title::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 50px;
                    height: 2px;
                    background: linear-gradient(90deg, #FA8112, transparent);
                }
                
                .cta-btn-primary {
                    background: linear-gradient(135deg, #FA8112 0%, #FFB366 100%) !important;
                    box-shadow: 0 8px 25px rgba(250, 129, 18, 0.4);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    position: relative;
                    overflow: hidden;
                }
                
                .cta-btn-primary::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    transition: left 0.6s ease;
                }
                
                .cta-btn-primary:hover::before {
                    left: 100%;
                }
                
                .cta-btn-primary:hover {
                    box-shadow: 0 12px 35px rgba(250, 129, 18, 0.6) !important;
                    transform: translateY(-3px);
                }
                
                .cta-btn-secondary {
                    background: rgba(255, 255, 255, 0.05) !important;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(245, 245, 245, 0.3) !important;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                
                .cta-btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.1) !important;
                    border-color: rgba(250, 129, 18, 0.5) !important;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(250, 129, 18, 0.2);
                }
                
                .decorative-icon {
                    position: absolute;
                    top: 32px;
                    right: 32px;
                    font-size: 48px;
                    opacity: 0.1;
                    transition: all 0.4s ease;
                }
                
                .cta-card:hover .decorative-icon {
                    opacity: 0.2;
                    transform: scale(1.2) rotate(10deg);
                }
            `}</style>

            <section
                className="cta-section py-20"
                ref={sectionRef}
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 relative z-10">
                    <div className={`cta-card ${isVisible ? 'visible' : ''}`}>
                        <span className="decorative-icon">✈️</span>
                        <h3 className="cta-title">Need a flight?</h3>
                        <p
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                color: 'rgba(255, 255, 255, 0.7)',
                                marginBottom: '24px',
                                fontSize: '15px',
                                lineHeight: '1.6'
                            }}
                        >
                            Get instant quotes from verified charter operators across Africa.
                        </p>
                        <Button
                            variant="contained"
                            className="cta-btn-primary"
                            sx={{
                                color: "#222222",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 600,
                                letterSpacing: '0.5px',
                                padding: '14px 36px',
                                borderRadius: '4px',
                                textTransform: 'none',
                                fontSize: '15px',
                            }}
                        >
                            Request a Flight
                        </Button>
                    </div>

                    <div className={`cta-card ${isVisible ? 'visible' : ''}`}>
                        <span className="decorative-icon">⚙️</span>
                        <h3 className="cta-title">Charter Operator?</h3>
                        <p
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                color: 'rgba(255, 255, 255, 0.7)',
                                marginBottom: '24px',
                                fontSize: '15px',
                                lineHeight: '1.6'
                            }}
                        >
                            Streamline your operations with our comprehensive platform.
                        </p>
                        <Button
                            variant="outlined"
                            className="cta-btn-secondary"
                            sx={{
                                color: "#f5f5f5",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 500,
                                letterSpacing: '0.5px',
                                padding: '14px 36px',
                                borderRadius: '4px',
                                textTransform: 'none',
                                fontSize: '15px',
                            }}
                        >
                            Request Demo
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}