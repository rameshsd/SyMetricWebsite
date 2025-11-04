
'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function CareersHeroGraphic() {
    const heroImage = PlaceHolderImages.find((p) => p.id === 'careers-hero-man');
    if (!heroImage) return null;

    return (
        <div className="relative w-[400px] h-[300px]">
            {/* Main Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[280px] z-10">
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={220}
                    height={280}
                    className="object-cover rounded-md"
                />
            </div>

            {/* Orange Frame */}
            <div 
                className="absolute inset-0 border-[12px] border-orange-500" 
                style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0% 75%)'
                }}
            />

            {/* Abstract Shapes */}
            <div className="absolute top-4 right-8 w-16 h-8 bg-blue-300/80" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%)'}} />
            <div className="absolute bottom-4 right-12 w-10 h-6 bg-red-400/80" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'}} />
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-12 h-16 bg-purple-500/80" style={{clipPath: 'polygon(0 0, 100% 25%, 100% 75%, 0 100%)'}} />
        </div>
    );
}
