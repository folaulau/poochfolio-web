import { ReactNode } from "react"

interface Props {
  cells: [ReactNode, ReactNode, ReactNode, ReactNode]
}

export default function InputListingRow({ cells }: Props) {
  return (
    <div className="flex items-center gap-11">
      <div className="flex-1">{cells[0]}</div>
      <div className="w-24">{cells[1]}</div>
      <div className="w-32">{cells[2]}</div>
      <div className="w-24">{cells[3]}</div>
    </div>
  )
}
