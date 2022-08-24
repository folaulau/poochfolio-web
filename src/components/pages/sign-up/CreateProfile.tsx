import { useState } from "react"
import { usePlacesWidget } from "react-google-autocomplete"
import { useForm } from "react-hook-form"

import PhoneInputControl from "@/components/molecules/PhoneInputControl"
import { GOOGLE_API_KEY } from "@/constants"
import useCreateProfile from "@/hooks/api/useCreateProfile"
import useUser from "@/hooks/useUser"
import { Draft } from "@/types"
import { Address } from "@/types/address"
import { User } from "@/types/user"
import { getAddressFromGooglePlace } from "@/utils/address"
import { toastError } from "@/utils/error"

import Button from "../../atoms/Button"
import DayCareIcon from "../../icons/DayCareIcon"
import GroomingIcon from "../../icons/GroomingIcon"
import OvernightIcon from "../../icons/OvernightIcon"
import PickUpDropOffIcon from "../../icons/PickUpDropOffIcon"
import Input from "../../molecules/Input"
import InputControl from "../../molecules/InputControl"
import ToggleButtonsControl from "../../molecules/ToggleButtonsControl"

interface FormValues extends Pick<User, "firstName" | "lastName" | "businessName"> {
  careServices: string[]
  address: Draft<Address> | null
  phoneNumber: string
}

interface Props {
  onSuccess: () => void
}

export default function CreateProfile({ onSuccess }: Props) {
  const { control, handleSubmit, setValue, formState, getFieldState } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      businessName: "",
      phoneNumber: "",
      careServices: [],
    },
  })
  const [addressError, setAddressError] = useState("Address is required")
  const createProfile = useCreateProfile()
  const { user, setUser } = useUser()

  const { ref } = usePlacesWidget({
    apiKey: GOOGLE_API_KEY,
    options: {
      types: ["address"],
    },
    onPlaceSelected: (place) => {
      const address = getAddressFromGooglePlace(place)
      setValue("address", address)
      setAddressError(address ? "" : "Address should be exact")
    },
  })

  const onSubmit = ({ careServices, address, phoneNumber, ...rest }: FormValues) => {
    if (!address) {
      return
    }

    createProfile.mutate(
      {
        uuid: user?.uuid!,
        careServices: careServices.map((name) => ({
          name,
          smallPrice: 0,
          serviceSmall: true,
          mediumPrice: 0,
          serviceMedium: true,
          largePrice: 0,
          serviceLarge: true,
        })),
        address,
        phoneNumber: Number(phoneNumber.replace(/\D/g, "")),
        ...rest,
      },
      {
        onSuccess(data) {
          setUser(data)
          onSuccess()
        },
        onError: toastError,
      }
    )
  }

  return (
    <div className="py-16 w-[729px] mx-auto">
      <div className="grid grid-cols-2 gap-x-7 gap-y-5">
        <InputControl
          control={control}
          name="firstName"
          label="First Name"
          placeholder="Your first name"
          rules={{ required: "First name is required" }}
        />
        <InputControl
          control={control}
          name="lastName"
          label="Last Name"
          placeholder="Your last name"
          rules={{ required: "Last name is required" }}
        />
        <InputControl
          control={control}
          name="businessName"
          label="Business Name"
          placeholder="Business Name"
          rules={{ required: "Business name is required" }}
        />
        <PhoneInputControl
          control={control}
          name="phoneNumber"
          label="Phone Number"
          placeholder="Phone Number"
          rules={{ required: "Phone number is required" }}
        />
        <Input
          ref={ref}
          label="Address"
          placeholder="Type street or location name"
          className="col-span-2"
          error={formState.isSubmitted ? addressError : ""}
        />
      </div>

      <div className="mt-10 text-center font-700">Which services does your business offer</div>

      <ToggleButtonsControl
        control={control}
        name="careServices"
        options={[
          {
            value: "Grooming",
            label: (
              <>
                <GroomingIcon />
                Grooming
              </>
            ),
          },
          {
            value: "Daycare",
            label: (
              <>
                <DayCareIcon />
                Daycare
              </>
            ),
          },
          {
            value: "Overnight",
            label: (
              <>
                <OvernightIcon />
                Overnight
              </>
            ),
          },
          {
            value: "PickUpDropOff",
            label: (
              <>
                <PickUpDropOffIcon />
                Pick Up <br /> Drop Off
              </>
            ),
          },
        ]}
        rules={{ required: "Business offer is required" }}
        className="mt-4"
      />

      <div className="flex justify-center mt-12">
        <Button
          variant="shadowed-dark"
          size="md"
          className="w-[544px]"
          onClick={handleSubmit(onSubmit)}
          loading={createProfile.isLoading}
        >
          CONTINUE
        </Button>
      </div>
    </div>
  )
}
