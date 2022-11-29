import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_BASE_PATH } from "../../../constants/constants";
import { TodoType } from "../../../types/TodoType";

export const useTodoDetailTemplate = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState<TodoType | null>(null);

  const fetchTodo = async () => {
    try {
      const response = await fetch(SERVER_BASE_PATH + "/todos/" + id);
      const data = await response.json();
      setTodo(data);
    } catch (error) {
      setTodo(null);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return { todo };
};
