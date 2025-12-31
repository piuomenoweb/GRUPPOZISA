'use client'

export default function Logo({ variant = 'full', className = '' }: { variant?: 'full' | 'icon', className?: string }) {
  if (variant === 'icon') {
    return (
      <svg width="48" height="48" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Background Circle */}
        <circle cx="30" cy="30" r="28" fill="#3B82F6" opacity="0.1"/>
        <circle cx="30" cy="30" r="26" fill="white"/>
        
        {/* Solar Panel Grid Pattern for Z */}
        <defs>
          <pattern id="solarGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="#3B82F6"/>
            <line x1="0" y1="0" x2="20" y2="0" stroke="white" strokeWidth="1"/>
            <line x1="0" y1="10" x2="20" y2="10" stroke="white" strokeWidth="1"/>
            <line x1="0" y1="20" x2="20" y2="20" stroke="white" strokeWidth="1"/>
            <line x1="0" y1="0" x2="0" y2="20" stroke="white" strokeWidth="1"/>
            <line x1="10" y1="0" x2="10" y2="20" stroke="white" strokeWidth="1"/>
            <line x1="20" y1="0" x2="20" y2="20" stroke="white" strokeWidth="1"/>
          </pattern>
        </defs>
        
        {/* Letter Z as Solar Panel */}
        <path d="M 15 18 L 45 18 L 45 22 L 25 22 L 25 28 L 40 28 L 40 32 L 15 32 Z" fill="url(#solarGrid)"/>
      </svg>
    )
  }

  return (
    <svg width="240" height="80" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <pattern id="solarGridFull" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
          <rect width="15" height="15" fill="#3B82F6"/>
          <line x1="0" y1="0" x2="15" y2="0" stroke="white" strokeWidth="0.8"/>
          <line x1="0" y1="7.5" x2="15" y2="7.5" stroke="white" strokeWidth="0.8"/>
          <line x1="0" y1="15" x2="15" y2="15" stroke="white" strokeWidth="0.8"/>
          <line x1="0" y1="0" x2="0" y2="15" stroke="white" strokeWidth="0.8"/>
          <line x1="7.5" y1="0" x2="7.5" y2="15" stroke="white" strokeWidth="0.8"/>
          <line x1="15" y1="0" x2="15" y2="15" stroke="white" strokeWidth="0.8"/>
        </pattern>
      </defs>
      
      {/* Z as Solar Panel */}
      <g>
        <circle cx="40" cy="40" r="32" fill="#3B82F6" opacity="0.1"/>
        <circle cx="40" cy="40" r="30" fill="white"/>
        <path d="M 22 28 L 58 28 L 58 32 L 30 32 L 30 38 L 52 38 L 52 42 L 22 42 Z" fill="url(#solarGridFull)"/>
        
        {/* Blueberry branch decoration */}
        <circle cx="28" cy="25" r="4" fill="#1E40AF"/>
        <circle cx="32" cy="22" r="3.5" fill="#3B82F6"/>
        
        {/* Sun peek */}
        <circle cx="52" cy="28" r="6" fill="#F59E0B" opacity="0.8"/>
      </g>
      
      {/* Text */}
      <text x="80" y="32" fontFamily="Montserrat, sans-serif" fontSize="22" fontWeight="bold" fill="#1E40AF">GRUPPO</text>
      <text x="80" y="52" fontFamily="Montserrat, sans-serif" fontSize="22" fontWeight="bold" fill="#10B981">ZISA</text>
    </svg>
  )
}
