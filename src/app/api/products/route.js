// pages/api/products.js
import connectDB from '@/utils/db';
import { getAllProducts, createProduct, getTotalProductCount } from '@/lib/productHelpers';
import { findOneCategory } from '@/lib/categoryHelpers';
import processFile from '@/utils/processFile';
import { getAllExportersProfile } from '@/lib/exporterHelpers';
import { isAuthenticated } from '@/lib/autheticate';



connectDB();

export async function GET(request) {
  try {
    let query = {};
    const {searchParams} = request.nextUrl;

    const exporterId = searchParams.get('exporterId');
    const keywords = searchParams.get('keywords');
    const country = searchParams.get('country');
    const state = searchParams.get('state');
    const category = searchParams.get('category')?.split('-').pop();

    const offset = parseInt(searchParams.get('offset')) || 1;   
    const limit = parseInt(searchParams.get('limit')) || 10;

    if (exporterId) query.exporter = exporterId;
    if (keywords){
      if (category || country || state ) {
        query.name = { $regex: keywords, $options: 'i' };
      }
      else {
        const categoryObject = await findOneCategory({ name: { $regex: keywords, $options: 'i' } });
        const locationObject = await getAllExportersProfile({
          $or: [
           { state: { $regex: keywords, $options: 'i' } },
           { country: { $regex: keywords, $options: 'i' }}
          ]
        }).distinct('_id');

        query = {
          $or: [
            { name: { $regex: keywords, $options: 'i' } },
            { category: { $in: [categoryObject?._id || undefined] } },
            { exporter: { $in: locationObject } },
          ]
        };
      }
    }
    const totalProduct = await getTotalProductCount();

    if (category) query.category = { $in: [category] };

    if (country || state) {
      const location = {};
    
      if (country) location.country = country;
      if (state) location.state = state;

      const exporterIds = await getAllExportersProfile(location).distinct('_id');
      query.exporter = { $in: exporterIds };
    }
    
    const products = await getAllProducts(query)
    .skip(0)
    .limit(limit);    
    // .populate('exporter');
    return Response.json({ data: products, totalProduct }, {status: 200});
  } catch (error) {
      console.log({error})
      return Response.json({ error: error.message }, {status: 500});
  }
}



export async function POST(request) {
    try {
        const {searchParams} = request.nextUrl;
        const exporterId = searchParams.get('exporterId');

        console.log({exporterId})

        const authResult = await isAuthenticated(request, {requireOwnership: true, resourceId:exporterId });   
        if (!authResult.authenticated){
          return Response.json({ success: false, error: authResult.error}, {status: authResult.status})
        }

        const formData = await request.formData();
        const productData = {};

        // Build update object dynamically based on available productData
        for (const [field, value] of formData.entries()) {
            if (field.startsWith('gallery[')) {
                productData.gallery = productData.gallery || [];
                productData.gallery.push(await processFile(value)); // file uploads
            } else productData[field] = value;
        }

        productData.featuredImage = await processFile(productData.featuredImage); // file uploads
        productData.exporter = exporterId;

        const newProduct = await createProduct(productData);
        return Response.json({ success: true, data: newProduct, message: 'Product created', }, {
            status: 201,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: 'Internal Server Error' }, {
            status: 500,
        });
    }
}

