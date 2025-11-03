
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionTitle } from '../shared/section-title';

export function CollaborationVision() {
  const collaborationImage = PlaceHolderImages.find(p => p.id === 'collaboration-infographic');
  
  return (
    <section className="bg-sap-gradient text-white">
      <div className="container">
        <SectionTitle
          title="Our Collaboration Vision"
          className="text-white"
        />
        <div className="mt-12 grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-4 text-white/80">
                <p>Clinical Trials are conducted by numerous organizations which employ several highly skilled teams and individuals to perform unique and complex roles. For a Trial to be successful, the activities and tasks of these Teams and Individuals must be synchronized and documented.</p>
                <p>The SyMetric Platform provides a virtual collaborative environment that is secure, user-friendly, and intuitive.</p>
                <p>It streamlines the communication among the multiple teams involved in a Trial and provides the necessary tools for effective data capture and decision-making. This Collaboration Model along with fully customizable role-based authorizations enables teams and individuals with secure and real-time access to Trial Data.</p>
            </div>
            <div className="flex items-center justify-center">
              {collaborationImage && (
                <Image 
                  src={collaborationImage.imageUrl}
                  alt={collaborationImage.description}
                  width={600}
                  height={500}
                  data-ai-hint={collaborationImage.imageHint}
                />
              )}
            </div>
        </div>
      </div>
    </section>
  );
}

    