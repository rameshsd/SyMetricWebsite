
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Microsoft } from "../icons/brand-icons";
import { Cloud } from "lucide-react";
import Image from "next/image";

export function HostingOptions() {
  return (
    <section className="bg-sap-gradient text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight">
                Looking for Customized Hosting and Deployment Models?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-prose mx-auto">
                Our Clinical Trial Platform is a SaaS Solution that is available with the most trusted and compliant Cloud-Hosting options.
            </p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white text-foreground text-center">
                <CardHeader>
                    <CardTitle className="text-lg">Microsoft Azure</CardTitle>
                </CardHeader>
                <CardContent>
                    <Microsoft className="h-16 mx-auto" />
                </CardContent>
            </Card>
             <Card className="bg-white text-foreground text-center">
                <CardHeader>
                    <CardTitle className="text-lg">SAP Business Technology Platform</CardTitle>
                </CardHeader>
                <CardContent className="h-16 flex items-center justify-center">
                    <Image 
                        src="https://symetricsystems.com/wp-content/uploads/2021/06/SAP.png"
                        alt="SAP Logo"
                        width={100}
                        height={50}
                        className="object-contain"
                    />
                </CardContent>
            </Card>
             <Card className="bg-white text-foreground text-center">
                <CardHeader>
                    <CardTitle className="text-lg">We support other clouds as well</CardTitle>
                </CardHeader>
                <CardContent>
                    <Cloud className="h-12 w-12 mx-auto text-blue-500 mb-2" />
                    <p className="text-sm text-green-600 font-semibold">Contact us for customized Cloud Solutions</p>
                </CardContent>
            </Card>
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-white/80">
                Get in touch with us to customize your solutions — whether for a dedicated single-tenant solution or a completely custom deployment model.
            </p>
            <Button asChild className="mt-8 bg-green-400 text-black hover:bg-green-500" size="lg">
              <Link href="/contact">Contact us</Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
