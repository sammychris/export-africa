import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UploadForm = () => {
  const formik = useFormik({
    initialValues: {
      file: null,
    },
    validationSchema: Yup.object({
      file: Yup.mixed()
        .required('Please select a file')
        .test('fileSize', 'File size must be less than 2MB', (value) => {
          if (!value) return true;
          return value.size < 2 * 1024 * 1024;
        }),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {

        console.log({values})
        const formData = new FormData();
        formData.append('logo', values.file);

        const response = await fetch(`/api/exporters/65b50410c9efd1e53c9ddcb2/`, {
          method: 'put',
          body: formData,
        });
        const data = await response.json();
        console.log('Upload successful:', data);
        // Handle successful upload
      } catch (error) {
        console.error('Upload failed:', error);
        // Handle errors
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="file" name="file" onChange={(event) => formik.setFieldValue('file', event.currentTarget.files[0])} accept=".jpg,.jpeg,.png" />
      {formik.touched.file && formik.errors.file ? (
        <div>{formik.errors.file}</div>
      ) : null}
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
