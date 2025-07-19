import { useForm } from "react-hook-form";

type FormValues = {
  mail: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    window.alert(
      `🎉 You're in!\n\nUpdates are heading to ${data.mail}.\n\nStay tuned!`,
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <fieldset>
        <legend>Contact Information</legend>
        <label htmlFor="mail">Email Address</label>
        <div className="input-container">
          <input
            type="email"
            id="mail"
            {...register("mail", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,}$/i,
                message: "Please provide a valid email address",
              },
            })}
            autoComplete="email"
            placeholder="Your email address..."
          ></input>
          {errors.mail && <p>{errors.mail.message}</p>}
        </div>
        <button type="submit">Notify Me</button>
      </fieldset>
    </form>
  );
};

export default Form;
