'use client'

import Image from 'next/image'

export default function Logo({ variant = 'full', className = '' }: { variant?: 'full' | 'icon', className?: string }) {
  if (variant === 'icon') {
    return (
      <Image
        src="/logo-z.png"
        alt="Gruppo Zisa Logo"
        width={48}
        height={48}
        className={className}
        priority
      />
    )
  }

  return (
    <Image
      src="/logo-full.png"
      alt="Gruppo Zisa"
      width={200}
      height={80}
      className={className}
      priority
    />
  )
}
