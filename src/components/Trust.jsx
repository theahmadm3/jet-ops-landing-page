import { useEffect, useRef, useState } from "react";

export default function Trust() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');
                
                .trust-section {
                    position: relative;
                    overflow: hidden;
                }
                
                .trust-section::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(250, 129, 18, 0.03) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                }
                
                .trust-content {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .trust-content.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .trust-label {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 300;
                    letter-spacing: 1px;
                    color: #666666;
                    font-size: 13px;
                    text-transform: uppercase;
                    margin-bottom: 24px;
                    position: relative;
                    display: inline-block;
                }
                
                .trust-label::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 40px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #FA8112, transparent);
                }
                
                .logo-container {
                    background: white;
                    border: 2px solid rgba(250, 129, 18, 0.1);
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
                    padding: 24px 36px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    opacity: 0;
                    transform: scale(0.9);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
                }
                
                .logo-container.visible {
                    opacity: 1;
                    transform: scale(1);
                }
                
                .logo-container::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                        45deg,
                        transparent 30%,
                        rgba(250, 129, 18, 0.05) 50%,
                        transparent 70%
                    );
                    animation: shimmer 3s ease-in-out infinite;
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
                }
                
                .logo-container:hover {
                    transform: scale(1.05);
                    border-color: rgba(250, 129, 18, 0.3);
                    box-shadow: 0 15px 50px rgba(250, 129, 18, 0.15);
                }
                
                .logo-placeholder {
                    width: 240px;
                    height: 80px;
                    background: linear-gradient(
                        135deg,
                        rgba(250, 129, 18, 0.1) 0%,
                        rgba(255, 179, 102, 0.05) 100%
                    );
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    font-size: 24px;
                    letter-spacing: 2px;
                    color: #FA8112;
                    position: relative;
                }
                
                .logo-placeholder::before {
                    content: '✈';
                    position: absolute;
                    left: 20px;
                    font-size: 28px;
                    opacity: 0.4;
                }
            `}</style>

            <section
                className="trust-section max-w-7xl mx-auto px-6 py-20 text-center relative"
                ref={sectionRef}
            >
                <div className={`trust-content ${isVisible ? 'visible' : ''}`}>
                    <p className="trust-label">
                        Trusted Partner
                    </p>
                    <div className={`logo-container ${isVisible ? 'visible' : ''}`}>
                        <img src="/flybird.png" alt="Flybird Logo" className="h-20 w-auto" />
                    </div>
                    <p
                        className="mt-6 text-gray-600"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '14px',
                            fontWeight: '300',
                            letterSpacing: '0.5px'
                        }}
                    >
                        ERP deployed for Flybird Aviation
                    </p>
                </div>
            </section>
        </>
    );
}