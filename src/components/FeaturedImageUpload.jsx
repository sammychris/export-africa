import React from 'react';
import ImageUploadComponent from './ImageUploadComponent';

const FeaturedImageUpload = ({ formik }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="featured-image" className="text-sm font-semibold">
                    Featured Image:
                </label>
                <div className="border rounded p-2">
                    <ImageUploadComponent images={formik.values.featuredImage} onChange={(imageList) => formik.setFieldValue('featuredImage', imageList)}/>
                </div>
                {formik.errors.featuredImage &&  (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.featuredImage}</div>
                )}
        </div>
    );
};

export default FeaturedImageUpload;
