'use client';

import { SectionTitle } from '../shared/section-title';
import { CollaborationDiagram } from '../animations/CollaborationDiagram';

export function CollaborationVision() {
  return (
    <section>
      <div className="container">
        <SectionTitle
          title="Our Collaboration Vision"
          description="The SyMetric Platform provides a virtual collaborative environment that is secure, user-friendly, and intuitive. It streamlines communication and provides the necessary tools for effective data capture and decision-making."
        />
        <div className="mt-16 relative w-full max-w-6xl mx-auto aspect-[1.6]">
          <CollaborationDiagram />
        </div>
      </div>
    </section>
  );
}
