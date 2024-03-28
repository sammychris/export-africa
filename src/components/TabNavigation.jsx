import React from 'react';
import Tab from './Tab'; // Assuming you've created Tab.jsx


const TabNavigation = ({ tabsData, activeTab, setActiveTab }) => (
    <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" role="tablist">
        {tabsData.map((tab) => (
            <Tab
                key={tab.id} 
                label={tab.label}
                href={tab.href}
                active={activeTab === tab.id}
                onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(tab.id);
                }}
            />
        ))}
  </ul>
);

export default TabNavigation;
