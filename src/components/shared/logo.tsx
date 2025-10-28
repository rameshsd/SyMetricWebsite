import Link from 'next/link'
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logo({ className }: { className?: string }) {
  const logoImage = PlaceHolderImages.find(p => p.id === 'symetric-logo');
  
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
      {logoImage ? (
        <Image src={logoImage.imageUrl} alt="SyMetric Logo" width={120} height={32} />
      ) : (
        <span>SyMetric</span>
      )}
    </Link>
  )
}
