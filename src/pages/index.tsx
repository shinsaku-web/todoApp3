import { InputForm } from "../components/InputForm";
import { TodoItem } from "../components/TodoItem";

//トップページ
export const Index = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">TodoList</h1>
      <div className="pt-10">
        <InputForm placeholder="search todo" />
      </div>
      <ul className="space-y-4 pt-10">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
};
