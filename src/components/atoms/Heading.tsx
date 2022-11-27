interface Props {
  label: string;
}

export const Heading = ({ label }: Props) => {
  return <h1 className="text-center text-3xl font-bold">{label}</h1>;
};
