import React from 'react';
import ImageUploadComponent from './ImageUploadComponent';

const GalleryUpload = ({ formik }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="gallery" className="text-sm font-semibold">
                    Gallery Images:
                </label>
                <div className="border rounded p-2">
                    <ImageUploadComponent multiple images={formik.values.gallery} onChange={(imageList) => formik.setFieldValue('gallery', imageList)}/>
                </div>
        </div>
    );
};

export default GalleryUpload;
