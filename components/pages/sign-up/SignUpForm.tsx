import { faApple, faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ComponentProps } from "react"
import { useForm } from "react-hook-form"

import Button from "@/components/atoms/Button"
import Divider from "@/components/atoms/Divider"
import InputControl from "@/components/molecules/InputControl"
import useSignUp from "@/hooks/api/useSignUp"
import { AuthWithEmailRequest } from "@/types/auth"
import { toastError } from "@/utils/error"
import { validateEmail } from "@/utils/validation"

const SocialButton = (props: ComponentProps<"button">) => (
  <button
    className="flex-1 rounded-[10px] border border-primary-375 h-[42px] text-gray-550 flex items-center justify-center"
    {...props}
  />
)

interface FormValues extends AuthWithEmailRequest {
  confirmPassword: string
}

interface Props {
  onSuccess: () => void
}

export default function SignUpForm({ onSuccess }: Props) {
  const { control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  const password = watch("password")
  const signUp = useSignUp()

  const onSubmit = ({ email, password }: FormValues) => {
    signUp.mutate({ email, password }, { onSuccess, onError: toastError })
  }

  return (
    <div className="flex justify-center pt-10 pb-20">
      <div className="flex w-full max-w-[542px] flex-col gap-7">
        <div className="text-center text-12">Sign up with</div>

        <div className="flex gap-7">
          <SocialButton>
            <FontAwesomeIcon fontSize={22} icon={faFacebookSquare} />
          </SocialButton>
          <SocialButton>
            <FontAwesomeIcon fontSize={20} icon={faGoogle} />
          </SocialButton>
          <SocialButton>
            <FontAwesomeIcon fontSize={24} icon={faApple} />
          </SocialButton>
        </div>

        <Divider>or continue with</Divider>

        <InputControl
          control={control}
          name="email"
          label="Email Address"
          placeholder="Email Address"
          rules={{
            required: "Email address is required",
            validate: (value) => validateEmail(value) || "Invalid email address",
          }}
        />
        <InputControl
          control={control}
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          rules={{
            required: "Password is required",
            minLength: { value: 6, message: "Password must have at least 6 characters" },
          }}
        />
        <InputControl
          control={control}
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="Confirm Password"
          rules={{
            validate: (value) => value === password || "Passwords needs to match",
          }}
        />

        <Button
          onClick={handleSubmit(onSubmit)}
          size="md"
          variant="shadowed-dark"
          loading={signUp.isLoading}
        >
          SIGN UP
        </Button>
      </div>
    </div>
  )
}
