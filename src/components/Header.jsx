import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaUser, FaBuilding } from 'react-icons/fa'; 
import { FaChevronDown } from 'react-icons/fa';


const Header = ({ submitFilterUrl, keywords, setKeywords, toggleDropdown, isDropdownOpen, authData, handleLogout}) => {
    const pathname = usePathname();
    const isNotHomePage = pathname !== '/';
    return (
        <div className="bg-teal-500 py-2">
          <div className="container mx-auto flex items-center justify-between lg:px-8"> 
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-lg font-semibold text-white">
                Your App
              </Link>
              { isNotHomePage && (<div className="rounded-md flex items-center  bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  name="keywords"
                  value={keywords}
                  placeholder="Keywords, skills, companies"
                  className="w-4/5 outline-none md:w-72 px-3 py-1"
                  onChange={(e) => setKeywords(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') submitFilterUrl(e);
                  }}
                />
                 <button type="submit" className=" bg-slate-800 text-gray-400 hover:text-white px-2 py-1" onClick={() => submitFilterUrl({name: 'keywords', value: keywords})}>
                  Search 
                </button> 
              </div>)}
            </div>
              <div className="flex items-center space-x-6">
                <nav>
                  <ul className="hidden lg:flex space-x-8 text-white"> 
                      <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                      <li><Link href="/products/search" className="hover:text-blue-600 transition-colors">Browse Products</Link></li>
                      <li><Link href="/exporters/search" className="hover:text-blue-600 transition-colors">Find Exporters</Link></li>
                      <li><Link href="#" className="hover:text-blue-600 transition-colors">Blog</Link></li>
                  </ul>
                </nav>
                {authData?.authenticated || <>
                  <Link href="/login" className="hover:text-blue-600 transition-colors text-white font-bold">Login</Link>
                  <Link href="/register" className="bg-white text-teal-500 font-medium hover:bg-gray-100 transition-colors px-4 py-2 rounded-md text-sm">Register</Link>
                </>}


                {authData?.authenticated && <div className="relative" onClick={toggleDropdown}>
                  <div className='flex items-center  cursor-pointer ml-5'>
                    <div className="w-11 h-11 rounded-full border flex items-center justify-center">
                      <FaUser size={20} color="#1e293b" /* Adjust as needed */ /> 
                    </div>
                    <div className="role-icon-overlay ml-1">
                      <FaChevronDown size={12} color="#1e293b" />
                    </div>
                  </div>
                 
                  {isDropdownOpen && <div className="bg-white top-12 absolute right-4 z-10 shadow-[2px_2px_7px_0px_#00000061] rounded-[5px]">
                      <Link href={authData?.role === 'exporter'? '/exporters/my-profile': '/user/profile'} className="flex py-2 px-6 hover:bg-gray-300">
                        Profile
                      </Link>
                      <Link href='/messages' className="flex py-2 px-6 hover:bg-gray-300">
                        Messages
                      </Link>
                      <Link href={authData?.role === 'exporter'? '/exporters/my-profile?=settings': '/user/profile?=settings'} className="flex py-2 px-6 hover:bg-gray-300">
                        Settings
                      </Link>
                      <Link href="#" onClick={handleLogout} className="flex py-2 px-6 hover:bg-gray-300">
                        Logout
                      </Link>
                      {/* <Link href="/orders">Orders</Link>
                      <Link href="/wishlist">Wishlist</Link> */}
                      
                    </div>}
                </div>}
            </div>
            {/* Mobile Toggle */}
            <button className="lg:hidden">...</button> 
          </div>
        </div>
  );
};

export default Header;


