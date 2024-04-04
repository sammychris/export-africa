import React, { useState, useRef } from 'react';
import ExporterTabs from './ExporterTabs';
import ProductGallery from './ProductGallery';
import Reviews from './Reviews';



const MainProfile = ({ exporterInfo }) => {
  const [isAddNew, setIsAddNew] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [isCatForm, setIsCatForm] = useState(false);
  const [isInfoPage, setIsInfoPage] = useState(false);
  const [isCategoryId, setIsCategoryId] = useState(null);
  const {pageCategory, reviews, productCategories, gallery} = exporterInfo;

  const showCategoryForm = () => {
    setIsCatForm(!isCatForm);
    setEditCategoryData(null);
  }

  const showInfoPage = () => {
    setIsInfoPage(!isInfoPage);
  }

  const openCategoryOption = (categoryId) => {
    setIsCategoryId(categoryId === isCategoryId ? null : categoryId);
  }

  const handleEditCategory = (category) => {    
    showCategoryForm();
    const catFormData = {
      id: category?.id,
      title: category?.label,
      color: category?.meta?.color,
      icon: category?.meta?.icon,
      description: category?.description
    }
    setEditCategoryData(catFormData);
    openCategoryOption();
  }


  const handleDeleteCategory = async (categoryId) => {
    const category = organizeData.find(cat => cat.id === categoryId);
    const catTasks = category.tasks;
      if(!confirm("Are you sure, you want to use this option?")) return;
      setStatus('Deleting Category...')
      await deleteCategory(categoryId);
      for(let i = 0; i < catTasks.length; i++){
        await deleteTask(catTasks[i].id);
      }
      fetchData();
  }


  const handleGetCategory = async (categoryId) => {
    showInfoPage();
    const data = await getCategoryById(categoryId);
    setCategoryItem(data);
  }

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      {/* Primary Information */}
      <div className="flex flex-col md:flex-row items-center mb-10">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="mailto:exporter@example.com"
            className="text-deep-blue hover:underline py-2 pr-4 rounded-md text-sm font-semibold"
          >
            Contact Exporter
          </a>
          <a
            href="#quote"
            className="text-deep-blue hover:underline py-2 pr-4 rounded-md text-sm font-semibold"
          >
            Request Quote
          </a>
          <a
            href="http://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-deep-blue hover:underline py-2 pr-4 rounded-md text-sm font-semibold"
          >
            Visit Website
          </a>
        </div>
      </div>
      {/* Category Buttons */}
      <ExporterTabs
        categories={pageCategory}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        onEdit={onEdit}
        isAddNew={isAddNew}
        setIsAddNew={setIsAddNew}
      />

      {/* Content based on selected category */}
      {selectedCategory === 1 && <ProductGallery products={productCategories} 
          handleEditCategory={handleEditCategory}
          handleDeleteCategory={handleDeleteCategory}
          handleGetCategory={handleGetCategory}
          openCategoryOption={openCategoryOption}
      />}
      {selectedCategory === 2 && <ProductGallery 
          products={gallery} 
          handleEditCategory={handleEditCategory}
          handleDeleteCategory={handleDeleteCategory}
          handleGetCategory={handleGetCategory}
          openCategoryOption={openCategoryOption}
        />
      }
      {selectedCategory === 3 && <Reviews reviews={reviews} />}
    </div>
  );
};

export default MainProfile;
