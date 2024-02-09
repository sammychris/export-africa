import React from 'react';
import Link from 'next/link';
import { LiaTimesSolid } from "react-icons/lia";

const CloseButton = ({ onClick = () => '' }) => {
  return (
    <Link href={""} className="absolute top-0 right-0 text-2xl hover:text-gray-500" title="close" onClick={(e) => {
      e.preventDefault();
      onClick();
    }}>
      <LiaTimesSolid size={30}/>
    </Link>
  );
};

export default CloseButton;
