// FlightForm.jsx
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function FlightForm() {
    const [focused, setFocused] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Flight request submitted");
        alert("Request received. Operators will contact you shortly.");
    };

    const handleFocus = (field) => {
        setFocused({ ...focused, [field]: true });
    };

    const handleBlur = (field) => {
        setFocused({ ...focused, [field]: false });
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
                
                :root {
                    --gold: #debdab;
                    --gold-dark: #bd9c8a;
                    --luxury-black: #302d2c;
                    --whitesmoke: #f5f5f5;
                }
                
                .form-container {
                    position: relative;
                }
                
                .form-field {
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeInField 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                
                .form-field:nth-child(1) { animation-delay: 0.1s; }
                .form-field:nth-child(2) { animation-delay: 0.15s; }
                .form-field:nth-child(3) { animation-delay: 0.2s; }
                .form-field:nth-child(4) { animation-delay: 0.25s; }
                .form-field:nth-child(5) { animation-delay: 0.3s; }
                
                @keyframes fadeInField {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .luxury-input .MuiOutlinedInput-root {
                    font-family: 'Montserrat', sans-serif;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    background: rgba(222, 189, 171, 0.02);
                }
                
                .luxury-input .MuiOutlinedInput-root:hover {
                    background: rgba(222, 189, 171, 0.04);
                }
                
                .luxury-input .MuiOutlinedInput-root.Mui-focused {
                    background: rgba(222, 189, 171, 0.05);
                    box-shadow: 0 4px 12px rgba(222, 189, 171, 0.1);
                }
                
                .luxury-input .MuiOutlinedInput-notchedOutline {
                    border-color: rgba(0, 0, 0, 0.1);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .luxury-input .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
                    border-color: rgba(222, 189, 171, 0.3);
                }
                
                .luxury-input .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
                    border-color: var(--gold-dark);
                    border-width: 2px;
                }
                
                .luxury-input .MuiInputLabel-root {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    letter-spacing: 0.3px;
                }
                
                .luxury-input .MuiInputLabel-root.Mui-focused {
                    color: var(--gold-dark);
                }
                
                .submit-button {
                    background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 100%) !important;
                    box-shadow: 0 8px 25px rgba(222, 189, 171, 0.35);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    position: relative;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeInField 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
                }
                
                .submit-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    transition: left 0.6s ease;
                }
                
                .submit-button:hover::before {
                    left: 100%;
                }
                
                .submit-button:hover {
                    box-shadow: 0 12px 35px rgba(222, 189, 171, 0.5) !important;
                    transform: translateY(-3px);
                }
                
                .submit-button:active {
                    transform: translateY(-1px);
                }
            `}</style>

            <form onSubmit={handleSubmit} className="form-container grid gap-4">
                {/* Flight Route - From/To */}
                <div className="form-field grid grid-cols-2 gap-4">
                    <TextField
                        label="From (City or Airport)"
                        fullWidth
                        className="luxury-input"
                        onFocus={() => handleFocus('from')}
                        onBlur={() => handleBlur('from')}
                    />
                    <TextField
                        label="To (City or Airport)"
                        fullWidth
                        className="luxury-input"
                        onFocus={() => handleFocus('to')}
                        onBlur={() => handleBlur('to')}
                    />
                </div>

                {/* Date and Passengers */}
                <div className="form-field grid grid-cols-2 gap-4">
                    <TextField
                        type="date"
                        label="Departure Date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        className="luxury-input"
                        onFocus={() => handleFocus('date')}
                        onBlur={() => handleBlur('date')}
                    />
                    <TextField
                        type="number"
                        label="Passengers (PAX)"
                        fullWidth
                        className="luxury-input"
                        onFocus={() => handleFocus('pax')}
                        onBlur={() => handleBlur('pax')}
                    />
                </div>

                {/* Aircraft Preference - Full Width */}
                <div className="form-field">
                    <TextField
                        label="Aircraft Preference (optional)"
                        fullWidth
                        className="luxury-input"
                        onFocus={() => handleFocus('aircraft')}
                        onBlur={() => handleBlur('aircraft')}
                    />
                </div>

                {/* Contact Info - Name/Email */}
                <div className="form-field grid grid-cols-2 gap-4">
                    <TextField
                        label="Name"
                        fullWidth
                        className="luxury-input"
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        className="luxury-input"
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                    />
                </div>

                {/* Phone - Full Width */}
                <div className="form-field">
                    <TextField
                        label="Phone"
                        fullWidth
                        className="luxury-input"
                        onFocus={() => handleFocus('phone')}
                        onBlur={() => handleBlur('phone')}
                    />
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    className="submit-button"
                    sx={{
                        color: "#222222",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        letterSpacing: '1px',
                        padding: '14px',
                        fontSize: '15px',
                        borderRadius: '4px',
                        textTransform: 'none',
                    }}
                >
                    Get Quotes
                </Button>
            </form>
        </>
    );
}