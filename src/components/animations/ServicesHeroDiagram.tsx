
"use client";

export function ServicesHeroDiagram() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full h-full bg-primary relative">
        <div className="absolute top-0 left-0 right-0 h-12 bg-repeat-x bg-center" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Cpath d='M0 50 L50 0 L100 50 Z' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E\")", backgroundSize: 'auto 100%' }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-repeat-x bg-center" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Cpath d='M0 0 L100 0 L80 50 L20 50 Z' fill='rgba(0,0,0,0.1)'/%3E%3C/svg%3E\")", backgroundSize: 'auto 100%' }}></div>
      </div>
    </div>
  );
}
