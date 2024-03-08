'use client'
import Head from 'next/head';
import Sidebar from '@/components/admin/Sidebar';
import ProductManagementLayout from '@/components/admin/ProductManagementLayout';
  

export default function AdminProducts() {
  return (
    <div>
      <Head>
        <title>Product Management</title>
      </Head>
      <div className="flex h-screen"> 
        <Sidebar />
        <ProductManagementLayout />
      </div>
    </div>
  );
}
