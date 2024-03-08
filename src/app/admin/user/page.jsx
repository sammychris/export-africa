import Head from 'next/head';
import Sidebar from '@/components/admin/Sidebar';
import UserManagementLayout from '@/components/admin/UserManagementLayout';

export default function AdminUsers() {
  return (
    <div>
      <Head>
        <title>User Management</title>
      </Head>
      <div className="flex h-screen"> 
        <Sidebar />
        <UserManagementLayout />
      </div>
    </div>
  );
}
