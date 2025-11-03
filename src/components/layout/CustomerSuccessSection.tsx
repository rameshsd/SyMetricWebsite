
"use client";

import { customerSuccessStories } from "@/lib/data";
import { SectionTitle } from "../shared/section-title";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CustomerSuccessSection() {
    
  return (
    <section className="bg-secondary/50">
        <div className="container">
            <SectionTitle
                title="What Our Customers Say"
                description="Real-world success stories from organizations who have partnered with SyMetric."
            />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {customerSuccessStories.map(story => {
                    const avatar = PlaceHolderImages.find(p => p.id === story.avatarId);
                    return (
                        <Card key={story.id} className="bg-background p-6 rounded-2xl flex flex-col">
                            <CardContent className="p-0">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        {avatar && (
                                            <Image 
                                                src={avatar.imageUrl}
                                                alt={story.author}
                                                width={40}
                                                height={40}
                                                className="rounded-full"
                                                data-ai-hint={avatar.imageHint}
                                            />
                                        )}
                                        <div>
                                            <p className="font-bold text-foreground">{story.author}</p>
                                            <p className="text-sm text-muted-foreground">{story.handle}</p>
                                        </div>
                                    </div>
                                    {story.badge && <Badge variant="outline">{story.badge}</Badge>}
                                </div>
                                <blockquote className="text-muted-foreground flex-grow">"{story.quote}"</blockquote>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-xs text-muted-foreground">{story.date}</p>
                                    <Link href={story.link} className="text-xs font-semibold text-primary flex items-center gap-1">
                                        SEE ON X <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
  );
}
