import { ComponentProps } from "react"
import { FieldPath, FieldValues, UseControllerProps, useController } from "react-hook-form"

import Toggle from "components/atoms/Toggle"

interface Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
  extends UseControllerProps<TFieldValues, TName>,
    Omit<ComponentProps<typeof Toggle>, "value" | "onChange"> {}

export default function ToggleControl<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({ name, rules, shouldUnregister, defaultValue, control, ...props }: Props<TFieldValues, TName>) {
  const { field } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  })

  return <Toggle {...props} {...field} />
}
