'use client'
import Head from 'next/head';
import Sidebar from '@/components/admin/Sidebar';
import DashboardContent from '@/components/admin/DashboardContent';

export default function AdminHome() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      <div className="flex h-screen"> 
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}
