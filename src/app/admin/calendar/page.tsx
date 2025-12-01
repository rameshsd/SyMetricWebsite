'use client';

import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const events = [
    { date: new Date(2024, 7, 28), title: 'Team Sync', color: 'bg-blue-500' },
    { date: new Date(2024, 7, 30), title: 'Product Launch', color: 'bg-green-500' },
    { date: new Date(2024, 8, 5), title: 'Q3 Planning', color: 'bg-purple-500' },
];

export default function CalendarPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="space-y-8">
            <SectionTitle title="Calendar" description="Manage your schedule and events." />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card>
                        <CardContent className="p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="p-0"
                                classNames={{
                                    root: 'w-full',
                                    months: 'flex-1',
                                    month: 'w-full',
                                    table: 'w-full',
                                    head_row: 'grid grid-cols-7',
                                    row: 'grid grid-cols-7',
                                    day: 'h-14',
                                }}
                                components={{
                                    DayContent: ({ date }) => {
                                        const dayEvents = events.filter(e => e.date.toDateString() === date.toDateString());
                                        return (
                                            <div className="relative h-full w-full flex flex-col items-center justify-start p-1">
                                                <span>{date.getDate()}</span>
                                                <div className="flex gap-1 mt-1">
                                                {dayEvents.map(event => (
                                                    <div key={event.title} className={`h-1.5 w-1.5 rounded-full ${event.color}`} />
                                                ))}
                                                </div>
                                            </div>
                                        );
                                    }
                                }}
                            />
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Events</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {events.map(event => (
                                <div key={event.title} className="flex items-center gap-4">
                                    <div className="flex flex-col text-sm items-center">
                                        <span className="font-bold">{event.date.toLocaleString('default', { month: 'short' })}</span>
                                        <span>{event.date.getDate()}</span>
                                    </div>
                                    <div className={`w-1 h-10 rounded-full ${event.color}`} />
                                    <div>
                                        <p className="font-semibold">{event.title}</p>
                                        <p className="text-xs text-muted-foreground">{event.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
