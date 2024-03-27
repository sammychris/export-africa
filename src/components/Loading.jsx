// Add styling imports as needed for loader

const Loading = () => (
    <div className={`container mx-auto my-8 min-h-[100vh] flex flex-col items-center justify-center`}>
      <div className="bg-white p-8 rounded-md shadow-md"> 
          <div className='flex items-center'>
            <svg class="animate-spin h-5 w-5 mr-3 border-blue-600 border-b-2 border-r-2 rounded-full" viewBox="0 0 24 24"> </svg> Loading... 
          </div>
      </div>
    </div>
);

export default Loading;
