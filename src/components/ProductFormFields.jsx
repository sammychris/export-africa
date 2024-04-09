import React from 'react';
import ImageUploadComponent from './ImageUploadComponent';

const ProductFormFields = ({
    featuredImage,
    handleFileChange,
    gallery,
    handleGalleryChange,
    formik,
    videoUrl,
    handleChange,
    name,
    description, 
    price,
    currency,
    getFieldProps,
    touched,
    errors
}) => {
    return (
        <>
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
            <div className="flex flex-col space-y-2">
                <label htmlFor="featured-image" className="text-sm font-semibold">
                    Featured Image:
                </label>
                {/* <input
                    type="file"
                    id="featured-image"
                    className="border rounded p-2"
                    onChange={handleFileChange}
                /> */}
                <div className="border rounded p-2">
                    <ImageUploadComponent />
                </div>
                {formik.errors.featuredImage && (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.featuredImage}</div>
                )}
                <label htmlFor="gallery" className="text-sm font-semibold">
                    Gallery Images:
                </label>
                {/* <input
                    type="file"
                    id="gallery"
                    className="border rounded p-2"
                    multiple
                    onChange={handleGalleryChange}
                /> */}
                <div className="border rounded p-2">
                    <ImageUploadComponent multiple className="border rounded p-2"/>
                </div>
                

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
        </>
    );
};

export default ProductFormFields;
