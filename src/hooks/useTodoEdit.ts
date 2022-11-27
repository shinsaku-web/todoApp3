import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_BASE_PATH } from "../constants/constants";
import { TodoType } from "../types/TodoType";

export const useTodoEdit = () => {
  const { id } = useParams();
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
      const response = await fetch(SERVER_BASE_PATH + "/todos/" + id, {
        method: "PUT",
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

  const fetchTodo = async () => {
    try {
      const response = await fetch(SERVER_BASE_PATH + "/todos/" + id);
      const data = await response.json();
      setTodo((prev) => ({
        ...prev,
        ...data,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return {
    todo,
    navigateToTop,
    handleChangeTitle,
    handleChangeContents,
    handleSubmit,
  };
};
