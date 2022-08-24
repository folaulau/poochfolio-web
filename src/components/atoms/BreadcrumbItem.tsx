import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import { ComponentProps } from "react"

export const BREADCRUMB_IMAGE_WIDTH = 469
export const BREADCRUMB_START_IMAGE_WIDTH = 305

interface Props extends ComponentProps<"div"> {
  index: number
  overlapWidth: number
  icon: IconDefinition
  text: string
  step: number
}

const zClassNames = ["z-40", "z-30", "z-20", "z-10"]

export default function BreadcrumbItem({ index, overlapWidth, icon, text, step }: Props) {
  return (
    <div
      className={classNames("relative h-[61px] overflow-visible", zClassNames[index])}
      style={{
        width: index === 0 ? BREADCRUMB_START_IMAGE_WIDTH : BREADCRUMB_IMAGE_WIDTH,
        marginLeft: index === 0 ? 0 : -overlapWidth,
      }}
    >
      {index <= step && (
        <img
          src={`/images/${index === 0 ? "breadcrumb-start" : "breadcrumb"}.svg`}
          className="absolute -top-[14px] -left-6 max-w-none z-[-1]"
        />
      )}
      <div
        className="flex items-center justify-center h-full gap-3.5"
        style={{ paddingLeft: index === 0 ? 0 : overlapWidth - 12 }}
      >
        <div
          className={classNames(
            "w-[42px] h-[42px] flex items-center justify-center rounded-full",
            index <= step && "bg-primary-500 text-primary-800"
          )}
        >
          <FontAwesomeIcon icon={icon} size="lg" />
        </div>
        <div>{text}</div>
      </div>
    </div>
  )
}
