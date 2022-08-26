import classNames from "classnames"
import { ComponentProps } from "react"

export default function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={classNames("border border-primary-350 shadow-breadcrumb bg-white", className)}
      {...props}
    />
  )
}
