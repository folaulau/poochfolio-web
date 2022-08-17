import classNames from "classnames"
import { ComponentProps } from "react"

interface Props extends ComponentProps<"div"> {
  bgImage: string
}

export default function HowItWorksCard({ bgImage, children, className }: Props) {
  return (
    <div className="relative flex-1">
      <img src={bgImage} alt="" className="w-full" />
      <div className="absolute bottom-0 right-0 flex items-center justify-center pt-5 pr-4 left-1/3 text-18 font-700 top-1/3">
        <div className={classNames("text-center", className)}>{children}</div>
      </div>
    </div>
  )
}
