import Link from "next/link";

const ColorList = ({ values, setFieldValue }) => {
    const colors = [
        '#fff2a5', // Lighter amber yellow
        '#5de5ef', // Lighter teal
        '#98d99f', // Lighter green
        '#ffb575', // Lighter deep orange
        '#b585e5', // Lighter deep purple
        '#75c5fa', // Lighter blue
        '#f59fc5', // Lighter pink
        '#f54343', // Lighter red
        '#caa5d9', // Lighter purple
        '#5fd5fc', // Lighter light blue
        '#5dc5b5', // Lighter teal
        '#e3e356',  // Lighter yellow
        '#d2e0ec', // Lighter Alice blue
        '#ffe5b4', // Lighter bisque
        '#97e8c0'  // Lighter mint cream
    ];
    return (
        <div className="flex items-center w-full h-10 bg-[#F2F2F2] rounded-[3px] mt-[10px] mb-[40px] px-2">
            {colors.map((colorCode, index) => (
            <Link
                key={index}
                href={""}
                className={`w-5 h-5 m-1 ${
                values.color === colorCode ? 'border-2 border-solid border-[black] rounded' : ''
                }`}
                style={{backgroundColor: colorCode}}
                onClick={(e) => {
                    e.preventDefault()
                    setFieldValue('color', colorCode);
                }}
            >
            </Link>
            ))}
        </div>
    );
};

export default ColorList;