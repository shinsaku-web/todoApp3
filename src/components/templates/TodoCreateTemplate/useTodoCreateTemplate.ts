import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_BASE_PATH } from "../../../constants/constants";
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
  const handleSubmit = async () => {
    try {
      const response = await fetch(SERVER_BASE_PATH + "/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      if (!response.ok) {
        throw new Error("エラー発生");
      }
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    navigateToTop,
    handleChangeTitle,
    handleChangeContents,
    handleSubmit,
  };
};
