import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodo, getTodos } from "../../../apis/todoApi";
import { TodoType } from "../../../types/TodoType";

export const useTodoListTemplate = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate("/create");
  };

  const navigateToDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const navigateToEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteTodo = async (id: number) => {
    const res = await deleteTodo(id);
    if (res) {
      fetchTodos();
    }
  };

  const fetchTodos = async () => {
    const res = await getTodos();
    if (!res) {
      setTodos([]);
      return;
    }
    setTodos(res);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    navigateToCreate,
    navigateToDetail,
    navigateToEdit,
    handleDeleteTodo,
  };
};
