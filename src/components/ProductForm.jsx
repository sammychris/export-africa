import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
// import productSchema from './productSchema';
import * as yup from 'yup';
import UnitSelector from './UnitSelector'; // Assume this file exists with the provided code


const catData = [
    {
      name: "clothing",
      subcategories: [
        { name: "", units: ["cm", "in"] },
        { name: "shirts", units: ["cm", "in", "size"] },
        { name: "dresses", units: ["cm", "in", "size"] },
        { name: "trousers", units: ["cm", "in", "waist size"] },
        { name: "skirts", units: ["cm", "in", "length"] }
      ]
    },
    {
      name: "electronics",
      subcategories: [
        { name: "", units: ["cm", "in"] },
        { name: "laptops", units: ["cm", "in", "screen size (in)"] },
        { name: "phones", units: ["cm", "in", "screen size (in)"] },
        { name: "tablets", units: ["cm", "in", "screen size (in)"] },
        { name: "headphones", units: ["cm", "in"] }
      ]
    },
    {
      name: "food",
      subcategories: [
        { name: "", units: ["g", "kg", "L", "mL"] },
        { name: "fruits", units: ["g", "kg"] },
        { name: "vegetables", units: ["g", "kg"] },
        { name: "grains", units: ["g", "kg"] },
        { name: "dairy", units: ["g", "kg", "L", "mL"] },
        { name: "meat", units: ["g", "kg"] }
      ]
    },
    {
      name: "furniture",
      subcategories: [
        { name: "", units: ["cm", "m"] },
        { name: "chairs", units: ["cm", "m", "seat height"] },
        { name: "tables", units: ["cm", "m", "width", "length", "height"] },
        { name: "sofas", units: ["cm", "m", "width", "depth", "height"] },
        { name: "beds", units: ["cm", "m", "width", "length", "height"] }
      ]
    }
  ];
  


const productSchema = yup.object().shape({
  featuredImage: yup.string().required('Featured image is required'),
  gallery: yup.array().of(yup.string()),
  videoUrl: yup.string().url('Invalid video URL').optional(),
  name: yup.string().required('Name is required'),
  description: yup.string().optional(),
  category: yup.string().required('Category is required'),
  price: yup.number().required('Price is required').positive('Price must be positive'),
  currency: yup.string().oneOf(['USD', 'EUR', 'GBP']),
});

