
"use client";

export function GeometricPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pattern-trapezoid" x="0" y="0" width="100" height="60" patternUnits="userSpaceOnUse">
          <g transform="translate(0,0)">
            <path d="M 20 0 L 80 0 L 100 20 L 0 20 Z" fill="white" opacity="0.5" />
          </g>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-trapezoid)" />
    </svg>
  );
}
