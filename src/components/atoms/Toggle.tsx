import { Switch } from "@headlessui/react"
import classNames from "classnames"
import { forwardRef } from "react"

import Icon from "./Icon"

interface Props {
  value: boolean
  variant?: "default" | "large"
  onChange: (newVal: boolean) => void
}

const Toggle = forwardRef<HTMLButtonElement, Props>(
  ({ value, variant = "default", onChange }, ref) => {
    return (
      <Switch ref={ref} checked={value} onChange={onChange} className="focus:outline-none">
        {variant === "default" && (
          <div className="w-[51px] h-[26px] relative">
            <Icon
              name={value ? "ToggleOn" : "ToggleOff"}
              className={classNames("absolute -top-[6px]", value && "-left-[11px]")}
            />
          </div>
        )}
        {variant === "large" && (
          <Icon
            name={value ? "ToggleOnLarge" : "ToggleOffLarge"}
            className={classNames(value && "transform -translate-x-[5px]")}
          />
        )}
      </Switch>
    )
  }
)

export default Toggle
