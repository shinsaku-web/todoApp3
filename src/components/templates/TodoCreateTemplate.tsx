import { InputForm } from "../InputForm";

export const TodoCreateTemplate = () => {
  const handleOnChange = () => {
    console.log("change");
  };
  return (
    <>
      <h1>Create Todo</h1>
      <div className="mt-10">
        <InputForm placeholder="createTodo" onChange={handleOnChange} />
      </div>
    </>
  );
};
