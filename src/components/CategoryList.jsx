import React from 'react';
import { SlOptions } from "react-icons/sl";
import TaskItem from "./TaskItem";
import Link from "next/link";
import * as ReactIcons from 'react-icons/fa';
import CategoryOptionsList from './CategoryOptionsList';


const CategoryList = ({
  organizeData,
  isCategoryId,
  openCategoryOption,
  handleDeleteCategory,
  handleEditCategory,
  handleEditTask,
  handleDeleteTask,
  status,
  optionsRef,
  handleGetCategory,
}) => {
  return (
    <>
      {status ? (
        <div className='relative w-full h-[550px] flex justify-center items-center'>
           <p>{status}</p>
        </div>
      ) : (
        <>
          {organizeData?.map(category => {
              const {id, label, description, meta, tasks} = category;
              const Icon = ReactIcons[meta?.icon || 'FaFacebook'];

              return (
                  <section key={id} className={`mr-3 relative min-h-[700px] bg-[#f5f5f5]`}>
                      {id === isCategoryId && (
                        <CategoryOptionsList
                          handleEditCategory={handleEditCategory}
                          handleDeleteCategory={handleDeleteCategory}
                          category={category}
                          optionsRef={optionsRef}
                          handleGetCategory={handleGetCategory}
                        />
                      )}
                      <div className="flex justify-between text-base font-bold p-5 items-center text-[#333]" style={{backgroundColor: meta?.color}}>
                          <div className="flex items-center">
                              <Icon size={20}/>
                              <h2 className='ml-3'>{label}</h2>
                          </div>
                          <Link
                              href=""
                              title='Category Options'
                              className="p-1 hover:text-gray-500" onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              openCategoryOption(id);
                            }}>
                              <SlOptions />
                          </Link>
                      </div>
                      <div className='px-3 w-[300px]'>
                      {
                        tasks.map(task => (
                        <TaskItem
                          key={task.id}
                          {...task}
                          handleEditTask={handleEditTask}
                          handleDeleteTask={handleDeleteTask}
                        />
                        ))
                      }
                      </div>
                  </section>
              );
            })}
        </>
      )}
    </>
  );
};

export default CategoryList;
