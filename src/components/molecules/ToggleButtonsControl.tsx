import classNames from "classnames"
import { ReactNode } from "react"
import { FieldPath, FieldValues, UseControllerProps, useController } from "react-hook-form"

import ToggleButton from "../atoms/ToggleButton"

interface Option {
  value: string
  label: ReactNode
}

interface Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
  extends UseControllerProps<TFieldValues, TName> {
  options: Option[]
  className?: string
}

export default function ToggleButtonsControl<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  options,
  className,
}: Props<TFieldValues, TName>) {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  })

  const value = field.value as string[] | null

  return (
    <div className={className}>
      <div className="flex gap-9">
        {options.map((option) => (
          <ToggleButton
            key={option.value}
            value={value?.includes?.(option.value)}
            onChange={(newVal) =>
              field.onChange(
                newVal
                  ? [...(value ?? []), option.value]
                  : value?.filter?.((item) => item !== option.value)
              )
            }
          >
            {option.label}
          </ToggleButton>
        ))}
      </div>
      {fieldState.error && (
        <div className="mt-2 text-center text-red-700 text-12">{fieldState.error.message}</div>
      )}
    </div>
  )
}
