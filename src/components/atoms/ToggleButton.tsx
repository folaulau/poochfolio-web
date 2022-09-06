import classNames from "classnames"
import { ComponentProps } from "react"

interface Props extends Omit<ComponentProps<"button">, "value" | "onChange"> {
  value?: boolean
  onChange: (newVal: boolean) => void
}

export default function ToggleButton({ value, onChange, ...props }: Props) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={classNames(
        "h-[67px] flex items-center gap-3 flex-1 justify-center rounded-2xl border",
        value
          ? "border-primary-550 bg-primary-500 shadow-button text-primary-800"
          : "border-primary-150 bg-primary-150 shadow-button-inset text-gray-300"
      )}
      {...props}
    />
  )
}
