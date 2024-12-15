import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//import InputField from '../../../../components/form-controls/InputField';

import { Avatar, Button, Typography } from "@mui/material";
//import using jsconfig

import InputField from "components/form-controls/InputField/index";
import PasswordField from "components/form-controls/PasswordField/index";




// rfsp
RegisterForm.propTypes = {
  onSubmit: PropTypes.func, //viết tắt: ptf
};

function RegisterForm(props) {
  

  //valiation
  const schema = z
    .object({
      username: z.string().min(1, "Username is required"),
      // .refine(
      //   (value) => value.split(" ").length >= 2,
      //   "Username is at least two words"
      // ),
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
      email: z.string().email("Invalid email address"),
      password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(8, "Password must be at least 8 characters")
        .nonempty({ message: "Password is required" }),
      retypePassword: z.string().min(1, "Please retype your password"),
    })
    .refine((data) => data.password === data.retypePassword, {
      message: "Passwords must match",
      path: ["retypePassword"], // Associate the error with the retypePassword field
    });
  //tạo ra form object sử dụng hook useForm
  const form = useForm({
    defaultValues: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: zodResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props; // để kiểm tra thử thằng cha có truyền xuống
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset({
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      retypePassword: "",
    });
  };
  return (
    <div >
      {/* //form có sẵn hàm form.handleSubmit //mình cần truyền hàm mình vào */}
      <Avatar ></Avatar>
      <Typography >Create An Account</Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="username" label="User name" />
        <InputField form={form} name="firstName" label="First Name" />
        <InputField form={form} name="lastName" label="Last Name" />
        <InputField form={form} name="email" label="Email" />
        <PasswordField form={form} name="password" label="Password" />
        <PasswordField
          form={form}
          name="retypePassword"
          label="Retype Password"
        />
        <Button
          type="submit"
         
          variant="contained"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
