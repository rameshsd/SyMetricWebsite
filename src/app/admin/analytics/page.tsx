
'use client';

import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, Timestamp, orderBy, limit } from 'firebase/firestore';
import { subDays, format } from 'date-fns';
import { StatCard } from '@/components/admin/StatCard';
import { SalesOverview } from '@/components/admin/SalesOverview';
import { Eye, ShoppingCart, UserCheck, Users, Clock, Smartphone, Monitor, ArrowUp, ArrowDown } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { RecentActivity } from '@/components/admin/RecentActivity';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const CustomPieChart = ({ data, title }: { data: { name: string; value: number }[]; title: string }) => (
    <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Pie data={data} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
);

export default function AnalyticsPage() {
    const firestore = useFirestore();

    const visitsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'websiteVisits');
    }, [firestore]);

    const { data: visits, isLoading: visitsLoading } = useCollection(visitsQuery);
    
    const demoRequestsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'demoRequests');
    }, [firestore]);

    const { data: demoRequests, isLoading: demoRequestsLoading } = useCollection(demoRequestsQuery);
    
    const recentVisitsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        const thirtyDaysAgo = subDays(new Date(), 30);
        return query(
        collection(firestore, 'websiteVisits'),
        where('timestamp', '>=', thirtyDaysAgo)
        );
    }, [firestore]);

    const { data: recentVisits, isLoading: recentVisitsLoading } = useCollection(recentVisitsQuery);
    
    const latestActivityQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(
            collection(firestore, 'websiteVisits'),
            orderBy('timestamp', 'desc'),
            limit(5)
        );
    }, [firestore]);

    const { data: latestActivity, isLoading: activityLoading } = useCollection(latestActivityQuery);


    const pageViews = visits?.length || 0;
    const uniqueUsers = visits ? new Set(visits.map(v => v.userId)).size : 0;
    const totalSales = demoRequests?.length || 0;

    const salesData = recentVisits
        ? Array.from({ length: 30 }, (_, i) => {
            const date = subDays(new Date(), 29 - i);
            const dayString = date.toISOString().split('T')[0];
            const sales = recentVisits.filter((visit) => {
            if (!visit.timestamp) return false;
            const visitDate = (visit.timestamp as Timestamp).toDate();
            return visitDate.toISOString().split('T')[0] === dayString;
            }).length;
            return { name: date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }), sales };
        })
        : [];

    const parseUserAgent = (userAgent: string) => {
        let os = 'Other';
        if (/Android/.test(userAgent)) os = 'Android';
        else if (/iPhone|iPad|iPod/.test(userAgent)) os = 'iOS';
        else if (/Windows/.test(userAgent)) os = 'Windows';
        else if (/Mac/.test(userAgent)) os = 'Mac OS';
        else if (/Linux/.test(userAgent)) os = 'Linux';
        return { os };
    };

    const deviceData = visits
        ? Object.entries(visits.reduce((acc, visit) => {
            if (visit.userAgent) {
                const { os } = parseUserAgent(visit.userAgent);
                acc[os] = (acc[os] || 0) + 1;
            }
            return acc;
        }, {} as Record<string, number>)).map(([name, value]) => ({ name, value }))
        : [];
    
    const browserData = [
        { name: 'Chrome', value: 400 },
        { name: 'Firefox', value: 300 },
        { name: 'Safari', value: 300 },
        { name: 'Edge', value: 200 },
    ];


    return (
        <div className="space-y-8">
            <SectionTitle title="Website Analytics" description="An overview of your website's performance." />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Page Views" value={pageViews.toLocaleString()} icon={Eye} isLoading={visitsLoading} />
                <StatCard title="Unique Users" value={uniqueUsers.toLocaleString()} icon={UserCheck} isLoading={visitsLoading} />
                <StatCard title="Total Sales" value={totalSales.toLocaleString()} icon={ShoppingCart} isLoading={demoRequestsLoading} />
                <StatCard title="Conversion Rate" value="6.92%" icon={Users} />
            </div>

            <SalesOverview data={salesData} isLoading={recentVisitsLoading} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <RecentActivity activities={latestActivity} isLoading={activityLoading}/>
                </div>
                <div className="space-y-6">
                   <CustomPieChart data={deviceData} title="Device Breakdown" />
                   <CustomPieChart data={browserData} title="Browser Usage" />
                </div>
            </div>
        </div>
    )
}
