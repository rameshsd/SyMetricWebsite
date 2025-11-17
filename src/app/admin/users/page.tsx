
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Mail, Shield, ArrowRight } from 'lucide-react';
import { usersData } from '@/lib/data';

export default function ManageUsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Manage Users</h1>
      
      <div className="mt-6">
        <Button variant="outline" className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
          <Plus className="mr-2 h-4 w-4" /> Add New User
        </Button>
      </div>

      <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter based on a Study..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="study1">Study 1</SelectItem>
              <SelectItem value="study2">Study 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter based on an Organization..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="org1">Organization 1</SelectItem>
              <SelectItem value="org2">Organization 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter based on a Role..." />
            </SelectTrigger>
             <SelectContent>
              <SelectItem value="role1">Role 1</SelectItem>
              <SelectItem value="role2">Role 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter based on Status..." />
            </SelectTrigger>
             <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Search by FirstName" className="lg:col-span-1" />
          <Button className="bg-blue-800 text-white hover:bg-blue-900 lg:col-span-1">
            Search
          </Button>
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 dark:bg-gray-700">
              <TableHead className="text-gray-600 dark:text-gray-300">First Name</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-300">Last Name</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-300">Login ID</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-300">Organization</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-300">Email ID</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-300">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersData.map((user) => (
              <TableRow key={user.loginId} className="dark:border-gray-700">
                <TableCell className="font-medium text-gray-800 dark:text-gray-200">{user.firstName}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">{user.lastName}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">{user.loginId}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">{user.organization}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">{user.email}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-blue-500" />
                    <Mail className="h-5 w-5 text-gray-400" />
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-end items-center p-4 text-sm text-gray-500 dark:text-gray-400">
          1 - {usersData.length} of {usersData.length}
        </div>
      </div>
    </div>
  );
}
