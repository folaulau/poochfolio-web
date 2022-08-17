import { faDoorOpen, faKey, faList, faListCheck, faUser } from "@fortawesome/pro-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMeasure } from "react-use"

import BreadcrumbItem, {
  BREADCRUMB_IMAGE_WIDTH,
  BREADCRUMB_START_IMAGE_WIDTH,
} from "components/atoms/BreadcrumbItem"
import Navbar from "components/organisms/Navbar"

export default function SignUp() {
  const [ref, { width }] = useMeasure<HTMLDivElement>()

  const overlapWidth = (BREADCRUMB_START_IMAGE_WIDTH + BREADCRUMB_IMAGE_WIDTH * 3 - width) / 3

  return (
    <div>
      <Navbar />
      <div className="relative z-20 pt-10 pb-6 -mt-4 bg-primary-300 rounded-t-2xl">
        <div className="container">
          <div className="flex" ref={ref}>
            <BreadcrumbItem index={0} overlapWidth={overlapWidth} icon={faKey} text="Sign Up" />
            <BreadcrumbItem
              index={1}
              overlapWidth={overlapWidth}
              icon={faUser}
              text="Create Profile"
            />
            <BreadcrumbItem
              index={2}
              overlapWidth={overlapWidth}
              icon={faList}
              text="Input Listing"
            />
            <BreadcrumbItem
              index={3}
              overlapWidth={overlapWidth}
              icon={faDoorOpen}
              text="Availability"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
