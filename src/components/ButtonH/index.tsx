import { HTMLProps, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { ButtonHContainer } from "./style";

interface ButtonHProps {
    mode:
    | "primary"
    | "secondary"
    | "ligthSecondary"
    | "success"
    | "error";
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    children: string | (ReactNode & Element);
    containerProps?: HTMLProps<HTMLDivElement>;
    buttonProps?: React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >;
    buttonStyle?: CSSProperties;
    containerStyle?: CSSProperties;
    disabled?: boolean;
}

const ButtonH = ({
    buttonStyle,
    containerStyle,
    mode,
    endIcon,
    startIcon,
    children,
    buttonProps,
    containerProps,
    disabled,
}: ButtonHProps) => {
    return (
        <ButtonHContainer
            style={containerStyle}
            $mode={mode}
            $disabled={disabled}
            {...containerProps}
        >
            {startIcon}
            <button
                disabled={disabled}
                style={buttonStyle}
                {...buttonProps}
            >
                {children}
            </button>
            {endIcon}
        </ButtonHContainer>
    );
};

export default ButtonH;
