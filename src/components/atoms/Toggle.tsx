import { Switch } from "@headlessui/react"
import classNames from "classnames"
import { forwardRef } from "react"

import Icon from "./Icon"

interface Props {
  value: boolean
  onChange: (newVal: boolean) => void
}

const Toggle = forwardRef<HTMLButtonElement, Props>(({ value, onChange }, ref) => {
  return (
    <Switch ref={ref} checked={value} onChange={onChange}>
      <div className="w-[51px] h-[26px] relative">
        <Icon
          name={value ? "ToggleOn" : "ToggleOff"}
          className={classNames("absolute -top-[6px]", value && "-left-[11px]")}
        />
      </div>
    </Switch>
  )
})

export default Toggle
