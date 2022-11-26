import { InputForm } from "../InputForm";

export const TodoEditTemplate = () => {
  const handleOnChange = () => {
    console.log("change");
  };
  return (
    <>
      <h1>Edit Todo</h1>
      <div className="mt-10">
        <InputForm placeholder="createTodo" onChange={handleOnChange} />
      </div>
    </>
  );
};
