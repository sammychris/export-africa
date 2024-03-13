import ExploreCategoryCard from "./ExploreCategoryCard";




const ExploreCategoryList = ({productCategories}) => {
    return(
        <section className="bg-gray-200 py-20">
        <div className="container mx-auto text-center max-w-[1128px]">
          <h2 className="text-2xl font-medium text-center mb-6">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {productCategories?.map((category) => <ExploreCategoryCard key={category.id} category={category}/>)}
          </div>
        </div>
      </section>
    )
}

export default ExploreCategoryList;

