import { useEffect, useRef, useState } from "react";

const reasons = [
    {
        title: "Built for African Private Aviation",
        icon: "🌍",
        description: "Tailored for the unique needs of African markets"
    },
    {
        title: "Naira Pricing",
        icon: "₦",
        description: "Local currency support for seamless transactions"
    },
    {
        title: "Local Support",
        icon: "🤝",
        description: "Dedicated team understanding regional requirements"
    },
    {
        title: "Fast Customisation",
        icon: "⚡",
        description: "Rapidly adapt to your specific workflow needs"
    },
];

export default function WhyJETOps() {
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
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Montserrat:wght@300;400;500&display=swap');
                
                .why-section {
                    background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
                    position: relative;
                }
                
                .why-section::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 10%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(250, 129, 18, 0.05) 0%, transparent 70%);
                    border-radius: 50%;
                    transform: translateY(-50%);
                    pointer-events: none;
                }
                
                .why-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    color: #222222;
                    text-align: center;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .why-title.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .why-title::after {
                    content: '';
                    display: block;
                    width: 80px;
                    height: 3px;
                    background: linear-gradient(90deg, #FA8112, #FFB366);
                    margin: 16px auto 0;
                    border-radius: 2px;
                }
                
                .reason-card {
                    background: white;
                    border-radius: 12px;
                    padding: 36px 28px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
                    border: 1px solid rgba(0, 0, 0, 0.04);
                    opacity: 0;
                    transform: translateY(40px) scale(0.95);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .reason-card.visible {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                
                .reason-card:nth-child(1) { transition-delay: 0.1s; }
                .reason-card:nth-child(2) { transition-delay: 0.2s; }
                .reason-card:nth-child(3) { transition-delay: 0.3s; }
                .reason-card:nth-child(4) { transition-delay: 0.4s; }
                
                .reason-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #FA8112, #FFB366);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .reason-card:hover::before {
                    transform: scaleX(1);
                }
                
                .reason-card::after {
                    content: '';
                    position: absolute;
                    bottom: -100px;
                    right: -100px;
                    width: 200px;
                    height: 200px;
                    background: radial-gradient(circle, rgba(250, 129, 18, 0.08) 0%, transparent 70%);
                    border-radius: 50%;
                    transition: all 0.6s ease;
                }
                
                .reason-card:hover::after {
                    bottom: -50px;
                    right: -50px;
                }
                
                .reason-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 20px 50px rgba(250, 129, 18, 0.15);
                    border-color: rgba(250, 129, 18, 0.2);
                }
                
                .reason-icon {
                    font-size: 48px;
                    margin-bottom: 20px;
                    display: inline-block;
                    filter: grayscale(0.3);
                    transition: all 0.4s ease;
                }
                
                .reason-card:hover .reason-icon {
                    transform: scale(1.2) rotate(5deg);
                    filter: grayscale(0);
                }
                
                .reason-title {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    letter-spacing: 0.3px;
                    color: #222222;
                    font-size: 18px;
                    margin-bottom: 12px;
                    line-height: 1.4;
                }
                
                .reason-description {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 300;
                    letter-spacing: 0.2px;
                    color: #666666;
                    font-size: 14px;
                    line-height: 1.6;
                }
                
                .decorative-line {
                    position: absolute;
                    width: 40px;
                    height: 2px;
                    background: linear-gradient(90deg, #FA8112, transparent);
                    top: 28px;
                    left: 28px;
                    opacity: 0;
                    transition: all 0.4s ease;
                }
                
                .reason-card:hover .decorative-line {
                    opacity: 1;
                    width: 60px;
                }
            `}</style>

            <section
                className="why-section py-24"
                ref={sectionRef}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className={`why-title text-4xl mb-16 ${isVisible ? 'visible' : ''}`}>
                        Why JETOps
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {reasons.map((reason, i) => (
                            <div key={i} className={`reason-card ${isVisible ? 'visible' : ''}`}>
                                <div className="decorative-line"></div>
                                <div className="reason-icon">{reason.icon}</div>
                                <h3 className="reason-title">{reason.title}</h3>
                                <p className="reason-description">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}