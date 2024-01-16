import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from 'next/link';
import getPriorityColor from "@/utils/getPriorityColor";


const TaskItem = ({id, description, label, meta, handleEditTask, handleDeleteTask}) => {
    return (
        <article className="bg-white p-[18px] rounded-[5px] border border-solid border-[#00000029] relative w-full mt-3">
            <div className="flex justify-between absolute top-3 left-[15px] right-[15px] text-base">
                <Link href="" title='Edit Task' className="hover:text-gray-500" onClick={(e) => {
                    e.preventDefault();
                    handleEditTask({id, description, label, meta});
                }}><FiEdit2 /></Link>
                <Link href="" title="Delete Task" className="hover:text-gray-500" onClick={(e) => {
                    e.preventDefault();
                    handleDeleteTask(id);
                }}><RiDeleteBin6Line /></Link>
            </div>
            <div className="flex items-center pb-3 pt-6">
                <span className={`w-5 h-5 mr-3 rounded-[100%]`} style={{backgroundColor: getPriorityColor(meta?.priority)}}></span>
                <h3 className="text-base font-bold text-[#2b2f37]">{label}</h3>
            </div>
            <p className="text-[#757575]">{description}</p>
        </article>
    )
}

export default TaskItem;
