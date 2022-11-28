import { SERVER_BASE_PATH } from "../constants/constants";
import { TodoType } from "../types/TodoType";

export const getTodos = async () => {
  try {
    const response = await fetch(SERVER_BASE_PATH + "/todos");
    const data: TodoType[] = await response.json();
    if (!response.ok) {
      throw new Error("エラー発生");
    }
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTodo = async (id: number) => {
  try {
    const response = await fetch(SERVER_BASE_PATH + "/todos/" + id);
    const data: TodoType = await response.json();
    if (!response.ok) {
      throw new Error("エラー発生");
    }
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addTodo = async (todo: Omit<TodoType, "id">) => {
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
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateTodo = async (id: number, todo: Omit<TodoType, "id">) => {
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
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await fetch(SERVER_BASE_PATH + "/todos/" + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("delete failed");
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
