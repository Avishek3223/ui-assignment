import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: ${(props) => (props.width ? `${props.width}%` : '320px')};
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 12px;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 8px;
    border: 1px solid #d3d3d3;
    outline: none;
    
    &:focus {
        outline: none;
    }

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
        top: -1px;
        left: 10px;
        font-size: 0.75rem;
        color: #1f1f1f;
        font-weight: 600;
        background-color: white;
        padding: 0 4px;
        transform: translateY(-50%);
    }
`;


const Label = styled.label`
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    font-size: 1.1rem;
    color: #1f1f1f;
    background-color: white;
    padding: 0 4px;
    transition: 0.2s ease all;
    pointer-events: none;
    letter-spacing: 0.5px
`;

const InputComponent = memo(({ label, value, onChange, width, type, name, required, placeholder }) => {
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
            <Label htmlFor={name || label}>{label}{required && <span style={{ color: "#ff0000" }}>*</span>}</Label>
        </Container>
    );
});

InputComponent.displayName = 'InputComponent';

export default InputComponent; 