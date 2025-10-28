
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionTitle } from "../shared/section-title";

export function CollaborationVision() {
  const image = PlaceHolderImages.find((p) => p.id === "collaboration-diagram-full");
  return (
    <section>
      <div className="container">
         <SectionTitle
            title="Our Collaboration Vision"
            description="The SyMetric Platform provides a virtual collaborative environment that is secure, user-friendly, and intuitive. It streamlines communication and provides the necessary tools for effective data capture and decision-making."
        />
        <div className="mt-16 relative aspect-[1.6] max-w-6xl mx-auto">
          {image && (
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              fill
              className="object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
}
