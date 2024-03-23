import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsXCircle } from 'react-icons/bs'; // Import the cancel icon
import { FaTimesCircle } from 'react-icons/fa';



const FileUploader = ({ value, onChange = () => '', multiple = false }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*, application/pdf',
    onDrop: (newFiles) => onChange(multiple? [...value, ...newFiles]: newFiles[0])
  });

  const handleCancelFile = (file) => {
    if (multiple) return onChange(value.filter(f => f !== file));
    onChange(null);
  };


  const ListFile = ({file}) => (
  <li key={file.path} className="text-sm text-gray-600 flex items-center">
    {file.path} - {file.size} bytes
    <button
      type="button"
      className="ml-2 bg-red-500 hover:bg-red-600 text-white text-base py-1 px-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400" // Enhanced Tailwind Styling
      onClick={() => handleCancelFile(file)}
    >
      <FaTimesCircle /> {/* Using FaTimesCircle from Font Awesome */}
    </button>
  </li>)
  
  return (
    <div className="border border-gray-300 border-dashed rounded-lg p-6 flex flex-col items-center space-y-4">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()}/>
        <div className="text-gray-600 text-center">
          <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md">Select Files</button>
          <p>{`Drag 'n' drop some files here`}</p>
        </div>
      </div>
      <div className="mt-2 flex flex-col">

        {
          value && (
            multiple ? 
              (value.map((file, index) => <ListFile key={index} file={file} />)):
              (<ListFile file={value} />)
          )
        }
      </div>
    </div>
  );
};

export default FileUploader;
