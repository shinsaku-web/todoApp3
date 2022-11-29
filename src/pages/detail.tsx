import { TodoDetailTemplate } from "../components/templates/TodoDetailTemplate/TodoDetailTemplate";
import { useTodoDetailTemplate } from "../components/templates/TodoDetailTemplate/useTodoDetailTemplate";

export const TodoDetailPage = () => {
  const { todo } = useTodoDetailTemplate();

  if (!todo) {
    return <p className="text-center">コンテンツはありません</p>;
  }
  return <TodoDetailTemplate title={todo.title} contents={todo.contents} />;
};
