import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import Navigation from "./Navigation";

const LeftBar = ({ showTaskForm, showCategoryForm, onLogOut, categories, tasks}) => {
    return <div className="col-span-2 text-base relative rounded-[10px]">
        <h2 className="font-bold text-xl">Task Manager</h2>
        <Navigation
            title="Categories"
            total={categories?.length}
            showForm={showCategoryForm}
            bgColor=""
        />
        <Navigation
            title="Task"
            total={tasks?.length}
            showForm={showTaskForm}
            bgColor=""
        />

        <span className="ml-[20px] absolute bottom-[50px] text-[#3498db]">
            <Link href={""} onClick={(e) => {
                e.preventDefault();
                onLogOut();
            }}>Logout</Link>
        </span>
    </div>
}

export default LeftBar;
