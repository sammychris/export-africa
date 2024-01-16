import React from 'react';
import CategoryOption from './CategoryOption';

const CategoryOptionsList = ({ category, handleEditCategory, handleDeleteCategory, handleGetCategory, optionsRef }) => {
  return (
    <div className="bg-white absolute right-[-50px] top-12 z-10 shadow-[2px_2px_7px_0px_#00000061] rounded-[5px]" ref={optionsRef}>
        <ul>
            <CategoryOption text="Edit" onClick={() => handleEditCategory(category)} />
            <CategoryOption text="Delete" onClick={() => handleDeleteCategory(category?.id)} />
            <CategoryOption text="Info" onClick={() => handleGetCategory(category?.id)} />
        </ul>
    </div>
  );
};

export default CategoryOptionsList;
