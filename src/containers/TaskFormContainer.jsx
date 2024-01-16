import React, {useState} from "react";
import TaskForm from "@/components/TaskForm";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createTask, updateTask } from "@/apiServices/taskApi";


// Define validation schema using yup
const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  categoryId: yup.string().required('Category is required'),
  priority: yup.string().required('Priority is required'),
  description: yup.string().required('Description is required'),
});

const TaskFormContainer = ({ showTaskForm, editTaskData, categories, fetchData }) => {
  const handleSubmit = async (values) => {
    try {
        const taskId = values?.id;
        taskId? await updateTask(taskId, values): await createTask(values);
        showTaskForm();
        fetchData();
        alert(taskId? 'Updated Successfully': 'Created Successfully!');
    } catch (error) {
        alert('Failed! try again later')
        console.error("Error: Token is invalid or expired!", error);
    }
  };


  const formik = useFormik({
      initialValues: (editTaskData || {
          title: '',
          categoryId: '',
          priority: '',
          description: '',
      }),
      validationSchema: validationSchema,
      onSubmit: handleSubmit
  });

  return (
        <TaskForm
          {...formik}
          editTaskData={editTaskData}
          showTaskForm={showTaskForm}
          categories={categories}
        />
  );
};

export default TaskFormContainer;
