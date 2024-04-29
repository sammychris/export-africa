// components/admin/Sidebar.js
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="sticky top-0 h-screen w-64 bg-white shadow-md flex flex-col">
        {/* Company Logo */}
        <div className="p-4"> 
            <Link href="/admin">
                <img src="/logo.svg" alt="Company Logo" className="h-10" />
            </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow overflow-y-auto"> 
            <ul className="space-y-4">
                <li>
                    <Link href="/admin" className="nav-link">
                        <i className="fas fa-home"></i> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link href="/admin/user" className="nav-link">
                        <i className="fas fa-users"></i> <span>User Management</span> 
                    </Link>
                </li>
                <li>
                    <Link href="/admin/products" className="nav-link">
                        <i className="fas fa-users"></i> <span>Product Management</span> 
                    </Link>
                </li>
                {/* Add more links as needed (Products, Content, etc.) */}
            </ul>
        </nav>

        {/* Example: User Profile (Optional) */}
        <div className="p-4 border-t">
            {/* User information here */}
        </div>
    </aside>
  );
};

export default Sidebar;
