import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
    variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 100px;
    border-radius: 14px;
    border: none;
    font-size: 24px;
    font-weight: bold;


    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};

`