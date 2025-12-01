'use client';
import { SectionTitle } from '@/components/shared/section-title';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const users = [
    { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { name: 'Bob Williams', email: 'bob@example.com', role: 'Editor', status: 'Active' },
    { name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer', status: 'Inactive' },
    { name: 'David Smith', email: 'david@example.com', role: 'Editor', status: 'Active' },
];

export default function UsersPage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="User Management" description="View, add, and manage user accounts and permissions." />
      <Card>
        <CardHeader>
            <div className="flex justify-between items-center">
                <div>
                    <CardTitle>Users</CardTitle>
                    <CardDescription>A list of all the users in your account.</CardDescription>
                </div>
                <div className="flex gap-2">
                    <Input placeholder="Search users..." className="w-64" />
                    <Button>Add User</Button>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {users.map((user) => (
                    <TableRow key={user.email}>
                    <TableCell>
                        <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>{user.role}</Badge>
                    </TableCell>
                    <TableCell>
                        <Badge variant={user.status === 'Active' ? 'outline' : 'destructive'} className={user.status === 'Active' ? 'text-green-600 border-green-600' : ''}>
                        {user.status}
                        </Badge>
                    </TableCell>
                    <TableCell>
                        <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
