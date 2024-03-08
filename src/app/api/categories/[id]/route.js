// pages/api/exporters.js
import connectDB from '@/utils/db';
import mongoose from 'mongoose';
import { getCategories, deleteCategory, findOneCategory, updateCategory } from "@/lib/categoryHelpers";

connectDB(); // Assuming connectDB establishes a database connection

export async function GET({request}) {
  try {
    const categories = await getCategories({filter:{parent: null}, populate: 'children'})
    return Response.json({ success: true, data: categories });
  } catch (error) {
    console.log({ error });
    return Response.json({ success: false, error: 'Internal Server Error' }, {
      status: 500,
    });
  }
}

export async function PUT(request, {params}) {
  try {
    const { id } = params;

    const updateFields = {};
    const formData = await request.formData();

    // Build update object dynamically based on available onboardingData
    for (const [field, value] of formData.entries()) {
      if (field.startsWith('measurementUnits')){
        updateFields[field] = JSON.parse(value);
      } else updateFields[field] = value;  
    }

    updateFields.name = updateFields.categoryName;
    updateFields.parent = updateFields.parentCategoryId;
    updateFields.image = await processFile(updateFields.image); // file uploads


    const upatedCategory = await updateCategory(id, updateFields);

    return Response.json({ success: true, data: upatedCategory });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: 'Internal Server Error' }, {
      status: 500,
    });
  }
}



export async function DELETE(request, {params}) { 
    try {
      const {id} = params // Assuming ID is in route parameters
      const category = await deleteCategory(id);
  
      if (!category) {
        return Response.json({ success: false, error: 'Category not found' }, { status: 404 });
      }

      console.log('This is awesome: ', id)
  
      return Response.json({ success: true, data: category });
    } catch (error) {
      console.error(error);
      return Response.json({ success: false, error: 'Internal Server Error' }, {
        status: 500,
      });
    }
  }

