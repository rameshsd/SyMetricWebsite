
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({ children, className, ...props }: { children: ReactNode, className?: string, id?: string }) {
    return (
        <section className={cn("py-16 md:py-24", className)} {...props}>
            <div className="container">
                {children}
            </div>
        </section>
    );
}
