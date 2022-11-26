import { ReactNode } from "react";
import { AiOutlineUser } from "react-icons/ai";
interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="p-6 bg-yellow-700 text-white">
        <div className="flex max-w-4xl mx-auto justify-between items-center">
          <div className="text-3xl">TodoApp</div>
          <div className="flex items-center">
            <span className="pr-2">ゲストさん</span>
            <AiOutlineUser />
          </div>
        </div>
      </header>
      <main className="bg-yellow-50 min-h-screen">
        <div className="max-w-2xl py-14 mx-auto">{children}</div>
      </main>
      <footer className="bg-yellow-700">
        <div className="p-4 text-center text-xs text-white">@2022 TodoApp3</div>
      </footer>
    </>
  );
};
