import classNames from "classnames"
import { ComponentProps, forwardRef } from "react"

interface Props extends ComponentProps<"button"> {
  variant: "filled" | "outlined" | "shadowed"
  size: "sm" | "md"
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, size, className, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={classNames(
        "rounded-full flex gap-3.5 items-center",

        variant === "filled" && "bg-primary-200 text-primary-800 hover:bg-primary-600",
        variant === "outlined" &&
          "bg-transparent text-white border-2 border-white hover:bg-primary-600 hover:text-primary-800 hover:border-primary-500",
        variant === "shadowed" &&
          "text-primary-800 bg-primary-500 shadow-button hover:bg-primary-600",

        size === "sm" && "px-8 h-[46px]",
        size === "md" && "font-900 px-24 h-[68px]",

        className
      )}
    />
  )
)

export default Button
