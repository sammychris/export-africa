import Button from "./Button";

const backgroundImageStyle = {
    backgroundImage: "url('/image/hero-image.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

const HeroBanner = ({searchPage, setSearchPage, handleSearchSubmit, setSearchField}) => {
    return (
        <section className="bg-gray-100 py-16 h-screen flex items-center" style={backgroundImageStyle}> 
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Export Africa</h1>
            <p className="text-lg md:text-xl mb-8 text-white bg-[#0000005e]">
              Connect with African exporters and explore a world of trade opportunities.
            </p>
            <div className="max-w-md mx-auto flex flex-col gap-4"> 
              <select className="border rounded-md py-2 px-3" onChange={(e) => setSearchPage(e.target.value)} value={searchPage}>
                  <option value="products">Search Products</option>
                  <option value="exporters">Search Exporters</option>
              </select>
              <input type="text" placeholder="Enter product keywords, country..." class="border rounded-md py-2 px-3" onChange={(e) => setSearchField(e.target.value)}/>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mt-4" onClick={handleSearchSubmit}>Search</button>
              {/* <Button color="blue-600" /> */}
            </div>          
          </div>
        </section>
    )
}


export default HeroBanner;
