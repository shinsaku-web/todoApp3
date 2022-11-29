import { useTodoCreateTemplate } from "./useTodoCreateTemplate";
import { Button } from "../../atoms/Button";
import { Heading } from "../../atoms/Heading";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { useTodos } from "../../../hooks/useTodos";

export const TodoCreateTemplate = () => {
  const { todo, navigateToTop, handleChangeTitle, handleChangeContents } =
    useTodoCreateTemplate();

  const { handleAddTodo } = useTodos();

  return (
    <>
      <Heading label="Create Todo" />
      <div className="flex items-center mt-10 justify-around">
        <Button label="Top" onClick={navigateToTop} />
      </div>
      <div className="mt-10">
        <InputForm
          placeholder="Todo Title"
          onChange={(e) => handleChangeTitle(e.currentTarget.value)}
        />
      </div>
      <div className="mt-10">
        <TextArea
          onChange={(e) => handleChangeContents(e.currentTarget.value)}
          placeholder="Todo Contents"
        />
      </div>
      <div className="flex items-center mt-6 justify-around">
        <Button label="Create New Todo" onClick={() => handleAddTodo(todo)} />
      </div>
    </>
  );
};
