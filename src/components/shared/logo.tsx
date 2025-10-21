import Link from 'next/link'
import { Beaker } from 'lucide-react'

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
      SyMetric
    </Link>
  )
}