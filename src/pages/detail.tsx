import { TodoDetailTemplate } from "../components/templates/TodoDetailTemplate";
import { useFetchTodo } from "../hooks/useFetchTodo";

export const TodoDetailPage = () => {
  const { todo } = useFetchTodo();

  if (!todo) {
    return <p className="text-center">コンテンツはありません</p>;
  }
  return <TodoDetailTemplate title={todo.title} contents={todo.contents} />;
};
