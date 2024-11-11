import React, { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../services/authService";
import FormWrapper from "../components/FormWrapper";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      toast.success("Login Success");

    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid Credentials");

      
    }
  };

  return (
    <FormWrapper title="Login" onSubmit={handleSubmit}>
      <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
      <FormInput label="Password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
      <Button text="Login" />
    </FormWrapper>
  );
};

export default Login;
