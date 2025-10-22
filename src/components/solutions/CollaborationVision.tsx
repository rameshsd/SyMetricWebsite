
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function CollaborationVision() {
  const image = PlaceHolderImages.find((p) => p.id === "collaboration-image");
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Collaboration Vision
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Clinical Trials are conducted by numerous organizations which
                employ several highly skilled teams and individuals to perform
                unique and complex roles. For a Trial to be successful, the
                activities and tasks of these Teams and Individuals must be
                synchronized and documented.
              </p>
              <p>
                The SyMetric Platform provides a virtual collaborative
                environment that is secure, user-friendly, and intuitive.
              </p>
              <p>
                It streamlines the communication among the multiple teams
                involved in a Trial and provides the necessary tools for
                effective data capture and decision-making. This Collaboration
                Model along with fully customizable role-based authorizations
                enables teams and individuals with secure and real-time access
                to Trial Data.
              </p>
            </div>
          </div>
          <div className="relative h-96">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
