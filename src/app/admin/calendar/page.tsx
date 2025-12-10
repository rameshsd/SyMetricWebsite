
'use client';

import { useState, useMemo } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar as CalendarIcon, Loader2, Plus, Share } from 'lucide-react';
import { format } from 'date-fns';

import { useFirestore, useCollection, useMemoFirebase, addDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy, Timestamp } from 'firebase/firestore';
import type { CalendarEvent } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
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

const eventColors: Record<string, { bg: string, text: string }> = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-500' },
    green: { bg: 'bg-green-500', text: 'text-green-500' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-500' },
    red: { bg: 'bg-red-500', text: 'text-red-500' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500' },
};

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
                allDay: false, // You can add logic for this if needed
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


export default function CalendarPage() {
    const firestore = useFirestore();
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [_, setForceRerender] = useState(0);

    const eventsQuery = useMemoFirebase(
        () => firestore ? query(collection(firestore, 'calendarEvents'), orderBy('start', 'asc')) : null,
        [firestore]
    );

    const { data: eventsData, isLoading } = useCollection<CalendarEvent>(eventsQuery);

    const events = useMemo(() => {
        return eventsData?.map(e => ({
            ...e,
            start: (e.start as Timestamp).toDate(),
            end: (e.end as Timestamp).toDate(),
        })) || [];
    }, [eventsData]);

    const upcomingEvents = useMemo(() => {
        const now = new Date();
        return events.filter(e => e.start >= now).slice(0, 5);
    }, [events]);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
              <SectionTitle title="Calendar" description="Manage your schedule and events." />
              <AddEventForm onEventAdded={() => setForceRerender(c => c + 1)} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card>
                        <CardContent className="p-0">
                            {isLoading ? <Skeleton className="h-[400px] w-full" /> : 
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="p-0"
                                classNames={{
                                    root: 'w-full',
                                    months: 'flex-1',
                                    month: 'w-full',
                                    table: 'w-full border-collapse',
                                    head_row: 'flex',
                                    head_cell: 'w-full text-center text-muted-foreground text-sm pb-2',
                                    row: 'flex w-full mt-2',
                                    cell: 'h-24 w-full text-center text-sm p-1 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                                    day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
                                }}
                                components={{
                                    DayContent: ({ date }) => {
                                        const dayEvents = events.filter(e => format(e.start, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
                                        return (
                                            <div className="relative h-full w-full flex flex-col items-center justify-start p-1">
                                                <time dateTime={date.toISOString()}>{date.getDate()}</time>
                                                <div className="flex flex-col items-start w-full gap-1 mt-1 overflow-hidden">
                                                {dayEvents.map(event => (
                                                    <Badge key={event.id} className={cn('w-full truncate text-xs', event.color && eventColors[event.color]?.bg)}>
                                                        {event.title}
                                                    </Badge>
                                                ))}
                                                </div>
                                            </div>
                                        );
                                    }
                                }}
                            />
                           }
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Events</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             {isLoading && Array.from({length: 3}).map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
                             {!isLoading && upcomingEvents.length === 0 && <p className="text-muted-foreground text-sm">No upcoming events.</p>}
                            {upcomingEvents.map(event => (
                                <div key={event.id} className="flex items-center gap-4 group">
                                    <div className="flex flex-col text-sm items-center">
                                        <span className="font-bold">{format(event.start, 'MMM')}</span>
                                        <span>{event.start.getDate()}</span>
                                    </div>
                                    <div className={cn('w-1 h-10 rounded-full', event.color && eventColors[event.color]?.bg)} />
                                    <div className="flex-1">
                                        <p className="font-semibold">{event.title}</p>
                                        <p className="text-xs text-muted-foreground">{format(event.start, 'p')}</p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                                        <Share className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
