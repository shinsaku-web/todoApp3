import { useState } from "react";
import { InputForm } from "../components/InputForm";
import { TodoItem } from "../components/TodoItem";

//トップページ
export const Index = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleEditTodo = () => {
    console.log("edit");
  };
  const handleDeleteTodo = () => {
    console.log("delete");
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">TodoList</h1>
      <div className="pt-10">
        <InputForm
          placeholder="search todo"
          onClick={() => console.log("aaa")}
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
    </div>
  );
};
