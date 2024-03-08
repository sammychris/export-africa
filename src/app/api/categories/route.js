// pages/api/exporters.js
import connectDB from '@/utils/db';
import { getCategories, createCategory } from "@/lib/categoryHelpers";
import processFile from '@/utils/processFile';

connectDB(); // Assuming connectDB establishes a database connection

export async function GET(request) {
  try {
    const {searchParams} = request.nextUrl;   
    const limit = parseInt(searchParams.get('limit')) || 10;

    const categories = await getCategories({})
    .populate('parent')
    .limit(limit);

    return Response.json({ success: true, data: categories });
  } catch (error) {
    console.log({ error });
    return Response.json({ success: false, error: 'Internal Server Error' }, {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    // const authResult = await isAuthenticated(request);   
    // if (!authResult.authenticated){
    //   return Response.json({ success: false, error: authResult.error}, {status: authResult.status})
    // }

    const newCategory = {};
    const formData = await request.formData();

    // Build update object dynamically based on available onboardingData
    for (const [field, value] of formData.entries()) {
      if (field.startsWith('measurementUnits')){
        newCategory[field] = JSON.parse(value);
      } else newCategory[field] = value;  
    }
    
    newCategory.name = newCategory.categoryName;
    newCategory.parent = newCategory.parentCategoryId;
    newCategory.image = await processFile(newCategory.image); // file uploads

    const createdCategory = await createCategory(newCategory);

    return Response.json({ success: true, data: createdCategory });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: 'Internal Server Error' }, {
      status: 500,
    });
  }
}

