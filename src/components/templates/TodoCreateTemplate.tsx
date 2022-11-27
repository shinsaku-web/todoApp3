import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_BASE_PATH } from "../../constants/constants";
import { TodoType } from "../../types/TodoType";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { InputForm } from "../atoms/InputForm";

export const TodoCreateTemplate = () => {
  const [todo, setTodo] = useState<Omit<TodoType, "id">>({
    title: "",
    contents: "",
    user: 1,
  });
  const navigate = useNavigate();

  const navigateToTop = () => {
    navigate("/");
  };
  const handleChangeTitle = (newTitle: string) => {
    setTodo((prev) => ({
      ...prev,
      title: newTitle,
    }));
  };
  const handleChangeContents = (newContents: string) => {
    setTodo((prev) => ({
      ...prev,
      contents: newContents,
    }));
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch(SERVER_BASE_PATH + "/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      if (!response.ok) {
        throw new Error("エラー発生");
      }
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

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
