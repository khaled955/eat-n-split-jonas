type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};
export default function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="button" type={type}>
      {children}
    </button>
  );
}
