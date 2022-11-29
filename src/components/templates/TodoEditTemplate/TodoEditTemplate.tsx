import { Button } from "../../atoms/Button";
import { Heading } from "../../atoms/Heading";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { useTodoEditTemplate } from "./useTodoEditTemplate";

export const TodoEditTemplate = () => {
  const {
    todo,
    navigateToTop,
    handleChangeTitle,
    handleChangeContents,
    handleSubmit,
  } = useTodoEditTemplate();

  return (
    <>
      <Heading label="Edit Todo" />
      <div className="flex items-center mt-10 justify-around">
        <Button label="Top" onClick={navigateToTop} />
      </div>
      <div className="mt-10">
        <InputForm
          placeholder="Todo Title"
          onChange={(e) => handleChangeTitle(e.currentTarget.value)}
          value={todo.title}
        />
      </div>
      <div className="mt-10">
        <TextArea
          onChange={(e) => handleChangeContents(e.currentTarget.value)}
          placeholder="Todo Contents"
          value={todo.contents}
        />
      </div>
      <div className="flex items-center mt-6 justify-around">
        <Button label="Edit Todo" onClick={handleSubmit} />
      </div>
    </>
  );
};
