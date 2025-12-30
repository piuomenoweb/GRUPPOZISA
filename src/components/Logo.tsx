'use client'

export default function Logo({ variant = 'full', className = '' }: { variant?: 'full' | 'icon', className?: string }) {
  if (variant === 'icon') {
    return (
      <svg width="48" height="48" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="30" cy="30" r="28" fill="#3B82F6"/>
        <path d="M 18 22 L 42 22 L 42 26 L 26 26 L 26 30 L 38 30 L 38 34 L 18 34 Z" fill="white"/>
      </svg>
    )
  }

  return (
    <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="30" cy="30" r="25" fill="#3B82F6" opacity="0.1"/>
      <path d="M 15 20 L 45 20 L 45 25 L 25 25 L 25 30 L 40 30 L 40 35 L 15 35 Z" fill="#3B82F6"/>
      <text x="55" y="25" fontFamily="Montserrat, sans-serif" fontSize="18" fontWeight="bold" fill="#1E40AF">GRUPPO</text>
      <text x="55" y="42" fontFamily="Montserrat, sans-serif" fontSize="18" fontWeight="bold" fill="#10B981">ZISA</text>
    </svg>
  )
}

