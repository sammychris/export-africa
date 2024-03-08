import connectDB from '@/utils/db';
import processFile from '@/utils/processFile';
import { updateProduct, deleteProduct, createProduct, findOneProduct, getProductById } from '@/lib/productHelpers';

connectDB();


export async function GET(request, { params }) {
    try {
        const { id } = params;

        const product = await getProductById(id);
        if (!product) {
            return Response.json({ success: false, error: 'Product not found' }, {
                status: 404,
            });
        }

        return Response.json({ success: true, data: product }, {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: 'Internal Server Error' }, {
            status: 500,
        });
    }
}


  
export async function PUT(request, {params}) {
    try {
        const {searchParams} = request.nextUrl;
        const exporterId = searchParams.get('exporterId');

        const authResult = await isAuthenticated(request, {requireOwnership: true, resourceId:exporterId });   
        if (!authResult.authenticated){
          return Response.json({ success: false, error: authResult.error}, {status: authResult.status})
        }

        const id = params.id;
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

        const updatedProduct = await updateProduct(id, productData);
        return Response.json({ success: true, data: updatedProduct, message: 'Product Updated' }, {
            status: 201,
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
        const {searchParams} = request.nextUrl;
        const exporterId = searchParams.get('exporterId');

        const authResult = await isAuthenticated(request, {requireOwnership: true, resourceId:exporterId });   
        if (!authResult.authenticated){
          return Response.json({ success: false, error: authResult.error}, {status: authResult.status})
        }

        const deletedProduct = await deleteProduct(id);

        return Response.json({ success: true, data: deletedProduct }, {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: 'Internal Server Error' }, {
            status: 500,
        });
    }
}