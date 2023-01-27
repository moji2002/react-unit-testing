import { FC, MouseEventHandler } from "react";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  name?: string;
  label: string;
  variant?: "success" | "danger";
};

const Button: FC<Props> = ({ onClick, label, name, variant = "success" }) => {
  const colors = {
    success: "bg-green-500",
    danger: "bg-red-500",
  };
  return (
    <button
      onClick={onClick}
      name={name}
      className={`${colors[variant]} ml-2   rounded  px-2 py-1 text-sm uppercase text-slate-50`}
    >
      {label}
    </button>
  );
};

export default Button;
