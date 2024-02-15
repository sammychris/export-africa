import React from 'react';

const SubmitButton = ({ isSubmitting, edited }) => {
  const buttonText = edited
    ? isSubmitting
      ? 'Updating...'
      : 'Update'
    : isSubmitting
    ? 'Submitting...'
    : 'Save';

  return (
    <button
      className="bg-deep-blue rounded-[3px] w-[100px] h-8 text-white text-center text-base font-normal hover:bg-[#001f3fca]"
      type="submit"
      disabled={isSubmitting}
    >
      {buttonText}
    </button>
  );
};

export default SubmitButton;
