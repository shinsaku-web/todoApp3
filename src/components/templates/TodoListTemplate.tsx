import { useTodos } from "../../hooks/useTodos";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { InputForm } from "../atoms/InputForm";
import { TodoItem } from "../molecules/TodoItem";

export const TodoListTemplate = () => {
  const {
    todos,
    navigateToCreate,
    navigateToDetail,
    navigateToEdit,
    handleDeleteTodo,
  } = useTodos();

  return (
    <>
      <Heading label="TodoList" />
      <div className="flex items-center mt-10 justify-around">
        <Button label="Create" onClick={navigateToCreate} />
      </div>
      <div className="pt-10">
        <InputForm
          placeholder="search todo"
          // value="search value"
          onChange={() => console.log("aaa")}
        />
      </div>
      <ul className="space-y-4 pt-10">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            label={todo.title}
            onClickDetailIcon={() => navigateToDetail(todo.id)}
            onClickEditIcon={() => navigateToEdit(todo.id)}
            onClickTrashIcon={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </ul>
    </>
  );
};
