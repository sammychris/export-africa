import React from 'react';
import Link from 'next/link';
// import CategoryOption from './AddNewOption';

// const options = ['Product', 'Project/Gallery'];
const options = [
  {page: "productForm", label: "Product"},
  {page: "galleryForm", label: "Gallery"},
  // {page: "reviews", label: "Reviews"}
];

const AddNewOptions = ({handlePageSelect}) => {
  return (
    <div className="bg-white absolute right-[-50px] top-12 z-10 shadow-[2px_2px_7px_0px_#00000061] rounded-[5px]">
        <ul>
          {options.map((option) => (
            <li key={option.page}>
              <Link href="" className="flex py-3 px-6 hover:bg-gray-300" onClick={(e) => {
                e.preventDefault();
                handlePageSelect(option.page);
              }}>
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default AddNewOptions;
