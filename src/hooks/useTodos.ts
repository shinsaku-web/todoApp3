import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../apis/todoApi";
import { TodoType } from "../types/TodoType";

export const useTodos = () => {
  const [originTodos, setOriginTodos] = useState<TodoType[]>([]);
  const navigate = useNavigate();

  // add
  const handleAddTodo = async (todo: Omit<TodoType, "id">) => {
    const res = await addTodo(todo);
    if (res) {
      navigate("/");
    }
  };

  //update
  const handleUpdateTodo = async (id: number, todo: Omit<TodoType, "id">) => {
    const res = await updateTodo(id, todo);
    if (res) {
      navigate(`/`);
    }
  };

  //delete
  const handleDeleteTodo = async (id: number) => {
    const res = await deleteTodo(id);
    if (res) {
      fetchTodos();
    }
  };

  // fetch
  const fetchTodos = async () => {
    const res = await getTodos();
    if (!res) {
      return;
    }
    setOriginTodos(res);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    originTodos,
    handleAddTodo,
    handleUpdateTodo,
    handleDeleteTodo,
  };
};
