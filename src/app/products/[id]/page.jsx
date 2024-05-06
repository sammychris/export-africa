import Footer from "@/components/Footer";
import ProductContainer from "@/containers/ProductContainer";
import axios from 'axios';



async function fetchData(id) {
  try {
      const response = await axios.get(`http://localhost:3000/api/products/${id}`);
      const productData = response?.data?.data || null;
      
      let productsResponse;
      if (productData) {
          productsResponse = await axios.get(`http://localhost:3000/api/products?category=${productData?.category}&limit=5`); 
      }

      return {
          productData, 
          productList: productsResponse?.data?.data
      }; 
  } catch ({response}) {
          console.log('error response: ', response);
  }
}



const ProductPage = async (request) => {
  const id = request?.params?.id;

  const {productData, productList} = await fetchData(id) || {};

  const relatedProducts = productList.filter((prod) =>  prod._id !== productData._id);
  relatedProducts.length = 4;

  return(
    <div className="min-h-screen font-sans">
      <ProductContainer productData={productData} relatedProducts={relatedProducts}/>
      <Footer />
    </div>
    
  )
}

export default ProductPage;