import classNames from "classnames"
import { ComponentProps } from "react"

export default function Divider({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div className={classNames("flex items-center gap-6", className)} {...props}>
      <div className="flex-1 border-t border-primary-375" />
      <div className="text-12 font-500">{children}</div>
      <div className="flex-1 border-t border-primary-375" />
    </div>
  )
}
