import React from 'react';
import Link from 'next/link';


const Option = ({onClick, title, href="#"}) => {
  return (
    <li>
        <Link
            href={href}
            className="flex py-2 px-6 hover:bg-gray-300"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
            {title}
        </Link>
    </li>
  );
};

export default Option;
