"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export function ContactUsButton() {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Button size="lg" className="rounded-full shadow-lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact us
            </Button>
        </div>
    )
}