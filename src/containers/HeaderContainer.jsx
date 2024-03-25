// components/Header.js
'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react'; 
import Header from '@/components/Header';
import HeaderFilter from '@/components/HeaderFilter';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import { fetchCategoriesSuccess } from '@/lib/features/categories/categorySlice';
import { authLogin } from '@/lib/features/auth/authSlice';
import axios from 'axios';


const HeaderContainer = ({authData}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isSearchPage = pathname.includes('search');
  const searchPage = pathname?.split('/')[1];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = useAppSelector((state) => state.categories.byId); // Assuming 'byId' structure
  // const { isAuthenticated, user } = useAppSelector(state => state.auth);
 
  const [keywords, setKeywords] = useState('');
  const searchType = searchParams.get('searchType') || "";
  const category = searchParams.get('category')?.split('-').pop() || "";
  const country = searchParams.get('country') || "";
  const state = searchParams.get('state') || "";


    useEffect(() => {
      fetchAllCategories();

      initiateAuthentication();

      setKeywords(searchParams.get('keywords'));

      window.addEventListener('click', closeOption);
      return () => {
          window.removeEventListener('click', closeOption);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);


    const initiateAuthentication = () => {
      dispatch(authLogin(authData));
    }


    const fetchAllCategories = async () => {
      try {
          const {data} = await axios.get('/api/categories');
          dispatch(fetchCategoriesSuccess(data.data));
      } catch (error) {
          console.log({error})
      }
    };

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeOption = () => setIsDropdownOpen(false);

    const submitFilterUrl = (event) =>{
      let { name, value } = event.target || event;
      const updatedSearch = new URLSearchParams(window.location.search);

      if (!keywords) updatedSearch.delete('keywords');
      if (value) {
        if (name === "category") value = slugifyCategory(categories[value]);
        updatedSearch.set(name, value);
      } else {
        updatedSearch.delete(name);
      }

      const query = updatedSearch.toString();
      router.push(`search?${query}`); 
    }


    function slugifyCategory(selectedCategory) {
      const slug = selectedCategory?.name.toLowerCase()
                 .replace(/\s+/g, '-') // Replace spaces with hyphens
                 .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters
                 .replace(/-{2,}/g, '-'); // Handle multiple hyphens in a row 
      return `${slug}-${selectedCategory.id}`;
    }


    const changePage = (e) => {
      const page = e.target.value;
      const updatedSearch = new URLSearchParams(window.location.search);
      const query = updatedSearch.toString();
      router.push(`/${page}/search?${query}`); 
    }


    const handleLogout = async (e) => {
      e.preventDefault();
      const response = await axios.get('/api/auth/logout');

      if (response && response.data.success) {
        window.location.href = '/'
      }
    }

    
    return (
      <header className="bg-white shadow-md sticky top-0 z-10"> 
        <Header
          keywords={keywords}
          submitFilterUrl={submitFilterUrl}
          setKeywords={setKeywords}
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
          authData={authData}
          handleLogout={handleLogout}
        />
        {isSearchPage && (
          <HeaderFilter
            searchPage={searchPage}
            changePage={changePage}
            categories={categories}
            submitFilterUrl={submitFilterUrl}
            searchType={searchType}
            category={category}
            country={country}
            state={state}
           />
        )}
    </header>
  );
};

export default HeaderContainer;


