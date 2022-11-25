interface Props {
  placeholder: string;
}

export const InputForm = ({ placeholder }: Props) => {
  return (
    <input
      type="text"
      className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
    />
  );
};
