import CloseButton from "./CloseButton";
import SubmitButton from "./SubmitButton";
import TextAreaInput from "./TextAreaInput";


const TaskForm = ({
  showTaskForm,
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
  handleBlur,
  categories,
  editTaskData,
  isSubmitting
}) => {
    return (
        <div className="absolute bg-[#0000009c] w-full h-screen top-0 left-0 z-20 flex items-center justify-center">
            <div className="bg-white p-10 max-w-[941px] w-full relative">
                <CloseButton onClick={showTaskForm} />
                <h1 className="text-[#2B2F30] text-center text-2xl font-normal pb-[30px]">{editTaskData? 'Edit Task': 'Add New Task'}</h1>
                <hr className="pb-[30px]"/>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <div className="w-[48%] max-w-[420px] relative">
                            <div>
                              <label className="text-[#757575] text-base font-normal">Title</label>
                            </div>
                            <input
                              className="w-full h-10 bg-[#F2F2F2] rounded-[3px] mt-[10px] mb-[40px] px-4"
                              type="text"
                              id='title'
                              name='title'
                              placeholder="Something here..."
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.title}
                            />
                            {touched.title && errors.title && <div className="text-[#DF5146] text-sm font-normal absolute top-[76px]">{errors.title}</div>}
                          </div>
                        <div className="w-[48%] max-w-[420px] flex justify-between">
                            <div className="w-[50%] relative">
                                <label className="text-[#757575] text-base font-normal">Select a Category</label> <br/>
                                <select
                                  className="w-full h-10 bg-[#F2F2F2] rounded-[3px] mt-[10px] mb-[40px] px-4"
                                  id="categoryId"
                                  name="categoryId"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.categoryId}
                                >
                                    <option value="">...</option>
                                      {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                          {category.label}
                                        </option>
                                      ))}
                                </select>
                                {touched.categoryId && errors.categoryId && <div className="text-[#DF5146] text-sm font-normal absolute top-[76px]">{errors.categoryId}</div>}
                            </div>
                            <div className="w-[40%] relative">
                                <label className="text-[#757575] text-base font-normal">Select a Priority</label>
                                <select
                                  className="w-full h-10 bg-[#F2F2F2] rounded-[3px] mt-[10px] mb-[40px] px-4"
                                  id="priority"
                                  name="priority"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.priority}
                                >
                                    <option value="">...</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                                {touched.priority && errors.priority && <div className="text-[#DF5146] text-sm font-normal absolute top-[76px]">{errors.priority}</div>}
                            </div> 
                        </div>
                    </div>
                    <TextAreaInput
                      label="Description"
                      id="description"
                      name="description"
                      placeholder="Something here..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      error={errors.description}
                      touched={touched.description}
                    />
                    <SubmitButton isSubmitting={isSubmitting} edited={editTaskData} />
                </form>
            </div>
        </div>
    );

}

export default TaskForm;
