import { ComponentProps, forwardRef } from "react"

interface Props extends ComponentProps<"textarea"> {
  label?: string
  error?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className={className}>
        {label && <div className="text-gray-500 font-700">{label}</div>}
        <textarea
          ref={ref}
          className="w-full mt-3 h-14 rounded-[25px] py-5 px-6 border-2 border-primary-550 placeholder-gray-200 focus:outline-none bg-primary-100 min-h-[124px]"
          {...props}
        />
        {error && <div className="mt-2 ml-[34px] text-red-700 text-12">{error}</div>}
      </div>
    )
  }
)

export default TextArea
