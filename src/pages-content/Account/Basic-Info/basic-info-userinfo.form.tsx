import tw from "twin.macro";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@Shared/components/Form/Input";
import useDataPath from "@Hooks/useDataPath";
import Submit from "@Shared/components/Button";
import { FormContainer } from "./basic-info.style";
import useNotify from "@Hooks/useNotify";
import useUser from "@Hooks/useUser";
import useAuth from "@Hooks/useAuth";

type IFormProps = {
  firstName: string;
  lastName: string;
};

const UserForm = () => {
  const { user, setUser } = useUser({});
  const { showNotify } = useNotify();
  const { _updateProfile } = useAuth();
  const { register, errors, handleSubmit, reset } = useForm<IFormProps>({
    defaultValues: {
      firstName: user?.profile?.first_name || "",
      lastName: user?.profile?.last_name || "",
    },
  });
  useEffect(() => {
    reset({
      firstName: user?.profile?.first_name || "",
      lastName: user?.profile?.last_name || "",
    });
  }, [user]);
  const { getKeyValue } = useDataPath();
  const [loading, toggleLoading] = useState(false);

  const onSubmit = ({ firstName, lastName }: IFormProps) => {
    if (!loading) {
      toggleLoading(true);
      _updateProfile(
        firstName,
        lastName,
        (user) => {
          toggleLoading(false);
          if (user) {
            setUser(user);
            showNotify({
              type: "success",
              description: "You updated your profile successfully.",
            });
          }
        },
        (error) => {
          toggleLoading(false);
          showNotify({
            type: "error",
            description: error,
          });
        }
      );
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} className="fade-in">
      <Input
        placeholder={getKeyValue({}, "emailplaceholder", "Your first name")}
        name="firstName"
        ref={register({
          required: true,
        })}
        hasError={errors.firstName ? true : false}
      />
      <Input
        placeholder={getKeyValue({}, "passwordplaceholder", "Your last name")}
        name="lastName"
        ref={register({
          required: true,
        })}
        hasError={errors.lastName ? true : false}
      />
      <Submit
        type="submit"
        primary
        size="sm"
        cls={tw`mt-6 self-end`}
        loading={loading}
      >
        {getKeyValue({}, "submittext", "Update Profile")}
      </Submit>
    </FormContainer>
  );
};
export default UserForm;
