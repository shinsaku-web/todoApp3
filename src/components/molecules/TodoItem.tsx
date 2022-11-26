import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

interface Props {
  label: string;
  onClickEditIcon: () => void;
  onClickTrashIcon: () => void;
}

/**
 * Todo表示
 * @param {string} label Todoの内容
 * @param onClickEditIcon 編集ボタンを押したときの処理
 * @param onClickTrashIcon ゴミ箱ボタンを押したときの処理
 */
/** */
export const TodoItem = ({
  label,
  onClickEditIcon,
  onClickTrashIcon,
}: Props) => {
  return (
    <li className="flex items-center p-8 text-lg font-bold bg-white justify-between">
      <span>{label}</span>
      <div className="flex items-center space-x-2">
        <FiEdit onClick={onClickEditIcon} className="cursor-pointer" />
        <BsTrash onClick={onClickTrashIcon} className="cursor-pointer" />
      </div>
    </li>
  );
};
