

const Search = () => {
    return (
        <div className="container mx-auto">
  {/* ... (Header) ... */}

  <section className="search-page py-6 px-4">
    <h1 className="text-3xl font-medium mb-4">Find the Best Deals</h1> 

    {/* Search Bar and Filters */}
    <div className="search-and-filters mb-6 flex flex-col md:flex-row items-center gap-4">
      <div className="search-bar flex-grow">
        <input type="text" placeholder="Search for gift cards, paypal funds, dealers..." className="w-full border border-gray-300 p-3 rounded-lg" />
      </div>

      <div className="filters md:ml-4">
            <select className="border border-gray-300 p-2 rounded">
              <option value="">Asset Type</option>
              <option value="giftcard">Gift Card</option>
              <option value="crypto">Cryptocurrency</option>
                <option value="payment-platform">Payment Platform</option>
                {/* <option value="payoneer">Payoneer</option> */}
                <option value="other-ewallets">Other e-Wallets</option>
                <option value="cash">Cash</option> 
            </select>

            <select className="border border-gray-300 p-2 rounded">
              <option value="">Currency</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              {/* ... other currencies ... */}
            </select>

            {/* The GNS, FNF and P2P is dynamically displayed whenever the payment platform category is selected. */}
            <select className="border border-gray-300 p-2 rounded">
              <option value="">Payment Method</option>
              <option value="gns">Goods & Services (GNS)</option> 
              <option value="fnf">Friends & Family (FnF)</option> 
              <option value="p2p">Peer-to-Peer (P2P)</option> 
              <option value="steam">Steam</option> 
              {/* Maybe add 'Selling' later if applicable */}
            </select>

            <select className="border border-gray-300 p-2 rounded">
              <option value="">Location</option>
              <option value="buying">Lagos</option> 
              <option value="buying">Ibadon</option> 
              <option value="buying">Anambra</option> 
              <option value="buying">Abuja</option> 
              {/* Maybe add 'Selling' later if applicable */}
            </select>

            
      </div>
    </div>

    {/* Search Results - Same structure as before */}
    {/* <section className="search-results"> */}
      {/* ... Individual result cards ... */}
      <div className="container mx-auto">
            {/* ... (Header, etc.) ... */}

            <section className="search-results py-6 px-4">
                <h2 className="text-2xl font-medium mb-4">{`Results for "Amazon Gift Card"`}</h2> 

                {/* Individual Search Result */}
                <div className="result-card bg-white rounded-lg shadow-md p-4 mb-3 flex items-center">
                    <div className="card-image mr-4">
                        <img src="/placeholder-card.jpg" alt="Amazon Gift Card" className="w-16" />
                    </div>
                    <div className="card-details">
                        <h3 className="text-lg font-medium">Amazon Gift Card ($100)</h3>
                        <p className="text-blue-600 font-semibold">85%</p> 
                        <p className="text-gray-600">Sold by: <a href="#" className="underline">Trusted Gift Card Exchange</a></p> 
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-auto">View Deal</button> 
                </div>

                <div className="result-card bg-white rounded-lg shadow-md p-4 mb-3 flex items-center">
                    <div className="card-image mr-4">
                        <img src="/placeholder-card.jpg" alt="Amazon Gift Card" className="w-16" />
                    </div>
                    <div className="card-details">
                        <h3 className="text-lg font-medium">Amazon Gift Card ($100)</h3>
                        <p className="text-blue-600 font-semibold">85%</p> 
                        <p className="text-gray-600">Sold by: <a href="#" className="underline">Trusted Gift Card Exchange</a></p> 
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-auto">View Deal</button> 
                </div>
                <div className="result-card bg-white rounded-lg shadow-md p-4 mb-3 flex items-center">
                    <div className="card-image mr-4">
                        <img src="/placeholder-card.jpg" alt="Amazon Gift Card" className="w-16" />
                    </div>
                    <div className="card-details">
                        <h3 className="text-lg font-medium">Amazon Gift Card ($100)</h3>
                        <p className="text-blue-600 font-semibold">85%</p> 
                        <p className="text-gray-600">Sold by: <a href="#" className="underline">Trusted Gift Card Exchange</a></p> 
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-auto">View Deal</button> 
                </div>
                <div className="result-card bg-white rounded-lg shadow-md p-4 mb-3 flex items-center">
                    <div className="card-image mr-4">
                        <img src="/placeholder-card.jpg" alt="Amazon Gift Card" className="w-16" />
                    </div>
                    <div className="card-details">
                        <h3 className="text-lg font-medium">Amazon Gift Card ($100)</h3>
                        <p className="text-blue-600 font-semibold">85%</p> 
                        <p className="text-gray-600">Sold by: <a href="#" className="underline">Trusted Gift Card Exchange</a></p> 
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-auto">View Deal</button> 
                </div>

                {/* ... More results ... */}

                {/* Pagination or Load More */}
            </section>
        </div>
    {/* </section> */}

    {/* Pagination */}
    <nav className="mt-6">
      <ul className="flex items-center gap-2">
        <li><a href="#" className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded">&lt;</a></li> 
        {/* ... Numbered page links ... */}
        <li><a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded">1</a></li> 
        <li><a href="#" className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded">2</a></li> 
        {/* ... */}
        <li><a href="#" className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded">&gt;</a></li> 
      </ul>
    </nav>
  </section>
</div>

    )

}

export default Search;