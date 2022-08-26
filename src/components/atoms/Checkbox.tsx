import { Switch } from "@headlessui/react"
import classNames from "classnames"
import { ComponentProps, forwardRef } from "react"

import Icon from "./Icon"

interface Props extends Omit<ComponentProps<"button">, "value" | "onChange"> {
  value: boolean
  onChange: (newVal: boolean) => void
}

const Checkbox = forwardRef<HTMLButtonElement, Props>(
  ({ value, onChange, children, ...props }, ref) => {
    return (
      <Switch ref={ref} checked={value} onChange={onChange} {...props}>
        <div className="flex items-center gap-4">
          <div
            className={classNames(
              "border-2 border-primary-550 rounded-[5px] w-7 h-7 text-white flex items-center justify-center",
              value ? "bg-primary-800" : " shadow-checkbox"
            )}
          >
            {value && <Icon name="Check" className="w-4 h-4" />}
          </div>
          <div className="text-gray-500 font-700">{children}</div>
        </div>
      </Switch>
    )
  }
)

export default Checkbox
