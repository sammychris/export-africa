'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ExportProfileSection from '@/components/ExportProfileSection';
import ExporterTabs from '@/components/ExporterTabs';
import Reviews from '@/components/Reviews';
import GalleryList from '@/components/GalleryList';
import ProductList from '@/components/ProductList';
import GalleryForm from '@/components/GalleryForm';
import RatingForm from '@/components/RatingForm';
import ProductFormContainer from '@/containers/ProductFormContainer';
import EditExporterContainer from '@/containers/EditExporterContainer';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import { setCurrentExporter } from '@/lib/features/exporters/exportersSlice';
import Loading from '@/components/Loading';
import { setProductsSuccess } from '@/lib/features/products/productsSlice';
import axios from 'axios';
import ReviewSection from '@/components/ReviewSection';
import ReviewForm from '@/components/ReviewForm';
import { useSearchParams } from 'next/navigation';




const ExporterContainer = ({ request, exporterData, isProfileOwner, productsData }) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const router = useRouter();
    const [selectedPage, setSelectedPage] = useState('product');
    const [editProduct, setEditProduct] = useState(null); // Default start at screen 1
    const { currentExporter } = useAppSelector(state => state.exporters);
    const { products } = useAppSelector(state => state.products);
    const { isAuthenticated } = useAppSelector(state => state.auth);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSettings, setIsSettings] = useState(false);
    

    useEffect(() => {
      setIsSettings(searchParams?.includes('settings') || '');
    }, [searchParams]); 

    useEffect(() => {
      if (!isAuthenticated) return router.push('/login');

      dispatch(setCurrentExporter(exporterData));
      dispatch(setProductsSuccess(productsData));
    }, [dispatch, exporterData, productsData])

    const handlePageSelect = (page) => setSelectedPage(page);

    const changeRoute = (url) => router.push(url, undefined, { shallow: true });

    const handleEditProduct = (product) => {
      setEditProduct(product);
      setSelectedPage('productForm');
    }


    const handleDeleteProduct = async (productId) => {
      if(!confirm(`Are you sure you would like use this option?`)) return;
      try{
        const response = await axios.delete(`/api/products/${productId}`)
        console.log({productId, response});
        alert('Deleted Successfully');
      } catch (error) {
        console.log({error})
      }
    }

    const handleCloseForm = () => {
      setSelectedPage(selectedPage.replace('Form', ''))
      setEditProduct(null);
    }

    if (!currentExporter || !products) return <Loading />
    return (
      <>
        {(isSettings && isProfileOwner)
        ? <EditExporterContainer exporterData={currentExporter} changeRoute={changeRoute}/>
        : (<div className="container mx-auto mt-8 max-w-[1128px] px-4 sm:px-6 lg:px-8">  
          <div className="flex flex-col md:flex-row">  {/* // Padding for responsiveness */}
            <div className="w-full md:w-1/3 mr-8 mb-6 md:mb-0"> {/* // Switch to column layout on small screens */}
              <div className="bg-white p-6 shadow-md rounded-md font-roboto relative">  {/* // Add margin-bottom for mobile view */}
                {currentExporter && <ExportProfileSection
                  isProfileOwner={isProfileOwner}
                  exporterData={currentExporter}
                  changeRoute={changeRoute}
                  isExpanded={isExpanded}
                  setIsExpanded={setIsExpanded}
                />}
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="bg-white p-6 shadow-md rounded-md font-roboto">      
                  <ExporterTabs selectedPage={selectedPage} handlePageSelect={handlePageSelect} handleCloseForm={handleCloseForm} isProfileOwner={isProfileOwner} />
                  {selectedPage === 'product' && <ProductList products={products} handleEditProduct={handleEditProduct} handleDeleteProduct={handleDeleteProduct}/>}
                  {selectedPage === 'productForm' && <ProductFormContainer editProduct={editProduct}  exporterData={exporterData} />}
                  {/* {selectedPage === 'gallery' && <GalleryList />}
                  {selectedPage === 'galleryForm' && <GalleryForm />} */}
                  {selectedPage === 'review' && <ReviewSection />}
                  {selectedPage === 'reviewForm' && <ReviewForm/>}
                </div>
            </div>  
          </div>
        </div>)}
    </>
    );
};

export default ExporterContainer;
