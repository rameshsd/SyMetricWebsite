import Link from 'next/link'
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
      <Image src="https://symetricsystems.com/wp-content/uploads/2021/05/logo_1-300x79.png" alt="SyMetric Logo" width={120} height={32} />
    </Link>
  )
}
