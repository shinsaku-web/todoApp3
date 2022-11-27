import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoType } from "../types/TodoType";

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate("/create");
  };

  const navigateToDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const handleEditTodo = () => {
    console.log("edit");
  };
  const handleDeleteTodo = () => {
    console.log("delete");
  };

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      setTodos([]);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    navigateToCreate,
    navigateToDetail,
    handleEditTodo,
    handleDeleteTodo,
  };
};
