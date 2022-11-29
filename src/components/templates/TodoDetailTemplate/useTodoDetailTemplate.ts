import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodo } from "../../../apis/todoApi";
import { TodoType } from "../../../types/TodoType";

export const useTodoDetailTemplate = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState<TodoType | null>(null);

  const fetchTodo = async () => {
    const res = await getTodo(Number(id));
    if (res) {
      setTodo(res);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return { todo };
};
