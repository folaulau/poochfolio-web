import { PropsWithChildren } from "react"

export default function CheckedDescription({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex items-start gap-5">
      <img src="/icons/rounded-check.svg" alt="Check" />
      <div className="mt-[3px]">{children}</div>
    </div>
  )
}
