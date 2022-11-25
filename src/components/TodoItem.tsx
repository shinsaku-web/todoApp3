import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
export const TodoItem = () => {
  return (
    <li className="flex items-center p-8 text-lg font-bold bg-white justify-between">
      <span>todo1</span>
      <div className="flex items-center space-x-2">
        <FiEdit className="cursor-pointer" />
        <BsTrash className="cursor-pointer" />
      </div>
    </li>
  );
};
