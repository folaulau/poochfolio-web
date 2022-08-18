import classNames from "classnames"
import { ComponentProps, forwardRef } from "react"

interface Props extends ComponentProps<"button"> {
  variant: "filled" | "outlined" | "shadowed" | "shadowed-dark"
  size: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, size, className, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={classNames(
        "rounded-full flex gap-3.5 items-center justify-center",

        variant === "filled" && "bg-primary-200 text-primary-800 hover:bg-primary-600",
        variant === "outlined" &&
          "bg-transparent text-white border-2 border-white hover:bg-primary-600 hover:text-primary-800 hover:border-primary-500",
        variant === "shadowed" &&
          "text-primary-800 bg-primary-500 shadow-button hover:bg-primary-600",
        variant === "shadowed-dark" &&
          "text-white bg-primary-800 shadow-button hover:bg-primary-700",

        size === "sm" && "px-8 h-[46px]",
        size === "md" && "px-16 h-[56px] font-600",
        size === "lg" && "font-900 px-24 h-[68px]",

        className
      )}
    />
  )
)

export default Button
