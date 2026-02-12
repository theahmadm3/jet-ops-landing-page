// BrokerNetwork.jsx
import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import planeImage from "../assets/planes/plane2.jpg";

export default function BrokerNetwork() {
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
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Montserrat:wght@300;400;500;600&display=swap');
                
                :root {
                    --gold: #debdab;
                    --gold-dark: #bd9c8a;
                    --luxury-black: #302d2c;
                    --whitesmoke: #f5f5f5;
                }
                
                .broker-section {
                    position: relative;
                    background: linear-gradient(135deg, var(--luxury-black) 0%, #1a1a1a 100%);
                    overflow: hidden;
                }
                
                .broker-section::before {
                    content: '';
                    position: absolute;
                    bottom: -50px;
                    left: -50px;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(222, 189, 171, 0.12) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                }
                
                .broker-section::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 80% 20%, rgba(222, 189, 171, 0.08) 0%, transparent 50%);
                    pointer-events: none;
                }
                
                .broker-content {
                    opacity: 0;
                    transform: translateX(-40px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .broker-content.visible {
                    opacity: 1;
                    transform: translateX(0);
                }
                
                .broker-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    color: var(--whitesmoke);
                    position: relative;
                    display: inline-block;
                }
                
                .broker-title::after {
                    content: '';
                    position: absolute;
                    bottom: -12px;
                    left: 0;
                    width: 60px;
                    height: 3px;
                    background: linear-gradient(90deg, var(--gold-dark), var(--gold));
                    border-radius: 2px;
                }
                
                .broker-list {
                    font-family: 'Montserrat', sans-serif;
                    list-style: none;
                    padding: 0;
                }
                
                .broker-list li {
                    position: relative;
                    padding-left: 28px;
                    margin-bottom: 16px;
                    color: rgba(245, 245, 245, 0.85);
                    font-weight: 400;
                    letter-spacing: 0.3px;
                    opacity: 0;
                    transform: translateX(-20px);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .broker-list li.visible {
                    opacity: 1;
                    transform: translateX(0);
                }
                
                .broker-list li:nth-child(1) { transition-delay: 0.2s; }
                .broker-list li:nth-child(2) { transition-delay: 0.3s; }
                .broker-list li:nth-child(3) { transition-delay: 0.4s; }
                .broker-list li:nth-child(4) { transition-delay: 0.5s; }
                
                .broker-list li::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 8px;
                    width: 12px;
                    height: 12px;
                    background: linear-gradient(135deg, var(--gold-dark), var(--gold));
                    border-radius: 50%;
                    box-shadow: 0 2px 8px rgba(222, 189, 171, 0.3);
                }
                
                .broker-button {
                    background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 100%) !important;
                    box-shadow: 0 8px 25px rgba(222, 189, 171, 0.35);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    position: relative;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(20px);
                }
                
                .broker-button.visible {
                    opacity: 1;
                    transform: translateY(0);
                    transition-delay: 0.6s;
                }
                
                .broker-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    transition: left 0.6s ease;
                }
                
                .broker-button:hover::before {
                    left: 100%;
                }
                
                .broker-button:hover {
                    box-shadow: 0 12px 35px rgba(222, 189, 171, 0.5) !important;
                    transform: translateY(-3px);
                }
                
                .plane-showcase {
                    height: 400px;
                    border-radius: 12px;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateX(40px) scale(0.95);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                    border: 1px solid rgba(222, 189, 171, 0.2);
                }
                
                .plane-showcase.visible {
                    opacity: 1;
                    transform: translateX(0) scale(1);
                }
                
                .plane-showcase::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(222, 189, 171, 0.15) 0%,
                        transparent 60%
                    );
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }
                
                .plane-showcase:hover::before {
                    opacity: 1;
                }
                
                .plane-showcase:hover {
                    transform: translateX(0) scale(1.02);
                    box-shadow: 0 25px 70px rgba(222, 189, 171, 0.4);
                    border-color: rgba(222, 189, 171, 0.4);
                }
                
                .plane-showcase::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 50%;
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
                }
                
                .grid-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        linear-gradient(rgba(222, 189, 171, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(222, 189, 171, 0.02) 1px, transparent 1px);
                    background-size: 50px 50px;
                    pointer-events: none;
                    opacity: 0.4;
                }
            `}</style>

            <section className="broker-section max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center" ref={sectionRef}>
                <div className="grid-background"></div>
                <div className={`broker-content ${isVisible ? 'visible' : ''}`} style={{ position: 'relative', zIndex: 10 }}>
                    <h2 className="broker-title text-3xl mb-8">
                        Central Booking & Broker Network
                    </h2>
                    <ul className="broker-list mb-10">
                        <li className={isVisible ? 'visible' : ''}>One request → multiple operators</li>
                        <li className={isVisible ? 'visible' : ''}>Faster turnaround</li>
                        <li className={isVisible ? 'visible' : ''}>Reduced manual coordination</li>
                        <li className={isVisible ? 'visible' : ''}>Built for African aviation workflows</li>
                    </ul>

                    <Button
                        variant="contained"
                        className={`broker-button ${isVisible ? 'visible' : ''}`}
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

                <div
                    className={`plane-showcase ${isVisible ? 'visible' : ''}`}
                    style={{ backgroundImage: `url(${planeImage})`, position: 'relative', zIndex: 10 }}
                />
            </section>
        </>
    );
}