import { PropsWithChildren } from "react"

import Icon from "components/atoms/Icon"

interface Props extends PropsWithChildren<{}> {
  isMobile?: boolean
}

export default function CheckedDescription({ children, isMobile }: Props) {
  return (
    <div className="flex items-start gap-5">
      <Icon name={`RoundedCheck`} style={{ marginTop: isMobile ? 3 : 0 }} />
      <div className="mt-[3px]">{children}</div>
    </div>
  )
}
