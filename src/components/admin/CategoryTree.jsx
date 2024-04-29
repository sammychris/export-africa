import React, { useState, useEffect } from 'react';
import Tree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // Important for styling
import EditCategoryModal from './EditCategoryModal';
import AddCategoryModal from './AddCategoryModal';

const CategoryTree = ({ categories }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [treeData, setTreeData] = useState(categories);

  useEffect(() => {
    // Initially transform your categories data into the format 
    // expected by 'react-sortable-tree' (if needed)
    const initialTreeData = formatCategories(categories);
    setTreeData(initialTreeData);
  }, [categories]); 

  const handleTreeChange = (updatedTreeData) => {
    setTreeData(updatedTreeData);
    // TODO: Send the updated tree structure to your backend
  };

  // ... other functions

  const handleEditOpen = (node) => {
    setSelectedNode(node);
    setIsEditModalOpen(true);
  };

  const handleAddOpen = (parentNode = null) => { 
    setSelectedNode(parentNode); // For adding subcategories
    setIsAddModalOpen(true);
  };

  return (
    <div style={{ height: 400 }}> 
      <button className="bg-blue-500 ..." onClick={() => handleAddOpen()}>
        Add Root Category
      </button>

      <Tree
        treeData={treeData}
        onChange={handleTreeChange}
        // generateNodeProps={({ node }) => ({ 
        //     title: node.name, 
        //     // Add more buttons for edit/delete if needed
        // })}
        generateNodeProps={({ node }) => ({
          buttons: [
            // eslint-disable-next-line react/jsx-key
            <button className="bg-green-500 ..." onClick={() => handleEditOpen(node)}>
              Edit
            </button>,
            // eslint-disable-next-line react/jsx-key
            <button className="bg-blue-500 ..." onClick={() => handleAddOpen(node)}>
              Add Subcategory
            </button>,
            // ... (potentially a delete button)
          ],
        })}
      />
      {isEditModalOpen && (
        <EditCategoryModal 
          node={selectedNode} 
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      {isAddModalOpen && (
        <AddCategoryModal 
          parentNode={selectedNode} 
          onClose={() => setIsAddModalOpen(false)} 
        />
      )}
    </div>
  );
};

// Helper - Adjust this to match your data and the library's format
const formatCategories = (categories) => {
  return categories.map((category) => ({
    title: category.name,
    children: category.subcategories ? formatCategories(category.subcategories) : [],
  }));
};

export default CategoryTree;
