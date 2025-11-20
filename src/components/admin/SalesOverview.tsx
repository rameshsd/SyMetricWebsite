'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

interface SalesOverviewProps {
  data: { name: string; sales: number }[];
  isLoading: boolean;
}

export function SalesOverview({ data, isLoading }: SalesOverviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics Overview</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-4">
          <p className="text-4xl font-bold">4,374</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Sales this month</p>
          <div className="flex items-center text-sm text-green-500">
            <ArrowUp className="w-4 h-4 mr-1" />
            <span>11% more sales in comparison to last month.</span>
          </div>
          <div className="flex items-center text-sm text-red-500">
            <ArrowDown className="w-4 h-4 mr-1" />
            <span>-2% revenue per sale in comparison to last month.</span>
          </div>
          <Button>View Details</Button>
        </div>
        <div className="md:col-span-3 h-80">
          {isLoading ? <Skeleton className="h-full w-full" /> : 
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
              />
              <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          }
        </div>
      </CardContent>
    </Card>
  );
}
