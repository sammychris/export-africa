import { useState, useEffect } from 'react';
// import { DndProvider } from 'react-dnd'; 
// import { HTML5Backend } from 'react-dnd-html5-backend'; 
// import Tree from './CategoryTree'; 



const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    { 
      name: "Electronics", 
      parent: null, 
      measurementUnits: [{ label: "Units", value: "units"}, { label: "Volts", value: "V" }] 
    },
    { 
      name: "Televisions", 
      parent: "Electronics", // Assuming we have the ObjectID of "Electronics"
      measurementUnits: [] // No specific units for televisions  
    },
    { 
      name: "Computers", 
      parent: "Electronics", 
      measurementUnits: [{ label: "Storage", value: "GB" }] 
    },
    // ... more categories
  ]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 



  // useEffect(() => {
  //   const fetchCategories = async () => { 
  //     setIsLoading(true); 
  //     try {
  //       const response = await fetch('/api/categories');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch categories');
  //       }
  //       const data = await response.json();
  //       setCategories(data);
  //     } catch (error) {
  //       setError(error); 
  //       console.error('Error fetching categories:', error);
  //     } finally {
  //       setIsLoading(false); 
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  return (
    <>
        {/* <DndProvider backend={HTML5Backend}> */}
          {/* <div>
            <h2 className="text-lg font-semibold mb-4">Manage Categories</h2>
              {isLoading && <p>Loading categories...</p>}
              {error && <p className="text-red-500">Error: {error.message}</p>}
              {!isLoading && !error && <Tree categories={categories} />} 
          </div> */}
        {/* </DndProvider> */}        

    </>
  );
};

export default CategoryManagement;
