type Props = JSX.IntrinsicElements["input"];

export const InputForm = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
}: Props) => {
  return (
    <input
      type="text"
      className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
