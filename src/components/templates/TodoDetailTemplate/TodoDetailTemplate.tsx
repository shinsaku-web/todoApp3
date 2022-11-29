import { Heading } from "../../atoms/Heading";
import { useTodoDetailTemplate } from "./useTodoDetailTemplate";

export const TodoDetailTemplate = () => {
  const { todo } = useTodoDetailTemplate();

  if (!todo) {
    return <p className="text-center">コンテンツはありません</p>;
  }
  return (
    <>
      <Heading label={todo.title} />
      <div className="mt-10 mx-auto max-w-lg">
        <p className="p-4 border border-gray-200">{todo.contents}</p>
      </div>
    </>
  );
};
