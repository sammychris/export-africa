import connectDB from '@/utils/db';
import { createProduct } from '@/lib/productHelpers';
import processFile from '@/utils/processFile';
import { isAuthenticated } from '@/lib/autheticate';



connectDB();


export async function GET(request) {
    try {
        const authResult = await isAuthenticated(request);   
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


export async function POST(request) {
    try {
        const authResult = await isAuthenticated(request);   
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

export async function PUT(request) {
    try {
        const authResult = await isAuthenticated(request);   
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

export async function DELETE(request) {
    try {
        const authResult = await isAuthenticated(request);   
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

