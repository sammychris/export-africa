import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';

const Navigation = ({ title, total, showForm, bgColor }) => {

  return (
    <nav className={`bg-white mt-11 w-[100%] shadow-[0px_13px_26px_0px_rgba(0,0,0,0.10)] rounded-md p-5 ${bgColor}`}>
      <div className="py-3 underline">
        <span>{title}</span>
      </div>
      <div className="pb-[10px]">
        <span>{`Total: ${total}`}</span>
      </div>
      <div>
        <Link
          href={""}
          className={`flex items-center px-2 py-2 w-full max-w-${title === 'Categories' ? '40' : '28'} bg-[#5CBC9A] rounded-[3px] text-[#fff] hover:bg-[#4a967b]`}
          onClick={(e) => {
            e.preventDefault();
            showForm();
          }}>
          <span className="mr-[10px]">{`New ${title}`}</span>
          <AiOutlinePlus size={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
