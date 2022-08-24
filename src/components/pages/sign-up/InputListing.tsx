import { faPlusCircle } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useFieldArray, useForm } from "react-hook-form"

import InputControl from "@/components/molecules/InputControl"
import useMoutedData from "@/hooks/useMoutedData"
import useUser from "@/hooks/useUser"
import { CareService } from "@/types/careService"
import { User } from "@/types/user"

import InputListingRow from "./InputListingRow"

interface FormValues {
  careServices: CareService[]
}

interface InputListingInnerProps {
  user: User
}

function InputListingInner({ user }: InputListingInnerProps) {
  const { control } = useForm<FormValues>({
    defaultValues: {
      careServices: user.careServices,
    },
  })

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "careServices",
  })

  return (
    <div className="my-14 max-w-[729px] mx-auto border border-primary-350 rounded-[25px] shadow-breadcrumb bg-white">
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
                <InputControl
                  control={control}
                  name={`careServices.${index}.smallPrice`}
                  variant="cell"
                  className="w-10"
                />
              </div>,
              <div className="w-24">
                <InputControl
                  control={control}
                  name={`careServices.${index}.mediumPrice`}
                  variant="cell"
                  className="w-10"
                />
              </div>,
              <div className="w-24">
                <InputControl
                  control={control}
                  name={`careServices.${index}.largePrice`}
                  variant="cell"
                  className="w-10"
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
    </div>
  )
}

export default function InputListing() {
  const { user } = useUser()
  const data = useMoutedData(user)

  if (!data) {
    return null
  }

  return <InputListingInner user={data} />
}
