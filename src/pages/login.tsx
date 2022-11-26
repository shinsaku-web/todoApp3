import { InputForm } from "../components/InputForm";

export const LoginPage = () => {
  const handleOnChange = () => {
    console.log("change");
  };
  return (
    <>
      <h1>Login</h1>
      <div className="mt-10">
        <InputForm placeholder="createTodo" onChange={handleOnChange} />
      </div>
    </>
  );
};
