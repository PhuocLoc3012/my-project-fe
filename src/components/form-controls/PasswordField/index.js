import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired, //ptor
  name: PropTypes.string.isRequired, //ptsr
  label: PropTypes.string,
 // disabled: PropTypes.bool,
};
//những inputField này sẽ làm việc với ui control để render ra dữ liệu tương ứng
function PasswordField(props) {
  const { form, name, label, disabled } = props;
  //lay cac prop ra

  //lay thong tin error
  const { formState } = form;
  const { errors } = formState;
  const hasError = !!errors[name]; // !! convert to boolean
  console.log(errors[name]);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <div style={{marginTop: '10px', marginBottom: '20px'}}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
    
        //thêm 3 cái này nó sẽ tự động blind vào OutlinedInput mấy cái onChange,value..
          render={({ field }) => (
                <OutlinedInput
                {...field}
                id={name}
                type={showPassword ? "text" : "password"}
                label= {label}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                        aria-label={
                        showPassword ? "hide the password" : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                }
                />
            )}  
        />
        <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default PasswordField;
