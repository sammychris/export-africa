
import Link from "next/link";
import * as reactIcons from 'react-icons/fa';


const ListIcons = ({values, setFieldValue}) => {
    const allIconNames = Object.keys(reactIcons);
    allIconNames.length = 100;
    return(
        <div className={"w-full h-[104px] flex flex-wrap justify-around overflow-auto bg-[#f2f2f2] mt-[10px] mb-[40px] px-2"}>
            {
                allIconNames.map(icon => {
                    const IconElement = reactIcons[icon];
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <Link
                            href=""
                            className={values.icon === icon? "border-2 border-solid border-[black] rounded": ""}
                            title={icon}
                            onClick={(e) => {
                                e.preventDefault();
                                setFieldValue('icon', icon);
                            }}
                            key={icon}
                        >
                            <IconElement size={20} className="m-2"/>
                        </Link>
                    )
                })
            }
        </div>
    ) 
}

export default ListIcons;
