import classNames from "classnames"
import { ComponentProps, forwardRef } from "react"

type Variant = "default" | "cell"
interface Props extends ComponentProps<"input"> {
  label?: string
  error?: string
  variant?: Variant
}

const Input = forwardRef<HTMLInputElement | null, Props>(
  ({ label, error, className, variant = "default", ...props }, ref) => {
    return (
      <div className={className}>
        {label && <div className="text-12">{label}</div>}
        <input
          ref={ref}
          className={classNames(
            "w-full",

            variant === "default" &&
              "mt-3 h-14 rounded-full border-2 border-primary-550 py-[18px] px-8 placeholder-gray-200 focus:outline-none bg-primary-100",

            variant === "cell" &&
              "bg-primary-200 rounded-[18px] px-8 text-center py-2 focus:outline-none text-primary-650"
          )}
          {...props}
        />
        {error && variant !== "cell" && (
          <div className="mt-2 ml-[34px] text-red-700 text-12">{error}</div>
        )}
      </div>
    )
  }
)

export default Input
