import Product from '@/lib/models/product';

export async function createProduct(exporterData) {
    try {
        const product = new Product(exporterData);
        const savedProduct = await product.save();

        return savedProduct;
    } catch (error) {
        console.log({error})
        throw new Error('Failed to create product');
    }
}

export async function findProductsByExporterId(userId) {
    try {
        const products = await Product.findOne({user: userId});
        return products;
    } catch (error) {
        console.log({error})
        throw new Error('Failed to retrieve product');
    }
}

export async function findOneProduct(query) {
    try {
        const product = await Product.findOne(query);
        return product;
    } catch (error) {
        console.log({error})
        throw new Error('Failed to retrieve product');
    }
}


export async function getProductById(prodId) {
    try {
        const product = await Product.findById(prodId);

        if (!product) {
        throw new Error('Product not found');
        }

        return product;
    } catch (error) {
        throw new Error('Failed to retrieve product');
    }
}


export async function updateProduct(prodId, updatedData) {
    try {
        const product = await Product.findByIdAndUpdate(prodId, updatedData, { new: true });
        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    } catch (error) {
        console.log({error});
        throw new Error('Failed to update product');
    }
}
  

export async function deleteProduct(prodId) {
    try {
        const result = await Product.findByIdAndDelete(prodId);

        if (!result) {
            throw new Error('Product not found');
        }

        return result;
    } catch (error) {
        throw new Error('Failed to delete product');
    }
}


export function getAllProducts(filter = {}) {
    try {
        return Product.find(filter);
    } catch (error) {
        throw new Error('Failed to retrieve products');
    }
}


export function getTotalProductCount() {
    try {
        return Product.countDocuments();
    } catch (error) {
        throw new Error(error);
    }
}

