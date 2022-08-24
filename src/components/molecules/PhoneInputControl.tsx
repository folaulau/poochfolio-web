import { AsYouType, isValidPhoneNumber } from "libphonenumber-js"
import { ComponentProps } from "react"
import { FieldPath, FieldValues, UseControllerProps, useController } from "react-hook-form"

import Input from "./Input"

interface Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
  extends UseControllerProps<TFieldValues, TName>,
    Omit<ComponentProps<typeof Input>, "defaultValue" | "name"> {}

export default function InputControl<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  className,
  ...props
}: Props<TFieldValues, TName>) {
  const {
    field: { value, onChange, ...field },
    fieldState,
  } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  })

  return (
    <Input
      {...props}
      {...field}
      value={value}
      onChange={(e) => {
        const newValue = new AsYouType("US").input(e.target.value)
        if (value === newValue && newValue.endsWith(")")) {
          onChange(newValue.slice(0, -1))
        } else {
          onChange(newValue)
        }
      }}
      error={fieldState.error?.message}
    />
  )
}
