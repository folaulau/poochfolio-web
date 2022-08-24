import { faDoorOpen, faKey, faList, faUser } from "@fortawesome/pro-regular-svg-icons"
import BreadcrumbItem, {
  BREADCRUMB_IMAGE_WIDTH,
  BREADCRUMB_START_IMAGE_WIDTH,
} from "components/atoms/BreadcrumbItem"
import { useMeasure } from "react-use"

interface Props {
  step: number
}

export default function SignUpBreadcrumb({ step }: Props) {
  const [ref, { width }] = useMeasure<HTMLDivElement>()

  const overlapWidth = (BREADCRUMB_START_IMAGE_WIDTH + BREADCRUMB_IMAGE_WIDTH * 3 - width) / 3

  return (
    <div className="rounded-[32px] shadow-breadcrumb border border-primary-350 bg-white overflow-hidden">
      <div ref={ref} className="flex -mr-4">
        <BreadcrumbItem
          index={0}
          overlapWidth={overlapWidth}
          icon={faKey}
          text="Sign Up"
          step={step}
        />
        <BreadcrumbItem
          index={1}
          overlapWidth={overlapWidth}
          icon={faUser}
          text="Create Profile"
          step={step}
        />
        <BreadcrumbItem
          index={2}
          overlapWidth={overlapWidth}
          icon={faList}
          text="Input Listing"
          step={step}
        />
        <BreadcrumbItem
          index={3}
          overlapWidth={overlapWidth}
          icon={faDoorOpen}
          text="Availability"
          step={step}
        />
      </div>
    </div>
  )
}
