
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Iso27001, Iso9001, Fda21Cfr, IchGcp } from "../icons/compliance-icons";

export function SecurityCompliance() {
  const securityImage = PlaceHolderImages.find(
    (p) => p.id === "security-compliance-image"
  );
  const privacyImage = PlaceHolderImages.find(
    (p) => p.id === "data-privacy-image"
  );

  return (
    <section className="bg-secondary/50">
      <div className="container space-y-20">
        {/* Security and Compliance */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96">
            {securityImage && (
              <Image
                src={securityImage.imageUrl}
                alt={securityImage.description}
                data-ai-hint={securityImage.imageHint}
                fill
                className="object-cover rounded-2xl"
              />
            )}
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">
              Security and Compliance
            </h2>
            <p className="text-muted-foreground text-lg max-w-prose">
              Build data security from the ground up with the backing of our
              team of experts. We ensure that you meet regulatory requirements
              (Data protection laws, Good Clinical Practice guidelines, and
              more) through proactive compliance measures that use well-defined
              policies, processes, and a robust Standard Operating Procedure
              framework. Our methods are trusted by large Pharmaceutical
              Organizations, CROs, and Academic Institutions.
            </p>
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <Iso27001 className="h-12" />
              <Iso9001 className="h-12" />
              <Fda21Cfr className="h-12" />
              <IchGcp className="h-12" />
            </div>
          </div>
        </div>

        {/* Data Privacy */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:order-2">
            <h2 className="text-4xl font-bold tracking-tight">
              Uncompromised Commitment to Data Privacy
            </h2>
            <p className="text-muted-foreground text-lg max-w-prose">
              We go to great lengths to ensure that you have full control over
              data that powers your research. When it comes to data privacy,
              our resolve is unmatched and we are only custodians of data that
              is yours.
            </p>
            <Button variant="link" asChild className="p-0 text-base">
              <Link href="#">Read our privacy policy</Link>
            </Button>
          </div>
          <div className="relative h-96 md:order-1">
            {privacyImage && (
              <Image
                src={privacyImage.imageUrl}
                alt={privacyImage.description}
                data-ai-hint={privacyImage.imageHint}
                fill
                className="object-cover rounded-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
