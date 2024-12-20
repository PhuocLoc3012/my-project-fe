import React from "react";
import PropTypes from "prop-types";
import InputField from "components/form-controls/InputField/index";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PasswordField from "components/form-controls/PasswordField/index";
import { Button } from "../../../../../node_modules/@mui/material/index";
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
  });
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
  }
  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="username" label="Username" />
        <PasswordField form={form} name="password" label="Password" />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
