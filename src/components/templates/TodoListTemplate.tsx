import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/Button";
import { InputForm } from "../atoms/InputForm";
import { TodoItem } from "../molecules/TodoItem";

export const TodoListTemplate = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate("/create");
  };

  const handleEditTodo = () => {
    console.log("edit");
  };
  const handleDeleteTodo = () => {
    console.log("delete");
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold">TodoList</h1>
      <div className="flex items-center mt-10 justify-around">
        <Button label="Create" onClick={navigateToCreate} />
      </div>
      <div className="pt-10">
        <InputForm
          placeholder="search todo"
          onChange={() => console.log("aaa")}
        />
      </div>
      <ul className="space-y-4 pt-10">
        {todos.map((todo) => (
          <TodoItem
            key={todo}
            label={""}
            onClickEditIcon={handleEditTodo}
            onClickTrashIcon={handleDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
};
