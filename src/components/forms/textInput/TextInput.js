import React from "react";
import cls from "../../../assets/styles/forms/Forms.module.scss";

export const TextInput = React.forwardRef(({
  type="",
  placeholder="",
  err="",
  ...rest
}, ref) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      ref={ref}
      {...rest}
      className={cls.text_input}
    />
  )
})