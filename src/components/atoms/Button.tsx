import classNames from "classnames"
import { ComponentProps, forwardRef } from "react"

import Spinner from "./Spinner"

interface Props extends ComponentProps<"button"> {
  variant: "filled" | "outlined" | "shadowed" | "shadowed-dark"
  size: "sm" | "md" | "lg"
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, size, className, children, loading, disabled: propDisabled, ...props }, ref) => {
    const disabled = loading || propDisabled

    return (
      <button
        ref={ref}
        {...props}
        disabled={loading || disabled}
        className={classNames(
          "rounded-full relative",

          variant === "filled" && [
            "bg-primary-200 text-primary-800",
            !disabled && "hover:bg-primary-600",
          ],
          variant === "outlined" && [
            "bg-transparent text-white border-2 border-white",
            !disabled && "hover:bg-primary-600 hover:text-primary-800 hover:border-primary-500",
          ],
          variant === "shadowed" && [
            "text-primary-800 bg-primary-500 shadow-button",
            !disabled && "hover:bg-primary-600",
          ],
          variant === "shadowed-dark" && [
            "text-white bg-primary-800 shadow-button",
            !disabled && "hover:bg-primary-700",
          ],

          size === "sm" && "px-8 h-[46px]",
          size === "md" && "px-16 h-[56px] font-600",
          size === "lg" && "font-900 px-24 h-[68px]",

          className
        )}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Spinner />
          </div>
        )}
        <div
          className={classNames("flex gap-3.5 items-center justify-center", loading && "invisible")}
        >
          {children}
        </div>
      </button>
    )
  }
)

export default Button
