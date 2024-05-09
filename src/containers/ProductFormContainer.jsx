import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
// import ProductFormFields from '@/components/ProductFormFields';
// import CategorySelector from '@/components/CategorySelector';
// import UnitSelector from '@/components/UnitSelector';
import ProductNameInput from '@/components/ProductNameInput';
import FeaturedImageUpload from '@/components/FeaturedImageUpload';
import ProductCategorySelector from '@/components/ProductCategorySelector';
import ProductDescriptionInput from '@/components/ProductDescriptionInput';
import PriceAndCurrencyInput from '@/components/PriceAndCurrencyInput';
import MeasurementUnitInput from '@/components/MeasurementUnitInput';
import GalleryUpload from '@/components/GalleryUpload';
import VideoUrlInput from '@/components/VideoUrlInput';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import { fetchCategoriesSuccess } from '@/lib/features/categories/categorySlice';
import { setUpdateProduct, setAddProduct } from '@/lib/features/products/productsSlice';



const productSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    featuredImage: yup.mixed().required('Featured image is required'),
    category: yup.string().required('Category and sub-categories are required'),
    description: yup.string().optional(),
    price: yup.number().required('Price is required').positive('Price must be positive'),
    currency: yup.string().oneOf(['USD', 'EUR', 'GBP']),
    measurementUnit: yup.string().required('Unit of measurement is required'),
    // gallery: yup.array().of(yup.mixed()).optional(),
    videoUrl: yup.string().url('Invalid video URL').optional(),
});

const initialValues = {
  featuredImage: null,
  gallery: [],
  videoUrl: '',
  name: '',
  description: '',
  category: '',
  measurementUnit: '',
  price: 0,
  currency: 'USD',
};


const ProductFormContainer = ({editProduct, exporterData}) => {
    const dispatch = useAppDispatch();
    const [selectedCategory, setSelectedCategory] = useState('');
    const categories = useAppSelector((state) => state.categories.byId); // Assuming 'byId' structure
    const { isAuthenticated, user, token, } = useAppSelector(state => state.auth);
    const { products } = useAppSelector(state => state.products);


    useEffect(() => {
      if (editProduct) setSelectedCategory(editProduct.category);

      const fetchAllCategories = async () => {
        try {
            const {data} = await axios.get('/api/categories');
            dispatch(fetchCategoriesSuccess(data.data));
        } catch (error) {
            console.log({error})
        }
      };
      fetchAllCategories();
    }, [dispatch, editProduct]); 


    const handleSubmit = async (values, {setSubmitting}) => {
      // setIsLoading(true); 
      console.log({values})
      try {
          const formDataApi = new FormData();
          // formDataApi.append('user', '65d4e1e99451c9bf1e71a5d8');

          if (values?.name) formDataApi.append('name', values.name);
          if (values?.featuredImage?.length) formDataApi.append('featuredImage', values.featuredImage[0].file);
          if (values?.category) formDataApi.append('category', values.category);
          if (values?.description) formDataApi.append('description', values.description);
          if (values?.price) formDataApi.append('price', values.price);
          if (values?.currency) formDataApi.append('currency', values.currency);
          if (values?.measurementUnit) formDataApi.append(`measurementUnit`, values.measurementUnit);
          if (values?.gallery?.length && values?.gallery[0]?.file) {
              values.gallery.forEach((imageObject, index) => {
                formDataApi.append(`gallery[${index}]`, imageObject.file);
              });
          }
          if (values?.videoUrl) formDataApi.append('videoUrl', values.videoUrl);

          if (editProduct) {
              const {data} = await axios.put(`/api/products/${editProduct._id}`, formDataApi, {headers: { 'Content-Type': 'multipart/form-data' }});
              if (data.success) {
                dispatch(setUpdateProduct(data.data));
                alert('Successfully Update Product!');
              } 

          } else {
              const {data} = await axios.post(`/api/products?exporterId=${exporterData?._id}`, formDataApi, {headers: { 'Content-Type': 'multipart/form-data' }});
              if (data.success) {
                dispatch(setAddProduct(data.data));
                alert('Successfully Added Product!');
              } 
          }   

      } catch (error) {
          alert('Failed! try again later')
          console.error("Error:", error);
      } finally {
          // setIsLoading(false);
          // setSubmitting(false); // Important when using Formik!
      }
  }

    const formik = useFormik({
      initialValues: editProduct || initialValues,
      validationSchema: productSchema,
      onSubmit: handleSubmit,
    });
    
    return (
        <form className="flex flex-col space-y-4" onSubmit={formik.handleSubmit}>
            <h2 className="text-2xl font-medium text-center mt-6">Add Product</h2>
            <ProductNameInput formik={formik} />
            <FeaturedImageUpload formik={formik} /> 
            <ProductCategorySelector formik={formik} selectedCategory={selectedCategory} categories={categories} setSelectedCategory={setSelectedCategory}/>
            <ProductDescriptionInput formik={formik} />
            <PriceAndCurrencyInput formik={formik} />
            <MeasurementUnitInput formik={formik} selectedCategory={selectedCategory} categories={categories}/>
            <GalleryUpload formik={formik} />
            <VideoUrlInput formik={formik} />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        </form>        
    );
};

export default ProductFormContainer; 

