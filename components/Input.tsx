import { ChangeEventHandler, FC } from "react";

type Props = {
  value:string,
  onChange:ChangeEventHandler<HTMLInputElement>
};

const Input: FC<Props> = ({onChange,value}) => {
  return (
    <input
      name="todo"
      type="text"
      onChange={onChange}
      value={value}
      className="w-full rounded border p-1 "
    />
  );
};

export default Input;
