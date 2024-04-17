import React from 'react';
import { useFormik } from 'formik';
// import ratingSchema from './ratingSchema';
import * as yup from 'yup';

const ratingSchema = yup.object().shape({
  rating: yup.number().required('Rating is required').min(1, 'Rating must be between 1 and 5').max(5, 'Rating must be between 1 and 5'),
  comment: yup.string().required('Comment is required').min(3, 'Comment must be at least 3 characters'),
  date: yup.date().default(() => new Date())
});

const RatingForm = () => {
  const formik = useFormik({
    initialValues: {
      rating: 0,
      comment: '',
    },
    validationSchema: ratingSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log('Submitted values:', values);
    },
  });

  return (
    <form className="flex flex-col space-y-4" onSubmit={formik.handleSubmit}>
      <div className="flex items-center space-x-2">
        <label htmlFor="rating" className="text-sm font-semibold">
          Rating:
        </label>
        <select
          id="rating"
          className="border rounded p-2 w-32"
          {...formik.getFieldProps('rating')}
        >
          <option value="0">Select rating</option>
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {formik.touched.rating && formik.errors.rating && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.rating}</div>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="comment" className="text-sm font-semibold">
          Comment:
        </label>
        <textarea
          id="comment"
          className="border rounded p-2 h-24"
          {...formik.getFieldProps('comment')}
        />
        {formik.touched.comment && formik.errors.comment && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.comment}</div>
        )}
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit Rating
      </button>
    </form>
  );
};

export default RatingForm;
