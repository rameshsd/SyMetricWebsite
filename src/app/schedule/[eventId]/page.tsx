
'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, Timestamp } from 'firebase/firestore';
import type { CalendarEvent } from '@/lib/types';
import { add, format, eachMinuteOfInterval, isBefore, startOfDay, addDays, getHours } from 'date-fns';

import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Clock, Video, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

function EventDetailsSkeleton() {
    return (
        <div className="space-y-4">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-48" />
        </div>
    )
}

function CalendarSkeleton() {
    return (
        <div className="flex flex-col items-center">
            <Skeleton className="h-[280px] w-full" />
            <div className="mt-4 w-full space-y-2">
                 <Skeleton className="h-10 w-full" />
                 <Skeleton className="h-10 w-full" />
                 <Skeleton className="h-10 w-full" />
            </div>
        </div>
    )
}

export default function ScheduleEventPage() {
    const params = useParams();
    const eventId = params.eventId as string;
    const firestore = useFirestore();
    const { toast } = useToast();

    const eventDocRef = useMemoFirebase(() => firestore ? doc(firestore, 'calendarEvents', eventId) : null, [firestore, eventId]);
    const { data: event, isLoading: isEventLoading } = useDoc<CalendarEvent>(eventDocRef);
    
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);

    if (isEventLoading) {
        return (
            <div className="flex-1 w-full bg-secondary/50">
                <main className="container mx-auto px-4 py-8 md:py-16">
                    <Card className="grid md:grid-cols-3 shadow-lg rounded-2xl">
                        <div className="p-8 border-r"><EventDetailsSkeleton /></div>
                        <div className="md:col-span-2 p-8"><CalendarSkeleton /></div>
                    </Card>
                </main>
            </div>
        )
    }

    if (!event) {
        notFound();
    }
    
    const eventStart = (event.start as Timestamp).toDate();
    const eventEnd = (event.end as Timestamp).toDate();
    const duration = (eventEnd.getTime() - eventStart.getTime()) / (1000 * 60);

    // Generate time slots
    const timeSlots = selectedDate
        ? eachMinuteOfInterval(
            {
                start: startOfDay(selectedDate),
                end: addDays(startOfDay(selectedDate), 1)
            },
            { step: 30 }
        ).filter(date => getHours(date) >= 9 && getHours(date) < 17) // Filter for working hours 9 AM to 5 PM
        : [];

    
    const handleConfirmBooking = () => {
        if (!selectedTime) return;
        toast({
            title: "Booking Confirmed!",
            description: `Your meeting is scheduled for ${format(selectedTime, 'PPp')}.`
        });
        setSelectedTime(null);
    }

    return (
        <div className="flex-1 w-full bg-secondary/50">
            <main className="container mx-auto px-4 py-8 md:py-16">
                <Card className="grid md:grid-cols-3 shadow-lg rounded-2xl overflow-hidden min-h-[600px]">
                    <div className="p-8 border-r bg-background">
                        <div className="sticky top-24">
                            <p className="text-sm text-muted-foreground">SyMetric Systems</p>
                            <h1 className="text-2xl font-bold mt-2">{event.title}</h1>
                            <div className="space-y-3 text-muted-foreground mt-6">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5"/>
                                    <span>{duration} minutes</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Video className="w-5 h-5"/>
                                    <span>Web conferencing details provided upon confirmation.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 p-4 md:p-8 bg-background">
                        {selectedTime ? (
                             <div className="flex flex-col items-center justify-center h-full text-center">
                                <h2 className="text-xl font-bold mb-4">Confirm Your Booking</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    You are booking a meeting for <span className="text-primary font-semibold">{format(selectedTime, 'p')}</span> on <span className="text-primary font-semibold">{format(selectedTime, 'PPPP')}</span>.
                                </p>
                                <div className="flex gap-4">
                                     <Button variant="outline" onClick={() => setSelectedTime(null)}>Cancel</Button>
                                    <Button onClick={handleConfirmBooking}>Confirm</Button>
                                </div>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-8 h-full">
                                <div className="flex flex-col">
                                    <h2 className="text-lg font-bold mb-4">Select a Date</h2>
                                     <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={setSelectedDate}
                                        disabled={(date) => isBefore(date, startOfDay(new Date()))}
                                        className="p-0"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-lg font-bold mb-4">{selectedDate ? format(selectedDate, "cccc, LLLL d") : "Select a time"}</h2>
                                    <div className="grid grid-cols-1 gap-2 overflow-y-auto max-h-[400px]">
                                        {timeSlots.map((time, index) => (
                                            <Button
                                                key={index}
                                                variant="outline"
                                                className="w-full justify-center"
                                                onClick={() => setSelectedTime(time)}
                                            >
                                                {format(time, 'p')}
                                            </Button>
                                        ))}
                                        {timeSlots.length === 0 && <p className="text-muted-foreground text-sm text-center">No available times for this date.</p>}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Card>
            </main>
        </div>
    );
}

