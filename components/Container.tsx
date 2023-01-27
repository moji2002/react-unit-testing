import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-screen  justify-center p-4">
      <div className="shadow p-4 rounded bg-slate-100 w-full max-w-md">{children}</div>
    </div>
  );
};

export default Container;
