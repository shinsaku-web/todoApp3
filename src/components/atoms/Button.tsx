interface Props {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: Props) => {
  return (
    <button
      className="cursor-pointer py-2 min-w-[100px] rounded font-bold bg-yellow-700 text-white"
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
