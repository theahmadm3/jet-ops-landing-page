// HowItWorks.jsx
import { useEffect, useRef, useState } from "react";

export default function HowItWorks() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const steps = [
        { title: "Operators run operations on JETOps", icon: "⚙️" },
        { title: "Clients or brokers submit a request", icon: "📝" },
        { title: "Request sent to operators", icon: "✈️" },
        { title: "Client selects best offer", icon: "✓" },
    ];

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
                
                .how-it-works-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 400;
                    letter-spacing: 0.5px;
                    color: var(--luxury-black);
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .how-it-works-title.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .how-it-works-title::after {
                    content: '';
                    display: block;
                    width: 80px;
                    height: 3px;
                    background: linear-gradient(90deg, var(--gold-dark), var(--gold));
                    margin-top: 16px;
                    border-radius: 2px;
                }
                
                .step-card {
                    background: white;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    border-radius: 8px;
                    padding: 32px 24px;
                    position: relative;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(40px);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
                }
                
                .step-card.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .step-card:nth-child(1) { transition-delay: 0.1s; }
                .step-card:nth-child(2) { transition-delay: 0.2s; }
                .step-card:nth-child(3) { transition-delay: 0.3s; }
                .step-card:nth-child(4) { transition-delay: 0.4s; }
                
                .step-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, var(--gold-dark), var(--gold));
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .step-card:hover::before {
                    transform: scaleX(1);
                }
                
                .step-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 40px rgba(222, 189, 171, 0.15);
                    border-color: rgba(222, 189, 171, 0.2);
                }
                
                .step-number {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 48px;
                    font-weight: 600;
                    background: linear-gradient(135deg, var(--gold-dark), var(--gold));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 12px;
                    line-height: 1;
                }
                
                .step-icon {
                    font-size: 32px;
                    margin-bottom: 16px;
                    display: inline-block;
                    animation: float 3s ease-in-out infinite;
                }
                
                .step-card:nth-child(1) .step-icon { animation-delay: 0s; }
                .step-card:nth-child(2) .step-icon { animation-delay: 0.5s; }
                .step-card:nth-child(3) .step-icon { animation-delay: 1s; }
                .step-card:nth-child(4) .step-icon { animation-delay: 1.5s; }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                .step-title {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    letter-spacing: 0.3px;
                    color: var(--luxury-black);
                    line-height: 1.5;
                }
                
                .connector-line {
                    position: absolute;
                    top: 50%;
                    right: -12%;
                    width: 24%;
                    height: 2px;
                    background: linear-gradient(90deg, rgba(222, 189, 171, 0.3), rgba(222, 189, 171, 0.1));
                    transform: translateY(-50%);
                    opacity: 0;
                    transition: opacity 0.6s ease;
                }
                
                .connector-line.visible {
                    opacity: 1;
                }
                
                @media (max-width: 768px) {
                    .connector-line {
                        display: none;
                    }
                }
            `}</style>

            <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-24" ref={sectionRef}>
                <h2 className={`how-it-works-title text-4xl mb-12 ${isVisible ? 'visible' : ''}`}>
                    How It Works
                </h2>
                <div className="grid md:grid-cols-4 gap-6 relative">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            <div className={`step-card ${isVisible ? 'visible' : ''}`}>
                                <div className="step-icon">{step.icon}</div>
                                <div className="step-number">0{i + 1}</div>
                                <p className="step-title">{step.title}</p>
                            </div>
                            {i < steps.length - 1 && (
                                <div className={`connector-line hidden md:block ${isVisible ? 'visible' : ''}`}
                                    style={{ transitionDelay: `${0.5 + i * 0.1}s` }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}