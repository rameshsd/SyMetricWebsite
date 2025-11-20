'use client';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import type { LucideIcon } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  chartData?: { value: number }[];
  chartColor?: string;
  variant?: 'default' | 'simple';
  isLoading?: boolean;
}

export function StatCard({ title, value, icon: Icon, chartData, chartColor, variant = 'default', isLoading = false }: StatCardProps) {
    if (variant === 'simple') {
        return (
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{title}</CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    {isLoading ? <Skeleton className="h-8 w-24" /> : <div className="text-2xl font-bold">{value}</div>}
                </CardContent>
            </Card>
        )
    }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
            {isLoading ? <Skeleton className="h-9 w-28 mt-1" /> : <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>}
          </div>
          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
        {chartData && chartColor && (
          <div className="h-16 mt-4">
            {isLoading ? <Skeleton className="h-full w-full" /> : 
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id={`color-${title.replace(/\s+/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartColor} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={chartColor}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill={`url(#color-${title.replace(/\s+/g, '')})`}
                />
              </AreaChart>
            </ResponsiveContainer>
            }
          </div>
        )}
      </CardContent>
    </Card>
  );
}
