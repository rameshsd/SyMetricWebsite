import Link from 'next/link'
import { Beaker } from 'lucide-react'

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Beaker className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold text-foreground">SyMetric</span>
    </Link>
  )
}
