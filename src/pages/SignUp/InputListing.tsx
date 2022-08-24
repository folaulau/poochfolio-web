import { faPlusCircle } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useFieldArray, useForm } from "react-hook-form"

import Card from "components/atoms/Card"
import NumberInputControl from "components/molecules/NumberInputControl"
import ToggleControl from "components/molecules/ToggleControl"

import useUser from "hooks/useUser"

import { User } from "types/user"

import InputListingRow from "./InputListingRow"

interface FormValues extends Pick<User, "careServices" | "instantBooking" | "chargePerMile"> {}

export default function InputListing() {
  const { user } = useUser()

  const { control } = useForm<FormValues>({
    defaultValues: { ...user!, chargePerMile: user?.chargePerMile ?? 0 },
  })

  const { fields } = useFieldArray({
    control,
    name: "careServices",
  })

  return (
    <div className="my-14 max-w-[729px] mx-auto">
      <Card className="rounded-[25px]">
        <div className="px-10 pt-8 pb-5 shadow-breadcrumb">
          <InputListingRow
            cells={["Services Offered", "Small 1-20 lbs", "Medium 20-40 lbs", "Large 40+ lbs"]}
          />
        </div>
        <div className="px-10 pt-8 pb-4 flex flex-col gap-2.5">
          {fields.map((field, index) => (
            <InputListingRow
              key={field.id}
              cells={[
                <div className="text-gray-500">{field.name}</div>,
                <div className="w-24">
                  <NumberInputControl
                    control={control}
                    name={`careServices.${index}.smallPrice`}
                    variant="cell"
                    prefix="$"
                  />
                </div>,
                <div className="w-24">
                  <NumberInputControl
                    control={control}
                    name={`careServices.${index}.mediumPrice`}
                    variant="cell"
                    prefix="$"
                  />
                </div>,
                <div className="w-24">
                  <NumberInputControl
                    control={control}
                    name={`careServices.${index}.largePrice`}
                    variant="cell"
                    prefix="$"
                  />
                </div>,
              ]}
            />
          ))}
          <div className="flex justify-center mt-7">
            <button className="text-primary-800 flex items-center gap-3.5">
              <FontAwesomeIcon icon={faPlusCircle} fontSize={27} />
              Add Services
            </button>
          </div>
        </div>
      </Card>
      <Card className="mt-6 rounded-[25px] p-6">
        <div className="flex items-center justify-between">
          <div className="text-primary-800 font-700">INSTANT BOOKING?</div>
          <ToggleControl control={control} name="instantBooking" />
        </div>
        <div className="flex items-center justify-between mt-7">
          <div className="text-gray-500 font-700">How Much Do You Charge Per Mile?</div>

          <div className="w-[130px] border border-primary-550 rounded-[18px]">
            <NumberInputControl control={control} name="chargePerMile" variant="cell" prefix="$" />
          </div>
        </div>
      </Card>
    </div>
  )
}
