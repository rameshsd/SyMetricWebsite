import Link from 'next/link'
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
      <Image src="/logo.svg" alt="SyMetric Logo" width={32} height={32} className='w-8 h-8' />
    </Link>
  )
}
