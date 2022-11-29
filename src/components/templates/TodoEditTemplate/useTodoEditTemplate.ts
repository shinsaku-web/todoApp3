import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoType } from "../../../types/TodoType";

export const useTodoEditTemplate = (originTodos: TodoType[]) => {
  const { id } = useParams();
  const numberID = Number(id);
  const originTodo = originTodos.filter((todo) => todo.id === numberID)[0];

  const [todo, setTodo] = useState<Omit<TodoType, "id">>({
    title: originTodo?.title || "",
    contents: originTodo?.contents || "",
    user: originTodo?.user || 1,
  });

  const navigate = useNavigate();

  const navigateToTop = () => {
    navigate("/");
  };

  const handleChangeTitle = (newTitle: string) => {
    setTodo((prev) => ({
      ...prev,
      title: newTitle,
    }));
  };
  const handleChangeContents = (newContents: string) => {
    setTodo((prev) => ({
      ...prev,
      contents: newContents,
    }));
  };

  return {
    numberID,
    todo,
    navigateToTop,
    handleChangeTitle,
    handleChangeContents,
  };
};
