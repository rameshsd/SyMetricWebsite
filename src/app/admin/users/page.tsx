'use client';
import { SectionTitle } from '@/components/shared/section-title';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';

// Define a type for the user data for clarity
interface UserProfile {
  id: string;
  name?: string;
  email?: string;
  role?: 'Admin' | 'Editor' | 'Viewer' | 'Member';
  status?: 'Active' | 'Inactive';
}

export default function UsersPage() {
  const firestore = useFirestore();
  
  // Memoize the query to prevent re-renders
  const usersQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'users');
  }, [firestore]);

  // Use the useCollection hook to fetch user data
  const { data: users, isLoading } = useCollection<UserProfile>(usersQuery);

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
                {isLoading && Array.from({ length: 4 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell colSpan={4} className="text-center">Loading...</TableCell>
                  </TableRow>
                ))}
                {users && users.map((user) => (
                    <TableRow key={user.id}>
                    <TableCell>
                        <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarFallback>{(user.name || user.email || 'U').split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium">{user.name || 'N/A'}</p>
                            <p className="text-sm text-muted-foreground">{user.email || 'No email'}</p>
                        </div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>{user.role || 'Member'}</Badge>
                    </TableCell>
                    <TableCell>
                        <Badge variant={user.status === 'Active' ? 'outline' : 'destructive'} className={user.status === 'Active' ? 'text-green-600 border-green-600' : ''}>
                        {user.status || 'Inactive'}
                        </Badge>
                    </TableCell>
                    <TableCell>
                        <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </TableCell>
                    </TableRow>
                ))}
                {!isLoading && users?.length === 0 && (
                   <TableRow>
                    <TableCell colSpan={4} className="h-24 text-center">No users found.</TableCell>
                  </TableRow>
                )}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
