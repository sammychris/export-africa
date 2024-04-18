import React from "react";
import ImageUploading from "react-images-uploading";
import { FaUpload, FaTrashAlt, FaPen } from 'react-icons/fa';

const normalizeImageArray = (images) => {
  if (!images) return null;
  return Array.isArray(images) ? images : [images];
}

// const modifyFileInput = (callback) => {
//   return (files) => {
//     const originalFiles = files.length ? files.map((obj) => {
//       obj.file.isOriginal = true; // origanal file
//       return obj;
//     }): null;
//     callback(originalFiles);
//   }
    
// }


function ImageUploadComponent({ multiple, images, onChange}) {
  images = normalizeImageArray(images);
  return (
    <div className="App container mx-auto p-6"> 
      <ImageUploading
        multiple={multiple}
        value={images}
        onChange={onChange}
        maxNumber={multiple ? 69: 1}
        dataURLKey="path"
        acceptType={["jpg", "png"]}
      >
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => {          
          return (
          <div className={`flex flex-col items-center rounded-lg bg-gray-100 shadow-md ${!multiple ? 'p-2 w-56 h-36 justify-center':'p-6'}`}>
           {(multiple || imageList.length < 1) && (<button
              type="button"
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
              className="flex items-center gap-2 p-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md m-4"
            >
              <FaUpload /> Upload Image{multiple? 's':''}
            </button>)}
           { imageList.length > 1 && (
              <button
                type="button"
                onClick={onImageRemoveAll}
                className="flex items-center gap-2 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-md" 
              > 
                <FaTrashAlt /> Remove all images
              </button>
            )}

            {/* Responsive Image Grid */} 
            <div className={multiple ? 'image-grid mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4':''}> 
              {imageList.map((image, index) => (
                <div key={index} className="image-item relative"> 
                  <img src={image.path} alt="" width="100" className="rounded-md"/>
                  <div className="image-item__btn-wrapper absolute bottom-2 right-2 flex gap-2">
                    <button
                       type="button"
                      onClick={() => onImageUpdate(index)}
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md" 
                    >
                      <FaPen /> 
                    </button>
                    <button
                       type="button"
                      onClick={() => onImageRemove(index)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md" 
                    >
                    <FaTrashAlt /> 
                    </button>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        )}}
      </ImageUploading>
    </div>
  );
}

export default ImageUploadComponent;
