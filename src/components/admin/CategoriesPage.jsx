import { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'; 
import axios from 'axios';
import AddCategoryModal from './AddCategoryModal';

export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [editCategory, setEditCategory] = useState(null)

    useEffect(() => {
        try {
            const fetchData = async () => {
                const {data} = await axios.get('/api/categories');
                setCategories(data.data);
            };

            fetchData();
        } catch(error){
            console.log({error})
        }
    }, []);

    const handleEditCategory = (category) => {
        setIsOpenModal(!isOpenModal);
        setEditCategory(category)
    }

    const handleCloseModal = () => {
        setEditCategory(null);
        setIsOpenModal(!isOpenModal);
    }

    const handleDeleteCategory = async (category) => {
        if(!confirm(`Are you sure you want to use this option?`)) return;
        try {
            const { data } = await axios.delete('/api/categories/'+category.id);
            console.log({ data });
            alert("Deleted successfully!")
            // setCategories(data.data);
        } catch (error) {
            console.log({ error });
        }
    }


    const renderCategories = (categories) => (
        <ul className="list-disc pl-6">
            {categories.map((category) => (
                <li key={category._id} className="mb-2">
                    <div className="flex items-start justify-between bg-white border border-gray-200 rounded-md p-3 shadow hover:bg-gray-100">
                        <div className='flex items-center'>
                            <h3 className="text-lg font-medium text-gray-800 mr-4">{category.name}</h3>
                            <p className="text-sm text-gray-500 mr-3">
                               {category.parent ? category.parent.name : 'Top-Level'}
                            </p>

                            {/* Measurement Units */}
                            {category.measurementUnits && (
                                <ul className="text-sm flex">
                                    {category.measurementUnits.map((unit, index, arr) => (
                                        <li key={unit._id || `${unit.label}-${unit.value}`} className="mr-1">
                                            {`${unit.label} (${unit.value})`}{index < arr.length - 1 && ','}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="text-blue-500 hover:text-blue-700 p-1 rounded-sm" onClick={() => handleEditCategory(category)}>
                                <FaEdit /> 
                            </button>
                            <button className="text-red-500 hover:text-red-700 p-1 rounded-sm" onClick={() => handleDeleteCategory(category)}>
                                <FaTrash /> 
                            </button>
                        </div>

                    </div>

                    {category.children && renderCategories(category.children)}
                </li>
            ))}
        </ul>
    );

    return (
        <>
            {isOpenModal && <AddCategoryModal categoryToEdit={editCategory} onClose={handleCloseModal}/>}

            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Categories</h1>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded-md" 
                        onClick={() => setIsOpenModal(!isOpenModal)}>
                        <FaPlus className="inline-block mr-2" /> Create Category
                    </button>
                </div>

                {/* Render Categories */}
                {renderCategories(categories)} 
            </div>
        </>
    );
}
