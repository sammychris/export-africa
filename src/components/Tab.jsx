// Tab.jsx
import React from 'react';
import Link from 'next/link'; // Or your preferred linking component

const Tab = ({ label, href, active, onClick }) => (
  <li className="nav-item -mb-px mr-2 last:mr-0 flex-auto text-center">
    <Link
      href={href}
      onClick={onClick}
      className={`nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent ${active ? 'bg-gray-100 text-gray-800 border-b-2 border-blue-500' : ''}`}
      role="tab"
    >
      {label}
    </Link>
  </li>
);

export default Tab;
