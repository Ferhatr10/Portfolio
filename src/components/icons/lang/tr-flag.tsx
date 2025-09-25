import React from 'react'

export function TrFlagIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="2" fill="#E30A17" />
      <circle cx="12" cy="12" r="6" fill="#FFFFFF" />
      <circle cx="12" cy="12" r="5" fill="#E30A17" />
      <path
        d="M12 7 L13.5 11.5 L18 11.5 L14.5 14 L15.5 18.5 L12 16 L8.5 18.5 L9.5 14 L6 11.5 L10.5 11.5 Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}