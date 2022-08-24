import { Switch } from "@headlessui/react"
import classNames from "classnames"

import Icon from "./Icon"

interface Props {
  value: boolean
  onChange: (newVal: boolean) => void
}

export default function Toogle({ value, onChange }: Props) {
  return (
    <Switch checked={value} onChange={onChange}>
      <div className="w-[51px] h-[26px] relative">
        <Icon
          name={value ? "ToggleOn" : "ToggleOff"}
          className={classNames("absolute -top-[6px]", value && "-left-[11px]")}
        />
      </div>
    </Switch>
  )
}
