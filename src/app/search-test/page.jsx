'use client'
import { getAccessToken, removeAccessToken, removeRefreshToken } from '@/utils/cookieUtils';
import {useState, useEffect, useRef } from 'react';
import { getCategories, deleteCategory, getCategoryById } from '@/apiServices/categoryApi';
import { deleteTask, getTasks } from '@/apiServices/taskApi';
import SearchFilters from '@/components/ExportersSearchPage';
import ExportersListPage from '@/components/ExportersListPage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';



export default function Home() {
  const [accessToken, setAccessToken] = useState(getAccessToken());
  const [isCatForm, setIsCatForm] = useState(false);
  const [isTaskForm, setIsTaskForm] = useState(false);
  const [isInfoPage, setIsInfoPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editCategoryData, setEditCategoryData] = useState(null);
  const [editTaskData, setEditTaskData] = useState(null);
  const [isCategoryId, setIsCategoryId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryItem, setCategoryItem] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('Loading Tasks...');
  const optionsRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', openCategoryOption);
    return () => {
    window.removeEventListener('click', openCategoryOption);
    };
}, []); // Include dependencies

  useEffect(() => {
      fetchData();
      setIsLoading(false);
  }, []);


  const fetchData = async () => {
    try {
        const categoryData = await getCategories();
        const taskData = await getTasks();
        setCategories(categoryData.results);
        setTasks(taskData.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally{
      setStatus('');
    }
  };

  const showTaskForm = () => {
    if(!categories.length) return alert("Oop! You need to create at least one category before creating a task")
    setIsTaskForm(!isTaskForm);
    setEditTaskData(null);
  }

  const showCategoryForm = () => {
    setIsCatForm(!isCatForm);
    setEditCategoryData(null);
  }

  const showInfoPage = () => {
    setIsInfoPage(!isInfoPage);
  }

  const openCategoryOption = (categoryId) => {
    setIsCategoryId(categoryId === isCategoryId ? null : categoryId);
  }

  const handleEditCategory = (category) => {    
    showCategoryForm();
    const catFormData = {
      id: category?.id,
      title: category?.label,
      color: category?.meta?.color,
      icon: category?.meta?.icon,
      description: category?.description
    }
    setEditCategoryData(catFormData);
    openCategoryOption();
  }

  const handleEditTask = (task) => { 
    showTaskForm();   
    const taskFormData = {
      id: task?.id,
      title: task?.label,
      categoryId: task?.meta?.categoryId,
      priority: task?.meta?.priority,
      description: task?.description
    }
    setEditTaskData(taskFormData);
  }

  const handleDeleteCategory = async (categoryId) => {
    const category = organizeData.find(cat => cat.id === categoryId);
    const catTasks = category.tasks;
      if(!confirm("Are you sure, you want to use this option?")) return;
      setStatus('Deleting Category...')
      await deleteCategory(categoryId);
      for(let i = 0; i < catTasks.length; i++){
        await deleteTask(catTasks[i].id);
      }
      fetchData();
  }

  const handleDeleteTask = async (taskId) => {
    if(!confirm("Are you sure, you want to use this option?")) return;
    setStatus('Deleting Task...')
    await deleteTask(taskId);
    fetchData();
  }

  const handleGetCategory = async (categoryId) => {
    showInfoPage();
    const data = await getCategoryById(categoryId);
    setCategoryItem(data);
  }

  const onLogOut = () => {
    removeAccessToken();
    removeRefreshToken();
    setAccessToken(null);
  };

  const organizeTasksByCategory = (categories, tasks) => {
    return categories.map(category => ({
      ...category,
      tasks: tasks.filter(task => task.meta.categoryId === category.id),
    }))
  }

  const organizeData = organizeTasksByCategory(categories, tasks);

  return (
    <div className="bg-neutral min-h-screen font-sans">
      <Header />
    <SearchFilters />
    <ExportersListPage />
    <Footer />
  </div>
  )
}
