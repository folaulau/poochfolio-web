import { ComponentProps } from "react"
import { FieldPath, FieldValues, UseControllerProps, useController } from "react-hook-form"
import NumberFormat from "react-number-format"

import Input from "./Input"

interface Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
  extends UseControllerProps<TFieldValues, TName>,
    Omit<ComponentProps<typeof NumberFormat>, "defaultValue" | "name">,
    Pick<ComponentProps<typeof Input>, "variant"> {}

export default function NumberInputControl<
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
    field: { value, onChange, onBlur },
    fieldState,
  } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  })

  return (
    <NumberFormat
      customInput={Input}
      onBlur={onBlur}
      value={value}
      onValueChange={(value) => {
        onChange(value.value)
      }}
      error={fieldState.error?.message}
      {...props}
    />
  )
}