const ProductForm = () => {
  const formik = useFormik({
    initialValues: {
      featuredImage: null,
      gallery: [],
      videoUrl: '',
      name: '',
      description: '',
    //   category: '',
      category: '',
      subcategory: '',
      unit: '',
      price: 0,
      currency: 'USD',
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
        // Handle form submission logic here
        console.log('Submitted values:', values);
    },
  });

    const handleFileChange = (event) => {
        formik.setFieldValue('featuredImage', event.currentTarget.files[0]);
    };

    const handleGalleryChange = (event) => {
        formik.setFieldValue('gallery', [...event.currentTarget.files]);
    };

    // Handle category change and update subcategory options
    const handleCategoryChange = (selectedCategory) => {
        formik.setFieldValue('category', selectedCategory);

        formik.setFieldValue('subcategory', ''); // Clear previous selection
        formik.setFieldError('subcategory', ''); // Remove any subcategory errors
    };

    // Handle subcategory change
    const handleSubcategoryChange = (selectedSubcategory) => {
        formik.setFieldValue('subcategory', selectedSubcategory);
    };

    const getCategoryData = (data, selectedValue) => {
        return data?.find(cat => cat.name === selectedValue) || [];
    }

    // Update available units based on category and subcategory (if applicable)
    const selectedCategory = formik.values.category;
    const selectedSubcategory = formik.values.subcategory;
    const subCategories = getCategoryData(catData, selectedCategory)?.subcategories || [];
    const units = getCategoryData(subCategories, selectedSubcategory)?.units || [];


    useEffect(() => {
        formik.setFieldValue('unit', units[0] || ''); // Set default unit or clear
    }, [selectedCategory, selectedSubcategory]);

    const handleSubmit = () => {
        
    }

  return (
        <form className="flex flex-col space-y-4" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col space-y-2">
                <label htmlFor="featured-image" className="text-sm font-semibold">
                Featured Image:
                </label>
                <input
                type="file"
                id="featured-image"
                className="border rounded p-2"
                onChange={handleFileChange}
                />
                {formik.errors.featuredImage && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.featuredImage}</div>
                )}
                <label htmlFor="gallery" className="text-sm font-semibold">
                Gallery Images:
                </label>
                <input
                type="file"
                id="gallery"
                className="border rounded p-2"
                multiple
                onChange={handleGalleryChange}
                />

                <label htmlFor="video-url" className="text-sm font-semibold">
                Video URL:
                </label>
                <input
                type="text"
                id="video-url"
                className="border rounded p-2"
                {...formik.getFieldProps('videoUrl')}
                />
                {formik.touched.videoUrl && formik.errors.videoUrl && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.videoUrl}</div>
                )}
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-semibold">
                Name:
                </label>
                <input
                type="text"
                id="name"
                className="border rounded p-2"
                {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
                )}
                <label htmlFor="description" className="text-sm font-semibold">
                Description:
                </label>
                <textarea
                id="description"
                className="border rounded p-2 h-24"
                {...formik.getFieldProps('description')}
                />
                {formik.touched.category && formik.errors.category && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.category}</div>
                )}
                <div className="flex items-center space-x-2">
                <label htmlFor="price" className="text-sm font-semibold">
                    Price:
                </label>
                <input
                    type="number"
                    id="price"
                    className="border rounded p-2 w-24"
                    {...formik.getFieldProps('price')}
                />
                {formik.touched.price && formik.errors.price && (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.price}</div>
                )}
                <select
                    id="currency"
                    className="border rounded p-2 w-24"
                    {...formik.getFieldProps('currency')}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
                </div>
            </div>

            <label htmlFor="category" className="text-sm font-semibold">
                Category:
            </label>
            <select
                id="category"
                className="border rounded p-2 w-40"
                {...formik.getFieldProps('category')}
                onChange={(e) => handleCategoryChange(e.target.value)}
            >
                {
                    catData.map((category, i) => {
                        return <option key={i} value={category.name}>{category.name}</option>
                    })
                }
            </select>
            {formik.touched.category && formik.errors.category && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.category}</div>
            )}
            {subCategories?.length > 0 && (
                <div>
                    <label htmlFor="subcategory" className="text-sm font-semibold">
                        Subcategory:
                    </label>
                    <select
                        id="subcategory"
                        className="border rounded p-2 w-40"
                        {...formik.getFieldProps('subcategory')}
                        onChange={(e) => handleSubcategoryChange(e.target.value)}
                    >
                        <option value="">Select subcategory</option>
                        {subCategories?.map((sub) => (
                        <option key={sub.name} value={sub.name}>
                            {sub.name}
                        </option>
                        ))}
                    </select>
                    {formik.touched.subcategory && formik.errors.subcategory && (
                        <div className="text-red-500 text-xs mt-1">{formik.errors.subcategory}</div>
                            )}
                    </div>
                )}
            <div>
                <label htmlFor="unit">Select unit:</label>
                <select
                    id="unit"
                    className="border rounded p-2 w-48"
                    disabled={!units.length}
                    onChange={(e) => formik.setFieldValue('unit', e.target.value)}
                >
                    <option value="">Select unit (based on category and subcategory)</option>
                    {units.map((unit) => (
                    <option key={unit} value={unit}>
                        {unit}
                    </option>
                    ))}
                </select>
                {units.length > 0 && (
                    <div className="text-sm text-gray-500">Default unit: {units[0]}</div>
                )}
            </div>
  
            {/* <UnitSelector  units={units} category={selectedCategory} subcategory={selectedSubcategory} onUnitSelect={(unit) => formik.setFieldValue('unit', unit)} /> */}
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        </form>
     );
};

export default ProductForm;


  
  
  
