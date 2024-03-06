import React from 'react';
import Link from 'next/link';

const options = ['Edit', 'Delete'];

const EditDeleteOptions = ({onClick}) => {
  return (
    <div className="bg-white absolute right-[-60px] bottom-10 z-10 shadow-[2px_2px_7px_0px_#00000061] rounded-[5px]">
        <ul>
          {options.map((text) => (
            <li key={text}>
              <Link
                href=""
                className="flex py-3 px-6 hover:bg-gray-300"
                onClick={(e) => {
                  e.preventDefault();
                  onClick();
                }}>
                  {text}
              </Link>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default EditDeleteOptions;
