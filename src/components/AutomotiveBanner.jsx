import React from 'react';

const AutomotiveBanner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-8">
      <svg
        viewBox="0 0 1200 675"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="1200" height="675" fill="#0a0a0a" />
        
        {/* Geometric background shapes */}
        <defs>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#007BFF" />
            <stop offset="100%" stopColor="#00D084" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#007BFF" />
            <stop offset="100%" stopColor="#00D084" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Geometric green shapes */}
        <polygon points="800,100 900,50 950,150 850,200" fill="#00D084" opacity="0.3" />
        <polygon points="1000,200 1100,150 1150,250 1050,300" fill="#00D084" opacity="0.2" />
        <circle cx="950" cy="400" r="80" fill="#00D084" opacity="0.1" />
        <polygon points="850,500 950,450 1000,550 900,600" fill="#00D084" opacity="0.25" />
        
        {/* Dot pattern on left side */}
        <g opacity="0.3">
          {Array.from({ length: 15 }, (_, i) => 
            Array.from({ length: 8 }, (_, j) => (
              <circle
                key={`${i}-${j}`}
                cx={50 + i * 25}
                cy={100 + j * 60}
                r="2"
                fill="#00D084"
              />
            ))
          )}
        </g>
        
        {/* Social media icons on left edge */}
        <g transform="translate(20, 250)">
          {/* Facebook */}
          <rect x="0" y="0" width="30" height="30" rx="5" fill="#1877F2" />
          <text x="15" y="20" textAnchor="middle" fill="white" fontSize="16" fontFamily="Arial">f</text>
          
          {/* Twitter */}
          <rect x="0" y="40" width="30" height="30" rx="5" fill="#1DA1F2" />
          <text x="15" y="60" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial">𝕏</text>
          
          {/* Instagram */}
          <rect x="0" y="80" width="30" height="30" rx="5" fill="#E4405F" />
          <circle cx="15" cy="95" r="6" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="20" cy="90" r="2" fill="white" />
        </g>
        
        {/* Main headline */}
        <text x="80" y="200" fontSize="48" fontWeight="bold" fill="white" fontFamily="Impact, Arial Black, sans-serif">
          THE FUTURE OF
        </text>
        <text x="80" y="260" fontSize="48" fontWeight="bold" fill="url(#textGradient)" fontFamily="Impact, Arial Black, sans-serif" filter="url(#glow)">
          AUTOMOTIVE
        </text>
        
        {/* Event details */}
        <text x="80" y="320" fontSize="20" fill="#cccccc" fontFamily="Arial, sans-serif">
          December 3rd to 7th • Los Angeles, California
        </text>
        
        {/* Body text */}
        <text x="80" y="360" fontSize="14" fill="#999999" fontFamily="Arial, sans-serif">
          Join industry leaders and innovators as we explore the cutting-edge
        </text>
        <text x="80" y="380" fontSize="14" fill="#999999" fontFamily="Arial, sans-serif">
          technologies shaping tomorrow's automotive landscape. Experience
        </text>
        <text x="80" y="400" fontSize="14" fill="#999999" fontFamily="Arial, sans-serif">
          electric vehicles, autonomous driving, and sustainable mobility solutions.
        </text>
        
        {/* Get Ticket Button */}
        <rect x="80" y="440" width="180" height="50" rx="25" fill="url(#greenGradient)" filter="url(#glow)" />
        <text x="170" y="470" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">
          GET TICKET
        </text>
        
        {/* Car illustration - Futuristic BMW i8 style */}
        <g transform="translate(650, 200)">
          {/* Car body shadow */}
          <ellipse cx="200" cy="280" rx="180" ry="20" fill="#000000" opacity="0.3" />
          
          {/* Car body main */}
          <path d="M50 250 Q80 200 150 190 Q250 185 350 200 Q380 210 400 240 Q390 270 350 275 L50 275 Z" 
                fill="#00D084" stroke="#00FF94" strokeWidth="2" filter="url(#glow)" />
          
          {/* Car body lower */}
          <path d="M70 250 Q100 240 180 238 Q280 235 370 245 Q385 250 390 260 L380 270 L70 270 Z" 
                fill="#00B870" />
          
          {/* Windshield */}
          <path d="M120 220 Q180 200 280 205 Q320 210 340 230 L320 250 L140 250 Z" 
                fill="#87CEEB" opacity="0.7" stroke="#00D084" strokeWidth="1" />
          
          {/* Side windows */}
          <path d="M340 230 Q360 225 380 235 L375 250 L340 250 Z" 
                fill="#87CEEB" opacity="0.6" />
          
          {/* Wheels */}
          <circle cx="130" cy="270" r="25" fill="#2C2C2C" stroke="#00D084" strokeWidth="2" />
          <circle cx="130" cy="270" r="15" fill="#1A1A1A" />
          <circle cx="130" cy="270" r="8" fill="#00D084" />
          
          <circle cx="320" cy="270" r="25" fill="#2C2C2C" stroke="#00D084" strokeWidth="2" />
          <circle cx="320" cy="270" r="15" fill="#1A1A1A" />
          <circle cx="320" cy="270" r="8" fill="#00D084" />
          
          {/* Headlights */}
          <ellipse cx="400" cy="235" rx="8" ry="12" fill="#E0E0E0" stroke="#00D084" strokeWidth="1" />
          <ellipse cx="400" cy="235" rx="4" ry="6" fill="#FFFFFF" />
          
          {/* Side details */}
          <path d="M150 240 Q200 235 250 238 Q300 240 340 245" 
                stroke="#00FF94" strokeWidth="2" fill="none" opacity="0.8" />
          
          {/* Reflection highlights */}
          <path d="M80 220 Q150 210 220 215 Q280 218 320 225" 
                stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.4" />
        </g>
        
        {/* Additional lighting effects */}
        <circle cx="850" cy="350" r="100" fill="url(#greenGradient)" opacity="0.1" />
        <circle cx="850" cy="350" r="60" fill="#00D084" opacity="0.05" />
        
        {/* Floating geometric elements */}
        <polygon points="200,50 220,30 240,50 220,70" fill="#00D084" opacity="0.4" />
        <polygon points="300,600 320,580 340,600 320,620" fill="#007BFF" opacity="0.3" />
        <circle cx="150" cy="600" r="8" fill="#00D084" opacity="0.5" />
        <circle cx="500" cy="80" r="6" fill="#007BFF" opacity="0.4" />
      </svg>
    </div>
  );
};

export default AutomotiveBanner;