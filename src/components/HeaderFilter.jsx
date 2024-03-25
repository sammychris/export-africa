
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


const HeaderFilter = ({
    changePage,
    categories,
    submitFilterUrl,
    searchPage,
    category,
    country,
    state,
}) => {
    return(
        <div className='container mx-auto flex items-center lg:px-8 py-2'>
            <p>Search By:</p>
            <div className="ml-4 flex gap-2">
              <select
                  value={searchPage}
                  name="searchPage"
                  onChange={changePage}
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400">
                <option value="products">
                  Products
                </option>
                <option value="exporters">
                  Exporters
                </option>
              </select>
              <select
                value={category}
                name="category"
                onChange={submitFilterUrl}
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400">
                <option value="">All Categories</option>
                {Object.values(categories).map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
              </select>
              <CountryDropdown
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-4 w-44"
                  value={country}
                  onChange={(value) => submitFilterUrl({ name: 'country', value })}
              />
              {country && (<RegionDropdown
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400 w-44"
                  country={country}
                  value={state}
                  onChange={(value) => submitFilterUrl({ name: 'state', value })}
              />)}
           </div>
        </div>
    )
}

export default HeaderFilter;