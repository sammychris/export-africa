import React from 'react';


const ButtonLoader = () => (
    <div className='flex items-center'>
      <svg className="animate-spin h-5 w-5 mr-3 border-white border-b-2 border-r-2 rounded-full" viewBox="0 0 24 24"></svg>
      Loading...
    </div>
  );
  

const Button = ({ isLoading, onClick, children, color = 'blue-500', size = 'medium', ...otherProps }) => {

  // Tailwind classes with defaults
  const buttonClasses = 
    `bg-${color} hover:bg-${color.slice(0, -3)}600 text-white font-medium py-2 px-4 rounded`;

  // Example Tailwind size variations
  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4',
    large: 'py-3 px-6 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`${buttonClasses} ${sizeClasses[size]}`}
      {...otherProps}
    >
      {isLoading ? <ButtonLoader /> : children}
    </button>
  );
};

export default Button;
