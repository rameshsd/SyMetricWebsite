import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <section className={cn("py-16 md:py-24", className)}>
            <div className="container">
                {children}
            </div>
        </section>
    );
}
