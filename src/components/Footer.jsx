export default function Footer() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Montserrat:wght@300;400;500&display=swap');
                
                .footer-section {
                    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
                    border-top: 1px solid rgba(250, 129, 18, 0.15);
                    position: relative;
                    overflow: hidden;
                }
                
                .footer-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(250, 129, 18, 0.5), transparent);
                }
                
                .footer-section::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(250, 129, 18, 0.08) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                }
                
                .footer-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    z-index: 10;
                }
                
                .footer-logo {
                    height: 30px; /* Adjust height as needed */
                }
                
                .footer-text {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 300;
                    font-size: 13px;
                    letter-spacing: 0.8px;
                    color: rgba(255, 255, 255, 0.5);
                    text-transform: uppercase;
                }
                
                .footer-email {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    color: rgba(255, 179, 102, 0.9);
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                .footer-email::after {
                    content: '';
                    position: absolute;
                    bottom: -3px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #FA8112, #FFB366);
                    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 0 8px rgba(250, 129, 18, 0.6);
                }
                
                .footer-email:hover::after {
                    width: 100%;
                }
                
                .footer-email:hover {
                    color: #FFB366;
                    text-shadow: 0 0 20px rgba(250, 129, 18, 0.5);
                }
                
                .footer-divider {
                    width: 1px;
                    height: 20px;
                    background: linear-gradient(180deg, transparent, rgba(250, 129, 18, 0.4), transparent);
                    margin: 0 20px;
                }
                
                .footer-grid {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        linear-gradient(rgba(250, 129, 18, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(250, 129, 18, 0.02) 1px, transparent 1px);
                    background-size: 50px 50px;
                    pointer-events: none;
                    opacity: 0.3;
                }
                
                .footer-accent {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, #FA8112, #FFB366, #FA8112, transparent);
                    opacity: 0.4;
                }
                
                @media (max-width: 640px) {
                    .footer-content {
                        flex-direction: column;
                        gap: 16px;
                        text-align: center;
                    }
                    
                    .footer-divider {
                        display: none;
                    }
                }
            `}</style>

            <footer
                id="footer"
                className="footer-section py-12"
            >
                <div className="footer-grid"></div>
                <div className="footer-accent"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="footer-content">
                        <div className="flex items-center gap-4">
                            <img src="/jet-ops-logo-white.png" alt="JETOps Logo" className="footer-logo" />
                            <div className="footer-divider hidden sm:block"></div>
                            <div className="footer-text">
                                © {new Date().getFullYear()} JETOps. All Rights Reserved.
                            </div>
                        </div>

                        <a
                            href="mailto:contact@jetops.africa"
                            className="footer-email"
                        >
                            contact@jetops.africa
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}