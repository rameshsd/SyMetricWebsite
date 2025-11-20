
import { StatCard } from '@/components/admin/StatCard';
import { SalesOverview } from '@/components/admin/SalesOverview';
import { TaskList } from '@/components/admin/TaskList';
import { Clock, Eye, ShoppingCart, UserCheck, Users } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <TaskList />
        </div>
        <StatCard
          title="Page Views"
          value="92.4k"
          icon={Eye}
          chartData={[{ value: 45 }, { value: 50 }, { value: 30 }, { value: 60 }, { value: 80 }, { value: 70 }]}
          chartColor="hsl(220, 80%, 60%)"
        />
        <StatCard
          title="Unique Users"
          value="67.2k"
          icon={UserCheck}
          chartData={[{ value: 20 }, { value: 40 }, { value: 35 }, { value: 55 }, { value: 45 }, { value: 60 }]}
          chartColor="hsl(40, 90%, 60%)"
        />
      </div>

      <SalesOverview />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="67.4k" icon={Users} variant="simple" />
        <StatCard title="Total Sales" value="96.2k" icon={ShoppingCart} variant="simple" />
        <StatCard title="Conversion Rate" value="6.92%" icon={UserCheck} variant="simple" />
        <StatCard title="Avg. Session" value="16m 48s" icon={Clock} variant="simple" />
      </div>
    </div>
  );
}
