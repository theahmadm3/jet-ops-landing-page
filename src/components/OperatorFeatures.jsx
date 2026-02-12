// OperatorFeatures.jsx
import { useEffect, useRef, useState } from "react";

const features = [
    { name: "Aircraft Management", icon: "✈️" },
    { name: "Booking Management", icon: "📅" },
    { name: "Maintenance & Tech Logs", icon: "🔧" },
    { name: "Client & Broker CRM", icon: "👥" },
    { name: "Invoicing & Payments", icon: "💳" },
    { name: "Reports & Analytics", icon: "📊" },
    { name: "User & Role Management", icon: "👤" },
    { name: "System Settings", icon: "⚙️" },
];

export default function OperatorFeatures() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
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
                
                .operator-section {
                    background: linear-gradient(135deg, var(--luxury-black) 0%, #1a1a1a 100%);
                    position: relative;
                    overflow: hidden;
                }
                
                .operator-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 20% 50%, rgba(222, 189, 171, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(222, 189, 171, 0.08) 0%, transparent 50%);
                    pointer-events: none;
                }
                
                .operator-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 400;
                    letter-spacing: 0.5px;
                    color: var(--whitesmoke);
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }
                
                .operator-title.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .operator-title::after {
                    content: '';
                    display: block;
                    width: 80px;
                    height: 3px;
                    background: linear-gradient(90deg, var(--gold-dark), var(--gold));
                    margin-top: 16px;
                    border-radius: 2px;
                }
                
                .feature-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(222, 189, 171, 0.15);
                    border-radius: 8px;
                    padding: 32px 24px;
                    position: relative;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(40px) scale(0.95);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .feature-card.visible {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                
                .feature-card:nth-child(1) { transition-delay: 0.05s; }
                .feature-card:nth-child(2) { transition-delay: 0.1s; }
                .feature-card:nth-child(3) { transition-delay: 0.15s; }
                .feature-card:nth-child(4) { transition-delay: 0.2s; }
                .feature-card:nth-child(5) { transition-delay: 0.25s; }
                .feature-card:nth-child(6) { transition-delay: 0.3s; }
                .feature-card:nth-child(7) { transition-delay: 0.35s; }
                .feature-card:nth-child(8) { transition-delay: 0.4s; }
                
                .feature-card::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(222, 189, 171, 0.1) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }
                
                .feature-card:hover::before {
                    opacity: 1;
                }
                
                .feature-card:hover {
                    transform: translateY(-12px) scale(1.02);
                    border-color: rgba(222, 189, 171, 0.4);
                    background: rgba(222, 189, 171, 0.08);
                    box-shadow: 0 20px 50px rgba(222, 189, 171, 0.2);
                }
                
                .feature-icon-wrapper {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, rgba(222, 189, 171, 0.2), rgba(222, 189, 171, 0.1));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                    position: relative;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .feature-card:hover .feature-icon-wrapper {
                    transform: rotate(360deg) scale(1.1);
                    background: linear-gradient(135deg, rgba(222, 189, 171, 0.3), rgba(222, 189, 171, 0.2));
                    box-shadow: 0 8px 20px rgba(222, 189, 171, 0.3);
                }
                
                .feature-emoji {
                    font-size: 28px;
                }
                
                .feature-name {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    letter-spacing: 0.3px;
                    color: var(--whitesmoke);
                    font-size: 16px;
                    line-height: 1.5;
                }
                
                .grid-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        linear-gradient(rgba(222, 189, 171, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(222, 189, 171, 0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                    pointer-events: none;
                    opacity: 0.3;
                }
            `}</style>

            <section id="operators" className="operator-section py-24 relative" ref={sectionRef}>
                <div className="grid-background"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h2 className={`operator-title text-4xl mb-12 ${isVisible ? 'visible' : ''}`}>
                        Built for Charter Operators
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className={`feature-card ${isVisible ? 'visible' : ''}`}>
                                <div className="feature-icon-wrapper">
                                    <span className="feature-emoji">{feature.icon}</span>
                                </div>
                                <h3 className="feature-name">{feature.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}