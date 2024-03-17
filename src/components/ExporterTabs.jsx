import React from 'react';
import AddNewOptions from './AddNewOptions';
import { HiOutlinePlus } from "react-icons/hi";
import ExporterTabItem from './ExportTabItem';
import CloseButton from './CloseButton';

const tabs = [
  { page: "product", label: "Products" },
  { page: "gallery", label: "Gallery" },
  { page: "review", label: "Reviews" }
];

// ExporterTabs component
const ExporterTabs = ({ handlePageSelect, selectedPage, handleCloseForm, isProfileOwner }) => {
      const newPage = selectedPage?.replace('Form', '');

      return (
          <div className="mb-4 relative flex justify-between">
            <div className="flex space-x-4">
              <ul className="flex border-b">
              {tabs.map(tab => (
                  <li
                    key={tab.page} 
                    onClick={() => handlePageSelect(tab.page)}
                      className={`
                          tab 
                          px-6 py-3 
                          border-b-2 
                          text-gray-700 hover:text-blue-600 focus:outline-none 
                          transition-colors  
                          cursor-pointer
                          ${newPage === tab.page ? 'border-blue-500 text-blue-600' : ''} 
                      `}> 
                      {tab.label}
                  </li>
                ))}
              </ul>
            </div>
            { isProfileOwner && (
                selectedPage.endsWith('Form')
                  ? <CloseButton onClick={handleCloseForm}/>
                  : <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePageSelect(newPage+'Form')
                  }}
                  className="text-xs font-semibold text-deep-blue hover:underline bg-white px-4 py-2 border flex items-center">
                    Add {newPage} <HiOutlinePlus size={20} className='ml-1'/>
                </button>)}
          </div>
      )}

export default ExporterTabs;