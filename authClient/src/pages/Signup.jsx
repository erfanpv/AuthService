import React, { useState } from "react";
import { signup } from "../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FormWrapper from "../components/FormWrapper";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      toast.success("Signup Successful! Redirecting to login...");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("User already exists or signup failed");
    }
  };

  return (
    <FormWrapper title="Signup" onSubmit={handleSubmit}>
      <FormInput label="Name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
      <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
      <FormInput label="Password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
      <Button text="Signup" />
    </FormWrapper>
  );
};

export default Signup;
