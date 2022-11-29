import { Heading } from "../../atoms/Heading";

interface Props {
  title: string;
  contents: string;
}

export const TodoDetailTemplate = ({ title, contents }: Props) => {
  return (
    <>
      <Heading label={title} />
      <div className="mt-10 mx-auto max-w-lg">
        <p className="p-4 border border-gray-200">{contents}</p>
      </div>
    </>
  );
};
