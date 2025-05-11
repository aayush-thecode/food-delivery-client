import * as yup from "yup";

export const signupSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Confirm password is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  gender: yup
    .object()
    .shape({
      label: yup.string().optional(),
      value: yup.string().optional(),
    }),
});
