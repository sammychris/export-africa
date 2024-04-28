import constructEmbedUrl from "@/utils/constructEmbedUrl";


const VideoModal = ({ isOpen, videoUrl, onClose }) => {
    const correctedUrl = constructEmbedUrl(videoUrl);
    return (
      isOpen && ( 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"> 
        {/* Outermost div: Modal Overlay */}
            <div className="bg-white p-6 rounded-md shadow-xl w-[500px] relative m-5"> 
                {/* Modal Content Area */}
                <button onClick={onClose} className="absolute top-[-25px] right-0 text-white font-bold">
                    Close
                </button> 
                {correctedUrl
                    ? (<iframe 
                        src={correctedUrl} 
                        height={300}
                        width={500}
                        // ... your iframe attributes ...
                        className="w-full aspect-w-16 aspect-h-9" // Maintain video aspect ratio
                    ></iframe>)
                    : (
                        <div>No Video for the product!</div>
                        )
            }

            </div>
        </div>
      )
    ); 
};


export default VideoModal;
