
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "../shared/section-title";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Fda21Cfr, IchGcp, Iso27001, Iso9001 } from "../icons/compliance-icons";

export function SecurityCompliance() {
    const image = PlaceHolderImages.find(p => p.id === 'security-compliance-image');

  return (
    <section className="bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square">
                {image && (
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover rounded-2xl"
                    />
                )}
            </div>
            <div className="space-y-12">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Security and Compliance</h2>
                    <p className="mt-4 text-muted-foreground">
                        Build data security from the ground up with the backing of our team of experts. We ensure that you meet regulatory requirements (Data protection laws, Good Clinical Practice guidelines, and more) through proactive compliance measures that use well-defined policies, processes, and a robust Standard Operating Procedure framework. Our methods are trusted by large Pharmaceutical Organizations, CROs, and Academic Institutions.
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <Iso27001 />
                        <Iso9001 />
                        <Fda21Cfr />
                        <IchGcp />
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Uncompromised Commitment to Data Privacy</h2>
                    <p className="mt-4 text-muted-foreground">
                        We go to great lengths to ensure that you have full control over data that powers your research. When it comes to data privacy, our resolve is unmatched and we are only custodians of data that is yours.
                    </p>
                    <Link href="#" className="text-primary font-semibold text-sm flex items-center gap-1 mt-4">
                        Read our privacy policy <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
