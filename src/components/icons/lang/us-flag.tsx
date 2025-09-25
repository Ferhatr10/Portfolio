import React from 'react'

export function UsFlagIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="2" fill="#B22234" />
      <rect x="0" y="2" width="24" height="2" fill="#FFFFFF" />
      <rect x="0" y="6" width="24" height="2" fill="#FFFFFF" />
      <rect x="0" y="10" width="24" height="2" fill="#FFFFFF" />
      <rect x="0" y="14" width="24" height="2" fill="#FFFFFF" />
      <rect x="0" y="18" width="24" height="2" fill="#FFFFFF" />
      <rect x="0" y="0" width="10" height="12" fill="#3C3B6E" />
      <circle cx="2" cy="2" r="0.5" fill="#FFFFFF" />
      <circle cx="6" cy="2" r="0.5" fill="#FFFFFF" />
      <circle cx="10" cy="2" r="0.5" fill="#FFFFFF" />
      <circle cx="4" cy="4" r="0.5" fill="#FFFFFF" />
      <circle cx="8" cy="4" r="0.5" fill="#FFFFFF" />
      <circle cx="2" cy="6" r="0.5" fill="#FFFFFF" />
      <circle cx="6" cy="6" r="0.5" fill="#FFFFFF" />
      <circle cx="10" cy="6" r="0.5" fill="#FFFFFF" />
      <circle cx="4" cy="8" r="0.5" fill="#FFFFFF" />
      <circle cx="8" cy="8" r="0.5" fill="#FFFFFF" />
    </svg>
  )
}