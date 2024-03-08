// pages/api/exporters/[id].js
import connectDB from '@/utils/db';
import mongoose from 'mongoose';
import processFile from '@/utils/processFile';
import { getExporterProfileById, updateExporterProfile, deleteExporterProfile }
from '@/lib/exporterHelpers';
import { isAuthenticated } from '@/lib/autheticate';


connectDB();


export async function GET(request, { params }) {
    try {
        const { id } = params; 

        if (!mongoose.isValidObjectId(id)) {
            return Response.json({ success: false, error: 'Invalid ObjectId format' }, {
            status: 400,
            });
        }

        const exporter = await getExporterProfileById(id);
        if (!exporter) {
            return Response.json({ success: false, error: 'Exporter not found' }, {
                status: 404,
            });
        }

        const { userId } = await isAuthenticated(request); // get the loggedin User id
        const isProfileOwner = userId === exporter.user.toString(); // check if the user is the owner

        return Response.json({ success: true, data: exporter, isProfileOwner }, {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: 'Internal Server Error' }, {
        status: 500,
        });
    }
}


  
export async function PUT(request, { params }) {
  try {
      const { id } = params;
      const formData = await request.formData();
      const updateFields = {};

      const authResult = await isAuthenticated(request, {requireOwnership: true, resourceId: id});
      if (!authResult.authenticated){
        return Response.json({ success: false, error: authResult.error}, {status: authResult.status})
      }


      // Build update object dynamically based on available updateFields
      for (const [field, value] of formData.entries()) {
        if (field.startsWith('certifications[')) {
          updateFields.certifications = updateFields.certifications || [];
          updateFields.certifications.push(await processFile(value)); // file uploads
        } else if (field.startsWith('productC') || field === 'socialLinks'){
          updateFields[field] = JSON.parse(value);
        } else updateFields[field] = value;
      }

      updateFields.logo = await processFile(updateFields.logo); // file uploads
      updateFields.companyDocuments = await processFile(updateFields.companyDocuments); // file uploads
      updateFields.idDocument = await processFile(updateFields.idDocument); // file uploads
      updateFields.addressProof = await processFile(updateFields.addressProof); // file uploads

      const updatedExporter = await updateExporterProfile(id, updateFields);
      if (!updatedExporter) {
          return Response.json({ success: false, error: 'Exporter not found' }, {
              status: 404,
          });
      }

      return Response.json({ success: true, message: 'Profile created', data: updatedExporter }, {
          status: 200,
      });
  } catch (error) {
      console.error(error);
      return Response.json({ success: false, error: 'Internal Server Error' }, {
          status: 500,
      });
  }
}


export async function DELETE(request, { params }) {
    try {
      const { id } = params;
      const authResult = await isAuthenticated(request, {requireOwnership: true, resourceId: id});
      if (!authResult.authenticated){
        return Response.json({ success: false, error: authResult.error}, {status: authResult.status})
      }

      const deletedExporter = await deleteExporterProfile(id);

      if (!deletedExporter) {
        return Response.json({ success: false, error: 'Exporter not found' }, {
          status: 404,
        });
      }

      return Response.json({ success: true, data: deletedExporter }, {
        status: 200,
      });
    } catch (error) {
      console.error(error);
      return Response.json({ success: false, error: 'Internal Server Error' }, {
        status: 500,
      });
    }
}