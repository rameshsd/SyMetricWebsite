import Link from 'next/link'
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logo({ className }: { className?: string }) {
  const logoImage = PlaceHolderImages.find(p => p.id === 'sap-logo');
  
  return (
    <a href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
      {logoImage ? (
        <Image src={logoImage.imageUrl} alt="SAP Logo" width={60} height={30} />
      ) : (
        <span>SyMetric</span>
      )}
    </a>
  )
}
