
'use client';

import { useFirestore, useCollection, useMemoFirebase, updateDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import type { DemoRequest } from '@/lib/types';
import { doc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const statusColors: Record<DemoRequest['status'], string> = {
    New: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    Contacted: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'In Progress': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    Closed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    Archived: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
};


function SalesLeadsTable() {
    const firestore = useFirestore();
    const { toast } = useToast();

    const leadsQuery = useMemoFirebase(
        () => firestore ? query(collection(firestore, 'demoRequests'), orderBy('createdAt', 'desc')) : null,
        [firestore]
    );

    const { data: leads, isLoading } = useCollection<DemoRequest>(leadsQuery);

    const handleStatusChange = (leadId: string, newStatus: DemoRequest['status']) => {
        if (!firestore) return;
        const leadRef = doc(firestore, 'demoRequests', leadId);
        updateDocumentNonBlocking(leadRef, { status: newStatus });
        toast({
            title: "Status Updated",
            description: `Lead status changed to ${newStatus}.`,
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Sales Leads</CardTitle>
                <CardDescription>Manage and track demo requests from potential customers.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && Array.from({ length: 5 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell colSpan={6} className="text-center">Loading...</TableCell>
                            </TableRow>
                        ))}
                        {leads && leads.map(lead => (
                            <TableRow key={lead.id}>
                                <TableCell>{lead.createdAt ? format(lead.createdAt.toDate(), 'PP') : 'N/A'}</TableCell>
                                <TableCell>{lead.name}</TableCell>
                                <TableCell>{lead.company}</TableCell>
                                <TableCell>
                                    <a href={`mailto:${lead.email}`} className="text-primary hover:underline">{lead.email}</a>
                                </TableCell>
                                <TableCell>{lead.phone}</TableCell>
                                <TableCell>
                                    <Select onValueChange={(value: DemoRequest['status']) => handleStatusChange(lead.id, value)} defaultValue={lead.status}>
                                        <SelectTrigger className={cn("w-32", statusColors[lead.status])}>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.keys(statusColors).map(status => (
                                                <SelectItem key={status} value={status}>{status}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                            </TableRow>
                        ))}
                        {!isLoading && leads?.length === 0 && (
                             <TableRow>
                                <TableCell colSpan={6} className="text-center h-24">No leads found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default function SalesAdminPage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="Sales Management" description="Track and manage leads generated from demo requests." />
      <SalesLeadsTable />
    </div>
  );
}
