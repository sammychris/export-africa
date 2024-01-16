import CloseButton from "./CloseButton";

const InfoPage = ({
    showInfoPage,
    label,
    description,
    meta,
}) => {
    return (
        <div className="absolute bg-[#0000009c] w-full h-screen top-0 left-0 z-20 flex items-center justify-center">
            <div className="bg-white p-10 max-w-[941px] w-full relative">
              <CloseButton onClick={showInfoPage} />
              <h1 className="text-[#2B2F30] text-center text-2xl font-normal pb-[30px]">{label}</h1>
              <hr className="pb-[30px]" />
              <p className="text-[#757575] text-base font-normal pb-10">{description}</p>
              <div>
                <span className="text-[#757575] text-base font-normal">Icon Name: {meta?.icon}</span>
                <span className={`text-[#000] ml-5 px-3 p-1`} style={{ backgroundColor: meta?.color}}>chosen color</span>
              </div>
            </div>
        </div>
    );
  };
  
  export default InfoPage;
  