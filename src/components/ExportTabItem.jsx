

const ExporterTabItem = ({handleSelectOption, page, label, selectedPage}) => {
    return (
        <button
            // key={currentPage}
            onClick={() => handleSelectOption(page)}
            className={`px-4 py-2 rounded-md ${
                selectedPage.startsWith(page) ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } text-linkedin-blue text-xs font-semibold`}
          >
            {label}
          </button>
    )
}

export default ExporterTabItem;
