import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <button {...props}>{props.children}</button>
    </>
  );
};

Button.displayName = "Button";
export default Button;
