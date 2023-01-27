import { FC, MouseEventHandler, ReactNode } from "react";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  name?: string;
  children: ReactNode;
};

const Button: FC<Props> = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="inline-flex uppercase justify-center shadow-md rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
