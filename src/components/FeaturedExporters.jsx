import Slider from 'react-slick'; // You'll need to install a slider library
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import category from '@/lib/models/category';


const FeaturedExporters = ({featuredExporters}) => {  
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Option to enable autoplay if desired
        autoplaySpeed: 5000, // Control autoplay interval if used
    };
    return (
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-2xl font-medium text-center mb-4">Featured Exporters</h2>
  
          <div className="relative"> 
            <Slider {...settings}> 
                {featuredExporters?.map((exporter) => (
                    <div key={exporter._id} className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 p-4"> 
                        <div className="bg-white rounded shadow p-4"> {/* Card Container */}
                        <img src={exporter?.logo.path} alt={exporter.name} className="w-full h-40 object-cover rounded-t" />
                        <div className="p-2"> {/* Info Section */}
                            <h3 className="text-lg font-medium">{exporter.name}</h3>
                            <p className="text-gray-600">{exporter.state}, {exporter.country}</p>
                            <p className="text-gray-500 text-sm">
                              {exporter.productCategories.map((cat, index) => <span key={index} className="mr-2">{cat.label}</span>)}
                            </p>

                        </div>
                        </div>
                    </div>)
                )}
              </Slider>
          </div>
        </div>
      </section>
    );
  };
  

export default FeaturedExporters;
