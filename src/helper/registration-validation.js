export const registerErrorMessages = {
  ENTER_FULL_NAME: "Name is a required field",
  ENTER_EMAIL: "Email is a required field",
  ENTER_VALID_EMAIL: "Please enter valid email",
  ENTER_PHONE_NO: "Please enter mobile number",
  ENTER_CITY: "Please provide the city name",
  ENTER_STATE: "Please enter the state you live",
  ENTER_MESSAGE: "Please provide a message",
  ENTER_COUNTRY: "Please enter the country",
};

export const RegistrationYupSchema = (yup) => {
  return yup.object().shape({
    email: yup
      .string()
      .typeError(registerErrorMessages.ENTER_VALID_EMAIL)
      .required(registerErrorMessages.ENTER_EMAIL)
      .email(registerErrorMessages.ENTER_VALID_EMAIL),
    full_name: yup
      .string()
      .typeError(registerErrorMessages.ENTER_FULL_NAME)
      .required(registerErrorMessages.ENTER_FULL_NAME),
    country: yup.string().typeError(registerErrorMessages.ENTER_COUNTRY),
    city: yup.string().typeError(registerErrorMessages.ENTER_CITY),
    mobile_no: yup
      .string()
      .typeError(registerErrorMessages.ENTER_PHONE_NO)
      .test("length", "Phone Number must be of 10 digits", (val) => {
        if (val) return val?.length === 10;
        else return true;
      }),
    state: yup.string().typeError(registerErrorMessages.ENTER_STATE),
    message: yup.string().typeError(registerErrorMessages.ENTER_MESSAGE),
  });
};
