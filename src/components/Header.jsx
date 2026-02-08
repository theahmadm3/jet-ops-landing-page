import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
                
                .header-container {
                    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
                    border-bottom: 1px solid rgba(250, 129, 18, 0.15);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }
                
                .header-container::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(250, 129, 18, 0.5), transparent);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                
                .header-container.scrolled::before {
                    opacity: 1;
                }
                
                .header-container.scrolled {
                    background: rgba(10, 10, 10, 0.95);
                    backdrop-filter: blur(20px);
                    border-bottom-color: rgba(250, 129, 18, 0.3);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
                }
                
                .nav-link {
                    position: relative;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    letter-spacing: 0.8px;
                    color: rgba(255, 255, 255, 0.8);
                    transition: color 0.3s ease;
                    text-transform: uppercase;
                    font-size: 12px;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #FA8112, #FFB366);
                    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .nav-link:hover {
                    color: #FFB366;
                }
                
                .demo-button {
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(135deg, #FA8112, #FFB366) !important;
                    box-shadow: 0 4px 20px rgba(250, 129, 18, 0.4);
                    transition: all 0.3s ease !important;
                    border: 1px solid rgba(255, 179, 102, 0.3);
                }
                
                .demo-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                    transition: left 0.5s ease;
                }
                
                .demo-button:hover::before {
                    left: 100%;
                }
                
                .demo-button:hover {
                    box-shadow: 0 6px 30px rgba(250, 129, 18, 0.6) !important;
                    transform: translateY(-2px);
                }
                
                .header-grid {
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
            `}</style>

            <header
                className={`header-container sticky top-0 z-50 ${scrolled ? 'scrolled' : ''}`}
            >
                <div className="header-grid"></div>
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 relative z-10">
                    <img src="/jet-ops-logo-white.png" alt="JETOps Logo" className="h-10" />

                    <nav className="hidden md:flex gap-10 text-sm">
                        <a href="#how-it-works" className="nav-link">How it Works</a>
                        <a href="#operators" className="nav-link">Operators</a>
                        <a href="#book-flight" className="nav-link">Book a Flight</a>
                        <a href="#footer" className="nav-link">Contact</a>
                    </nav>

                    <Button
                        variant="contained"
                        className="demo-button"
                        sx={{
                            color: "#0a0a0a",
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 600,
                            letterSpacing: '1px',
                            padding: '10px 28px',
                            borderRadius: '4px',
                            textTransform: 'uppercase',
                            fontSize: '12px',
                        }}
                    >
                        Request Demo
                    </Button>
                </div>
            </header>
        </>
    );
}