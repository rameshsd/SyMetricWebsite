'use client';

import React, { useState } from 'react';
import { Play, ExternalLink, Film, Video, Eye, Maximize2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface GalleryVideo {
  id: string;
  driveId: string;
  localSrc: string;
  title: string;
  category: string;
  description: string;
  duration?: string;
  badge: string;
}

const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    id: 'video-5',
    driveId: '1Lu3B4hfzV9VRnjiAoMAJTUQA2ahvPM06',
    localSrc: '/videos/video5.mp4',
    title: 'Respiratory Studies & Spirometry-Driven Clinical Execution',
    category: 'Customer Stories',
    description: 'Expert insights on managing complex respiratory studies (COPD & Asthma), spirometry-driven enrollment, stratification, and critical endpoint data capture for FEV and FVC parameters.',
    duration: '1:36 Min',
    badge: 'Respiratory & COPD',
  },
  {
    id: 'video-1',
    driveId: '1V5Lj5SlvILLSgugdL1Q8X5PZTYrUV2Sr',
    localSrc: '/videos/video1.mp4',
    title: 'Unified Patient & Sample Management System',
    category: 'Sample Management',
    description: 'A unified platform connecting subject management, label generation, inventory tracking, and distribution workflows from collection to storage and shipment with complete audit trails.',
    duration: '1:55 Min',
    badge: 'Sample Management',
  },
  {
    id: 'video-2',
    driveId: '1NagbKNODVgGqZMK4xEj1Jc2s9a1ms3Vs',
    localSrc: '/videos/video2.mp4',
    title: 'Adaptive Cohort Management & Multi-Cohort Execution',
    category: 'Cohort Management',
    description: 'Intelligent cohort management structuring multicohort trial designs with independent rules for enrollment, randomization, dose escalation, and inventory dispensing while preventing protocol deviations.',
    duration: '1:58 Min',
    badge: 'Cohort Management',
  },
  {
    id: 'video-3',
    driveId: '192G8xNzXiF_c7LEPubnT2yG2qQV5ax1r',
    localSrc: '/videos/video3.mp4',
    title: 'Centralized Label Management & Sample Traceability',
    category: 'Label Management',
    description: 'Automated, standardized label generation tightly integrated with patient visits and sample workflows, eliminating manual errors with visual verification and complete audit trails.',
    duration: '2:07 Min',
    badge: 'Label Management',
  },
  {
    id: 'video-4',
    driveId: '1nFOdh4TOOhosiMWMKZ2dLRNHn05s0Sd8',
    localSrc: '/videos/video4.mp4',
    title: 'Sample Management Setup & Biometric Configuration',
    category: 'Setup & Biometrics',
    description: 'Accurate configuration of sample workflows, biometric fingerprint authentication for patient linkage, flexible sample definitions, scheduled time point collections, and cold-storage tracking.',
    duration: '1:38 Min',
    badge: 'Setup & Biometrics',
  },
];

const CATEGORIES = ['All', 'Customer Stories', 'Sample Management', 'Cohort Management', 'Label Management', 'Setup & Biometrics'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTheaterVideo, setActiveTheaterVideo] = useState<GalleryVideo | null>(null);

  const filteredVideos = selectedCategory === 'All'
    ? GALLERY_VIDEOS
    : GALLERY_VIDEOS.filter((v) => v.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/60">
      {/* Header Banner */}
      <section className="py-9 md:py-10 border-b border-blue-100" style={{ backgroundColor: '#D7E3FA' }}>
        <div className="container">
          <div className="max-w-3xl text-left space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-700/10 border border-blue-700/20 text-blue-900 text-xs font-semibold uppercase tracking-wider">
              <Film className="w-3.5 h-3.5 text-blue-800" />
              Multimedia Showcase
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              SyMetric Gallery
            </h1>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Explore our journey, milestone achievements, clinical trial solutions, team culture, and platform innovation through our curated video showcase.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container py-6 md:py-8 flex-1">
        {/* Category Filters & Counter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-sm ring-2 ring-primary/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-500 flex items-center gap-1.5">
            <Video className="w-4 h-4 text-primary" />
            Showing {filteredVideos.length} {filteredVideos.length === 1 ? 'Video' : 'Videos'}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredVideos.map((video) => {
            const driveDirectUrl = `https://drive.google.com/file/d/${video.driveId}/view`;
            const thumbnailUrl = `https://drive.google.com/thumbnail?id=${video.driveId}&sz=w1000`;

            return (
              <Card
                key={video.id}
                className="overflow-hidden group flex flex-col rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Native Pixel-Perfect Video Player Container */}
                <div className="relative w-full aspect-video bg-black overflow-hidden select-none">
                  <video
                    src={video.localSrc}
                    poster={thumbnailUrl}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain bg-black"
                  >
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Category Badge overlay */}
                  <div className="absolute top-2.5 left-2.5 pointer-events-none z-10">
                    <span className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/20">
                      {video.badge}
                    </span>
                  </div>
                </div>

                <CardHeader className="p-5 pb-3">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                      {video.category}
                    </span>
                    {video.duration && (
                      <span className="text-xs font-medium text-slate-500">
                        {video.duration}
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 leading-snug">
                    {video.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-5 pt-0 flex-grow flex flex-col justify-between">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {video.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveTheaterVideo(video)}
                      className="text-xs text-slate-700 hover:text-primary font-medium gap-1.5 hover:bg-blue-50"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      Expand Theater
                    </Button>

                    <a
                      href={driveDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-primary transition-colors"
                      title="Open source file on Google Drive"
                    >
                      Drive
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      {/* Expanded Theater Modal */}
      {activeTheaterVideo && (
        <Dialog open={Boolean(activeTheaterVideo)} onOpenChange={(open) => !open && setActiveTheaterVideo(null)}>
          <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden rounded-2xl bg-black border-slate-800 shadow-2xl">
            <div className="p-4 bg-slate-900/95 backdrop-blur text-white flex items-center justify-between border-b border-slate-800">
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  {activeTheaterVideo.category} &bull; SyMetric Multimedia
                </span>
                <DialogTitle className="text-lg md:text-xl font-bold text-white">
                  {activeTheaterVideo.title}
                </DialogTitle>
              </div>
            </div>

            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <video
                src={activeTheaterVideo.localSrc}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="p-4 bg-slate-900 text-slate-300 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-800">
              <p className="line-clamp-2 max-w-2xl text-slate-300 text-xs md:text-sm">
                {activeTheaterVideo.description}
              </p>
              <a
                href={`https://drive.google.com/file/d/${activeTheaterVideo.driveId}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shrink-0"
              >
                Open in Google Drive
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
