import { ComponentProps } from "react"

import { ReactComponent as Check } from "assets/icons/check.svg"
import { ReactComponent as DayCare } from "assets/icons/day-care.svg"
import { ReactComponent as Grooming } from "assets/icons/grooming.svg"
import { ReactComponent as Headset } from "assets/icons/headset.svg"
import { ReactComponent as Overnight } from "assets/icons/overnight.svg"
import { ReactComponent as PickUpDropOff } from "assets/icons/pick-up-drop-off.svg"
import { ReactComponent as RoundedCheck } from "assets/icons/rounded-check.svg"
import { ReactComponent as Thumb } from "assets/icons/thumb.svg"
import { ReactComponent as ToggleOffLarge } from "assets/icons/toggle-off-large.svg"
import { ReactComponent as ToggleOff } from "assets/icons/toggle-off.svg"
import { ReactComponent as ToggleOnLarge } from "assets/icons/toggle-on-large.svg"
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
  Check,
  Thumb,
  ToggleOnLarge,
  ToggleOffLarge,
}

export type IconName = keyof typeof icons

interface Props extends ComponentProps<"div"> {
  name: IconName
}

export default function Icon({ name, ...props }: Props) {
  const Component = icons[name]

  return (
    <div {...props}>
      <Component />
    </div>
  )
}
