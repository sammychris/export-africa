'use client'
import { getAccessToken, removeAccessToken, removeRefreshToken } from '@/utils/cookieUtils';
import {useState, useEffect, useRef } from 'react';
import { getCategories, deleteCategory, getCategoryById } from '@/apiServices/categoryApi';
import { deleteTask, getTasks } from '@/apiServices/taskApi';
import ArticlePage from '@/components/ArticlePage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';



export default function Post() {
  const [isCategoryId, setIsCategoryId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    window.addEventListener('click', openCategoryOption);
    return () => {
    window.removeEventListener('click', openCategoryOption);
    };
}, []); // Include dependencies




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

  const openCategoryOption = (categoryId) => {
    setIsCategoryId(categoryId === isCategoryId ? null : categoryId);
  }

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
      <ArticlePage />
      <Footer />
  </div>
  )
}
