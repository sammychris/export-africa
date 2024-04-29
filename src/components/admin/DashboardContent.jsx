// components/admin/DashboardContent.js
import { useState } from 'react'; // Example state management

const DashboardContent = () => {
  // Sample metrics (replace with real data)
  const [totalUsers, setTotalUsers] = useState(150);
  const [pendingVerifications, setPendingVerifications] = useState(5); 
  const [newProducts, setNewProducts] = useState(20);
  const [newSignups, setNewSignups] = useState({ buyers: 25, exporters: 10 });
  const [productListings, setProductListings] = useState(120);
  const [recentConnections, setRecentConnections] = useState(30);

  // Sample alerts 
  const [alerts, setAlerts] = useState([
      { title: 'New Exporter Request', content: 'Exporter ABC has submitted a verification request.'},
      { title: 'Policy Update', content: 'Please review the updated community guidelines.'}
  ]);


  return (
    <main className="flex-grow p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-2">Total Users</h3>
          <p className="text-3xl font-bold">{totalUsers}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-2">Pending Verifications</h3>
          <p className="text-3xl font-bold text-orange-500">{pendingVerifications}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-2">New Products</h3>
          <p className="text-3xl font-bold text-green-500">{newProducts}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {/* Individual metric card - repeat as needed */}
        <div className="bg-white rounded-lg shadow p-4"> 
          <h3 className="text-lg font-medium mb-2">New Signups</h3>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold">{newSignups.buyers}</p>
            <span className="text-gray-500">Buyers</span>
          </div>
          {/* Repeat for exporters */}
        </div>
        {/* Other metric cards (Pending Verifications, etc.) */}
      </div>


      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid-cols-1 md:grid-cols-3 gap-4">
          {/* Button example - repeat as needed */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
            Approve Exporters
          </button>
          {/* Other buttons (Feature Products, etc.) */}
        </div>
      </div>


      {/* Alerts */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Alerts</h2>
        <ul className="bg-white rounded-lg shadow p-4">
            {alerts.map((alert, index) => (
              <li key={index} className="border-b py-2 px-3">
                <h3 className="text-lg font-medium mb-1">{alert.title}</h3>
                <p className="text-gray-600">{alert.content}</p>
              </li>
            ))}
        </ul>
      </div>



      {/* (More content as you expand the dashboard) */}
    </main>
  );
};

export default DashboardContent;
