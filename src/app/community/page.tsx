
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  AlertCircle,
  ArrowRight,
  Globe,
  MessageSquare,
  Search,
  Users,
  X,
  ThumbsUp,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { communityLeadersSlides, featuredTopics, welcomeLinks, topAuthors } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RecentPosts } from '@/components/community/RecentPosts';

export const metadata: Metadata = {
  title: 'Community - SyMetric',
  description:
    'Connect and engage with the SyMetric community to get answers, discuss best practices, and learn more about our solutions.',
};

export default function CommunityPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Welcome to SyMetric Community
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Connect and engage with our community to get answers, discuss
                best practices, and continually learn more about SyMetric
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row bg-background rounded-md p-1.5 shadow-md w-full max-w-lg gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-40 border-none bg-muted h-10 text-foreground">
                    <SelectValue placeholder="All community" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All community</SelectItem>
                    <SelectItem value="products">Products</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative w-full">
                  <Input
                    type="search"
                    placeholder="Search Community"
                    className="w-full bg-transparent border-none focus-visible:ring-0 h-10 pl-4 pr-10"
                  />
                  <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-x-8 gap-y-2 flex-wrap text-sm pt-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>2.8M Posts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>1.4M Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>692K Online</span>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-md mx-auto overflow-hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {communityLeadersSlides.map((slide, index) => (
                    <CarouselItem key={index} className="px-2">
                      <div className="p-1">
                        <Card className="bg-background/90 text-foreground p-8 rounded-2xl">
                          <CardContent className="p-0">
                            <h3 className="text-xl font-bold mb-3">
                              {slide.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {slide.description.split(' and ').map((part, i, arr) => (
                                <React.Fragment key={i}>
                                  {i > 0 && ' and '}
                                  {part.split(' ').map((word, j) => {
                                      const link = slide.links.find(l => word.startsWith(l.text.split(' ')[0]));
                                      if (link) {
                                          return <Link key={j} href={link.href} className="text-primary hover:underline">{link.text} </Link>;
                                      }
                                      return word + ' ';
                                  })}
                                </React.Fragment>
                              ))}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <div className="border-b bg-secondary/50">
        <div className="container">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              <p className="text-sm text-foreground">
                The next set of progression badges have been announced!{' '}
                <Link href="#" className="font-semibold underline hover:text-primary">
                  Let's Discuss!
                </Link>
              </p>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Topics Section */}
      <section>
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Featured Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTopics.map((topic) => {
              const image = PlaceHolderImages.find(p => p.id === topic.imageId);
              return (
                <Card key={topic.id} className="group overflow-hidden rounded-2xl transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <Link href="#">
                    <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={topic.title}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
                <Link href="#">View All Topics <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="bg-secondary/50">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8">

            {/* Recent Posts */}
            <div className="xl:col-span-8 w-full">
              <RecentPosts />
            </div>

            {/* Right Sidebar */}
            <div className="xl:col-span-4">
              <div className="space-y-6 xl:sticky xl:top-24 w-full">

                {/* Welcome Card */}
                <Card className="p-4 sm:p-6 w-full overflow-hidden">
                  <h3 className="font-bold text-lg mb-4">Welcome to SyMetric Community!</h3>
                  <p className="text-muted-foreground mb-6">
                    These materials will help you participate and connect with other members.
                  </p>
                  <ul className="space-y-4">
                    {welcomeLinks.map(link => (
                      <li key={link.title}>
                        <Link href="#" className="flex items-start gap-4 group">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <link.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold group-hover:text-primary">{link.title}</p>
                            <p className="text-sm text-muted-foreground break-words">{link.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Top Authors */}
                <Card className="p-4 sm:p-6 w-full overflow-hidden">
                  <h3 className="font-bold text-lg mb-4">Top Kudoed Authors</h3>
                  <ul className="space-y-4">
                    {topAuthors.map(author => {
                      const avatarImg = PlaceHolderImages.find(p => p.id === author.avatarId);
                      return (
                      <li key={author.id} className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-3 min-w-0">
                           <Avatar className="h-9 w-9">
                              {avatarImg ? <AvatarImage src={avatarImg.imageUrl} alt={author.name} /> : <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>}
                           </Avatar>
                          <div className="min-w-0">
                            <p className="font-semibold text-sm truncate">{author.name}</p>
                             {author.sapLogo && <Image src={author.sapLogo} alt="SAP Logo" width={24} height={12} />}
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-muted-foreground shrink-0">
                          <ThumbsUp className="h-4 w-4" /> {author.kudos}
                        </div>
                      </li>
                    )})}
                  </ul>
                </Card>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
