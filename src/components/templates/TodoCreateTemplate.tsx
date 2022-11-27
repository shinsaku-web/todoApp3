import { useTodoCreate } from "../../hooks/useTodoCreate";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { InputForm } from "../atoms/InputForm";

export const TodoCreateTemplate = () => {
  const {
    navigateToTop,
    handleChangeTitle,
    handleChangeContents,
    handleSubmit,
  } = useTodoCreate();

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
        <textarea
          className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => handleChangeContents(e.currentTarget.value)}
          placeholder="Todo Contents"
          rows={10}
        ></textarea>
      </div>
      <div className="flex items-center mt-6 justify-around">
        <Button label="Create New Todo" onClick={handleSubmit} />
      </div>
    </>
  );
};
