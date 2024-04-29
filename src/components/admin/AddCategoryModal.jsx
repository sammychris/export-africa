import { useState, useEffect } from 'react';
import Select from 'react-select';
import getMeasurementUnits from "@/utils/getMeasurementUnits";
import axios from 'axios';
import ImageUploadComponent from '../ImageUploadComponent';


const AddCategoryModal = ({ onClose, categoryToEdit }) => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [parentCategoryId, setParentCategoryId] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [measurementUnits, setMeasurementUnits] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories'); // Adjust if your route is different
        console.log({ response: response.data.data })
        setAllCategories(response.data.data);
      } catch (error) {
        console.log({error})
      } 
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    // Pre-populate data if in edit mode
    if (categoryToEdit) { 
        setCategoryName(categoryToEdit.name);
        setDescription(categoryToEdit.description);
        setImage(categoryToEdit.image);
        setParentCategoryId(categoryToEdit.parent ? categoryToEdit.parent.id : null);
        setMeasurementUnits(categoryToEdit.measurementUnits); 
    }
  }, [categoryToEdit]); // Dependency on categoryToEdit

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      const formDataApi = new FormData();
      if (categoryName) formDataApi.append('categoryName', categoryName);
      if (description) formDataApi.append('description', description);
      if (image?.length) formDataApi.append('image', image[0].file);
      if (parentCategoryId) formDataApi.append('parentCategoryId', parentCategoryId);
      if (measurementUnits) formDataApi.append('measurementUnits', JSON.stringify(measurementUnits));

      if (categoryToEdit) {
        response = await axios.put(`/api/categories/${categoryToEdit.id}`, formDataApi, {
          headers: {'Content-Type': 'multipart/form-data'},
        });
        alert("updated successfully")
      } else {
        response =  await axios.post(`/api/categories`, formDataApi, {
          headers: {'Content-Type': 'multipart/form-data'},
        });
        alert("created successfully");
      }
      
      onClose(); // closes the modal...
      console.log({response});
    } catch (error) {
      console.log({error})
    }
  };

  return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"> 
        <div className="bg-white p-6 rounded-md shadow-lg w-[800px] max-w-lg"> 
          <h2 className="text-lg font-medium mb-4">Add Category</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Category Name</label>
              <input 
                type="text"
                id="name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Category Description</label>
              <textarea 
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Category Image</label>
              <ImageUploadComponent images={image} onChange={setImage}/>
            </div>
  
            <div className="mb-4">
              <label htmlFor="parent" className="block text-gray-700 font-medium mb-2">Parent Category</label>
              <select 
                id="parent" 
                value={parentCategoryId}
                onChange={(e) => setParentCategoryId(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              >
                <option value="" className='text-gray-400'>Top-Level (No Parent)</option>
                {allCategories.map((category) => {
                  if (categoryToEdit && category.id === categoryToEdit.id) return;
                  return (
                      <>
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                        {/* { category.children && category.children.map(s => <option key={s.id} value={s.id}>{s.name}</option>) } */}
                      </>
                    )
                  })}
              </select>
            </div>

            {
              !parentCategoryId && (<div className="mb-4">
              {/* ... Measurement Units (see below) ... */}
                <label htmlFor="parent" className="block ...">Category Units of measurement</label>
                <Select                       // {...field}
                  options={getMeasurementUnits()}
                  value={measurementUnits}
                  isMulti
                  placeholder="Select categories..."
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(selectedOptions) => setMeasurementUnits(selectedOptions)}
                  required
                />
            </div>)
            }
  
            <div className="flex justify-end py-4"> 
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Add Category</button>
              <button type="button" onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ml-2">Cancel</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default AddCategoryModal;
