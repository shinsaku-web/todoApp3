import { InputForm } from "../components/atoms/InputForm";

export const RegisterPage = () => {
  const handleOnChange = () => {
    console.log("change");
  };
  return (
    <>
      <h1>Register</h1>
      <div className="mt-10">
        <InputForm placeholder="createTodo" onChange={handleOnChange} />
      </div>
    </>
  );
};
