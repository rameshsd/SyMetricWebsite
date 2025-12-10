
'use client';

import { useState, useMemo, Fragment } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, Loader2, Plus, Share, Link as LinkIcon, Copy } from 'lucide-react';
import { format, addDays, startOfWeek, eachDayOfInterval, endOfWeek, isSameDay, isToday } from 'date-fns';

import { useFirestore, useCollection, useMemoFirebase, addDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy, Timestamp } from 'firebase/firestore';
import type { CalendarEvent } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';


const eventSchema = z.object({
  title: z.string().min(2, 'Title is required.'),
  description: z.string().optional(),
  start: z.date({ required_error: "A start date is required."}),
  end: z.date({ required_error: "An end date is required."}),
  color: z.string().optional(),
});

function AddEventForm({ onEventAdded }: { onEventAdded: () => void }) {
    const firestore = useFirestore();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const form = useForm<z.infer<typeof eventSchema>>({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            title: '',
            description: '',
            start: new Date(),
            end: new Date(),
            color: 'blue',
        }
    });

    async function onSubmit(values: z.infer<typeof eventSchema>) {
        if (!firestore) return;
        setIsSubmitting(true);
        try {
            await addDocumentNonBlocking(collection(firestore, 'calendarEvents'), {
                ...values,
                allDay: false, 
            });
            toast({ title: 'Event Created Successfully' });
            onEventAdded();
            form.reset();
            setIsOpen(false);
        } catch(e) {
            toast({ variant: 'destructive', title: 'Error', description: (e as Error).message });
        } finally {
            setIsSubmitting(false);
        }
    }
    
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Event
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>Create New Event</DialogTitle>
                            <DialogDescription>Fill out the details for your new calendar event.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <FormField name="title" control={form.control} render={({field}) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl><Input {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                            <FormField name="start" control={form.control} render={({field}) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Start Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button variant="outline" className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                                                    {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar mode="single" selected={field.value} onSelect={field.onChange} />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                             <FormField name="end" control={form.control} render={({field}) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>End Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button variant="outline" className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                                                    {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar mode="single" selected={field.value} onSelect={field.onChange} />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                            <FormField name="description" control={form.control} render={({field}) => (
                                <FormItem>
                                    <FormLabel>Description (Optional)</FormLabel>
                                    <FormControl><Textarea {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild><Button variant="ghost">Cancel</Button></DialogClose>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {isSubmitting ? 'Creating...' : 'Create Event'}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

function EventPopover({ event }: { event: CalendarEvent }) {
    const { toast } = useToast();
    const [schedulingLink, setSchedulingLink] = useState('');

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            setSchedulingLink(`${window.location.origin}/schedule/${event.id}`);
        }
    }, [event.id]);

    const copyToClipboard = () => {
        if (schedulingLink) {
            navigator.clipboard.writeText(schedulingLink);
            toast({ title: "Link Copied!", description: "Scheduling link has been copied to your clipboard." });
        }
    };

    const duration = event.start && event.end
        ? ((event.end as Timestamp).toMillis() - (event.start as Timestamp).toMillis()) / (1000 * 60)
        : 0;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100 cursor-pointer">
                    <p className="order-1 font-semibold text-blue-700">{event.title}</p>
                    <p className="text-blue-500 group-hover:text-blue-700">
                        {event.start && <time dateTime={(event.start as Timestamp).toDate().toISOString()}>{format((event.start as Timestamp).toDate(), 'p')}</time>}
                    </p>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-96 p-0" align="start">
                <div className="grid grid-cols-3">
                    <div className="col-span-1 p-6 border-r">
                         <h3 className="font-bold">{event.title}</h3>
                         <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
                         <div className="flex items-center gap-2 mt-4 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground"/>
                            <span>{duration} min</span>
                         </div>
                    </div>
                     <div className="col-span-2 p-6">
                        <h4 className="font-semibold text-sm">Share This Event</h4>
                        <p className="text-xs text-muted-foreground mt-1">Copy the link below to share your public booking page.</p>
                        <div className="flex items-center gap-2 mt-4">
                            <Input value={schedulingLink} readOnly className="h-9"/>
                            <Button size="sm" onClick={copyToClipboard} disabled={!schedulingLink}>
                               <Copy className="mr-2 h-4 w-4" /> Copy
                            </Button>
                        </div>
                        <Button variant="outline" size="sm" asChild className="mt-2 w-full">
                            <Link href={schedulingLink} target="_blank">
                                <LinkIcon className="mr-2 h-4 w-4"/> View Public Page
                            </Link>
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default function CalendarPage() {
    const firestore = useFirestore();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [forceRerender, setForceRerender] = useState(0);

    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
    const weekDays = eachDayOfInterval({ start: weekStart, end: endOfWeek(currentDate, { weekStartsOn: 1 }) });

    const eventsQuery = useMemoFirebase(
        () => firestore ? query(collection(firestore, 'calendarEvents'), orderBy('start', 'asc')) : null,
        [firestore, forceRerender]
    );

    const { data: eventsData, isLoading } = useCollection<CalendarEvent>(eventsQuery);
    
    const events = useMemo(() => {
        return eventsData?.map(e => ({
            ...e,
            start: (e.start as Timestamp).toDate(),
            end: (e.end as Timestamp).toDate(),
        })) || [];
    }, [eventsData]);

    const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM to 7 PM

    const getEventPosition = (event: CalendarEvent) => {
        const startHour = (event.start as Date).getHours();
        const startMinutes = (event.start as Date).getMinutes();
        const endHour = (event.end as Date).getHours();
        const endMinutes = (event.end as Date).getMinutes();

        const top = ((startHour - 8) * 60 + startMinutes) / (12 * 60) * 100;
        const duration = ((endHour * 60 + endMinutes) - (startHour * 60 + startMinutes));
        const height = (duration / (12 * 60)) * 100;

        return { top: `${top}%`, height: `${height}%` };
    };
    
    return (
        <div className="flex h-full flex-col">
            <header className="flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                        <span className="hidden md:inline">Calendar</span>
                    </h1>
                     <AddEventForm onEventAdded={() => setForceRerender(c => c + 1)} />
                </div>
                <div className="flex items-center">
                    <div className="flex items-center rounded-md shadow-sm md:items-stretch">
                        <Button variant="ghost" size="icon" onClick={() => setCurrentDate(addDays(currentDate, -7))}>
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" onClick={() => setCurrentDate(new Date())}>Today</Button>
                        <Button variant="ghost" size="icon" onClick={() => setCurrentDate(addDays(currentDate, 7))}>
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                    <div className="hidden md:ml-4 md:flex md:items-center">
                       <h2 className="text-lg font-semibold text-gray-900 dark:text-white ml-4">
                            {format(currentDate, 'MMMM yyyy')}
                        </h2>
                    </div>
                </div>
            </header>
            <div className="flex flex-auto overflow-hidden bg-white dark:bg-background">
                <div className="flex flex-auto flex-col">
                    <div className="grid flex-none grid-cols-7 text-xs font-semibold leading-6 text-gray-700 dark:text-gray-300">
                        {weekDays.map(day => (
                            <div key={day.toISOString()} className="flex justify-center p-3">
                                <span>{format(day, 'EEE')}</span>
                                <span className={cn("ml-1.5 flex h-6 w-6 items-center justify-center rounded-full text-base font-semibold", isToday(day) && "bg-primary text-primary-foreground")}>
                                    {format(day, 'd')}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-auto">
                        <div className="grid flex-auto grid-cols-1 grid-rows-1">
                            {/* Horizontal lines */}
                            <div className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100 dark:divide-gray-700" style={{ gridTemplateRows: 'repeat(12, minmax(3.5rem, 1fr))' }}>
                                <div className="row-end-1 h-7"></div>
                                {hours.map(hour => (
                                    <div key={hour}>
                                        <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                            {format(new Date(0, 0, 0, hour), 'h a')}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Vertical lines */}
                            <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 dark:divide-gray-700 sm:grid">
                                <div className="col-start-1 row-span-full" />
                                <div className="col-start-2 row-span-full" />
                                <div className="col-start-3 row-span-full" />
                                <div className="col-start-4 row-span-full" />
                                <div className="col-start-5 row-span-full" />
                                <div className="col-start-6 row-span-full" />
                                <div className="col-start-7 row-span-full" />
                                <div className="col-start-8 row-span-full w-8" />
                            </div>

                            {/* Events */}
                            <ol className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8" style={{ gridTemplateRows: '1.75rem repeat(144, minmax(0, 1fr)) auto' }}>
                                {isLoading && <div className="col-span-full row-span-full flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
                                {events.filter(e => e.start >= weekStart && e.end <= endOfWeek(currentDate, { weekStartsOn: 1 })).map(event => {
                                    const startDayIndex = ((event.start as Date).getDay() + 6) % 7; // Monday is 0
                                    const eventPos = getEventPosition(event);

                                    return (
                                        <li key={event.id} className="relative mt-px flex" style={{ gridColumnStart: startDayIndex + 1, top: eventPos.top, height: eventPos.height }}>
                                            <EventPopover event={event} />
                                        </li>
                                    )
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
