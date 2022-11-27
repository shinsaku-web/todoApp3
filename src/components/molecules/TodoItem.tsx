import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BiNote } from "react-icons/bi";

interface Props {
  label: string;
  onClickDetailIcon: () => void;
  onClickEditIcon: () => void;
  onClickTrashIcon: () => void;
}

/**
 * Todo表示
 * @param {string} label Todoの内容
 * @param onClickDetailIcon 詳細ボタンを押したときの処理
 * @param onClickEditIcon 編集ボタンを押したときの処理
 * @param onClickTrashIcon ゴミ箱ボタンを押したときの処理
 */
/** */
export const TodoItem = ({
  label,
  onClickDetailIcon,
  onClickEditIcon,
  onClickTrashIcon,
}: Props) => {
  return (
    <li className="flex items-center p-8 text-lg font-bold bg-white justify-between">
      <span>{label}</span>
      <div className="flex items-center space-x-2">
        <BiNote onClick={onClickDetailIcon} className="cursor-pointer" />
        <FiEdit onClick={onClickEditIcon} className="cursor-pointer" />
        <BsTrash onClick={onClickTrashIcon} className="cursor-pointer" />
      </div>
    </li>
  );
};
