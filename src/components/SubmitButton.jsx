import React from 'react';

const SubmitButton = ({ isSubmitting, edited }) => {
  const buttonText = edited
    ? isSubmitting
      ? 'Updating...'
      : 'Update'
    : isSubmitting
    ? 'Submitting...'
    : 'Submit';

  return (
    <button
      className="bg-[#5CBC9A] rounded-[3px] w-[125px] h-10 text-white text-center text-base font-normal hover:bg-[#4a967b]"
      type="submit"
      disabled={isSubmitting}
    >
      {buttonText}
    </button>
  );
};

export default SubmitButton;
