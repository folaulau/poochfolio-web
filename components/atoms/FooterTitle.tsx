import { ComponentProps } from "react"

export default function FooterTitle({ children }: ComponentProps<"div">) {
  return (
    <div>
      <div className="text-white font-700">{children}</div>
      <div className="mt-2.5 h-[3px] bg-primary-500 w-[53px]" />
    </div>
  )
}
