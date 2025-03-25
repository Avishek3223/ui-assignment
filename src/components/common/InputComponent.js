import React, { memo } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: ${(props) => (props.width ? `${props.width}%` : "320px")};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  border: 1px solid #d3d3d3;
  outline: none;

  &:focus {
    outline: none;
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: -1px;
    left: 10px;
    color: #775ced;
    font-size: 0.75rem;
    font-weight: 400;
    background-color: white;
    padding: 0 4px;
    transform: translateY(-50%);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  font-family: "Poppins", sans-serif;
  left: 12px;
  transform: translateY(-50%);
  font-size: 0.8rem;
  background-color: white;
  padding: 2px 8px;
  transition: 0.2s ease all;
  pointer-events: none;
  width: auto;
  min-width: 80px;
  white-space: nowrap;
`;

const InputComponent = memo(
  ({ label, value, onChange, width, type, name, required, placeholder }) => {
    return (
      <Container width={width}>
        <Input
          type={type || "text"}
          placeholder={placeholder || " "}
          id={name || label}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
        <Label htmlFor={name || label}>
          {label}
          {required && <span style={{ color: "#ff0000" }}>*</span>}
        </Label>
      </Container>
    );
  }
);

InputComponent.displayName = "InputComponent";

export default InputComponent;
