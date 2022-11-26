import { useState } from "react";
import { InputForm } from "../InputForm";
import { TodoItem } from "../TodoItem";

export const TodoListTemplate = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleEditTodo = () => {
    console.log("edit");
  };
  const handleDeleteTodo = () => {
    console.log("delete");
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold">TodoList</h1>
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
