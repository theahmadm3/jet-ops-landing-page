import FlightForm from "./FlightForm";
import Button from "@mui/material/Button";

export default function Hero() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400;600&family=Montserrat:wght@300;400;500;600&display=swap');
                
                :root {
                    --gold: #debdab;
                    --gold-dark: #bd9c8a;
                    --luxury-black: #302d2c;
                    --whitesmoke: #f5f5f5;
                }
                
                .hero-section {
                    position: relative;
                }
                
                .hero-section::before {
                    content: '';
                    position: absolute;
                    top: -100px;
                    right: -100px;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(222, 189, 171, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                    animation: pulse 8s ease-in-out infinite;
                }
                
                @keyframes pulse {
                    0%, 100% { 
                        transform: scale(1); 
                        opacity: 0.5; 
                    }
                    50% { 
                        transform: scale(1.2); 
                        opacity: 0.8; 
                    }
                }
                
                .booking-card {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
                    background: white;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                }
                
                .booking-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, var(--gold-dark), var(--gold));
                }
                
                .operator-card {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
                    background: linear-gradient(135deg, var(--luxury-black) 0%, #3a3a3a 100%);
                    border: 1px solid rgba(222, 189, 171, 0.2);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                }
                
                .operator-card::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(222, 189, 171, 0.1) 0%, transparent 70%);
                    animation: rotate 20s linear infinite;
                }
                
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes slideInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .section-title {
                    font-family: 'DM Serif Display', serif;
                    font-weight: 400;
                    letter-spacing: 0.5px;
                    position: relative;
                    display: inline-block;
                    color: var(--luxury-black);
                }
                
                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 60px;
                    height: 2px;
                    background: linear-gradient(90deg, var(--gold-dark), transparent);
                }
                
                .luxury-btn-primary {
                    background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 100%) !important;
                    box-shadow: 0 6px 20px rgba(222, 189, 171, 0.35);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    position: relative;
                    overflow: hidden;
                }
                
                .luxury-btn-primary::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    transition: left 0.5s ease;
                }
                
                .luxury-btn-primary:hover::before {
                    left: 100%;
                }
                
                .luxury-btn-primary:hover {
                    box-shadow: 0 8px 30px rgba(222, 189, 171, 0.5) !important;
                    transform: translateY(-2px);
                }
                
                .luxury-btn-secondary {
                    border: 1px solid rgba(34, 34, 34, 0.2) !important;
                    color: var(--color-whitesmoke) !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    background: rgba(245, 245, 245, 0.1) !important;
                    backdrop-filter: blur(10px);
                }
                
                .luxury-btn-secondary:hover {
                    border-color: var(--gold-dark) !important;
                    background: rgba(222, 189, 171, 0.05) !important;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(222, 189, 171, 0.15);
                }
                
                .operator-text {
                    color: var(--whitesmoke);
                    font-family: 'Montserrat', sans-serif;
                }
                
                .operator-title {
                    font-family: 'DM Serif Display', serif;
                    color: var(--whitesmoke);
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }
            `}</style>

            <section className="hero-section max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
                {/* LEFT - Booking Section */}
                <div id="book-flight" className="booking-card p-8">
                    <h1 className="section-title text-4xl mb-4">
                        Book a Private Jet in Minutes
                    </h1>
                    <p className="mb-8 text-gray-600" style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: 'var(--luxury-black)'
                    }}>
                        Submit one request. Receive quotes from verified charter operators.
                    </p>
                    <FlightForm />
                </div>

                {/* RIGHT - Operator Section */}
                <div className="operator-card p-8 relative">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 className="operator-title text-3xl mb-4">
                            Run Your Charter Operations on JETOps
                        </h2>
                        <p className="operator-text mb-8" style={{
                            fontSize: '15px',
                            lineHeight: '1.7',
                            opacity: 0.9
                        }}>
                            Manage aircraft, bookings, maintenance, brokers and payments in one system.
                        </p>

                        <div className="flex gap-4">
                            <Button
                                variant="contained"
                                className="luxury-btn-primary"
                                sx={{
                                    color: "var(--luxury-black)",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 600,
                                    letterSpacing: '0.5px',
                                    padding: '12px 32px',
                                    borderRadius: '4px',
                                    textTransform: 'none',
                                }}
                            >
                                Request Demo
                            </Button>

                            <Button
                                variant="outlined"
                                className="luxury-btn-secondary"
                                sx={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 500,
                                    letterSpacing: '0.5px',
                                    padding: '12px 32px',
                                    borderRadius: '4px',
                                    textTransform: 'none',
                                    color: '#fff !important',
                                    borderColor: 'rgba(245, 245, 245, 0.3) !important',
                                    '&:hover': {
                                        borderColor: 'var(--gold-dark) !important',
                                    }
                                }}
                            >
                                View Features
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}