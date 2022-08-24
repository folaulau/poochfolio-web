import { ComponentProps } from "react"

import { ReactComponent as DayCare } from "assets/icons/day-care.svg"
import { ReactComponent as Grooming } from "assets/icons/grooming.svg"
import { ReactComponent as Headset } from "assets/icons/headset.svg"
import { ReactComponent as Overnight } from "assets/icons/overnight.svg"
import { ReactComponent as PickUpDropOff } from "assets/icons/pick-up-drop-off.svg"
import { ReactComponent as RoundedCheck } from "assets/icons/rounded-check.svg"
import { ReactComponent as ToggleOff } from "assets/icons/toggle-off.svg"
import { ReactComponent as ToggleOn } from "assets/icons/toggle-on.svg"

const icons = {
  RoundedCheck,
  DayCare,
  Grooming,
  Headset,
  Overnight,
  PickUpDropOff,
  ToggleOn,
  ToggleOff,
}

export type IconName = keyof typeof icons

interface Props extends ComponentProps<"svg"> {
  name: IconName
}

export default function Icon({ name, ...props }: Props) {
  const Component = icons[name]

  return <Component {...props} />
}
