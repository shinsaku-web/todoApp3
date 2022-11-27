import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { InputForm } from "../atoms/InputForm";

export const TodoCreateTemplate = () => {
  const navigate = useNavigate();

  const navigateToTop = () => {
    navigate("/");
  };

  const handleOnChange = () => {
    console.log("change");
  };
  return (
    <>
      <Heading label="Create Todo" />
      <div className="flex items-center mt-10 justify-around">
        <Button label="Top" onClick={navigateToTop} />
      </div>
      <div className="mt-10">
        <InputForm placeholder="createTodo" onChange={handleOnChange} />
      </div>
    </>
  );
};
