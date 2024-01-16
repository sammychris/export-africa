import React, {useState} from "react";
import CategoryForm from "@/components/CategoryForm";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createCategory, updateCategory } from "@/apiServices/categoryApi";


const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  color:  Yup.string().required('Color is required'),
  icon: Yup.string().required('Icon is required'),
  description: Yup.string().required('Description is required'),
});


const CategoryFormContainer = ({ showCategoryForm, editCategoryData, fetchData }) => {
  const handleSubmit = async (values) => {
    try {
      const categoryId = values?.id;
      categoryId? await updateCategory(categoryId, values): await createCategory(values);
      showCategoryForm();
      fetchData();
      alert(categoryId? 'Updated Successfully': 'Created Successfully!');
    } catch (error) {
      alert('Failed! try again later')
      console.error("Error:", error);
    }
  };

  const formik = useFormik({
    initialValues: (editCategoryData || { title: '', color: '', icon: '', description: '' }),
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <CategoryForm
      {...formik}
      showCategoryForm={showCategoryForm}
    />
  );
};

export default CategoryFormContainer;
