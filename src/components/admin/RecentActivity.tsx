
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { Skeleton } from "../ui/skeleton";

interface Activity {
    id: string;
    userId: string;
    path: string;
    timestamp: Timestamp;
}

interface RecentActivityProps {
    activities: Activity[] | null;
    isLoading: boolean;
}

export function RecentActivity({ activities, isLoading }: RecentActivityProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {isLoading && Array.from({length: 5}).map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                ))}
                {!isLoading && activities?.map((activity) => {
                    const timeAgo = activity.timestamp ? formatDistanceToNow(activity.timestamp.toDate(), { addSuffix: true }) : 'just now';
                    return (
                        <div key={activity.id} className="flex items-center gap-4">
                            <Avatar>
                                <AvatarFallback>{activity.userId.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <p className="text-sm font-medium">User <span className="font-mono text-xs text-primary">{activity.userId.substring(0, 6)}...</span> viewed page <span className="font-semibold text-primary">{activity.path}</span></p>
                                <p className="text-xs text-muted-foreground">{timeAgo}</p>
                            </div>
                        </div>
                    )
                })}
                 {!isLoading && activities?.length === 0 && (
                    <p className="text-muted-foreground text-center">No recent activity to display.</p>
                 )}
            </CardContent>
        </Card>
    )
}
