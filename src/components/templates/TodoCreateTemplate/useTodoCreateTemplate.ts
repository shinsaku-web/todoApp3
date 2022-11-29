import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoType } from "../../../types/TodoType";

export const useTodoCreateTemplate = () => {
  const [todo, setTodo] = useState<Omit<TodoType, "id">>({
    title: "",
    contents: "",
    user: 1,
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
    todo,
    navigateToTop,
    handleChangeTitle,
    handleChangeContents,
  };
};
