import { FC } from "react"
import Button from "./Button"

type Props = {
  id: string
  title: string
  compelete: boolean
  onCompelete: (id: string) => any
  onDelete: (id: string) => any
}

const Item: FC<Props> = ({ title, id, compelete, onCompelete, onDelete }) => {
  return (
    <div
      className="flex select-none items-center rounded  border border-slate-100 p-2 hover:bg-slate-200"
      onClick={() => onCompelete(id)}
    >
      <div className={`w-full select-all ${compelete ? "line-through" : ""}`}>
        {title}
      </div>
      <Button label="delete" variant="danger" onClick={() => onDelete(id)} />
    </div>
  )
}

export default Item
