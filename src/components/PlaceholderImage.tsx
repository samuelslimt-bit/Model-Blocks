import React from 'react';
import { PhotoItem } from '../types';

interface PlaceholderImageProps {
  photo: PhotoItem;
  className?: string;
  isCover?: boolean;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  photo,
  className = '',
  isCover = false,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[#2E3947] select-none flex flex-col justify-between ${className}`}
      style={{ aspectRatio: '16/10' }}
    >
      {/* Background Grid & Architectural Blueprint Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="arch-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#B9C2CC" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arch-grid)" />
      </svg>

      {/* SVG Diagram based on type */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
        {photo.svgType === 'manufacturing' && (
          <svg viewBox="0 0 400 240" className="w-full max-h-44" xmlns="http://www.w3.org/2000/svg">
            {/* Press Frame */}
            <rect x="60" y="30" width="280" height="180" rx="4" fill="#232B33" stroke="#3C4857" strokeWidth="3" />
            <line x1="80" y1="30" x2="80" y2="210" stroke="#5B6570" strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="320" y1="30" x2="320" y2="210" stroke="#5B6570" strokeWidth="1.5" strokeDasharray="3,3" />
            
            {/* Hydraulic Press Head */}
            <rect x="140" y="45" width="120" height="28" fill="#3C4857" stroke="#B9C2CC" strokeWidth="1.5" />
            <line x1="200" y1="73" x2="200" y2="105" stroke="#D96708" strokeWidth="4" />
            <rect x="120" y="105" width="160" height="35" rx="2" fill="#2E3947" stroke="#D96708" strokeWidth="2" />
            
            {/* Compaction Mold and Block Units */}
            <rect x="135" y="145" width="130" height="42" fill="#D9D7CC" stroke="#232B33" strokeWidth="2" />
            <circle cx="170" cy="166" r="12" fill="#2E3947" stroke="#232B33" strokeWidth="1.5" />
            <circle cx="230" cy="166" r="12" fill="#2E3947" stroke="#232B33" strokeWidth="1.5" />

            {/* Conveyor rollers */}
            <line x1="80" y1="195" x2="320" y2="195" stroke="#9AA0A6" strokeWidth="3" />
            <circle cx="100" cy="202" r="5" fill="#5B6570" />
            <circle cx="150" cy="202" r="5" fill="#5B6570" />
            <circle cx="200" cy="202" r="5" fill="#5B6570" />
            <circle cx="250" cy="202" r="5" fill="#5B6570" />
            <circle cx="300" cy="202" r="5" fill="#5B6570" />

            {/* Pressure gauge indicator */}
            <circle cx="105" cy="70" r="16" fill="#232B33" stroke="#22699F" strokeWidth="2" />
            <line x1="105" y1="70" x2="114" y2="62" stroke="#D96708" strokeWidth="2" />
            <text x="105" y="96" textAnchor="middle" fill="#9AA0A6" fontSize="9" fontFamily="sans-serif">711 kN</text>
          </svg>
        )}

        {photo.svgType === 'block-detail' && (
          <svg viewBox="0 0 400 240" className="w-full max-h-44" xmlns="http://www.w3.org/2000/svg">
            {/* Interlocking Block Isometric / Orthographic projection */}
            <g transform="translate(100, 40)">
              {/* Main Isometric Block Body */}
              <polygon points="0,60 100,10 200,60 100,110" fill="#D9D7CC" stroke="#232B33" strokeWidth="2" />
              <polygon points="0,60 100,110 100,165 0,115" fill="#B9C2CC" stroke="#232B33" strokeWidth="2" />
              <polygon points="100,110 200,60 200,115 100,165" fill="#9AA0A6" stroke="#232B33" strokeWidth="2" />
              
              {/* Hollow core 1 */}
              <ellipse cx="65" cy="62" rx="16" ry="9" fill="#2E3947" stroke="#232B33" strokeWidth="1.5" />
              {/* Hollow core 2 */}
              <ellipse cx="135" cy="62" rx="16" ry="9" fill="#2E3947" stroke="#232B33" strokeWidth="1.5" />

              {/* Interlocking tongue on top */}
              <polygon points="40,40 100,10 160,40 100,70" fill="none" stroke="#D96708" strokeWidth="1.5" strokeDasharray="3,2" />

              {/* Dimension indicators */}
              <line x1="-15" y1="60" x2="-15" y2="115" stroke="#22699F" strokeWidth="1.5" />
              <text x="-22" y="92" fill="#DCE8F1" fontSize="10" fontFamily="sans-serif" textAnchor="end">180 mm</text>

              <line x1="100" y1="178" x2="200" y2="128" stroke="#22699F" strokeWidth="1.5" />
              <text x="160" y="165" fill="#DCE8F1" fontSize="10" fontFamily="sans-serif">385 mm</text>
            </g>
          </svg>
        )}

        {photo.svgType === 'facility' && (
          <svg viewBox="0 0 400 240" className="w-full max-h-44" xmlns="http://www.w3.org/2000/svg">
            {/* Manufacturing Shed Outline */}
            <polygon points="60,110 160,50 260,110" fill="#232B33" stroke="#3C4857" strokeWidth="2" />
            <polygon points="260,110 160,50 290,50 340,110" fill="#2E3947" stroke="#3C4857" strokeWidth="2" />
            <rect x="60" y="110" width="200" height="90" fill="#3C4857" stroke="#B9C2CC" strokeWidth="1.5" />
            <polygon points="260,110 340,110 340,190 260,200" fill="#2E3947" stroke="#B9C2CC" strokeWidth="1.5" />
            
            {/* Silo 1 & 2 */}
            <rect x="290" y="70" width="30" height="85" rx="3" fill="#D9D7CC" stroke="#232B33" strokeWidth="2" />
            <ellipse cx="305" cy="70" rx="15" ry="5" fill="#FFE3C7" stroke="#232B33" strokeWidth="1.5" />
            <line x1="305" y1="75" x2="305" y2="155" stroke="#D96708" strokeWidth="1.5" strokeDasharray="2,2" />

            {/* Industrial Door */}
            <rect x="125" y="145" width="70" height="55" fill="#232B33" stroke="#D96708" strokeWidth="1.5" />
            <line x1="160" y1="145" x2="160" y2="200" stroke="#5B6570" strokeWidth="1" />

            {/* Staging Yard Ground Grid */}
            <line x1="40" y1="200" x2="360" y2="200" stroke="#B9C2CC" strokeWidth="2" />
            <rect x="80" y="180" width="30" height="18" fill="#B9C2CC" stroke="#232B33" strokeWidth="1" />
            <rect x="85" y="165" width="20" height="15" fill="#9AA0A6" stroke="#232B33" strokeWidth="1" />
          </svg>
        )}

        {photo.svgType === 'workforce' && (
          <svg viewBox="0 0 400 240" className="w-full max-h-44" xmlns="http://www.w3.org/2000/svg">
            {/* Technical Team silhouettes and calibration station */}
            <rect x="80" y="120" width="240" height="70" fill="#232B33" stroke="#3C4857" strokeWidth="2" />
            <rect x="95" y="135" width="65" height="40" fill="#2E3947" stroke="#22699F" strokeWidth="1.5" />
            <line x1="105" y1="145" x2="150" y2="145" stroke="#FFE3C7" strokeWidth="2" />
            <line x1="105" y1="155" x2="140" y2="155" stroke="#DCE8F1" strokeWidth="1.5" />

            {/* Operator 1 */}
            <circle cx="190" cy="90" r="14" fill="#D96708" />
            <path d="M 170 140 Q 170 110 190 110 Q 210 110 210 140 Z" fill="#3C4857" stroke="#B9C2CC" strokeWidth="1.5" />
            <rect x="180" y="80" width="20" height="8" rx="2" fill="#FFE3C7" />

            {/* Operator 2 (Quality Inspector) */}
            <circle cx="260" cy="95" r="13" fill="#22699F" />
            <path d="M 242 145 Q 242 115 260 115 Q 278 115 278 145 Z" fill="#2E3947" stroke="#B9C2CC" strokeWidth="1.5" />
            <rect x="252" y="86" width="16" height="7" rx="2" fill="#DCE8F1" />

            {/* Clipboard / tablet indicator */}
            <rect x="235" y="120" width="18" height="24" rx="2" fill="#D9D7CC" stroke="#232B33" strokeWidth="1" />
            <line x1="239" y1="126" x2="249" y2="126" stroke="#232B33" strokeWidth="1" />
            <line x1="239" y1="131" x2="247" y2="131" stroke="#232B33" strokeWidth="1" />
          </svg>
        )}
      </div>

      {/* Placeholder Label Banner */}
      <div className="relative z-10 bg-[#232B33]/90 backdrop-blur-xs px-3 py-2 border-t border-[#3C4857] flex items-center justify-between">
        <span className="text-[11px] text-[#9AA0A6] font-mono tracking-tight truncate">
          {photo.technicalLabel}
        </span>
        <span className="text-[10px] uppercase font-semibold text-[#D96708] tracking-wider px-1.5 py-0.5 bg-[#2E3947] border border-[#3C4857] rounded-xs shrink-0">
          Placeholder
        </span>
      </div>
    </div>
  );
};
