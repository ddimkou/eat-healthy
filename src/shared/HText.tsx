type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-cranberry-red">
      {children}
    </h2>
  );
};

export default HText;
