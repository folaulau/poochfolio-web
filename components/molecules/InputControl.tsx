import { ComponentProps } from "react"
import { FieldPath, FieldValues, UseControllerProps, useController } from "react-hook-form"

interface Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
  extends UseControllerProps<TFieldValues, TName>,
    Omit<ComponentProps<"input">, "defaultValue" | "name"> {
  label?: string
}

export default function InputControl<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  label,
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  className,
  ...props
}: Props<TFieldValues, TName>) {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  })

  return (
    <div className={className}>
      {label && <div className="text-12">{label}</div>}
      <input
        className="mt-3 h-14 rounded-full border-2 border-primary-550 py-[18px] px-8 placeholder-gray-200 focus:outline-none bg-primary-100 w-full"
        {...props}
        {...field}
      />
      {fieldState.error && (
        <div className="mt-2 ml-[34px] text-red-700 text-12">{fieldState.error.message}</div>
      )}
    </div>
  )
}
