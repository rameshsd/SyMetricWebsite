'use client';

import { StatCard } from '@/components/admin/StatCard';
import { SalesOverview } from '@/components/admin/SalesOverview';
import { TaskList } from '@/components/admin/TaskList';
import { Clock, Eye, ShoppingCart, UserCheck, Users } from 'lucide-react';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, Timestamp } from 'firebase/firestore';
import { subDays } from 'date-fns';

export default function AdminDashboard() {
  const firestore = useFirestore();

  const visitsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'websiteVisits');
  }, [firestore]);

  const { data: visits, isLoading: visitsLoading } = useCollection(visitsQuery);
  
  const usersQuery = useMemoFirebase(() => {
    if(!firestore) return null;
    return collection(firestore, 'users');
  }, [firestore]);
  const {data: users, isLoading: usersLoading} = useCollection(usersQuery);

  const demoRequestsQuery = useMemoFirebase(() => {
    if(!firestore) return null;
    return collection(firestore, 'demoRequests');
  }, [firestore]);
  const {data: demoRequests, isLoading: demoRequestsLoading} = useCollection(demoRequestsQuery);


  const recentVisitsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    const thirtyDaysAgo = subDays(new Date(), 30);
    return query(
      collection(firestore, 'websiteVisits'),
      where('timestamp', '>=', thirtyDaysAgo)
    );
  }, [firestore]);

  const { data: recentVisits, isLoading: recentVisitsLoading } = useCollection(recentVisitsQuery);

  const pageViews = visits?.length || 0;
  const uniqueUsers = visits ? new Set(visits.map(v => v.userId)).size : 0;
  
  const totalUsers = users?.length || 0;
  const totalSales = demoRequests?.length || 0;
  const conversionRate = uniqueUsers > 0 ? ((totalSales / uniqueUsers) * 100).toFixed(2) + '%' : '0.00%';

  const salesData = recentVisits
    ? Array.from({ length: 30 }, (_, i) => {
        const date = subDays(new Date(), 29 - i);
        const dayString = date.toISOString().split('T')[0];
        const sales = recentVisits.filter((visit) => {
          if (!visit.timestamp) return false;
          // Firestore timestamps need to be converted to JS Dates
          const visitDate = (visit.timestamp as Timestamp).toDate();
          return visitDate.toISOString().split('T')[0] === dayString;
        }).length;
        return { name: date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }), sales };
      })
    : [];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <TaskList />
        </div>
        <StatCard
          title="Page Views"
          value={pageViews.toLocaleString()}
          icon={Eye}
          isLoading={visitsLoading}
        />
        <StatCard
          title="Unique Users"
          value={uniqueUsers.toLocaleString()}
          icon={UserCheck}
          isLoading={visitsLoading}
        />
      </div>

      <SalesOverview data={salesData} isLoading={recentVisitsLoading} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value={totalUsers.toLocaleString()} icon={Users} variant="simple" isLoading={usersLoading} />
        <StatCard title="Total Sales" value={totalSales.toLocaleString()} icon={ShoppingCart} variant="simple" isLoading={demoRequestsLoading} />
        <StatCard title="Conversion Rate" value={conversionRate} icon={UserCheck} variant="simple" isLoading={visitsLoading || demoRequestsLoading} />
        <StatCard title="Avg. Session" value="16m 48s" icon={Clock} variant="simple" isLoading={visitsLoading} />
      </div>
    </div>
  );
}
