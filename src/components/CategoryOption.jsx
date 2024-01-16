import React from 'react';
import Link from 'next/link';

const CategoryOption = ({ text, onClick }) => {
  return (
    <li>
      <Link href="" className="flex py-3 px-6 hover:bg-gray-300" onClick={(e) => {
        e.preventDefault();
        onClick()
      }}>
        {text}
      </Link>
    </li>
  );
};

export default CategoryOption;
