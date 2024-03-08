// pages/api/exporters.js
import connectDB from '@/utils/db';
import { getAllExportersProfile, updateExporterProfile, createExporterProfile, findOneExporterProfile }
 from '@/lib/exporterHelpers';
import processFile from '@/utils/processFile';
import { isAuthenticated } from '@/lib/autheticate';



connectDB();

export async function GET(request) {
  try {
    let query = {};
    const {searchParams} = request.nextUrl;
    const keywords = searchParams.get('keywords');
    const country = searchParams.get('country');
    const state = searchParams.get('state');
    const category = searchParams.get('category');

    const offset = parseInt(searchParams.get('offset')) || 0;   
    const limit = parseInt(searchParams.get('limit')) || 9;

    if(keywords){
      if (category || country || state) {
        query.companyName = { $regex: keywords, $options: 'i' };
      }
      else {
        query = {
          $or: [
            { companyName: { $regex: keywords, $options: 'i' } },
            { productCategories: { $elemMatch: { value: { $regex: keywords, $options: 'i' } } } }, 
            { country: { $regex: keywords, $options: 'i' } },
            { state: { $regex: keywords, $options: 'i' } },
          ]
        };
      }
    }

    if (category) {
      const categoryParts = category.split('-'); 
      categoryParts.pop();  
      query.productCategories = {
        $elemMatch: {
          value: { $regex:  categoryParts.join('-'), $options: 'i' }
        }
      } 
    }

    if (country) query.country = { $regex: country, $options: 'i' }; // Case-insensitive
    if (state) query.state = { $regex: state, $options: 'i' }; // Case-insensitive

    const exporters = await getAllExportersProfile(query)
    .skip(offset)
    .limit(limit);

    return Response.json({ data: exporters }, {status: 200});
  } catch (error) {
      console.log({error})
      return Response.json({ error: error.message }, {status: 500});
  }
}


export async function POST(request) {
  try {

      const authResult = await isAuthenticated(request);   
      if (!authResult.authenticated){
        return Response.json({ success: false, error: authResult.error}, {status: authResult.status})
      }

      const formData = await request.formData();
      const onboardingData = {};

      // Build update object dynamically based on available onboardingData
      for (const [field, value] of formData.entries()) {
        if (field.startsWith('certifications[')) {
          onboardingData.certifications = onboardingData.certifications || [];
          onboardingData.certifications.push(await processFile(value)); // file uploads
        } else if (field.startsWith('productC') || field === 'socialLinks'){
          onboardingData[field] = JSON.parse(value);
        } else onboardingData[field] = value;
      }

      onboardingData.logo = await processFile(onboardingData.logo); // file uploads
      onboardingData.companyDocuments = await processFile(onboardingData.companyDocuments); // file uploads
      onboardingData.idDocument = await processFile(onboardingData.idDocument); // file uploads
      onboardingData.addressProof = await processFile(onboardingData.addressProof); // file uploads
      onboardingData.user = authResult.userId; // setting user id to the auth id...

      const existingExporter = await findOneExporterProfile({ user: onboardingData.user}); 

      if (existingExporter) { // checking if the profile exists...
        const updatedProfile = await updateExporterProfile(existingExporter.id, onboardingData);
        return Response.json({ success: true, data: updatedProfile, message: 'Profile updated' }, {
          status: 200,
        });
      } else {
        const newProfile = await createExporterProfile(onboardingData);
        return Response.json({ success: true, data: newProfile, message: 'Profile created', }, {
            status: 201,
        });
      }
  } catch (error) {
      console.error(error);
      return Response.json({ success: false, error: 'Internal Server Error' }, {
          status: 500,
      });
  }
}

