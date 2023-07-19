'use client'

import React from 'react'

const CylinderShape = ({...props}) => (
  <svg
    width="97"
    height="177"
    viewBox="0 0 97 177"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_1672_8"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="97"
      height="177"
    >
      <rect width="97" height="177" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1672_8)">
      <rect
        x="8"
        y="120.137"
        width="160"
        height="60"
        rx="30"
        transform="rotate(-45 8 120.137)"
        fill="url(#paint0_linear_1672_8)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_1672_8"
        x1="11.2789"
        y1="135.641"
        x2="132.901"
        y2="195.038"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#47CEEE" />
        <stop offset="1" stopColor="#4CD305" />
      </linearGradient>
    </defs>
  </svg>
)

export default CylinderShape
