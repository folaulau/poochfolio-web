import { ComponentProps, forwardRef } from "react"

interface Props extends ComponentProps<"input"> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement | null, Props>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className={className}>
        {label && <div className="text-12">{label}</div>}
        <input
          ref={ref}
          className="mt-3 h-14 rounded-full border-2 border-primary-550 py-[18px] px-8 placeholder-gray-200 focus:outline-none bg-primary-100 w-full"
          {...props}
        />
        {error && <div className="mt-2 ml-[34px] text-red-700 text-12">{error}</div>}
      </div>
    )
  }
)

export default Input
