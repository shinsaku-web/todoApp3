import { Heading } from "../atoms/Heading";

interface Props {
  title: string;
  contents: string;
}

export const TodoDetailTemplate = ({ title, contents }: Props) => {
  return (
    <>
      <Heading label={title} />
      <div className="mt-10">
        <p>{contents}</p>
      </div>
    </>
  );
};
