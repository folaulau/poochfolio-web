import { PropsWithChildren } from "react"

import Icon from "components/atoms/Icon"

export default function CheckedDescription({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex items-start gap-5">
      <Icon name="RoundedCheck" />
      <div className="mt-[3px]">{children}</div>
    </div>
  )
}
