import React from "react";
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired, //ptor
  name: PropTypes.string.isRequired, //ptsr
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
//những inputField này sẽ làm việc với ui control để render ra dữ liệu tương ứng
function InputField(props) {
  const { form, name, label, disabled } = props;
  //lay cac prop ra

  //lay thong tin error
  const {formState } = form;
  const { errors } = formState;
  const hasError =  !!errors[name]; // !! convert to boolean
  console.log(errors[name]);
  
  return (
    <Controller //để tự động binding
        name = {name} //định nghĩa name của controller
        control = {form.control} //cần truyền control được lấy từ form.control
       //2 cái trên bắt buộc phải có

        render={({ field }) => (
            <TextField              //textfield này đến từ MaterialUI
              {...field} // truyền các props từ field
              fullWidth
              variant="outlined"
              margin="normal"
              label={label}
              disabled={disabled}  
              error={hasError}
              helperText={errors[name]?.message}
              


            />
          )}


    />

  );
}

export default InputField;
