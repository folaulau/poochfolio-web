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

        variant === "filled" && "bg-primary-lightest text-primary-darkest hover:bg-primary-dark",
        variant === "outlined" &&
          "bg-transparent text-white border-2 border-white hover:bg-primary-dark hover:text-primary-darkest hover:border-primary",
        variant === "shadowed" &&
          "text-primary-darkest bg-primary shadow-button hover:bg-primary-dark",

        size === "sm" && "px-8 h-[46px]",
        size === "md" && "font-900 px-24 h-[68px]",

        className
      )}
    />
  )
)

export default Button
