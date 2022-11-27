type Props = JSX.IntrinsicElements["textarea"];

export const TextArea = ({ onChange, placeholder, value }: Props) => {
  return (
    <textarea
      className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      onChange={onChange}
      placeholder={placeholder}
      rows={10}
      defaultValue={value}
    />
  );
};
