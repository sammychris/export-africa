import ColorList from "./ColorList";
import ListIcons from "./ListIcons";
import CloseButton from "./CloseButton";
import TextAreaInput from "./TextAreaInput";
import SubmitButton from "./SubmitButton";

const CategoryForm = ({
    showCategoryForm,
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    isSubmitting,
}) => {
    const isEditMode = values && values.id;
    return (
        <div className="absolute bg-[#0000009c] w-full h-screen top-0 left-0 z-20 flex items-center justify-center">
            <div className="bg-white p-10 max-w-[941px] w-full relative">
              <CloseButton onClick={showCategoryForm}/>
              <h1 className="text-[#2B2F30] text-center text-2xl font-normal pb-[30px]">{isEditMode? 'Edit Category' : 'Add New Category'}</h1>
              <hr className="pb-[30px]" />
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
    
                <div className="w-[48%] max-w-[420px] relative">
                  <div>
                    <label className="text-[#757575] text-base font-normal">Pick a color</label>
                  </div>
                  <ColorList values={values} setFieldValue={setFieldValue} />
                  {touched.color && errors.color && <div className="text-[#DF5146] text-sm font-normal absolute bottom-5">{errors.color}</div>}
                </div>
              </div>
    
              <div className="relative">
                <div>
                  <label className="text-[#757575] text-base font-normal">Pick an icon</label>
                </div>
                <ListIcons values={values} setFieldValue={setFieldValue} />
                {touched.icon && errors.icon && <div className="text-[#DF5146] text-sm font-normal absolute bottom-[-20px] mt-1">{errors.icon}</div>}
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
              <SubmitButton isSubmitting={isSubmitting} edited={isEditMode} />
              </form>
            </div>
          
        </div>
    );
  };
  
  export default CategoryForm;
  